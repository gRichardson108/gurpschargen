import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material library imports
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterTraitPurchaserComponent } from './character-trait-purchaser/character-trait-purchaser.component';
import { AdvantageLineDisplayComponent } from './advantage-line-display/advantage-line-display.component';
import { PrimaryAttributeLineDisplayComponent } from './primary-attribute-line-display/primary-attribute-line-display.component';
import { SkillLineDisplayComponent } from './skill-line-display/skill-line-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterFormComponent,
    CharacterTraitPurchaserComponent,
    AdvantageLineDisplayComponent,
    PrimaryAttributeLineDisplayComponent,
    SkillLineDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    
    // angular material library
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
