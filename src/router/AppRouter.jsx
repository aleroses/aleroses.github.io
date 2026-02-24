import { Route, Routes } from "react-router";
import { PortfolioRoutes } from "../portfolio/routes/PortfolioRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PortfolioRoutes />} />
    </Routes>
  );
};
