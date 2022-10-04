import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { setBrands, setTags } from "../../features/FilterSlice/FilterSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import styles from "./CheckboxFilter.module.scss";
interface IFilter {
  items: string[] | null;
  title: string;
  placeholder: string;
  type: "tags" | "brands";
}
export const CheckboxFilter: React.FC<IFilter> = ({
  items,
  title,
  placeholder,
  type,
}) => {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const reduxSelectedItems = filters[type];
  const handleSelectChange = (item: string) => {
    const setSelectedItems = type === "tags" ? setTags : setBrands;
    if (reduxSelectedItems.includes(item)) {
      dispatch(
        setSelectedItems(
          reduxSelectedItems.filter((currentItem) => currentItem !== item)
        )
      );
    } else {
      dispatch(setSelectedItems([...reduxSelectedItems, item]));
    }
  };
  return (
    <Grid item xs={12}>
      <div className={styles.title}>{title}</div>
      <Card className={styles.container} sx={{ minWidth: "100%" }}>
        <div className={styles.filterContainer}>
          <div>
            <TextField
              className={styles.textField}
              variant="outlined"
              placeholder={placeholder}
              onChange={(ev) => {
                setSearchFilter(ev.target.value);
              }}
            />
            <div className={styles.formContainer}>
              {items &&
                items
                  .filter((item) =>
                    item
                      .toLocaleUpperCase()
                      .includes(searchFilter.toLocaleUpperCase())
                  )
                  .map((item: string, index: number) => {
                    return (
                      <FormGroup key={index}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={reduxSelectedItems.includes(item)}
                              onChange={(e) => handleSelectChange(item)}
                            />
                          }
                          label={item}
                        />
                      </FormGroup>
                    );
                  })}
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};
