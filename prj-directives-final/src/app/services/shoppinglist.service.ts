import {Injectable, EventEmitter } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppinglistService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  // used to tell components something has changed
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {
  }

  ingredientAdd(ingredient: Ingredient) {
    // add the changes to the services array
    this.ingredients.push(ingredient);

    // emit that a change has occurred
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  ingredientsAdd(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);

    // emit that a change has occurred
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  /**
   * Returns a copy of the original array in the Service
   * @returns {Ingredient[]}
   */
  getIngredients() {
    return this.ingredients.slice();
  }

}
