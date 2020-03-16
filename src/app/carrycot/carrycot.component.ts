import {Component, OnInit} from '@angular/core';
import {CarrycotModel} from './carrycot.model';
import {CarrycotService} from './carrycot.service';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
    selector: 'app-carrycot',
    templateUrl: './carrycot.component.html',
    styleUrls: ['./carrycot.component.css'],
})
export class CarrycotComponent implements OnInit {
    selectedCarrycotElt: CarrycotModel;
    carrycots: CarrycotModel[];
    constructor(private route: ActivatedRoute, private carrycotService: CarrycotService) {
    }
    ngOnInit() {
        this.route.data.subscribe(
            (data: Data) => {
                this.carrycots = data.carrycots;
            }
        );
        this.carrycotService.carrycotSelected.subscribe(
            (carrycot: CarrycotModel) => {
                this.selectedCarrycotElt = carrycot;
            }
        );
    }
}
