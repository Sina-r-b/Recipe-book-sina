import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'pizza',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg'
    ),
    new Recipe(
      'pizza',
      'This is a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg'
    ),
  ];
}
