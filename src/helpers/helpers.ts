import { SortingEnum } from "../globals/enums/enums";
import { IFilterTypes, IProduct } from "../globals/enums/models";

export const filterData = (filterValues: IFilterTypes, data: IProduct[]) => {
  if (filterValues.itemType) {
    data = data.filter(
      (product: IProduct) => product.itemType === filterValues.itemType
    );
  }
  if (filterValues.brands.length) {
    data = data.filter((product: IProduct) =>
      filterValues.brands.includes(product.manufacturer)
    );
  }
  if (filterValues.tags.length) {
    data = data.filter(
      (product: IProduct) =>
        product.tags.filter((tag) => filterValues.tags.includes(tag)).length
    );
  }
  if (filterValues.sortType) {
    switch (filterValues.sortType) {
      case SortingEnum.PriceAsc:
        data = data.sort((a, b) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        break;
      case SortingEnum.PriceDesc:
        data = data.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }
          return 0;
        });
        break;
      case SortingEnum.DateAsc:
        data = data.sort((a, b) => {
          if (a.added < b.added) {
            return -1;
          }
          if (a.added > b.added) {
            return 1;
          }
          return 0;
        });
        break;
      case SortingEnum.DateDesc:
        data = data.sort((a, b) => {
          if (a.added < b.added) {
            return 1;
          }
          if (a.added > b.added) {
            return -1;
          }
          return 0;
        });
        break;
    }
  }
  return data;
};
