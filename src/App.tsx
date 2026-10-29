import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Contact Us routes */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/contact.html" element={<ContactUs />} />

            {/* Privacy Policy routes */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/privacy.html" element={<PrivacyPolicy />} />

            {/* Terms & Conditions routes */}
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/terms-and-conditions" element={<TermsOfService />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/terms.html" element={<TermsOfService />} />

            {/* Refund & Cancellation routes */}
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/refund-and-cancellation" element={<RefundPolicy />} />
            <Route path="/refund" element={<RefundPolicy />} />
            <Route path="/refund.html" element={<RefundPolicy />} />

            {/* Shipping & Fulfillment routes */}
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/shipping-and-delivery" element={<ShippingPolicy />} />
            <Route path="/fulfillment-policy" element={<ShippingPolicy />} />
            <Route path="/shipping.html" element={<ShippingPolicy />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
