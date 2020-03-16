import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CarrycotComponent} from './carrycot/carrycot.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { CarrycotListComponent } from './carrycot/carrycot-list/carrycot-list.component';
import { CarrycotDetailComponent } from './carrycot/carrycot-detail/carrycot-detail.component';
import { CarrycotItemComponent } from './carrycot/carrycot-list/carrycot-item/carrycot-item.component';
import { CarrycotEditComponent } from './carrycot/carrycot-list/carrycot-edit/carrycot-edit.component';
import { ShoppingEditComponent } from './carrycot/shopping/shopping-edit/shopping-edit.component';
import {ShoppingComponent} from './carrycot/shopping/shopping.component';
import { CarrycotAddComponent } from './carrycot/carrycot-add/carrycot-add.component';
import { CarrycotSuggestComponent } from './carrycot/carrycot-suggest/carrycot-suggest.component';
import {DropdownDirective} from './directives/dropdown.directive';
import {CarrycotService} from './carrycot/carrycot.service';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {AppRoutingModule} from './app-routing.module';
import {CanDeactivateGuard} from './carrycot/carrycot-add/can-deactivate-guard.service';
import { CarrycotListStartComponent } from './carrycot/carrycot-list-start/carrycot-list-start.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CarrycotResolver} from './carrycot/carrycot-detail/carrycot-resolver.service';
import {NgxSpinnerModule} from 'ngx-spinner';
import {CarrycotElementResolver} from './carrycot/carrycot-element-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    CarrycotComponent,
    HeaderComponent,
    FooterComponent,
    CarrycotListComponent,
    CarrycotDetailComponent,
    CarrycotItemComponent,
    CarrycotEditComponent,
    ShoppingComponent,
    ShoppingEditComponent,
    CarrycotAddComponent,
    CarrycotSuggestComponent,
    DropdownDirective,
    HomeComponent,
    NotFoundPageComponent,
    CarrycotListStartComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        NgxSpinnerModule
    ],
  providers: [CarrycotService, CanDeactivateGuard, CarrycotResolver, CarrycotElementResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
