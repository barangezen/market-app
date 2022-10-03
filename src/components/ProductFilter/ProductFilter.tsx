import { Grid } from "@mui/material";
import { useAppSelector } from "../../store";
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter";
import { RadioFilter } from "../RadioFilter/RadioFilter";

export const ProductFilter: React.FC = () => {
  const brands = useAppSelector(state => state.brands);
  const tags = useAppSelector(state => state.tags);
  return (
    <Grid container spacing={2}>
      <RadioFilter />
      <CheckboxFilter items={brands.data} title={"Brands"} placeholder={"Brands"} />
      <CheckboxFilter items={tags.data} title={"Tags"} placeholder={"Tags"} />
    </Grid>
  );
};
