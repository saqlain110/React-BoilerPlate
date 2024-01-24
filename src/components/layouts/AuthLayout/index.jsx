import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { getPageTitle, singularize } from "../../../utils/stringUtils";

import { useBearStore } from "../../../stores";
import { Navigate } from "react-router-dom";
const AuthLayout = () => {
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");



  const { isAuth } = useBearStore(
    (state) => ({
      isAuth: state.isAuth,
    }),
  );
  useEffect(() => {
    let title = splitPath[splitPath.length - 1];
    if (!isNaN(splitPath[splitPath.length - 1])) {
      title = `${singularize(
        splitPath[splitPath.length - 2].replace("-", " ")
      )} Details`;
    }
    document.title = getPageTitle(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (isAuth) {
    return <Navigate to="/admin" replace={true} />;
  }
  return <Outlet />;
};

export default React.memo(AuthLayout);
