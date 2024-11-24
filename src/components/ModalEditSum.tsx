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

interface ModalEditSumProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalEditSum = ({ onSubmit }: ModalEditSumProps) => {
  const refBudget = React.useRef<HTMLInputElement>(null);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit monthly budget</DialogTitle>
      </DialogHeader>

      <form onSubmit={onSubmit} className="grid gap-4 py-4" id="edit-sum-form">
        <div className="grid grid-cols-4 items-center gap-2">
          <Label htmlFor="month-budget" className="text-right">
            Budget
          </Label>
          <Input
            defaultValue={0}
            autoFocus
            required
            name="month-budget"
            type="number"
            className="col-span-3"
            ref={refBudget}
          />
          <div className="col-span-3 col-start-2 flex justify-between">
            <NumberButtons targetRef={refBudget} />
          </div>
        </div>
      </form>

      <DialogFooter className="grid grid-cols-4 items-center gap-2 mt-2">
        <Button
          form="edit-sum-form"
          type="submit"
          className="col-span-3 col-start-2"
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
