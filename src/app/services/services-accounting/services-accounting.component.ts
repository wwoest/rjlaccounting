import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-accounting',
  templateUrl: './services-accounting.component.html',
  styleUrls: ['./services-accounting.component.scss']
})
export class ServicesAccountingComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}
