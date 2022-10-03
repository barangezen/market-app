import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { IBrand } from "../../globals/enums/models";
import styles from "./CheckboxFilter.module.scss";
interface IFilter {
  items: IBrand[] | string[] | null;
  title: string;
  placeholder: string;
}
export const CheckboxFilter: React.FC<IFilter> = ({
  items,
  title,
  placeholder,
}) => {
  const [selectedItems, setSelectedSelectedItems] = useState<any[]>([]);
  const handleSelectChange = (item: any) => {
    if (selectedItems.includes(item)) {
      setSelectedSelectedItems(
        selectedItems.filter((currentItem) => currentItem !== item)
      );
    } else {
      setSelectedSelectedItems((prevState) => {
        return [...prevState, item];
      });
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
            />
            <div className={styles.formContainer}>
              {items && items.map((item: any, index: any) => {
                return (
                  <FormGroup key={index}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedItems.includes(item)}
                          onChange={(e) => handleSelectChange(item)}
                        />
                      }
                      label={item.name ? item.name : item}
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
