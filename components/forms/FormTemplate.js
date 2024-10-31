import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const FormTemplate = ({
  handleSubmit,
  children,
  buttonTitle,
  isDisabled,
  loading,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <section className="flex flex-col gap-4 w-[100%]">
        {children}
        <Button type="submit" disabled={isDisabled}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

          {buttonTitle}
        </Button>
      </section>
    </form>
  );
};

export default FormTemplate;
