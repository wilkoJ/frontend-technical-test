import React from "react";

type IProps = {
  value: string;
};
const ColumnCase = ({ value }: IProps) => {
  return (
    <div className="text-center p-8">
      <p>{value}</p>
    </div>
  );
};

export default ColumnCase;
