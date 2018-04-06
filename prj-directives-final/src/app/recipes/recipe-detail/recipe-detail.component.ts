import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model";

import { Recipe } from '../../shared/recipe.model';
import {ShoppinglistService} from "../../services/shoppinglist.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input() recipe: Recipe;
ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
  }

  /**
   * Instantiate the ingredients variable with the ingredients, and push them to the
   * shopping list.
   */
  toShoppingList() {
    this.ingredients = this.recipe.ingredients;

      this.shoppingListService.ingredientsAdd(this.ingredients);
  }



}
