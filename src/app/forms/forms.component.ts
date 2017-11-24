import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  age: number;
  refClass: string;
  items: any[];

  constructor() {
    this.items = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit() {
  }

  calc() {
    if (this.age > 18)
      this.refClass = 'text-success';
    else
      this.refClass = 'text-danger';
  }
}
