import { SetURLSearchParams } from "react-router-dom";
import { Categories, HandleOpenDialog } from "../types";
import { Progress } from "./ui/progress";

interface CategoriesListProps {
  data: Categories;
  setSearchParams: SetURLSearchParams;
  handleClickOpen: HandleOpenDialog;
}

export const CategoriesList = ({
  data,
  handleClickOpen,
}: CategoriesListProps) => {
  return (
    <div className="grid grid-cols-2">
      {data?.map((category) => {
        const progressValue = (category?.value / category?.b) * 100;
        const isOverBudget = category?.value > category?.b;
        const progressColor = isOverBudget ? "[&>div]:bg-red-600" : "";

        return (
          category?.dc !== false && (
            <div
              onClick={handleClickOpen("edit-category", category?.id)}
              className="flex-col w-full p-3 my-2 rounded-md transition hover:bg-slate-900 cursor-pointer"
              key={category?.id}
            >
              <div className="flex justify-between items-center flex-row w-full py-2">
                <div>
                  <h4 className="text-lg text-muted-foreground">
                    {category?.label}
                  </h4>
                </div>
                <div>
                  <h4 className="text-base text-muted-foreground">
                    {category?.value}$ / {category?.b}$
                  </h4>
                </div>
              </div>

              <div className="w-full">
                <Progress className={progressColor} value={progressValue} />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};
