import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public title = 'Binding in Angular';
  public enteredNumber: number;
  public resultMsg = 'Please, enter a number.';

  constructor() { }

  ngOnInit() {
  }

  public isPrime(): void {
    for (let i = 2; i < this.enteredNumber; i++) {
      if (this.enteredNumber % i === 0) {
        this.resultMsg = 'The number is not prime.';
        return;
      }
    }
    this.enteredNumber !== 1 ? this.resultMsg = 'The number is  prime.' : this.resultMsg = 'The number is not prime.';
  }

}
