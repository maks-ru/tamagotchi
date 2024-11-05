import {Component, OnInit} from '@angular/core';
import {AnimalService} from '../../services/animal.service';
import {Animal} from '../../models/animal.model';


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css'],
})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [];
  selectedAnimal: Animal | null = null;
  loading = true;
  isDead: number = 0;
  originalLength: number = 0;


  constructor(private animalService: AnimalService) {
  }


  ngOnInit() {
    this.animalService.getAnimals().subscribe((animals) => {
      this.animals = animals;
      this.loading = false;

      setInterval(() => {
        this.animals.forEach((animal) => {
          if (animal.isAlive && animal.name === 'Whisky') {
            animal.needs.food -= 1;
            animal.needs.fun -= 2;
            animal.needs.sleep -= 0.5;
          }
          if (animal.isAlive && animal.name === 'Remy') {
            animal.needs.food -= 3;
            animal.needs.fun -= 4;
            animal.needs.sleep -= 2;
          }
          if (animal.isAlive && animal.name === 'Paddington') {
            animal.needs.food -= 3;
            animal.needs.fun -= 2;
            animal.needs.sleep -= 4;
          }

          if (animal.needs.food <= 0 || animal.needs.fun <= 0 || animal.needs.sleep <= 0) {
            animal.isAlive = false;
            animals.length -= 1
            this.isDead = this.originalLength - this.animals.length
          }

        })
      }, 1000);
      this.originalLength = this.animals.length
    });
  }


  selectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }

  feed() {
    if (this.selectedAnimal && this.selectedAnimal.isAlive) {
      this.selectedAnimal.needs.food = Math.min(this.selectedAnimal.needs.food + 30, 100);
    }
  }

  play() {
    if (this.selectedAnimal && this.selectedAnimal.isAlive) {
      this.selectedAnimal.needs.fun = Math.min(this.selectedAnimal.needs.fun + 50, 100);
    }
  }

  putToSleep() {
    if (this.selectedAnimal && this.selectedAnimal.isAlive) {
      this.selectedAnimal.needs.sleep = Math.min(this.selectedAnimal.needs.sleep + 70, 100);
    }
  }

}
