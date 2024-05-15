import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../redux/store";
import { minLength, required } from "../../utils/validate";
import { AuthForm } from "../../components/UIkit/AuthForm/AuthForm";
import { InputText } from "../../components/UIkit/Fields/InputText/InputText";
import { DefaultButton } from "../../components/UIkit/Buttons/DefaultButtons/DefaultButtons";
import { ButtonTypes, DefaultUrls } from "../../models/enums";
import { useSelector } from "react-redux";
import { startAuth } from "../../redux/userSlice";
import { LoginData } from "../../models/types";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth/useAuth";
import './style.scss';

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {token, onLogin} = useAuth();
  const data = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
		if (data?.token) {
			onLogin(data.token);
		}
  }, [data?.token]);
	console.log(token, '-----', data?.token,'=========')
  const onSubmit: SubmitHandler<LoginData> = (credential: LoginData) => {
    dispatch(startAuth(credential));
  };

	return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="Авторизация">
      <InputText
        {...FIELDS.login}
        register={register("login", {
          validate: { ...FIELDS.login.validate },
        })}
        errors={errors.login}
      />
      <InputText
        {...FIELDS.password}
        register={register("password", {
          validate: { ...FIELDS.password.validate },
        })}
        errors={errors.password}
      />
      <DefaultButton {...FIELDS.signIn} />
    </AuthForm>
  );
};

const FIELDS = {
  login: {
    name: "login",
    label: "Login",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  password: {
    name: "password",
    label: "Password",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  signIn: {
    label: "sign in",
    type: ButtonTypes.submit,
  },
};
