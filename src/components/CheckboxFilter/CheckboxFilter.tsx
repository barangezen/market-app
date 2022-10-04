import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import { useCallback, useMemo, useState } from "react";
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
  const selectedItems = filters[type];
  const filteredSearchItems = useMemo(
    () =>
      items?.filter((item) =>
        item.toLocaleUpperCase().includes(searchFilter.toLocaleUpperCase())
      ),
    [searchFilter, items]
  );
  const handleSelectChange = useCallback( (item: string) => {
    const setSelectedItems = type === "tags" ? setTags : setBrands;
    if (selectedItems.includes(item)) {
      dispatch(
        setSelectedItems(
          selectedItems.filter((currentItem) => currentItem !== item)
        )
      );
    } else {
      dispatch(setSelectedItems([...selectedItems, item]));
    }
    //For missing dispatch dependency
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems, type]);
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
              {filteredSearchItems?.map((item: string, index: number) => {
                    return (
                      <FormGroup key={item}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={selectedItems.includes(item)}
                              onChange={() => handleSelectChange(item)}
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
