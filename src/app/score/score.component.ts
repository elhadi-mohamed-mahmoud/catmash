import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../classes/Cat';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  @Input()
  processedCats: Cat[] = [];

  constructor() {}

  ngOnInit() {
    this.processedCats.sort((a, b) => (a.score < b.score ? 1 : -1));
  }
}
