import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarrycotService} from '../../carrycot.service';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  carrycot: {id?: number, name: string, price: number, description: string, imagePath: string};
  formUserDetails: FormGroup;
  defaultCommandType = 'direct';
  constructor(private route: ActivatedRoute, private carrycotService: CarrycotService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe(
        (data) => console.log(data)
    );
    // this.carrycot = this.carrycotService.getCarrycot(+this.route.snapshot.params.id);
    // this.formUserDetails = this.formBuilder.group({
    //   lastname: [''],
    //   firstname: [''],
    //   phone: [''],
    //   ville: [''],
    //   type: ['']
    // });
    this.formUserDetails = new FormGroup({
      lastname: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.min(10000000), Validators.max(99999999)]),
      ville: new FormControl(null, Validators.required),
      type: new FormControl('direct')
    });
    console.log(this.formUserDetails);
  }

  onSubmit() {
    console.log(this.formUserDetails);
  }
}
