import { useState } from "react";
import { DataHook, DialogState, HandleOpenDialog } from "../types";
import { CATEGORIES_NAME, MONTH_BUDGET } from "../constants";
import { useSearchParams } from "react-router-dom";
import { uuid } from "../utils";

export const useDialog = ({ data }: DataHook) => {
  const [, setSearchParams] = useSearchParams();
  const [dialog, setDialog] = useState<DialogState>({
    state: false,
    type: "none",
    itemId: "",
  });

  const handleClickOpen: HandleOpenDialog = (type, itemId) => () => {
    setDialog({ state: true, type, itemId });
  };

  const handleClose = () => {
    setDialog({ state: false, type: "none", itemId: "" });
  };

  const handleDelete = () => {
    setSearchParams((params) => {
      return {
        ...Object.fromEntries([...params]),
        [CATEGORIES_NAME]: JSON.stringify(
          data.filter((category) => category.id !== dialog.itemId)
        ),
      };
    });
    handleClose();
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formJson = Object.fromEntries((formData as any).entries());

    if (dialog.type === "edit-sum") {
      setSearchParams((params) => ({
        ...Object.fromEntries([...params]),
        [MONTH_BUDGET]: formJson["month-budget"],
      }));
    }

    if (dialog.type === "add") {
      setSearchParams((params) => ({
        ...Object.fromEntries([...params]),
        [CATEGORIES_NAME]: JSON.stringify([
          ...data,
          {
            id: uuid(),
            value: parseInt(formJson["spent-amount"]),
            budget: parseInt(formJson["budget-plan"]),
            label: formJson["category-name"],
          },
        ]),
      }));
    }

    if (dialog.type === "edit-category") {
      setSearchParams((params) => {
        return {
          ...Object.fromEntries([...params]),
          [CATEGORIES_NAME]: JSON.stringify([
            ...data.map((category) => {
              if (category.id === dialog.itemId) {
                return {
                  ...category,
                  value: parseInt(formJson["spent-amount"]),
                  budget: parseInt(formJson["budget-plan"]),
                  label: formJson["category-name"],
                };
              }

              return category;
            }),
          ]),
        };
      });
    }

    handleClose();
  };

  return { dialog, handleClickOpen, handleDelete, handleClose, onSubmit };
};
