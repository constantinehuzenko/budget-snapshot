import "./App.css";
import { Dialog } from "@mui/material";
import { PieChart } from "./components/PieChart";
import { CategoriesList } from "./components/CategoriesList";
import { ReactNode, useState } from "react";
import { DialogHook, DialogType } from "./types";
import { ModalAddCategory } from "./components/ModalAddCategory";
import { ModalEditSum } from "./components/ModalEditSum";
import { useDialog } from "./hooks/useDialog";
import { useData } from "./hooks/useData";
import { ModalEditCategory } from "./components/ModalEditCategory";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

// 🏠 🏦 🛒 🚘 💕 🐥 🐯 📋

enum Tab {
  "categories" = "categories",
  "add" = "add",
  "diagram" = "diagram",
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
  const [tab, setTab] = useState(Tab.categories);

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

      <Tabs
        value={tab}
        className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center my-4"
      >
        <TabsList>
          <TabsTrigger
            value={Tab.categories}
            onClick={() => setTab(Tab.categories)}
          >
            Categories
          </TabsTrigger>
          <TabsTrigger value={Tab.add} onClick={() => handleClickOpen("add")()}>
            Add
          </TabsTrigger>
          <TabsTrigger value={Tab.diagram} onClick={() => setTab(Tab.diagram)}>
            Diagram
          </TabsTrigger>
        </TabsList>
      </Tabs>

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
