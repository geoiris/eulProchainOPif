import { Component, OnInit } from '@angular/core';
import { TchoBiloute } from '../TchoBiloute';
import { TCHOBILOUTES } from '../mock-tchobiloutes';

@Component({
  selector: 'app-tchobiloutes',
  templateUrl: './tchobiloutes.component.html',
  styleUrls: ['./tchobiloutes.component.css']
})
export class TchobiloutesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tchobiloutes = TCHOBILOUTES;

  selectedTchobiloute: TchoBiloute;

  onSelect(biloute: TchoBiloute): void {
    this.selectedTchobiloute = biloute;
  }

}
