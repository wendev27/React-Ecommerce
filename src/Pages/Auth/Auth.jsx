import { Outlet } from "react-router";

function Auth() {
  return (
    <>
      <div className="text-red-600"></div>
      <Outlet />
    </>
  );
}

export default Auth;
