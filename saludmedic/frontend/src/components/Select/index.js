import React from "react";

const theme = {
  primary:
    "w-full border-b-2 rounded-lg mb-4 py-2 px-3 text-base border-solid border border-gray-400 border-opacity-60 bg-gray-50 outline-none font-base transition duration-500 hover:shadow-md cursor-pointer",
  inactive:
    "border-solid border border-gray-400 border-opacity-60 bg-gray-50 rounded-lg py-2 px-3 outline-none font-normal",
};

const Select = React.forwardRef(
  (
    {
      className = "",
      options,
      label,
      value,
      name,
      errors,
    
      variant,
      disabled,
      onChange,
      onBlur,
      register,   
      type,
      ...props
    
    },
    ref
  ) => {
    return (
      <>
        <label
          className="pb-2 font-medium text-gray-500"
          variant={variant}
          htmlFor={label}

        >
          {label}
          
        </label>
        <select
          className={`${theme[variant]}`}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          options = {options}
          ref={ref}
          name={name}
          value={value || undefined}
          {...props}
          {...register(name)}
        >
          <option hidden value="">
            Seleccione una opción
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            
            </option>
          ))}
       
       
        </select>
        {/* <p className="text-sm font-semibold text-red-500">
          {errors && errors?.message}
        </p> */}
      </>
    );
  }
);

Select.displayName = "Select";

export default Select;
