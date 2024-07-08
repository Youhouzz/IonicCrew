import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page {
  items: string[] = ["banane", "pomme", "orange", "ananas"];

  constructor() {}

  triParInsertion(tableau: string[]): string[] {
    for (let i = 1; i < tableau.length; i++) {
      let clé = tableau[i];
      let j = i - 1;

      while (j >= 0 && tableau[j] > clé) {
        tableau[j + 1] = tableau[j];
        j = j - 1;
      }
      tableau[j + 1] = clé;
    }
    return tableau;
  }

  trierItems() {
    this.items = this.triParInsertion(this.items);
  }

}
