import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-financial-reporting',
  templateUrl: './services-financial-reporting.component.html',
  styleUrls: ['./services-financial-reporting.component.scss']
})
export class ServicesFinancialReportingComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}
