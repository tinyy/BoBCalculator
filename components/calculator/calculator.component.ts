import { Component, OnInit } from '@angular/core';

import { ScoreComponent } from '../score/score.component';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [ ScoreComponent ]
})

export class CalculatorComponent implements OnInit {

  preCalculatedScore: number; // PreCalculated score
  markings = [0, 1, 2, 3, 4, 5]; // Number of scores to display

  constructor() { }

  ngOnInit() { }

  scoreSelected(score: number) {
  this.preCalculatedScore = + score;
  console.log(this.preCalculatedScore);
  }
}
