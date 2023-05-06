import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-other',
  templateUrl: './services-other.component.html',
  styleUrls: ['./services-other.component.scss']
})
export class ServicesOtherComponent {

 @Output() closeServiceCardEvent = new EventEmitter<void>();
  closeServiceCard(){
    this.closeServiceCardEvent.emit();
  } 

}
