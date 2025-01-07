import { Component, inject, OnInit } from '@angular/core';
import { APIResponceModel, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../services/master.service'; // Adjust the import path as needed

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css'] // Corrected from styleUrl to styleUrls
})
export class DesignationComponent implements OnInit {
  designationlist: IDesignation[] = [];
  isLoader:boolean=true;
  masterService = inject(MasterService); // Corrected naming and ensured proper injection

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe({
      next: (result: APIResponceModel) => {
        if (result && result.data) {
          this.designationlist = result.data;
          this.isLoader=false;
        } else {
          console.error('Invalid API response structure', result);
        }
      },
      error: (err: any) => {
        console.error('Error fetching designations:', err); // Use console for debugging
        alert('API ERROR/NETWORK DOWN'); // Temporary error alert
        this.isLoader=false;
      }
    });
  }
}
