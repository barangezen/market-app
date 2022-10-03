import { Grid } from "@mui/material";
import { IBrand } from "../../globals/enums/models";
import { CheckboxFilter } from "../CheckboxFilter/CheckboxFilter";
import { RadioFilter } from "../RadioFilter/RadioFilter";
interface IProductFilter {
  brands: IBrand[] | null;
  tags: string[] | null;
}
export const ProductFilter: React.FC<IProductFilter> = ({
  brands,
  tags
}) => {
  return (
    <Grid container spacing={2}>
      <RadioFilter />
      <CheckboxFilter items={brands} title={"Brands"} placeholder={"Brands"} />
      <CheckboxFilter items={tags} title={"Tags"} placeholder={"Tags"} />
    </Grid>
  );
};
