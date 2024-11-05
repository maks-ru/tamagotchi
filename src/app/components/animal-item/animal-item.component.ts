import { Component, Input } from '@angular/core';
import { Animal } from '../../models/animal.model';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css'],
  animations: [
    trigger('grow', [
      state('small', style({
        transform: 'scale(0.9)'
      })),
      state('large', style({
        transform: 'scale(1)'
      })),
      transition('small <=> large', [
        animate('300ms ease-in-out')
      ])
    ])
  ]

})
export class AnimalItemComponent {
  @Input() animal!: Animal;
  @Input() selected: boolean = false;

  getProgressColor(value: number): string {
    if (value > 70) return 'green';
    if (value > 30) return 'orange';
    return 'red';
  }
}
