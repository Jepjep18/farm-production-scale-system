// src/App.tsx
import { ThemeProvider } from "./theme/theme-provider";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import ProductionOverview from "./pages/ProductionOverview";
import DefectAnalysis from "./pages/DefectAnalysis";
import GrowingDefects from "./pages/GrowingDefects";
import FarmHandling from "./pages/FarmHandling";
import ProcessingDefects from "./pages/ProcessingDefects";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<LoginPage />} />
            
            {/* Main App Routes */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="production-overview" element={<ProductionOverview />} />
              <Route path="defect-analysis" element={<DefectAnalysis />} />
              <Route path="growing-defects" element={<GrowingDefects />} />
              <Route path="farm-handling" element={<FarmHandling />} />
              <Route path="processing-defects" element={<ProcessingDefects />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Redirect root to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;