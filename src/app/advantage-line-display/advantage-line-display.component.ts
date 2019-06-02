import { Component, OnInit, Input } from '@angular/core';
import { Advantage } from '../models/advantage';

@Component({
  selector: 'app-advantage-line-display',
  templateUrl: './advantage-line-display.component.html',
  styleUrls: ['./advantage-line-display.component.css']
})
export class AdvantageLineDisplayComponent implements OnInit {

  @Input() advantage: Advantage;

  constructor() { }

  ngOnInit() {
  }

}
