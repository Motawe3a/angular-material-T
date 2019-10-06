import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { DataTableComponent } from './data-table/data-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataService } from './shared/_services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
