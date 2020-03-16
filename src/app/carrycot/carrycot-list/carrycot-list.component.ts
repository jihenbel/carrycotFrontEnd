import {Component, Input, OnInit} from '@angular/core';
import {CarrycotModel} from '../carrycot.model';
import {CarrycotService} from '../carrycot.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-carrycot-list',
  templateUrl: './carrycot-list.component.html',
  styleUrls: ['./carrycot-list.component.css']
})
export class CarrycotListComponent implements OnInit {
  @Input() carrycots: CarrycotModel[];
  constructor(private carrycotService: CarrycotService) { }

  ngOnInit() {
    // this.carrycots = this.carrycotService.getCarrycots();
    console.log(this.carrycots);
    this.carrycotService.carrycotsChanged.subscribe(
        (carrycots: CarrycotModel[]) => {
          this.carrycots = carrycots;
        }
    );
  }
  // onGet() {
  //   console.log(this.carrycotService.getCarrycotsApi());
  // }

}
