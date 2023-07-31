import React from "react";
type IProps = {
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
};
function InputText({
  name = "default",
  placeholder = "",
  onChange,
  children,
}: IProps) {
  return (
    <label className="relative block">
      <span className="sr-only">{name}</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        {children}
      </span>{" "}
      <input
        onChange={onChange}
        className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={placeholder}
        type="text"
        name={name}
      />
    </label>
  );
}

export default InputText;
