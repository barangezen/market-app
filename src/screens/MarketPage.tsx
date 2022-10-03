import { Box, Chip, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductFilter } from "../components/ProductFilter/ProductFilter";
import { fetchBrands } from "../features/BrandsSlice/BrandSlice";
import { fetchProducts } from "../features/ProductSlice/ProductSlice";
import { fetchTags } from "../features/TagsSlice/TagsSlice";
import { useAppDispatch, useAppSelector } from "../store";
import styles from "./MarketPage.module.scss";
interface TypeProps {
  id: string;
  label: string;
  type: string;
}


export const Market: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products)
  const brands = useAppSelector(state => state.brands);
  const tags = useAppSelector(state => state.tags);
  console.log('tags', tags)
  const [selectedType, setSelectedType] = useState("mug");
  const productTypes: TypeProps[] = [
    { id: "1", label: "Mug", type: "mug" },
    { id: "2", label: "Shirt", type: "shirt" },
  ];
  const handleChangeType = (type: string) => {
    setSelectedType(type);
  };
  useEffect(() => {
     dispatch(fetchProducts());
     dispatch(fetchBrands());
     dispatch(fetchTags());
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className={styles.container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <ProductFilter brands={brands.data} tags={tags.data} />
          </Grid>
          <Grid item xs={12} sm={8} md={8} lg={6}>
            <Grid container spacing={0}>
              <div className={styles.productsTitle}>Products</div>
              <Grid item xs={12} className={styles.productsTypeContainer}>
                <Stack
                  direction={"row"}
                  spacing={1}
                  className={styles.productsTypes}
                >
                  {productTypes.map((productType) => {
                    return (
                      <Chip
                        key={productType.id}
                        size={"small"}
                        variant={"outlined"}
                        label={productType.label}
                        className={`${styles.type} ${
                          selectedType === productType.type
                            ? styles.activeType
                            : ""
                        }`}
                        clickable
                        onClick={() => handleChangeType(productType.type)}
                      />
                    );
                  })}
                </Stack>
              </Grid>
              <ProductContent />
              <Grid item xs={12}>
                <Stack className={styles.pagination} spacing={2}>
                  <Pagination count={15} />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
