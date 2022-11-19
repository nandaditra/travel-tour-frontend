import { BrowserRouter, Routes, Route } from "react-router-dom" 
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard';
import OverviewData from './pages/OverviewData';
import Settings from './pages/Settings'
import PersonalData from './pages/PersonalData'
import Other from './pages/Other'
import NotFoundPage from './pages/NotFoundPage';
import OrderPacket from "./pages/OrderPacket";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:packetId" element={<OverviewData />} />
          <Route path="/dashboard/:packetId/orderpacket" element={< OrderPacket/> }/>
          <Route path="/settings/" element={<Settings />}>
            <Route index element={<PersonalData />}/>
            <Route path="/settings/other" element={<Other />}/>
          </Route>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
