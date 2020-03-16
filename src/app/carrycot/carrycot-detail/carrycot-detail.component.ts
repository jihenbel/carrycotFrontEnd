import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {CarrycotService} from '../carrycot.service';
import {CarrycotModel} from '../carrycot.model';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-carrycot-detail',
    templateUrl: './carrycot-detail.component.html',
    styleUrls: ['./carrycot-detail.component.css']
})
export class CarrycotDetailComponent implements OnInit {
    carrycot: CarrycotModel;
    carrycots: CarrycotModel[] = [];
    imageDirectory: string = environment.imageDirectory;

    constructor(private route: ActivatedRoute, private service: CarrycotService) {
    }

    ngOnInit() {
        this.route.parent.data.subscribe(
            (data: Data) => {
                this.carrycots = data.carrycots;
                console.log(this.carrycots);
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
