import { Component } from '@angular/core';
import { DesignationComponent } from "../designation/designation.component";
import { RolesComponent } from "../roles/roles.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [DesignationComponent, RolesComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'] // Corrected from styleUrl to styleUrls
})
export class MasterComponent {
  currentComponent: string = "Roles";

  changeTab(tabName: string) {
    this.currentComponent = tabName;
  }
}
