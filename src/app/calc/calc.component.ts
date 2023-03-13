import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../shared/services/script.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})

export class CalcComponent implements OnInit {

  showCurrencyConverter = false;

  constructor(
    // private cdr: ChangeDetectorRef,
    private scriptService: ScriptService
    ) {
  }

  ngOnInit(): void {


// <!-- EXCHANGERATES.ORG.UK EXCHANGE RATE CONVERTER START -->
//   <script type="text/javascript">
//     var dcf = 'ZAR';
//     var dct = 'USD';
//     var mc = 'B4B4B4';
//     var mbg = 'FFFFFF';
//     var f = 'verdana';
//     var fs = '12';
//     var fc = '333333';
//     var tf = 'verdana';
//     var ts = '14';
//     var tc = 'FFFFFF';
//     var tz = '2';

//   </script>
//   <script type="text/javascript" src="https://www.currency.me.uk/remote/ER-ERC-1.php"></script>

    this.scriptService.load("currencyConverter").then((data: any) => {
        console.log("Currency script loaded successfully");
        this.showCurrencyConverter = true;
        alert("script loaded");
    }).catch(error => console.log("Currency script not available"));
  }

}
