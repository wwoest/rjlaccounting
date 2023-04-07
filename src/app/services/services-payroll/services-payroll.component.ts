import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-payroll',
  templateUrl: './services-payroll.component.html',
  styleUrls: ['./services-payroll.component.scss']
})
export class ServicesPayrollComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}
