import {Component, Input, OnInit} from '@angular/core';
import {CarrycotModel} from '../../carrycot.model';
import {CarrycotService} from '../../carrycot.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carrycot-item',
  templateUrl: './carrycot-item.component.html',
  styleUrls: ['./carrycot-item.component.css']
})
export class CarrycotItemComponent implements OnInit {
  @Input() carrycot: CarrycotModel;
  image: SafeUrl;

  constructor(private carrycotService: CarrycotService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.image = this.sanitizer.bypassSecurityTrustUrl('http://127.0.0.1:8887/' + this.carrycot.imagePath);
  }
}
