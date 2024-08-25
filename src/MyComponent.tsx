import React from "react";

const MyComponent = (props: any) => {
  const { label } = props;
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

export default MyComponent;
