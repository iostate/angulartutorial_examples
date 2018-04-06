import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from "../services/shoppinglist.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  // ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),
  // ];
  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {
    // initialize with copy
    this.ingredients = this.shoppingListService.getIngredients();

    // update the local array everytime we receive an emit from service
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  // onIngredientAdded(ingredient: Ingredient) {
  //   // Want to add this line, but we are retrieving only a copy of the ingredients array in
  //   // ngOnInit(), so it wouldn't make sense to push to the actual container of the data.
  //   // Instead, I think we are to operate on the local data.
  //   // this.shoppingListService.ingredientAdd(ingredient);
  //   this.ingredients.push(ingredient);
  // }
}
