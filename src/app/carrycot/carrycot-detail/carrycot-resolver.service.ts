import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CarrycotService} from '../carrycot.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CarrycotModel} from '../carrycot.model';

@Injectable()
export class CarrycotResolver implements Resolve<CarrycotModel[]> {
    constructor(private carrycotService: CarrycotService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CarrycotModel[]> {
        return this.carrycotService.getCarrycotsApi();
    }
}
