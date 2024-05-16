import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { UserStatus } from "../../../../models/enums";
import { ActiveProfile } from "./ActiveProfile";
import { InactiveProfile } from "./InactiveProfile";

interface Props {
	onLogout: () => void;
}
export const Profile = ({ onLogout }: Props) => {
  const user = useSelector((state:RootState) => state.user);

  return (
    <div className="profile">
      {user.status === UserStatus.success ? (
        <ActiveProfile user={user.data} handleClick={onLogout} />
      ) : (
        <InactiveProfile />
      )}
    </div>
  );
};
