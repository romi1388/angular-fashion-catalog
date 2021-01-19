import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import { MatOptionModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CardViewComponent } from './components/card-view/card-view.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [CardViewComponent, ConfirmDialogComponent, SearchBarComponent],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        HttpClientModule,
        MatMenuModule,
        RouterModule.forChild([]),
        FormsModule,
        MatFormFieldModule,
        MatOptionModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatAutocompleteModule
    ],
  exports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    MatMenuModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatOptionModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDialogModule,
    CardViewComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
