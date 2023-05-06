import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-tax',
  templateUrl: './services-tax.component.html',
  styleUrls: ['./services-tax.component.scss']
})
export class ServicesTaxComponent {

  @Output() closeServiceCardEvent = new EventEmitter<void>();
  closeServiceCard(){
    this.closeServiceCardEvent.emit();
  } 

}
