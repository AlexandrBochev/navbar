import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { pages } from "./data";
import { Modal } from "./components/Modal";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex w-full h-[calc(100vh-3.25rem)]">
        <Sidebar className="hidden sm:flex sm:flex-col sm:justify-between bg-gray-100 shadow-lg px-4 py-10" />
        <Modal />
        <Routes>
          {pages.map(({ id, path, component: Component, ...rest }) => (
            <Route
              key={id}
              path={path}
              element={
                <Component
                  className="
                    container mx-auto px-4 py-10
                    text-gray-600 capitalize
                  "
                  {...rest}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
