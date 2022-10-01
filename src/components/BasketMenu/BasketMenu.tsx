import { BasketItem, BasketItemProps } from "../BasketItem/BasketItem";
import styles from "./BasketMenu.module.scss";
export const BasketMenu: React.FC = () => {
  const basket: BasketItemProps[] = [
    {
      productName: "Motul C4 Motorsiklet Zincir Yağı ",
      productPrice: 167,
      productQuantity: 1,
    },
    {
      productName: "Motul C1 Chain Clean / Zincir Temizleme Spreyi",
      productPrice: 135.3,
      productQuantity: 1,
    },
    {
      productName: "Bikelift Motosiklet Krikosu -",
      productPrice: 472,
      productQuantity: 2,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {basket.map((item) => {
          return (
            <BasketItem
              productName={item.productName}
              productPrice={item.productPrice}
              productQuantity={item.productQuantity}
            />
          );
        })}
        <div className={styles.priceContainer}>₺39,97</div>
      </div>
    </div>
  );
};
