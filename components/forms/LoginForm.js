import { Input } from "../ui/input";
import FormTemplate from "./FormTemplate";

const LoginForm = ({
  handleSubmit,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
}) => {
  return (
    <FormTemplate
      handleSubmit={handleSubmit}
      buttonTitle="Login"
      isDisabled={!(email.length > 0 && password.length > 0)}
    >
      <section className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </section>
    </FormTemplate>
  );
};

export default LoginForm;
