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
import { Trash } from "lucide-react";
import { NumberButtons } from "./NumberButtons";

interface ModalEditCategoryProps {
  handleClose: () => void;
  handleDelete: () => void;
  dialog: DialogHook["dialog"];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalEditCategory = ({
  dialog,
  onSubmit,
  handleDelete,
}: ModalEditCategoryProps) => {
  const [searchParams] = useSearchParams();
  const categories = JSON.parse(
    searchParams.get(CATEGORIES_NAME) as string
  ) as Categories;

  const { label, value, b } = categories.find(
    ({ id }: { id: string }) => id === dialog.itemId
  ) as Category;

  const refBudget = React.useRef<HTMLInputElement>(null);
  const refValue = React.useRef<HTMLInputElement>(null);

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
            defaultValue={b}
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
            type="number"
            name="spent-amount"
            defaultValue={value}
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
          onClick={handleDelete}
          variant="destructive"
          className="col-span-1"
        >
          <Trash />
        </Button>
        <Button form="edit-category-form" type="submit" className="col-span-3">
          Save changes
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
