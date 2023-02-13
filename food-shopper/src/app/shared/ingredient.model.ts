export class Ingredient {
  // NOTE:
  // This is the original way on how to create a related model with its corresponding constructor:
  // public name: string;
  // public amount: number;

  // constructor(name: string, amount: number) {
  // this.name = name;
  // this.amount = amount;
  // }

  // NOTE:
  // Here is how to create a corresponding model with a corresponding constructor but with using 'accessors':
  // This will automatically give us the properties with the names we assign it, aka 'name' and 'amount' in this case
  // It will also automatically assign the values that we receive from the constructor to the properties we just created:
  constructor(public name: string, public amount: number) {}
}
