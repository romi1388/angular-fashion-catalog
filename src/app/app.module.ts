import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import {NavigationModule} from "./modules/navigation/navigation.module";
import { CollectionComponent } from './modules/collection/collection.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {CollectionData} from "./modules/collection/collection-data";
import { LoginComponent } from './modules/login/login.component';
import { CollectionUpdateComponent } from './modules/collection/collection-update/collection-update.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    LoginComponent,
    CollectionUpdateComponent,
  ],
  imports: [
    AppRoutingModule,
    NavigationModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(CollectionData, {delay: 500}),
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
