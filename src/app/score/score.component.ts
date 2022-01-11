import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../classes/Cat';
import { CatServiceService } from '../services/cat-service.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
})
export class ScoreComponent implements OnInit {
  processedCats: Cat[] = [];

  constructor(private catService: CatServiceService) {}

  ngOnInit() {
    this.getScore();
  }
  getScore() {
    this.catService.getScore().subscribe((data: any) => {
      this.processedCats = <Cat[]>data;
      this.processedCats.sort((a, b) => (a.score < b.score ? 1 : -1));
    });
  }
}
