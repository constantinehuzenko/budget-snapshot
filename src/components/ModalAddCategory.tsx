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
import { NumberButtons } from "./NumberButtons";

interface ModalAddCategoryProps {
  handleClose?: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalAddCategory = ({ onSubmit }: ModalAddCategoryProps) => {
  const refBudget = React.useRef<HTMLInputElement>(null);
  const refValue = React.useRef<HTMLInputElement>(null);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add new category</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={onSubmit}
        className="grid gap-4 py-4"
        id="add-category-form"
      >
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="category-name" className="text-right">
            Name
          </Label>
          <Input name="category-name" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-2 mt-2">
          <Label htmlFor="budget-plan" className="text-right">
            Plan
          </Label>
          <Input
            defaultValue={0}
            type="number"
            name="budget-plan"
            className="col-span-3"
            ref={refBudget}
          />
          <div className="col-span-3 col-start-2 flex justify-between">
            <NumberButtons targetRef={refBudget} />
          </div>
        </div>

        <div className="grid grid-cols-4 items-center gap-2 mt-2">
          <Label htmlFor="spent-amount" className="text-right">
            Spent
          </Label>
          <Input
            defaultValue={0}
            type="number"
            name="spent-amount"
            className="col-span-3"
            ref={refValue}
          />
          <div className="col-span-3 col-start-2 flex justify-between">
            <NumberButtons targetRef={refValue} />
          </div>
        </div>
      </form>

      <DialogFooter className="grid grid-cols-4 items-center gap-2 mt-2">
        <Button
          form="add-category-form"
          type="submit"
          className="col-span-3 col-start-2"
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
