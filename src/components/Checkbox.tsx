import * as React from 'react';

interface CheckBoxProps {
  name: string;
  value: string;
  id: string;
  label: string;
  ref: React.ForwardedRef<HTMLInputElement>;
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (props, ref) => {
    const { name, value, id, label } = props;
    return (
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          ref={ref}
          className={`text-transparent rounded-sm p-2`}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
);
