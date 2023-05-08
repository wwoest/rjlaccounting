import { Component } from '@angular/core';
import { ScriptService } from '../shared/script.service';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})
export class CalculatorsComponent {

  currencyLoaded = false;
  exchangeLoaded = false;

  constructor(private scriptService: ScriptService) {}

  ngOnInit() {
    this.scriptService.loadScript("currency").then((res) => {
        this.currencyLoaded = true;
    });
    this.scriptService.loadScript("exchange").then((res) => {
        this.exchangeLoaded = true;
    });
  }

}
