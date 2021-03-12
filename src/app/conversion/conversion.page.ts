import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../entities/models';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
  public myQuotes: number;
  public devise;
  public montant: number = null;
  public quotes;
  public rate: number = 0;
  public resultat: number = null;

  constructor(public http: HttpClient, private service: ConverterService) {}

  ngOnInit() {}

  codeSelected() {
    this.service.getQuotes(this.devise).subscribe((data) => {
      this.quotes = data['quotes'];
      var keys = Object.keys(this.quotes);
      var key = keys[0];

      this.myQuotes = <number>this.quotes[key];
    });
  }

  convert() {
    this.resultat = this.myQuotes * this.montant;
  }
}
