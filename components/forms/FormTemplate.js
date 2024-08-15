import { Button } from "../ui/button";

const FormTemplate = ({ handleSubmit, children, buttonTitle, isDisabled }) => {
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4 w-[100%]">
        {children}
        <Button type="submit" disabled={isDisabled}>
          {buttonTitle}
        </Button>
      </section>
    </form>
  );
};

export default FormTemplate;
