import { useAppSelector } from "../../store";
import { BasketItem } from "../BasketItem/BasketItem";
import styles from "./BasketMenu.module.scss";
export const BasketMenu: React.FC = () => {
  const basketItems = useAppSelector((state) => state.cart.addedItems);
  console.log("basketItems", basketItems);
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
        <div className={styles.priceContainer}>{`₺${basketItems
          .reduce((a, b) => a + (b.quantity * b.price || 0), 0)
          .toFixed(2)}`}</div>
      )}
    </div>
  );
};
