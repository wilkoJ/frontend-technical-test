import React from "react";
import { useUsersContext } from "../store/store";
import { RightChevron, LeftChevron } from "./assets/Icons";

import { useRouter, useSearchParams } from "next/navigation";

type IProps = {
  length: number;
  pagination_limit: number;
};

const paginate = (start: number, size: number, arr: number[]) => {
  if (start > arr.length) return [];
  if (start + size >= arr.length) return arr.slice(-size);
  return arr.slice(start, start + size);
};

const Pagination = ({ length, pagination_limit = 5 }: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const per_page = Number(searchParams.get("per_page") ?? "10");
  const size = Math.ceil(length / per_page);
  const page = Number(searchParams.get("page") ?? "1");

  const numberOfElem = page * per_page;

  const numberOfElemRange = page * per_page + per_page;
  const arrayPagination = paginate(
    Number(page),
    pagination_limit,
    Array.from({ length: size }, (_, i) => i + 1)
  );

  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-white">
        <button
          className={`paginationButton`}
          disabled={!(page - 1 > 0)}
          onClick={(e) => {
            router.push(`/?page=${page - 1}&per_page=${per_page}`);
          }}
        >
          <LeftChevron />
        </button>
        {page >= pagination_limit ? (
          <button
            className={`paginationButton`}
            onClick={(e) => {
              router.push(`/?page=${1}&per_page=${per_page}`);
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
                page === val ? "bg-indigo-700 text-white" : ""
              }`}
              onClick={(e) => {
                router.push(`/?page=${val}&per_page=${per_page}`);
              }}
              key={index}
            >
              {val}
            </button>
          );
        })}

        {page + 1 < size - pagination_limit ? (
          <button
            className={`paginationButton`}
            onClick={(e) => {
              router.push(`/?page=${size - 1}&per_page=${per_page}`);
            }}
          >
            {size - 1}
          </button>
        ) : (
          <></>
        )}
        <button
          className={`paginationButton`}
          disabled={!(page < size)}
          onClick={(e) => {
            router.push(`/?page=${page + 1}&per_page=${per_page}`);
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
