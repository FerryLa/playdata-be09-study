// 테마상태를 전역에서 관리하기 위한 컨텍스트
"use client";

import ThemeProvider from "./contexts/ThemeContext";
import UserProvider from "./contexts/UserContext";

function Layout({ children }) {
  return (
    <LanguageProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>;
      </UserProvider>
    </LanguageProvider>
  );
}

export default Layout;
