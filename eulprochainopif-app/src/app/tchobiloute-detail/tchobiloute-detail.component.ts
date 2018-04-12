import { Component, OnInit, Input } from '@angular/core';
import { TchoBiloute } from '../TchoBiloute';

@Component({
  selector: 'app-tchobiloute-detail',
  templateUrl: './tchobiloute-detail.component.html',
  styleUrls: ['./tchobiloute-detail.component.css']
})
export class TchobilouteDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 @Input() tchobiloute:TchoBiloute;
}
