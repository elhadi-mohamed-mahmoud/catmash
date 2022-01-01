import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../classes/Cat';
import { DISPLAYED_CAT } from '../classes/DisplayedCat';
import { CatServiceService } from '../services/cat-service.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css'],
})
export class PlayComponent implements OnInit {
  @Input()
  cats: Cat[] = [];
  @Input()
  processedCats: Cat[] = [];
  firstCat: Cat = new Cat();
  secondCat: Cat = new Cat();

  constructor(private catServiceService: CatServiceService) {}

  ngOnInit() {
    this.setListOfCats();
  }

  setListOfCats() {
    this.catServiceService.getCatlist().subscribe((data: any) => {
      this.cats = <Cat[]>data.images;
      this.cats.forEach((element) => {
        element.score = 0;
      });
      this.displayNewElement(DISPLAYED_CAT.FIRST);
      this.displayNewElement(DISPLAYED_CAT.SECOND);
    });
  }

  displayNewElement(displayedCat: DISPLAYED_CAT) {
    this.cats = this.shuffle(this.cats);
    if (displayedCat == DISPLAYED_CAT.FIRST) {
      this.firstCat = this.cats[0];
      this.processedCats.push(this.firstCat);
      this.cats.shift();
    }

    if (displayedCat == DISPLAYED_CAT.SECOND) {
      this.secondCat = this.cats[0];
      this.processedCats.push(this.secondCat);
      this.cats.shift();
    }
  }

  addScore(selectedcat: Cat) {
    let element = this.processedCats.find(
      (element) => element.id == selectedcat.id
    );
    if (element) {
      element.score = selectedcat.score + 1;
    }
    if (selectedcat.id == this.firstCat.id) {
      this.displayNewElement(DISPLAYED_CAT.SECOND);
    }
    if (selectedcat.id == this.secondCat.id) {
      this.displayNewElement(DISPLAYED_CAT.FIRST);
    }
  }

  shuffle(cats: Cat[]) {
    for (let i = cats.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cats[i], cats[j]] = [cats[j], cats[i]];
    }
    return cats;
  }
}
