import { Card, Grid } from "@mui/material";
import { IProduct } from "../../globals/enums/models";
import { Product } from "../Product/Product";
import styles from "./ProductContent.module.scss";
interface IProductContent {
  products: IProduct[] | null;
}

export const ProductContent: React.FC<IProductContent> = ({ products }) => {
  return (
    <Card className={styles.container} sx={{ minWidth: "100%" }}>
      <Grid container spacing={0}>
        {products &&
          products.map((product, index) => {
            return (
              <Grid key={index} item xs={12} sm={4} md={3}>
                <Product item={product} />
              </Grid>
            );
          })}
      </Grid>
    </Card>
  );
};
