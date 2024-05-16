import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "../../redux/store";
import { minLength, required } from "../../utils/validate";
import { AuthForm } from "../../components/UIkit/AuthForm/AuthForm";
import { InputText } from "../../components/UIkit/Fields/InputText/InputText";
import { DefaultButton } from "../../components/UIkit/Buttons/DefaultButtons/DefaultButtons";
import { ButtonTypes, RequiredFields } from "../../models/enums";
import { useSelector } from "react-redux";
import { startAuth } from "../../redux/userSlice";
import { LoginData } from "../../models/types";
import { useAuth } from "../../hooks/useAuth/useAuth";
import axios from "../../axios/axios";
import './style.scss';

export const Auth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const dispatch = useAppDispatch();
	const {onLogin} = useAuth();
  const data = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
		if (data?.token) {
			onLogin(data.token);
		}
  }, [data?.token]);

	const onSubmit: SubmitHandler<LoginData> = async (credential: LoginData) => {
		const fetchData = await axios.post("/login", credential);
		onLogin(fetchData.data.token);
    dispatch(startAuth(credential));
  };

	return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="Авторизация">
      <InputText
        {...FIELDS.login}
        register={register(RequiredFields.login, {
          validate: { ...FIELDS.login.validate },
        })}
        errors={errors.login}
      />
      <InputText
        {...FIELDS.password}
        register={register(RequiredFields.password, {
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
    name: RequiredFields.login,
    label: "Login",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  password: {
    name: RequiredFields.password,
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
