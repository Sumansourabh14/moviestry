const LoadingBtn = ({ title }) => {
  return (
    <button
      type="submit"
      className="bg-black hover:bg-zinc-600 text-white py-2 px-10 rounded"
    >
      {title}
    </button>
  );
};

export default LoadingBtn;
