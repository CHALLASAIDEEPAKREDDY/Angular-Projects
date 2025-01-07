import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APIResponceModel, IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="row">
      <div class="col-12 custom-col">
        <table class="table table-bordered custom-table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Role Name</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let role of roleList; let i = index">
              <td>{{ i + 1 }}</td>
              <td>{{ role.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .custom-col {
      max-width: 800px;
      margin: 0 auto;
    }
    .custom-table {
      font-size: 14px;
      border: 1px solid #ddd;
    }
    .custom-table th, .custom-table td {
      padding: 12px;
    }
    .custom-table th {
      background-color: #f8f9fa;
      text-align: left;
    }
  `]
})
export class RolesComponent implements OnInit {
  roleList: IRole[] = [];
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http.get<APIResponceModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles")
      .subscribe({
        next: (res: APIResponceModel) => {
          if (res && res.data) {
            this.roleList = res.data;
          } else {
            console.error('Invalid response structure', res);
          }
        },
        error: (err) => {
          console.error('Error fetching roles', err);
        }
      });
  }

  // Sample properties
  // firstName: string = "Angular Tutorial";
  // angularVersion = "version 18";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "checkbox";
  // selectedState: string = '';

  // Sample methods
  // showWelcomeAlert() {
  //   alert("Welcome to Angular 18 tutorial");
  // }

  // showMessage(message: string) {
  //   alert(message);
  // }
}
