import { useState } from "react";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./theme/theme-provider";
import { ModeToggle } from "./theme/mode-toggle";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>

      {/* <div className="flex flex-col items-center justify-center min-h-svh">
            <ModeToggle />
          </div> */}
    </>
  );
}

export default App;
