import { ReactNode } from "react";
import "./Sheet.css";

type MyCVProps = {
  children: ReactNode;
};

const Sheet = ({ children }: MyCVProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="a4-paper w-full max-w-[210mm] h-[297mm] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Sheet;
