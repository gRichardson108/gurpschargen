import {Component, Input, OnInit} from '@angular/core';
import { ICharacterTrait } from '../models/traits';

@Component({
  selector: 'app-trait-table',
  styleUrls: ['trait-table.component.css'],
  templateUrl: 'trait-table.component.html',
})
export class TraitTableComponent {

  @Input() traits: ICharacterTrait[];

  @Input() headerColumns: string[];

  @Input() purchaser: boolean = false;

  dataColumns: string[];

  ngOnInit(){
    // make a shallow copy
    this.dataColumns = this.headerColumns.slice();

    if (this.purchaser){
      this.headerColumns.push("traitPurchaserColumn");  
      this.headerColumns.push("effectiveLevelColumn");
    }    
  }
}