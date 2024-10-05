import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

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
        <Button variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="text" type="submit">
          Add
        </Button>
      </DialogActions>
    </>
  );
};
