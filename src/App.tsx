import "./App.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Dialog,
  Grid2,
} from "@mui/material";
import { PieChart } from "./components/PieChart";
import { CategoriesList } from "./components/CategoriesList";
import { ReactNode, useState } from "react";
import { DialogHook, DialogType } from "./types";
import { ModalAddCategory } from "./components/ModalAddCategory";
import { ModalEditSum } from "./components/ModalEditSum";
import { useDialog } from "./hooks/useDialog";
import { useData } from "./hooks/useData";
import { ModalEditCategory } from "./components/ModalEditCategory";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PieChartIcon from "@mui/icons-material/PieChart";

// 🏠 🏦 🛒 🚘 💕 🐥 🐯 📋

enum Tab {
  "categories",
  "add",
  "diagram",
}

const modalContent = ({
  handleDelete,
  handleClose,
  dialog,
}: DialogHook): Record<DialogType, ReactNode> => ({
  add: <ModalAddCategory {...{ handleClose }} />,
  "edit-sum": <ModalEditSum {...{ handleClose }} />,
  "edit-category": (
    <ModalEditCategory {...{ handleClose, handleDelete, dialog }} />
  ),
  none: null,
});

function App() {
  const dataHook = useData();
  const dialogHook = useDialog(dataHook);
  const [tab, setTab] = useState(0);

  const { data, sum, monthBudget, setSearchParams } = dataHook;
  const { dialog, handleClickOpen, handleClose, onSubmit } = dialogHook;

  return (
    <>
      {tab === Tab.diagram ? (
        <PieChart
          data={data}
          handleClickOpen={handleClickOpen}
          sum={sum}
          monthBudget={monthBudget}
        />
      ) : null}

      {tab === Tab.categories ? (
        <CategoriesList
          handleClickOpen={handleClickOpen}
          data={data}
          setSearchParams={setSearchParams}
        />
      ) : null}

      {/* <Grid2 size={12} marginTop={12} paddingBottom={12}>
        <Button onClick={handleClickOpen("add")} fullWidth variant="outlined">
          Add new category
        </Button>
      </Grid2> */}

      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, newValue) => {
          if (newValue === Tab.add) {
            handleClickOpen("add")();
            return;
          }

          setTab(newValue);
        }}
      >
        <BottomNavigationAction
          label="Categories"
          icon={<AccountBalanceIcon />}
        />
        <BottomNavigationAction label="Add" icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction label="Diagram" icon={<PieChartIcon />} />
      </BottomNavigation>

      <Dialog
        disableRestoreFocus
        open={dialog.state}
        onClose={handleClose}
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit,
        }}
      >
        {modalContent({ ...dialogHook, data })[dialog.type]}
      </Dialog>
    </>
  );
}

export default App;
