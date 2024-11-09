import { Input } from "../ui/input";
import FormTemplate from "./FormTemplate";
import PasswordInput from "./PasswordInput";

const LoginForm = ({
  handleSubmit,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  loading,
}) => {
  return (
    <FormTemplate
      handleSubmit={handleSubmit}
      buttonTitle="Login"
      isDisabled={!(email.length > 0 && password.length > 0)}
      loading={loading}
    >
      <section className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <PasswordInput
          password={password}
          handlePasswordChange={handlePasswordChange}
        />
      </section>
    </FormTemplate>
  );
};

export default LoginForm;
