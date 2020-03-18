export type Tag = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createDate: string;
}

export type GenericFood = {
  id: number;
  name: string;
  averageExpirationDurations: number;
  gramsPerServing: number;
  foodGroup?: string;
  tags?: Array<Tag>;
};

export type Nutrition = {
  name: string;
  value: number;
}

export type Stock = {
  id: number;
  totalQuantity?: number;
  quantityInGrams?: number;
  food: GenericFood;
  foodName?: string;
  nextExpiration?: string;
  tags?: Array<Tag>;
};

export type StockItem = {
  id: number;
  location?: string;
  dateObtained: string;
  expirationDate?: string;
  quantity: number;
  quantityInGrams?: number;
};

export type StockDetails = Stock & {
  stockItems: Array<StockItem>;
};

export type Recipe = {
  id: number;
  name?: string;
  tags?: Array<Tag>;
  cookTime?: string | number;
  yield?: string;
};

export type RecipeDetails = Recipe & {
  rating?: number;
  cookTime?: string | number;
  ingredients?: Array<GenericFood>;
  instructions: string;
};
