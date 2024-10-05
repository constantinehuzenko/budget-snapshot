import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface ModalEditSumProps {
  handleClose: () => void;
}

export const ModalEditSum = ({ handleClose }: ModalEditSumProps) => {
  return (
    <>
      <DialogTitle>Edit monthly budget</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          name="month-budget"
          label="Monthly budget"
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
