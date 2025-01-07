import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { client } from '../../model/class/Client';
import { APIResponceModel } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientObj: client = new client();
  ClientList: client[] = [];
  clientService = inject(ClientService); // Injecting client service

  constructor() {}

  ngOnInit(): void {
    this.loadClients();
    this.clientObj = new client(); // Initialize a fresh client object
  }

  loadClients(): void {
    this.clientService.getAllClients().subscribe((res: APIResponceModel) => {
      if (res.result) {
        this.ClientList = res.data;
      } else {
        alert('Failed to load clients.');
      }
    });
  }

  onSaveClient(): void {
    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponceModel) => {
      if (res.result) {
        alert('Client created/updated successfully.');
        this.loadClients(); // Refresh the client list
        this.clientObj = new client(); // Reset the form after successful save
      } else {
        alert('Client creation/updating failed.');
      }
    });
  }

  OnEdit(data: client): void {
    this.clientObj = data; // Populate the form with client data for editing
  }

  OnDelete(clientId: number): void {
    const isDelete = confirm("ARE YOU SURE YOU WANT TO DELETE THIS CLIENT?");
    if (isDelete) {
      this.clientService.deleteClientById(clientId).subscribe((res: APIResponceModel) => {
        if (res.result) {
          alert('Client deleted successfully.');
          this.loadClients(); // Refresh the client list
          this.clientObj = new client(); // Reset the form after deletion
        } else {
          alert('Client deletion failed.');
        }
      });
    }
  }

  // Reset the form fields
  onResetForm(): void {
    this.clientObj = new client(); // Clear the form fields by resetting clientObj
  }
}
