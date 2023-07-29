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
            className=" w-14 h-14   "
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
