import React from "react";

type IProps = {
  name: string;
};

const Name = ({ name }: IProps) => {
  return (
    <div className="md:flex p-8">
      <p>{name}</p>
    </div>
  );
};

export default Name;
