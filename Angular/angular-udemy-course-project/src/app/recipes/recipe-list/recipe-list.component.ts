import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Awesome Spags', 'Test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfENuLozkxmuUhy755QF6dTnK_yrdqc7IPVcP1LX1tsZB52mpa'),
    new Recipe('Clam Chowder', 'Delicioso', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1')
  ];

  constructor() { }

  ngOnInit() {
  }

}
