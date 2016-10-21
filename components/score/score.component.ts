import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { RadioScore } from '../../models/radio-score';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  inputArray = [25, -15, 0, 15, 25]; // Array to populate score radio buttons
  
  @Output() scoreSelected: EventEmitter<number> = new EventEmitter<number>(); // Selected score

  constructor() { }

  ngOnInit() { }

  selectedScore(score: number) {
        this.scoreSelected.emit(score); // Emit score to Calculator
        }
}
