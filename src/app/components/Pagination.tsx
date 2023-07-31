import React from "react";

type IProps = {
  length: number;
  paginationSize: number;
  current: number;
  onClick: Function;
};

const Pagination = ({ length, paginationSize, current, onClick }: IProps) => {
  const arrayPagination = Array(Math.ceil(length / paginationSize)).fill(0);
  return (
    <div className="flex align-center">
      <div className="flex justify center text-white">
        <button
          className={`bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center `}
          onClick={(e) => {
            if (current - 1 >= 0) onClick(current - 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {arrayPagination.map((val: number, index: number) => {
          return (
            <button
              className={`bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center ${
                current === index ? "bg-pink-500" : ""
              }`}
              onClick={(e) => {
                console.log(e);
                onClick(index);
              }}
              key={index}
            >
              {index}
            </button>
          );
        })}
        <button
          className={`bg-indigo-500 rounded-full h-8 w-8 flex items-center justify-center `}
          onClick={(e) => {
            if (current + 1 < arrayPagination.length) onClick(current + 1);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="flex  items-center justify-center">
        {`${current * paginationSize} - ${
          current * paginationSize + paginationSize
        } of ${length}`}
      </div>
    </div>
  );
};

export default Pagination;
