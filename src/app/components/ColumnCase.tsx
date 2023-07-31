import React from "react";

type IProps = {
  value: string;
};
/**
 * Component to display a collumn taking a string as argument
 * @param {string} value string to display
 **/

const ColumnCase = ({ value }: IProps) => {
  return (
    <div className="text-center font-bold md:p-4 md:py-2">
      <p>{value}</p>
    </div>
  );
};

export default ColumnCase;
