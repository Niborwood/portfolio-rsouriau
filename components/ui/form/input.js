import React from "react";

export default function Input({
  name,
  placeholder,
  value,
  onChange,
  textarea,
}) {
  const className =
    "block w-full px-4 py-2 text-xl leading-normal bg-transparent border-b-2 appearance-none resize-none autofill:!text-slate-100 autofill:!bg-transparent text-slate-100 border-slate-100 placeholder:text-slate-200/50 focus:border-b-2 active:border-b-2 outline-0 scrollbar scrollbar-thumb-slate-300 scrollbar-track-slate-100";

  if (textarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        rows={5}
      />
    );
  }

  return (
    <input
      className={className}
      id={name}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
