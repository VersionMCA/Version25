const Button = ({ text, onClick, disabled, loading }) => {
  return (
    <button
      className={`relative flex items-center justify-center px-6 py-3 text-white font-semibold rounded-md 
        ${disabled || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}
        ${loading && "cursor-wait"}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <div className="loader border-t-transparent border-4 border-white rounded-full w-5 h-5"></div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
