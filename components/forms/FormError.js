const FormError = ({ message }) => {
  return (
    <div className="bg-red-300 py-2 px-8 rounded-md">
      <p className="text-center text-black text-sm">{message}</p>
    </div>
  );
};

export default FormError;
