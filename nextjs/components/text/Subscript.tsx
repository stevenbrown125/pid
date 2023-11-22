import React, { ReactNode } from "react";

interface SubscriptProps {
  children: ReactNode;
}

const Subscript: React.FC<SubscriptProps> = ({ children }) => (
  <sub className="sub">{children}</sub>
);

export default Subscript;
