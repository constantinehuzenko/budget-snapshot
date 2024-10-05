import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  TextField,
} from "@mui/material";
import { Categories, Category, DialogHook } from "../types";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES_NAME } from "../constants";

interface ModalEditCategoryProps {
  handleClose: () => void;
  handleDelete: () => void;
  dialog: DialogHook["dialog"];
}

export const ModalEditCategory = ({
  handleClose,
  handleDelete,
  dialog,
}: ModalEditCategoryProps) => {
  const [searchParams] = useSearchParams();
  const categories = JSON.parse(
    searchParams.get(CATEGORIES_NAME) as string
  ) as Categories;

  const { label, value, budget } = categories.find(
    ({ id }: { id: string }) => id === dialog.itemId
  ) as Category;

  return (
    <>
      <DialogTitle>Edit category</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={label}
          autoFocus
          required
          name="category-name"
          label="Category name"
          type="text"
          fullWidth
          margin="dense"
        />

        <TextField
          defaultValue={budget}
          inputMode="numeric"
          required
          name="budget-plan"
          label="Budget plan"
          type="number"
          fullWidth
          margin="dense"
        />

        <TextField
          defaultValue={value}
          inputMode="numeric"
          required
          name="spent-amount"
          label="Spend amount"
          type="number"
          fullWidth
          margin="dense"
        />
      </DialogContent>

      <DialogActions sx={{ justifyContent: "space-between" }}>
        <Button color="error" onClick={handleDelete}>
          Delete
        </Button>
        <Grid2 container gap="8px">
          <Button variant="text" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="text" type="submit">
            Save
          </Button>
        </Grid2>
      </DialogActions>
    </>
  );
};
