import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe('Double Cheeseburger',
      'A succulent cheeseburger using only the finest of ingredients. Organically raised beef.',
      'https://s.yimg.com/ny/api/res/1.2/Sb4qB1UhkIpxD.rbu2Sa8w--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en-US/homerun/hello_giggles_454/74767f30753554ea4f4500545671b088', [
        new Ingredient('Meat', 1),
        new Ingredient('Lettuce', 3),
        new Ingredient('Parmesan', 4),
      ]),
    new Recipe('20 oz. Ribeye',
      'An amazing platter with a 20 ounce ribeye, and accoutrements.',
      'https://assetcloud02.roccommerce.net/w750-h510-cpad//_rastelli/8/9/9/dry-aged-ribeye.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('Lettuce', 3),
        new Ingredient('Parmesan', 4),
      ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  // Return a copy of the recipes array
  getRecipes() {
    return this.recipes.slice();
  }

}
