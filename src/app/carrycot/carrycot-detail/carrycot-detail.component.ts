import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params} from '@angular/router';
import {CarrycotModel} from '../carrycot.model';

@Component({
    selector: 'app-carrycot-detail',
    templateUrl: './carrycot-detail.component.html',
    styleUrls: ['./carrycot-detail.component.css']
})
export class CarrycotDetailComponent implements OnInit {
    carrycot: CarrycotModel;
    carrycots: CarrycotModel[] = [];
    imageDirectory = 'http://127.0.0.1:8887/';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.parent.data.subscribe(
            (data: Data) => {
                this.carrycots = data.carrycots;
            }
        );
        this.route.params.subscribe(
            (params: Params) => {
                this.carrycot = this.carrycots.find(
                    (s) => {
                        return s.id === +params.id;
                    }
                );
            }
        );
    }

    onEditCarrycot() {
    }

}
