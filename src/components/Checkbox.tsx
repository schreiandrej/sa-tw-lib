import * as React from 'react';

interface CheckBoxProps {
  name: string;
  value: string;
  id: string;
  label: string;
}

export const CheckBox = ({ name, value, id, label }: CheckBoxProps) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className={`text-transparent rounded-sm p-2`}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
