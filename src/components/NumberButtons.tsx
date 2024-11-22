import { Button } from "./ui/button";

interface NumberButtonsProps {
  targetRef: React.RefObject<HTMLInputElement>;
}

const buttonsConfig = [
  { label: "-1000", value: -1000 },
  { label: "-100", value: -100 },
  { label: "-10", value: -10 },
  { label: "+10", value: 10 },
  { label: "+100", value: 100 },
  { label: "+1000", value: 1000 },
];

export const NumberButtons = ({ targetRef }: NumberButtonsProps) => {
  const onNumberButtonClick =
    (ref: React.RefObject<HTMLInputElement>, amount: number) => () =>
      (ref.current!.value = (parseInt(ref.current!.value) + amount).toString());

  return (
    <>
      {buttonsConfig.map(({ label, value }) => (
        <Button
          onClick={onNumberButtonClick(targetRef, value)}
          variant="outline"
          size="icon"
          type="button"
          key={label}
        >
          <span className="text-xxs">{label}</span>
        </Button>
      ))}
    </>
  );
};
