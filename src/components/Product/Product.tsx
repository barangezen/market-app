import styles from "./Product.module.scss";
import ShirPoster from "../../assets/shirt.png";
import MugPoster from "../../assets/mug.png";
import { ICartItem, IProduct } from "../../globals/enums/models";
import { useAppDispatch, useAppSelector } from "../../store";
import { addItem, updateItem } from "../../features/CartSlice/CartSlice";
import { Button } from "@mui/material";
import { useCallback } from "react";

export interface ProductItem {
  item: IProduct;
}
export const Product: React.FC<ProductItem> = ({ item }) => {
  const basketItems = useAppSelector((state) => state.cart.addedItems);
  const dispatch = useAppDispatch();
  const handleAddToCart = useCallback (() => {
    const exist = basketItems.find((basketItem) => basketItem.name === item.name);
    if (exist) {
      const postItem: ICartItem = { ...exist, quantity: exist?.quantity + 1 };
      dispatch(updateItem(postItem));
    } else {
      const postItem: ICartItem = {
        name: item.name,
        price: item.price,
        quantity: 1,
      };
      dispatch(addItem(postItem));
    }
    //For missing dispatch dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [basketItems, item.name, item.price]);
  return (
    <div className={styles.productContainer}>
      <div className={styles.posterContainer}>
        <img
          className={styles.poster}
          src={item.itemType === "mug" ? MugPoster : ShirPoster}
          alt="poster"
        />
      </div>
      <div className={styles.priceContainer}>₺{item.price}</div>
      <div className={styles.productName}>{item.name}</div>
      <Button
        className={styles.addBtn}
        type="button"
        onClick={handleAddToCart}
      >
        Add
      </Button>
    </div>
  );
};
