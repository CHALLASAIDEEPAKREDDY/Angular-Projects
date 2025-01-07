export class client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeestrength: number;
  gstno: string;
  contactno: number;
  regNo: string;
  constructor() {
    this.clientId = 0;
    this.employeestrength = 0;
    this.address = '';
    this.city = '';
    this.companyName = '';
    this.contactno = 0;
    this.state = '';
    this.regNo = '';
    this.gstno = '';
    this.pincode = '';
    this.contactPersonName = '';
  }
}
