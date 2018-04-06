import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from "../../../services/recipes.service";
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // Binds to the recipe property in the DOM
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipesService.recipeSelected.subscribe();
    this.recipesService.recipeSelected.emit(this.recipe);
  }

}
