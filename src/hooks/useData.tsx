import { useSearchParams } from "react-router-dom";
import { CATEGORIES_NAME, MONTH_BUDGET } from "../constants";
import { Categories } from "../types";

export const useData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const monthBudget = Number(searchParams.get(MONTH_BUDGET)) || 0;
  const data = JSON.parse(
    (searchParams.get(CATEGORIES_NAME) as string) || "[]"
  ) as Categories;

  const sum = data?.reduce(
    (acc, category) =>
      category?.displayCategory !== false ? acc + category?.value : 0,
    0
  );

  return { data, sum, monthBudget, setSearchParams };
};
