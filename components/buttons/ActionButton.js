import { Button } from "../ui/button";

const ActionButton = ({ handleClick, title, icon }) => {
  return (
    <Button className="bg-black" onClick={handleClick}>
      {icon}
      <span>{title}</span>
    </Button>
  );
};

export default ActionButton;
