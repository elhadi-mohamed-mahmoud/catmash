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
  cats: Cat[] = [];
  processedCats: Cat[] = [];
  firstCat: Cat = new Cat();
  secondCat: Cat = new Cat();

  constructor(private catServiceService: CatServiceService) {}

  ngOnInit() {
    this.setListOfCats();
  }

  setListOfCats() {
    this.catServiceService.getCatlist().subscribe((data: any) => {
      this.cats = <Cat[]>data;
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

  vote(cat: Cat) {
    this.catServiceService.vote(cat).subscribe({
      error: (e) => console.error(e),
      complete: () => {
        if (cat.id == this.firstCat.id) {
          this.displayNewElement(DISPLAYED_CAT.SECOND);
        }
        if (cat.id == this.secondCat.id) {
          this.displayNewElement(DISPLAYED_CAT.FIRST);
        }
      },
    });
  }

  shuffle(cats: Cat[]) {
    for (let i = cats.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cats[i], cats[j]] = [cats[j], cats[i]];
    }
    return cats;
  }

  hasFinishedPlaying(): boolean {
    return this.processedCats.length != 0 && this.cats.length == 0;
  }
}
