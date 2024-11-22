import "./App.css";
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
import { Dialog } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

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
  onSubmit,
}: DialogHook): Record<DialogType, ReactNode> => ({
  add: <ModalAddCategory {...{ handleClose, onSubmit }} />,
  "edit-sum": <ModalEditSum {...{ handleClose }} />,
  "edit-category": (
    <ModalEditCategory {...{ handleClose, handleDelete, dialog, onSubmit }} />
  ),
  none: null,
});

function App() {
  const dataHook = useData();
  const dialogHook = useDialog(dataHook);
  const [tab, setTab] = useState(Tab.categories);
  const [copyIconState, setCopyIconState] = useState<"default" | "success">(
    "default"
  );

  const { data, sum, monthBudget, setSearchParams } = dataHook;
  const { dialog, handleClickOpen, handleClose } = dialogHook;

  const handleOnCopy = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopyIconState("success");
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setCopyIconState("default"), 1500);
    }
  };

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

          <Button
            onClick={handleOnCopy}
            variant="ghost"
            size="icon"
            className="ml-0 rounded-lg"
          >
            {copyIconState === "default" ? <CopyIcon /> : <CheckIcon color='#15803d' />}
          </Button>
        </TabsList>
      </Tabs>

      <Dialog
        open={dialog.state}
        onOpenChange={(open) => (open ? null : handleClose())}
      >
        {modalContent({ ...dialogHook, data })[dialog.type]}
      </Dialog>
    </>
  );
}

export default App;
