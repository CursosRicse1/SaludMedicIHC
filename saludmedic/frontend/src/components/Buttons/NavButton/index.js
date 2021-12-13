export default function NavButton({
  children,
  variant,
  className,
  onClick,
  ...props
}) {
  const types = {
    primary: "text-white bg-[#32CCA7]",
    secondary: "bg-gray-900 text-gray-50",
    quaternary:
      "text-gray-900 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
    quinary:
      "bg-gray-900 text-gray-50 font-bold rounded-md border-solid border-2 border-gray-900 px-9 py-2 transition duration-500 ease-in-out hover:scale-[101%] hover:shadow-lg",
  };

  return (
    <button 
      {...props}
      onClick={onClick}
      className={`${types[variant]} font-bold rounded-md px-9 py-2 transition duration-500 color-transition hover:bg-green-600 hover:shadow-lg ${className}`}
    >
      <span className="flex flex-row items-center justify-center">
        {children}
      </span>
    </button>
  );
}