import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  {path: '', redirectTo: 'table', pathMatch: 'full'},
  {path: 'table', component: DataTableComponent},
  {path: '**', redirectTo: 'table', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
