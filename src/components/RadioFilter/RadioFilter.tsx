import { CheckCircleOutline } from "@mui/icons-material";
import {
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { setSortType } from "../../features/FilterSlice/FilterSlice";
import { SortingEnum } from "../../globals/enums/enums";
import { useAppDispatch } from "../../store";
import styles from "./RadioFilter.module.scss";

interface Sorting {
  id: SortingEnum;
  label: string;
}
const filterData: Sorting[] = [
  { id: SortingEnum.PriceAsc, label: "Price low to high" },
  { id: SortingEnum.PriceDesc, label: "Price high to low" },
  { id: SortingEnum.DateDesc, label: "New to old" },
  { id: SortingEnum.DateAsc, label: "Old to new" },
];
export const RadioFilter: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState<SortingEnum | null>(
    null
  );
  const dispatch = useAppDispatch();
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSort(Number(event.target.value));
    dispatch(setSortType(Number(event.target.value)));
  };
  return (
    <Grid item xs={12}>
      <div className={styles.title}>Sorting</div>
      <Card className={styles.container} sx={{ minWidth: "100%" }}>
        <div className={styles.formContainer}>
          <FormControl component={"fieldset"}>
            <RadioGroup
              aria-label="gender"
              name="radio-filter"
              value={selectedSort}
              onChange={handleSortChange}
            >
              {filterData.map((filter, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={filter.id}
                    label={filter.label}
                    control={<Radio checkedIcon={<CheckCircleOutline />} />}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      </Card>
    </Grid>
  );
};
