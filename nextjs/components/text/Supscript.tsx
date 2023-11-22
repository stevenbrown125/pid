import React, { ReactNode } from "react";

interface SupscriptProps {
  children: ReactNode;
}

const Supscript: React.FC<SupscriptProps> = ({ children }) => (
  <sup className="sup">{children}</sup>
);

export default Supscript;
