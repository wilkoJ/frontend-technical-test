import React from "react";

type IProps = {
  length: number;
  current: number;
  onClick: Function;
};

const Pagination = ({ length, current, onClick }: IProps) => {
  const arrayPagination = Array(length).fill(0);
  return (
    <div className="flex">
      {arrayPagination.map((val: number, index: number) => {
        return (
          <div
            className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none flex-initial w-14 "
            onClick={(e) => {
              console.log(e);
              onClick(index);
            }}
            key={index}
          >
            {index}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
