import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {FoodEntry} from "../data-access/food-entry";
import {FoodDataService} from "../data-access/food-data.service";

@Component({
  selector: 'app-feature',
  templateUrl: './food.component.html',
})
export class FoodComponent implements OnInit {
  constructor(private dataService: FoodDataService) {
  }

  day!: BehaviorSubject<string>;
  data$!: Observable<FoodEntry[]>;
  inputField = '';

  ngOnInit(): void {
    this.day = this.dataService.day;
    this.data$ = this.dataService.data$;
    this.dataService.update();
  }

  add(): void {
    if (this.inputField.trim() !== '') {
      this.dataService.add(this.inputField)
      this.inputField = '';
      this.dataService.update();
    }
  }
}
