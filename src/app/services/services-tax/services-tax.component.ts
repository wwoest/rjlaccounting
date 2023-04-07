import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-tax',
  templateUrl: './services-tax.component.html',
  styleUrls: ['./services-tax.component.scss']
})
export class ServicesTaxComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}
