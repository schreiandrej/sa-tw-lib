import * as React from 'react';

interface InputProps {
  name: string;
  type: string;
  label: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  inputStyles?: string;
  labelStyles?: string;
  autoComplete?: string;
  accept?: string;
  max?: number;
  min?: number;
  step?: string;
  defaultValue?: string;
  value?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [active, activeSet] = React.useState(false);

    const {
      name,
      type,
      label,
      inputStyles,
      labelStyles,
      autoComplete,
      max,
      min,
      step,
      defaultValue,
    } = props;

    const handleActivation = (e: { target: { value: any } }) => {
      console.log(e);
      activeSet(!!e.target.value);
    };

    const handleActivationFocus = () => {
      activeSet(true);
    };

    const handleActivationBlur = (e: { target: { value: string } }) => {
      if (e.target.value === '') {
        activeSet(false);
      }
    };

    return (
      <div className="relative z-10">
        <input
          ref={ref}
          type={type}
          name={name}
          autoComplete={autoComplete}
          className={`z-10 text-sm cursor-text ${inputStyles} ${
            active ? '' : ''
          }`}
          max={max}
          min={min}
          step={step}
          defaultValue={defaultValue}
          onFocus={handleActivationFocus}
          onBlur={handleActivationBlur}
          onChange={handleActivation}
        />
        <label
          htmlFor={name}
          className={`${labelStyles} absolute z-[-10] left-4 flex items-center focus:outline-none text-opacity-50 transition-all duration-200 ease-in-out ${
            active ? 'text-xs -top-5' : 'text-sm absoluteY-center'
          }`}
        >
          {label}
        </label>
      </div>
    );
  }
);
