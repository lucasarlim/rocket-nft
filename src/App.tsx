import React, { useState } from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

type Sidebar = {
  sidebar: boolean;
  setSidebar: (sidebar: boolean) => void;
}

export const SidebarContext = React.createContext({} as any);

function App() {

  const [sidebar, setSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      <GlobalStyle />

      <Routes />
    </SidebarContext.Provider>
  )
}

export default App
