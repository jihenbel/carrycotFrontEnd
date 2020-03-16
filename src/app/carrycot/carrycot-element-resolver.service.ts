import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CarrycotModel} from './carrycot.model';
import {CarrycotService} from './carrycot.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class CarrycotElementResolver implements Resolve<any> {
    constructor(private carrycotService: CarrycotService, private route: ActivatedRouteSnapshot) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        console.log(this.route.params);
        return this.carrycotService.getCarrycotApi(+this.route);
    }
}
