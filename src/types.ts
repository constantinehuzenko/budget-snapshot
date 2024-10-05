import { SetURLSearchParams } from "react-router-dom";

export interface Category {
  id: string;
  value: number;
  budget: number;
  label: string;
  displayPay?: boolean;
  displayCategory?: boolean;
}

export type Categories = Array<Category>;

export type DialogType = "add" | "edit-sum" | "edit-category" | "none";

export type HandleOpenDialog = (
  type: DialogState["type"],
  itemId?: string
) => () => void;

export interface DialogState {
  state: boolean;
  type: DialogType;
  itemId?: string;
}

export interface DialogHook {
  data: Categories;
  dialog: DialogState;
  handleClickOpen: (type: DialogState["type"]) => () => void;
  handleClose: () => void;
  handleDelete: () => void;
}

export interface DataHook {
  data: Categories;
  sum: number;
  monthBudget: number;
  setSearchParams: SetURLSearchParams;
}
