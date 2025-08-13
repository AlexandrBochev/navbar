import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { pages } from "./data";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
};
