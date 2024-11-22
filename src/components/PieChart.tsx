import { Category, HandleOpenDialog } from "../types";
import { ResponsivePie } from "@nivo/pie";

interface PieChartProps {
  data: Array<Category>;
  handleClickOpen: HandleOpenDialog;
  sum: number;
  monthBudget: number;
}

export const PieChart = ({
  data,
  handleClickOpen,
  sum,
  monthBudget,
}: PieChartProps) => {
  return (
    <div className="relative max-h-dvh h-[80vh]">
      <ResponsivePie
        arcLabel={(params) => `${params.label} ${params.value}$`}
        data={[
          ...data,
          {
            id: "left-sum",
            value: monthBudget - sum,
            budget: 0,
            label: "📋",
            displayCategory: false,
          },
        ]}
        innerRadius={0.65}
        padAngle={0.9}
        cornerRadius={8}
        activeOuterRadiusOffset={8}
        enableArcLinkLabels={false}
        isInteractive={false}
        arcLabelsSkipAngle={10}
      />

      <h2
        onClick={handleClickOpen("edit-sum")}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl cursor-pointer hover:opacity-90"
      >
        {sum}$ / {monthBudget}$
      </h2>
    </div>
  );
};
