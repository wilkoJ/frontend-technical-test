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
    <div className="flex justify-between">
      {arrayPagination.map((val: number, index: number) => {
        return (
          <div
            className="bg-indigo-500 rounded-full h-12 w-12 flex items-center justify-center"
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
      <div>
        {`Results ${current * paginationSize} - ${
          current * paginationSize + paginationSize
        } of ${length} elements`}
      </div>
    </div>
  );
};

export default Pagination;
