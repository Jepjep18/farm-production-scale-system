// src/App.tsx
import { useState } from "react";
import { ThemeProvider } from "./theme/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import ProductionOverview from "./pages/ProductionOverview";
import DefectAnalysis from "./pages/DefectAnalysis";
import GrowingDefects from "./pages/GrowingDefects";
import FarmHandling from "./pages/FarmHandling";
import ProcessingDefects from "./pages/ProcessingDefects";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="production-overview" element={<ProductionOverview />} />
              <Route path="defect-analysis" element={<DefectAnalysis />} />
              <Route path="growing-defects" element={<GrowingDefects />} />
              <Route path="farm-handling" element={<FarmHandling />} />
              <Route path="processing-defects" element={<ProcessingDefects />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;