import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CarrycotModel} from '../carrycot.model';
import {CarrycotService} from '../carrycot.service';
import {Router} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-carrycot-add',
  templateUrl: './carrycot-add.component.html',
  styleUrls: ['./carrycot-add.component.css']
})
export class CarrycotAddComponent implements OnInit, CanComponentDeactivate {
  form: FormGroup;
  file: File = null;
  changesSaved = false;
  constructor(private carrycotService: CarrycotService, private router: Router, private SpinnerService: NgxSpinnerService,
              private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: '',
      description: '',
      price: 0,
      imagePath: ''
    });
  }

  ngOnInit() {
    this.changesSaved = false;
  }

  showPreview(event) {
    this.file = (event.target as HTMLInputElement).files[0];
  }
  onAddCarrycot() {
    const formData = new FormData();

    formData.append('file', this.file);
    console.log(this.form.value);
    Object.keys(this.form.value).forEach(key => {
      formData.append(key, this.form.value[key]);
      console.log(key);
      console.log(this.form.value[key]);
    });
    console.log(formData);
    // this.SpinnerService.show();
    this.carrycotService.addCarrycotApi(formData).subscribe(
        (response) => {
          console.log(response);
          this.SpinnerService.hide();
          this.router.navigate(['/carrycots']);
          this.changesSaved = true;
          this.form.reset();
        },
        (error) => console.log(error)
    );
    setTimeout(() => this.router.navigate(['/carrycots']), 1500);
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> |boolean {
    const carrycotName = this.form.value.name;
    const carrycotPrice = this.form.value.price;
    const carrycotDescription = this.form.value.description;
    const carrycotImage = this.form.value.imagePath;
    console.log(carrycotImage);
    console.log(carrycotDescription);
    console.log(carrycotPrice);
    console.log(carrycotName);
    console.log(this.changesSaved);
    if ((carrycotName !== '' || (carrycotPrice !== '' && carrycotPrice !== 0) || carrycotDescription !== '' || carrycotImage !== '') && !this.changesSaved) {
       return confirm('Voulez vous vraiment quitter cette page? Les changements ne seront pas sauvegardés');
    } else {
       return true;
    }
  }
}
