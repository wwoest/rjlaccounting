import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-financial-reporting',
  templateUrl: './services-financial-reporting.component.html',
  styleUrls: ['./services-financial-reporting.component.scss']
})
export class ServicesFinancialReportingComponent {

  @Output() closeServiceCardEvent = new EventEmitter<void>();
  closeServiceCard(){
    this.closeServiceCardEvent.emit();
  } 

}
