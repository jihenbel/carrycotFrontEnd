import {Component, Input, OnInit} from '@angular/core';
import {CarrycotModel} from '../../carrycot.model';
import {CarrycotService} from '../../carrycot.service';

@Component({
  selector: 'app-carrycot-item',
  templateUrl: './carrycot-item.component.html',
  styleUrls: ['./carrycot-item.component.css']
})
export class CarrycotItemComponent implements OnInit {
  @Input() carrycot: CarrycotModel;

  constructor(private carrycotService: CarrycotService) { }

  ngOnInit() {
  }
}
