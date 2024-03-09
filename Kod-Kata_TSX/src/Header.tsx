import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  level: number;
  children: ReactNode;
};

const Header = ({ title, level, children }: HeaderProps) => {
  return (
    <div>
      <h1 className="Ts-h1">{children}</h1>
      <h1>Header</h1>
      {title}, level: {level}
    </div>
  );
};

export default Header;
