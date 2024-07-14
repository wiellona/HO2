import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  url: string;
};

function Button({ children, onClick, url }: ButtonProps) {
  const hanldeClick = () => {
    window.location.href = url;
  };
  return <button onClick={hanldeClick}>{children}</button>;
}

export { Button };
