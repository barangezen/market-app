import { FormControl, Input, InputAdornment } from "@mui/material";
import styles from "./BasketItem.module.scss";
export interface IBasketItem {
    productName: string;
    productPrice: number;
    productQuantity: number;
}
export const BasketItem: React.FC<IBasketItem> = ({
    productName,
    productPrice,
    productQuantity
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <div className={styles.name}>{productName}</div>
        <div className={styles.price}>₺{productPrice}</div>
      </div>
      <div className={styles.actions}>
        <FormControl variant="standard" className={styles.formContainer}>
          <Input
            inputProps={{ style: { textAlign: "center" } }}
            disableUnderline={true}
            value={productQuantity}
            className={styles.formInput}
            startAdornment={
              <InputAdornment position="start">
                <span className={styles.adornment}>-</span>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <span className={styles.adornment}>+</span>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};
