import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  url: string;
};

function Button({ children, url }: ButtonProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="block w-9/12 px-4 py-2 mt-6 bg-green text-white hover:bg-darkgreen rounded-md cursor-pointer mx-auto mb-4">
        {children}
      </button>
    </a>
  );
}

export { Button };
