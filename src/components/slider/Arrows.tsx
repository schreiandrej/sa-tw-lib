import * as React from 'react';

interface ArrowProps {
  onClick: any;
}

export const ArrowRight: React.FunctionComponent<ArrowProps> = ({
  onClick,
}): React.ReactElement => {
  return (
    <div
      className="absolute z-10 absoluteY-center right-2 text-base hover:text-hover opacity-25 hover:opacity-100"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

export const ArrowLeft: React.FunctionComponent<ArrowProps> = ({
  onClick,
}): React.ReactElement => {
  return (
    <div
      className="absolute z-10 left-2 absoluteY-center text-base hover:text-hover opacity-25 hover:opacity-100"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="20"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </div>
  );
};
