import { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import { DefaultUrls } from "../../models/enums";

interface Props {
	children: ReactNode
};

export const Protected = ({children}: Props) => {
	const {token} = useAuth();
	const navigate = useNavigate();

	if (token) {
		navigate(DefaultUrls.main);
		return <></>;
	}

	return (
		<>
			{children}
		</>
	)
};