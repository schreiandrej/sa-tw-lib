import * as React from 'react';

interface RadioGroupProps {
  legend: string;
  children: React.ReactNode;
}

export const RadioGroup = ({ legend, children }: RadioGroupProps) => {
  return (
    <fieldset className="">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

interface RadioButtonProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  label: string;
}

export const RadioButton = ({
  id,
  name,
  value,
  checked,
  label,
}: RadioButtonProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        className={`text-transparent`}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
