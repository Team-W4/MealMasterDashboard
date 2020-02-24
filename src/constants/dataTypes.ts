export type Tag = {
	id: number;
	name: string
}

export type GenericFood = {
  id: number;
  name: string;
  averageExpirationDurations: number;
  gramsPerServing: number;
  foodGroup?: string;
};

export type Stock = {
  id: number;
  totalQuantity: number;
  quantityInGrams: number;
  food: GenericFood;
  foodName: string;
  nextExpiration: string;
};

export type StockItem = {
  id?: number;
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
  tags: Array<Tag>;
};
