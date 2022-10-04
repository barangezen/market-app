import { useMemo } from "react";
import { useAppSelector } from "../../store";
import { BasketItem } from "../BasketItem/BasketItem";
import styles from "./BasketMenu.module.scss";
export const BasketMenu = () => {
  const basketItems = useAppSelector((state) => state.cart.addedItems);
  
  const totalPrice = useMemo(() => {
    return basketItems
      .reduce((a, b) => a + (b.quantity * b.price || 0), 0)
      .toFixed(2);
  }, [basketItems]);

  const displayMenuContent = () => {
    if (basketItems.length > 0) {
      return basketItems.map((item, index) => {
        return (
          <BasketItem
            key={index}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        );
      });
    } else {
      return <p>Basket is Empty</p>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>{displayMenuContent()}</div>
      {basketItems.length > 0 && (
        <div className={styles.priceContainer}>{`₺${totalPrice}`}</div>
      )}
    </div>
  );
};
