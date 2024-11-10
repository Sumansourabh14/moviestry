import { Input } from "../ui/input";
import FormTemplate from "./FormTemplate";
import PasswordInput from "./PasswordInput";

const SignUpForm = ({
  handleSubmit,
  name,
  handleNameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  loading,
}) => {
  return (
    <FormTemplate
      handleSubmit={handleSubmit}
      buttonTitle="Sign Up"
      isDisabled={!(name.length > 0 && email.length > 0 && password.length > 0)}
      loading={loading}
    >
      <section className="flex flex-col gap-4">
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
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

export default SignUpForm;
