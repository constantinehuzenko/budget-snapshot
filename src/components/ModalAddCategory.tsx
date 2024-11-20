import {
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Button } from "./ui/button";

interface ModalAddCategoryProps {
  handleClose: () => void;
}

export const ModalAddCategory = ({ handleClose }: ModalAddCategoryProps) => {
  return (
    <>
      <DialogTitle>Add new category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          name="category-name"
          label="Category name"
          type="text"
          fullWidth
          margin="dense"
        />

        <TextField
          inputMode="numeric"
          required
          name="budget-plan"
          label="Budget plan"
          type="number"
          fullWidth
          margin="dense"
        />

        <TextField
          inputMode="numeric"
          required
          name="spent-amount"
          label="Spend amount"
          type="number"
          fullWidth
          margin="dense"
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </>
  );
};
