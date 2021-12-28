export default function IconButton({
  children,
  variant,
  className,
  onClick,
  disabled = false,
  ...props
}) {
  const types = {
    primary:
      "text-white bg-[#32CCA7] border-2 border-[#32CCA7] transition duration-500 color-transition hover:bg-green-400 hover:shadow-lg",
    secondary:
      "text-gray-500 bg-white border-2 border-[#32CCA7] transition duration-500 color-transition hover:bg-gray-100 hover:shadow-lg",
    terciary:
      "text-white bg-blue-500 border-2 border-blue-500 transition duration-500 color-transition hover:bg-blue-400 hover:shadow-lg",
    ter2: "text-blue-500 bg-white border-2 border-blue-500 transition duration-500 color-transition hover:bg-blue-100 hover:shadow-lg",
    quaternary:
      "text-gray-900 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
    quinary:
      "bg-gray-900 text-gray-50 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
  };

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={onClick}
      className={`${types[variant]} font-bold rounded-md px-7 py-1  ${className}`}
    >
      <span className="flex xl:flex-col items-center justify-center">
        {children}
      </span>
    </button>
  );
}
