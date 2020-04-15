import {CarrycotModel} from './carrycot.model';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

// @Injectable()
export class CarrycotService {
    carrycotsChanged = new EventEmitter<CarrycotModel[]>();
    carrycotSelected = new EventEmitter<CarrycotModel>();
    private carrycots: CarrycotModel[];

    constructor(private httpClient: HttpClient) {}
    getCarrycotsApi() {
        return this.httpClient.get<CarrycotModel[]>('http://127.0.0.1:8001/carrycots');
    }
    getCarrycotApi(id) {
        return this.httpClient.get('http://127.0.0.1:8001/api/carrycots/' + id);
    }
    addCarrycotApi(carrycot: any) {
        console.log(carrycot);
        return this.httpClient.post('http://127.0.0.1:8001/carrycot', carrycot);
    }
    getCarrycots() {
        return this.carrycots.slice();
    }
    addCarrycotToList(carrycot: CarrycotModel) {
        this.carrycots.push(carrycot);
        this.carrycotsChanged.emit(this.carrycots.slice());
    }
    getCarrycot(id) {
        return this.carrycots.find(
            (s) => {
                return s.id === id;
            }
        );
    }
}
