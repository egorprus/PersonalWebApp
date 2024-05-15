import { ButtonTypes } from "../../../../models/enums";

interface Props {
	type: ButtonTypes,
	label: string,
	handleClick?: () => void,
	classNames?: string,
}

export const DefaultButton = ({ type, label, handleClick, classNames }: Props) => {
  return (
    <button
      className={`btn ${classNames || ""}`}
      type={type}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
