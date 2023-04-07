import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-services-other',
  templateUrl: './services-other.component.html',
  styleUrls: ['./services-other.component.scss']
})
export class ServicesOtherComponent {
  constructor(public activeModal: NgbActiveModal) {}

  close(): void {
    this.activeModal.close();
  }
}
