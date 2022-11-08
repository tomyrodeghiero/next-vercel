import { FC } from "react";

// export const DarkLayout: FC = ({ children }: any) => {
export const DarkLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
