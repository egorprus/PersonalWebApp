import { ReactNode } from "react";

interface Props {
	onSubmit: any,
	children: ReactNode,
	title: string,
}
export const AuthForm = ({ onSubmit, children, title }: Props) => {
  return (
    <section className="auth-form">
      <div className="auth-form-body">
        <h2 className="auth-form__title">{title}</h2>
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </section>
  );
};
