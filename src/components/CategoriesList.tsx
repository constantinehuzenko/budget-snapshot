import { SetURLSearchParams } from "react-router-dom";
import { Categories, HandleOpenDialog } from "../types";
import { Grid2, LinearProgress, Typography } from "@mui/material";

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
        <Grid2
          onClick={handleClickOpen("edit-category", category?.id)}
          component="div"
          width="100%"
          container
          marginBottom={3}
          key={category?.id}
        >
          <Grid2 size={6} display="flex" alignItems="center">
            <Typography variant="h6">{category?.label}</Typography>
          </Grid2>
          <Grid2 size={6} display="flex" justifyContent="flex-end">
            <Typography variant="h6">
              {category?.value}$ / {category?.budget}$
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <LinearProgress
              variant="determinate"
              value={(category?.value / category?.budget) * 100}
            />
          </Grid2>
        </Grid2>
      )
  );
