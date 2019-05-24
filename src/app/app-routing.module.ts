import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterFormComponent } from './character-form/character-form.component';

const routes: Routes = [
  {path: 'character-form', component: CharacterFormComponent},
  {path: '', redirectTo: '/character-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
