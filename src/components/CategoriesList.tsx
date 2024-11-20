import { SetURLSearchParams } from "react-router-dom";
import { Categories, HandleOpenDialog } from "../types";
import { Typography } from "@mui/material";
import { Progress } from "./ui/progress";

interface CategoriesListProps {
  data: Categories;
  setSearchParams: SetURLSearchParams;
  handleClickOpen: HandleOpenDialog;
}

export const CategoriesList = ({
  data,
  handleClickOpen,
}: CategoriesListProps) =>
  data?.map(
    (category) =>
      category?.displayCategory !== false && (
        <div
          onClick={handleClickOpen("edit-category", category?.id)}
          className="flex-col w-full p-3 my-2 rounded-md transition hover:bg-slate-900 cursor-pointer"
          key={category?.id}
        >
          <div className="flex justify-between flex-row w-full py-2">
            <div>
              <Typography variant="h6">{category?.label}</Typography>
            </div>
            <div>
              <Typography variant="h6">
                {category?.value}$ / {category?.budget}$
              </Typography>
            </div>
          </div>

          <div className="w-full">
            <Progress value={(category?.value / category?.budget) * 100} />
          </div>
        </div>
      )
  );
