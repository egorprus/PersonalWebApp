import { SubmitHandler, useForm } from "react-hook-form";
import { InputText } from "../../components/UIkit/Fields/InputText/InputText";
import { AuthForm } from "../../components/UIkit/AuthForm/AuthForm";
import { DefaultButton } from "../../components/UIkit/Buttons/DefaultButtons/DefaultButtons";
import { minLength, required } from "../../utils/validate";
import { ButtonTypes } from "../../models/enums";
import { useAppDispatch } from "../../redux/store";
import { startRegistration } from "../../redux/userSlice";


export interface RegistrationData {
	login: string,
	password: string,
	fullName: string,
}

export type SubmitType = (data: RegistrationData) => void;

export const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<RegistrationData> = async (data: RegistrationData) => {
		console.log(data)
		dispatch(startRegistration(data));
  };

	return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="Регистрация">
      <InputText
        {...FIELDS.login}
        register={register('login', {
          validate: { ...FIELDS.login.validate },
        })}
        errors={errors.login}
      />
      <InputText
        {...FIELDS.fullName}
        register={register('fullName', {
          validate: { ...FIELDS.fullName.validate },
        })}
        errors={errors.fullName}
      />
      <InputText
        {...FIELDS.password}
        register={register('password', {
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
      min: minLength(8),
      required: required,
    },
  },
  fullName: {
    name: "fullName",
    label: "full name",
    validate: {
      min: minLength(3),
      required: required,
    },
  },
  signIn: {
    label: "Sign up",
    type: ButtonTypes.submit,
  },
};
