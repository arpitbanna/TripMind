import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import Booking from "./pages/Booking";
import HiddenGems from "./pages/HiddenGems";
import About from "./pages/About";
import ExpenseSplitter from "./pages/ExpenseSplitter";
import Safety from "./pages/Safety";
import EcoScore from "./pages/EcoScore";
import LocalConnect from "./pages/LocalConnect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hidden-gems" element={<HiddenGems />} />
          <Route path="/expenses" element={<ExpenseSplitter />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/eco-score" element={<EcoScore />} />
          <Route path="/local-connect" element={<LocalConnect />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
