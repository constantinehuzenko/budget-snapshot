import { Categories, Category, DialogHook } from "../types";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES_NAME } from "../constants";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";

interface ModalEditCategoryProps {
  handleClose: () => void;
  handleDelete: () => void;
  dialog: DialogHook["dialog"];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalEditCategory = ({
  dialog,
  onSubmit,
}: ModalEditCategoryProps) => {
  const [searchParams] = useSearchParams();
  const categories = JSON.parse(
    searchParams.get(CATEGORIES_NAME) as string
  ) as Categories;

  const { label, value, budget } = categories.find(
    ({ id }: { id: string }) => id === dialog.itemId
  ) as Category;

  const refBudget = React.useRef<HTMLInputElement>(null);
  const refValue = React.useRef<HTMLInputElement>(null);

  const onNumberButtonClick =
    (ref: React.RefObject<HTMLInputElement>, amount: number) => () =>
      (ref.current!.value = (parseInt(ref.current!.value) + amount).toString());

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit category</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={onSubmit}
        className="grid gap-4 py-4"
        id="edit-category-form"
      >
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="category-name" className="text-right">
            Name
          </Label>
          <Input
            name="category-name"
            defaultValue={label}
            className="col-span-3"
          />
        </div>

        <div className="grid grid-cols-4 items-center gap-2 mt-2">
          <Label htmlFor="budget-plan" className="text-right">
            Plan
          </Label>
          <Input
            type="number"
            name="budget-plan"
            defaultValue={budget}
            className="col-span-3"
            ref={refBudget}
          />
          <div className="col-span-3 col-start-2 flex justify-between">
            <Button
              onClick={onNumberButtonClick(refBudget, -1000)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-1000</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refBudget, -100)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-100</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refBudget, -10)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-10</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refBudget, 10)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+10</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refBudget, 100)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+100</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refBudget, 1000)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+1000</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 items-center gap-2 mt-2">
          <Label htmlFor="spent-amount" className="text-right">
            Spent
          </Label>
          <Input
            type="number"
            name="spent-amount"
            defaultValue={value}
            className="col-span-3"
            ref={refValue}
          />

          <div className="col-span-3 col-start-2 flex justify-between">
            <Button
              onClick={onNumberButtonClick(refValue, -1000)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-1000</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refValue, -100)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-100</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refValue, -10)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">-10</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refValue, 10)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+10</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refValue, 100)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+100</span>
            </Button>
            <Button
              onClick={onNumberButtonClick(refValue, 1000)}
              variant="outline"
              size="icon"
              type="button"
            >
              <span className="text-xxs">+1000</span>
            </Button>
          </div>
        </div>
      </form>

      <DialogFooter>
        <Button form="edit-category-form" type="submit">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );

  // return (
  //   <>
  //     <DialogTitle>Edit category</DialogTitle>
  //     <DialogContent>
  //       <TextField
  //         defaultValue={label}
  //         autoFocus
  //         required
  //         name="category-name"
  //         label="Category name"
  //         type="text"
  //         fullWidth
  //         margin="dense"
  //       />

  //       <TextField
  //         defaultValue={budget}
  //         inputMode="numeric"
  //         required
  //         name="budget-plan"
  //         label="Budget plan"
  //         type="number"
  //         fullWidth
  //         margin="dense"
  //       />

  //       <TextField
  //         defaultValue={value}
  //         inputMode="numeric"
  //         required
  //         name="spent-amount"
  //         label="Spend amount"
  //         type="number"
  //         fullWidth
  //         margin="dense"
  //       />
  //     </DialogContent>

  //     <DialogActions sx={{ justifyContent: "space-between" }}>
  //       <Button color="error" onClick={handleDelete}>
  //         Delete
  //       </Button>
  //       <Grid2 container gap="8px">
  //         <Button variant="text" onClick={handleClose}>
  //           Cancel
  //         </Button>
  //         <Button variant="text" type="submit">
  //           Save
  //         </Button>
  //       </Grid2>
  //     </DialogActions>
  //   </>
  // );
};
