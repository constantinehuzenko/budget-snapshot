import {
  PiePlot,
  ResponsiveChartContainer,
  useDrawingArea,
} from "@mui/x-charts";
import { Category, HandleOpenDialog } from "../types";
import { styled } from "@mui/material";

interface PieChartProps {
  data: Array<Category>;
  handleClickOpen: HandleOpenDialog;
  sum: number;
  monthBudget: number;
}

export const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

export const PieCenterLabel = ({ children }: { children: React.ReactNode }) => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
};

export const PieChart = ({
  data,
  handleClickOpen,
  sum,
  monthBudget,
}: PieChartProps) => {
  return (
    <div onClick={handleClickOpen("edit-sum")} className="pie-wrapper">
      <div className="pie-cover" />
      <ResponsiveChartContainer
        height={400}
        series={[
          {
            data: [
              ...data,
              {
                id: "left-sum",
                value: monthBudget - sum,
                budget: 0,
                label: "📋",
                displayCategory: false,
              },
            ],
            arcLabel: (params) => `${params.label} ${params.value}$`,
            innerRadius: 80,
            type: "pie",
          },
        ]}
      >
        <PiePlot />
        <PieCenterLabel>
          {sum}$ / {monthBudget}$
        </PieCenterLabel>
      </ResponsiveChartContainer>
    </div>
  );
};
