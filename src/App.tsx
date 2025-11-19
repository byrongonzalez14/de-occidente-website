import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "../tailwind.css";

import { Destinations } from "./pages/Destinations/Destinations";
import { DestinationDetailPage } from "./pages/DestinationDetail/DestinationDetail";
import { ServiceDetailPage, Services } from "./pages/Services";
import { CooperativeDetailPage, CooperativePage } from "./pages/Cooperative";
import { ContactPage } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ScrollManager } from "./components/ScrollManager";

export const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destinations />} />
        <Route path="/destinos/:destinationId" element={<DestinationDetailPage />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/servicios/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/nuestra-cooperativa" element={<CooperativePage />} />
        <Route path="/nuestra-cooperativa/:pageId" element={<CooperativeDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
