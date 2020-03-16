import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CarrycotComponent} from './carrycot/carrycot.component';
import {CarrycotAddComponent} from './carrycot/carrycot-add/carrycot-add.component';
import {CarrycotSuggestComponent} from './carrycot/carrycot-suggest/carrycot-suggest.component';
import {ShoppingEditComponent} from './carrycot/shopping/shopping-edit/shopping-edit.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {CanDeactivateGuard} from './carrycot/carrycot-add/can-deactivate-guard.service';
import {CarrycotDetailComponent} from './carrycot/carrycot-detail/carrycot-detail.component';
import {CarrycotListStartComponent} from './carrycot/carrycot-list-start/carrycot-list-start.component';
import {CarrycotResolver} from './carrycot/carrycot-detail/carrycot-resolver.service';
import {CarrycotElementResolver} from './carrycot/carrycot-element-resolver.service';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'carrycots', component: CarrycotComponent, resolve: { carrycots: CarrycotResolver}, children: [
            {path: '', component: CarrycotListStartComponent},
            {path: ':id', component: CarrycotDetailComponent}
        ]},
    {path: 'add', component: CarrycotAddComponent, canDeactivate : [CanDeactivateGuard]},
    {path: 'suggest', component: CarrycotSuggestComponent, canDeactivate: [CanDeactivateGuard]},
    {path: 'shopping/:id', component: ShoppingEditComponent, resolve : {carrycot : CarrycotElementResolver}},
    {path: 'not-found', component: NotFoundPageComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
