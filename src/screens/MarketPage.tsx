import { Box, Chip, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductFilter } from "../components/ProductFilter/ProductFilter";
import { fetchBrands } from "../features/BrandsSlice/BrandSlice";
import { fetchProducts } from "../features/ProductSlice/ProductSlice";
import { fetchTags } from "../features/TagsSlice/TagsSlice";
import { IFilterTypes, IProductFilters } from "../globals/enums/models";
import { useAppDispatch, useAppSelector } from "../store";
import styles from "./MarketPage.module.scss";
interface TypeProps {
  id: string;
  label: string;
  type: string;
}

export const Market: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.data);
  console.log(products);
  const pageSize: number = 16;
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<IProductFilters>({
    brands: [],
    tags: [],
  });
  const [productsType, setProductsType] = useState("mug");
  const productTypes: TypeProps[] = [
    { id: "1", label: "Mug", type: "mug" },
    { id: "2", label: "Shirt", type: "shirt" },
  ];
  const handleChangeType = (type: string) => {
    setProductsType(type);
  };
  const handleFilters = (brands: string[], tags: string[], sortType?: number) => {
    setFilters({ brands, tags, productsType , sortType})
  }
  useEffect(() => {
    dispatch(
      fetchProducts({
        index: page,
        pageSize: pageSize,
        ...filters,
      })
    );
  }, [page, pageSize, filters]);

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTags());
  }, []);
  return (
    <div className={styles.container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <ProductFilter />
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
                          productsType === productType.type
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
              <ProductContent products={products} />
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
