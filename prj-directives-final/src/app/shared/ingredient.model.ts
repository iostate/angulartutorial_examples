export class Ingredient {
  constructor(public name: string, public amount: number) {}

  getName() {
    return this.name;
  }

  getAmount() {
    return this.amount;
  }
}
