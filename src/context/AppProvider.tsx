import { useMemo, useState, type ReactNode } from "react";
import { AppContext } from "./context";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const value = useMemo(
    () => ({ isSidebarOpen, setIsSidebarOpen, isModalOpen, setIsModalOpen }),
    [isSidebarOpen, isModalOpen]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
