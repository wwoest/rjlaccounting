import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-services-payroll',
  templateUrl: './services-payroll.component.html',
  styleUrls: ['./services-payroll.component.scss']
})
export class ServicesPayrollComponent {
  
  @Output() closeServiceCardEvent = new EventEmitter<void>();
  closeServiceCard(){
    this.closeServiceCardEvent.emit();
  } 

}
