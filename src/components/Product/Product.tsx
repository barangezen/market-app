import styles from './Product.module.scss';
import ShirPoster from '../../assets/shirt.png'
import MugPoster from '../../assets/mug.png';
export interface IProduct {
    tags: Array<string>;
    price: number;
    name: string;
    description: string;
    slug: string;
    added: number;
    manufacturer: string;
    itemType: string;
}
export interface ProductItem {
    item: IProduct;
}
export const Product: React.FC<ProductItem> = ({
    item
}) => {
    return (
        <div className={styles.productContainer}>
            <div className={styles.posterContainer}>
                <img className={styles.poster} src={item.itemType === 'mug' ? MugPoster : ShirPoster} alt='poster' />
            </div>
            <div className={styles.priceContainer}>₺{item.price}</div>
            <div className={styles.productName}>{item.name}</div>
            <button className={styles.addBtn} type='button' >Add</button>
        </div>
    )
}