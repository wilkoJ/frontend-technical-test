import React from "react";
import { useUsersContext } from "../store/store";
type IProps = {
  length: number;
  paginationSize: number;
  current: number;
  onClick: Function;
};

const Pagination = ({ length, paginationSize, current, onClick }: IProps) => {
  const { users, setUsers } = useUsersContext();
  const arrayPagination = Array(Math.ceil(length / paginationSize)).fill(0);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-white">
        <button
          className={`paginationButton bg-indigo-700 disabled:bg-indigo-400`}
          disabled={!(current - 1 >= 0)}
          onClick={(e) => {
            onClick(current - 1);
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
              className={`paginationButton bg-indigo-400 ${
                current === index ? "bg-indigo-700" : ""
              }`}
              onClick={(e) => {
                console.log(e);
                onClick(index);
              }}
              key={index}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className={`paginationButton bg-indigo-700 disabled:bg-indigo-400`}
          disabled={!(current + 1 < arrayPagination.length)}
          onClick={(e) => {
            onClick(current + 1);
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
        {`Result ${current * paginationSize} - ${
          current * paginationSize + paginationSize
        } of ${length}`}
      </div>
    </div>
  );
};

export default Pagination;
