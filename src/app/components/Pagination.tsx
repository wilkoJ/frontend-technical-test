import React from "react";
import { useUsersContext } from "../store/store";
import { RightChevron, LeftChevron } from "./assets/Icons";
type IProps = {
  length: number;
  pagination_limit: number;
  paginationSize: number;
  current: number;
  onClick: Function;
};

const paginate = (start: number, size: number, arr: number[]) => {
  if (start >= arr.length) return [];
  if (start + size >= arr.length) return arr.slice(-size);
  return arr.slice(start, start + size);
};

const Pagination = ({
  length,
  pagination_limit = 5,
  paginationSize,
  current,
  onClick,
}: IProps) => {
  const numberOfElem = current * paginationSize;

  const numberOfElemRange = current * paginationSize + paginationSize;
  const size = Math.ceil(length / paginationSize);
  const arrayPagination = paginate(
    current,
    pagination_limit,
    Array.from(Array(size).keys())
  );
  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-white">
        <button
          className={`paginationButton`}
          disabled={!(current - 1 >= 0)}
          onClick={(e) => {
            onClick(current - 1);
          }}
        >
          <LeftChevron />
        </button>
        {current >= pagination_limit && pagination_limit > size ? (
          <button
            className={`paginationButton`}
            onClick={(e) => {
              onClick(0);
            }}
          >
            1
          </button>
        ) : (
          <></>
        )}
        {arrayPagination.map((val: number, index: number) => {
          return (
            <button
              className={`paginationButton ${
                current === val ? "bg-indigo-700 text-white" : ""
              }`}
              onClick={(e) => {
                onClick(val);
              }}
              key={index}
            >
              {val + 1}
            </button>
          );
        })}

        {current + 1 <= size - pagination_limit ? (
          <button
            className={`paginationButton`}
            onClick={(e) => {
              onClick(size - 1);
            }}
          >
            {size}
          </button>
        ) : (
          <></>
        )}
        <button
          className={`paginationButton`}
          disabled={!(current + 1 < size)}
          onClick={(e) => {
            onClick(current + 1);
          }}
        >
          <RightChevron />
        </button>
      </div>
      <div className="flex  items-center justify-center">
        {`Result ${numberOfElem} - ${numberOfElemRange} of ${length}`}
      </div>
    </div>
  );
};

export default Pagination;
