import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CanComponentDeactivate} from '../carrycot-add/can-deactivate-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-carrycot-suggest',
  templateUrl: './carrycot-suggest.component.html',
  styleUrls: ['./carrycot-suggest.component.css']
})
export class CarrycotSuggestComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('image', {static: false}) image: ElementRef;
  changesSaved = false;
  constructor() { }

  ngOnInit() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.image.nativeElement.value !== '' && !this.changesSaved) {
      return confirm('Voulez vous vraiment quitter cette page? Les changements ne seront pas sauvegardés');
    } else {
      return true;
    }
  }
}
