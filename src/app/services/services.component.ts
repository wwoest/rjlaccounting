import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesAccountingComponent } from './services-accounting/services-accounting.component';
import { ServicesOtherComponent } from './services-other/services-other.component';
import { ServicesPayrollComponent } from './services-payroll/services-payroll.component';
import { ServicesTaxComponent } from './services-tax/services-tax.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  
  constructor(private modalService: NgbModal){}

  viewMore(service: string): void {
    let modalComponent: any;

    if ("tax" === service) {
      modalComponent = ServicesTaxComponent;
    } else if ("accounting" === service) {
      modalComponent = ServicesAccountingComponent;
    } else if ("payroll" === service) {
      modalComponent = ServicesPayrollComponent;
    } else if ("other" === service) {
      modalComponent = ServicesOtherComponent;
    }

		const modalRef = this.modalService.open(modalComponent, { size: 'xl' });
		modalRef.componentInstance.name = service;

  }

}
