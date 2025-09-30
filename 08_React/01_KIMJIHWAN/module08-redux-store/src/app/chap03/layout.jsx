"use client";

import { Provider } from "react-redux";

function Layout({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default Layout;
