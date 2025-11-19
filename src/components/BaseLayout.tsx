import { Outlet } from "react-router-dom";

export const BaseLayout = (): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Outlet />
    </div>
  );
};
