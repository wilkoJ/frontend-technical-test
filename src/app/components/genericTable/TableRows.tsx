import React from "react";
import { ColumnDefinitionType } from "./Table";

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>): JSX.Element => {
  return (
    <tbody>
      {data.map((row, index) => {
        return (
          <tr key={`row-${index}`} className="border border-slate-300">
            {columns.map((column, index2) => {
              return (
                <td className="text-center p-4" key={`cell-${index2}`}>
                  {row[column.key]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRows;
