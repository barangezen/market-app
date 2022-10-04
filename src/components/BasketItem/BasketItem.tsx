import { FormControl, Input, InputAdornment } from "@mui/material";
import { updateItem } from "../../features/CartSlice/cartSlice";
import { ICartItem } from "../../globals/enums/models";
import { useAppDispatch, useAppSelector } from "../../store";
import styles from "./BasketItem.module.scss";

export const BasketItem: React.FC<ICartItem> = ({ name, price, quantity }) => {
  const dispatch = useAppDispatch();
  const basketList: ICartItem[] = useAppSelector(
    (state) => state.cart.addedItems
  );

  const handleUpdateQuantity = (itemName: string, number: number) => {
    let exist = basketList.find((basketItem) => basketItem.name === itemName);
    if (exist) {
      let postItem: ICartItem = {
        ...exist,
        quantity: exist.quantity + number,
      };
      dispatch(updateItem(postItem));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.productDetail}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>₺{price}</div>
      </div>
      <div className={styles.actions}>
        <FormControl variant="standard" className={styles.formContainer}>
          <Input
            inputProps={{ style: { textAlign: "center" } }}
            disableUnderline={true}
            value={quantity}
            className={styles.formInput}
            startAdornment={
              <InputAdornment position="start">
                <span
                  className={styles.adornment}
                  onClick={() => handleUpdateQuantity(name, -1)}
                >
                  -
                </span>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <span
                  className={styles.adornment}
                  onClick={() => handleUpdateQuantity(name, +1)}
                >
                  +
                </span>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};
