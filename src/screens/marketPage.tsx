import { Box, Chip, Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { ProductContent } from "../components/ProductContent/ProductContent";
import { ProductFilter } from "../components/ProductFilter/productFilter";
import styles from "./marketPage.module.scss";
interface TypeProps {
  id: string;
  label: string;
  type: string;
}
export const Market: React.FC = () => {
  const [selectedType, setSelectedType] = useState("mug");
  const productTypes: TypeProps[] = [
    { id: "1", label: "Mug", type: "mug" },
    { id: "2", label: "Shirt", type: "shirt" },
  ];
  const handleChangeType = (type: string) => {
    setSelectedType(type);
  };
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
