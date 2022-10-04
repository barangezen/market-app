import styles from './Product.module.scss';
import ShirPoster from '../../assets/shirt.png'
import MugPoster from '../../assets/mug.png';
import { ICartItem, IProduct } from '../../globals/enums/models';
import { useAppDispatch, useAppSelector } from '../../store';
import { addItem, updateItem } from '../../features/CartSlice/CartSlice';
import { Button } from '@mui/material';

export interface ProductItem {
    item: IProduct;
}
export const Product: React.FC<ProductItem> = ({
    item
}) => {
    const basketItems = useAppSelector(state => state.cart.addedItems)
    const dispatch = useAppDispatch();
    const handleAddToCart = (data: IProduct) => {
        let exist = basketItems.find((item) => item.name === data.name);
        if (exist) {
            let postItem: ICartItem = {...exist, quantity: exist?.quantity + 1}
             dispatch(updateItem(postItem))
        } else {
            let postItem: ICartItem = {
                name: data.name,
                price: data.price,
                quantity: 1
            }
            dispatch(addItem(postItem))
        }
    }
    return (
        <div className={styles.productContainer}>
            <div className={styles.posterContainer}>
                <img className={styles.poster} src={item.itemType === 'mug' ? MugPoster : ShirPoster} alt='poster' />
            </div>
            <div className={styles.priceContainer}>₺{item.price}</div>
            <div className={styles.productName}>{item.name}</div>
            <Button className={styles.addBtn} type='button' onClick={() => handleAddToCart(item)} >Add</Button>
        </div>
    )
}