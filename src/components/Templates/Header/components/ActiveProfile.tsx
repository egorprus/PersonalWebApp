import { Link } from "react-router-dom";
import { DefaultButton } from "../../../UIkit/Buttons/DefaultButtons/DefaultButtons";
import { ButtonTypes } from "../../../../models/enums";
import { UserData } from "../../../../models/types";

interface Props {
	user: UserData | null;
	handleClick: () => void;
}
export const ActiveProfile = ({user, handleClick}: Props) => {
  return (
    <>
      <Link className="profile__link" to={`/${user?.login}`}>
        {user?.login}
      </Link>
      <DefaultButton
        classNames="profile__link"
        type={ButtonTypes.button}
        label="Log out"
        handleClick={handleClick}
      />
    </>
  );
};
