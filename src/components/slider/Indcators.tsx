import * as React from 'react';

interface indicatorProps {
  itemCount: any;
  currentIndex: any;
}

export const Indicators = ({ itemCount, currentIndex }: indicatorProps) => {
  return (
    <div className="flex flex-row w-full justify-center gap-2 py-2">
      {itemCount.map((item: any, index: number) => (
        <div key={item}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width="10"
            height="10"
            className={`transition-colors duration-300 ease-linear ${
              currentIndex === index
                ? 'text-blue-500 bg-blue-500 dark:text-green-400 dark:bg-green-400'
                : 'text-blue-200 bg-blue-200 dark:text-green-900 dark:bg-green-900'
            } rounded-full`}
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
