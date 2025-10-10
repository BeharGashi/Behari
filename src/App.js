import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "flag-icons/css/flag-icons.min.css";

// Layout
import Navbar from "./Components/Reusable/Navbar";
import Footer from "./Components/Reusable/Footer";
import ScrollToTopButton from "../src/Components/Home/ScrollToTopButton";
import Anfragen from "./Components/Kontakt/Anfragen"
import Doppelhaus from "./Components/DoppelHaus/doppelhaus"
import Mehrfamilienhaus from './Components/Mehrfamilienhaus/mehrfamilienhaus'

// Cookie consent (modal i ri) + Analytics
import CookieConsentModal from "./Components/Reusable/CookieConsentModal";
// import GoogleAnalytics from "./Components/Analytics/GoogleAnalytics";

// Pages (lazy)
const Home = lazy(() => import("./Components/NewHome/NewHome"));
const Impressum = lazy(() => import("./Components/Impressum/impressum"));
const Datenschutz = lazy(() => import("./Components/Datenschutz/Datenschutz"));
const Rechtliche = lazy(() => import("./Components/Rechtliche/Rechtliche"));
const Einfamilienhauser = lazy(() => import("./Components/Einfamilienauser/Ein"));
const Style130 = lazy(() => import("./Components/Einfamilienauser/Style130/Stile130"));
const Style130_2 = lazy(() => import("./Components/Einfamilienauser/Style130-2/Stile130"));
const Roani140 = lazy(() => import("./Components/Einfamilienauser/Style-140/Stile140"));
const Roani142 = lazy(() => import("./Components/Einfamilienauser/Style140-2/Style140_2"));
const Roani150 = lazy(() => import("./Components/Einfamilienauser/Roani 150/Stile150"));
const Roani152 = lazy(() => import("./Components/Einfamilienauser/Roani 150-2/Stile150-2"));
const ContactSection = lazy (() => import ("./Components/Kontakt/ContactSection"))
const ModulhauserSection = lazy (() => import ("./Components/Modulhauser/Modulhauser"))
const Hutspace = lazy (() => import ("./Components/Hutspace/Hutspace"))
const Marigona = lazy (() => import ("./Components/Marigona/Marigona"))
const Mami = lazy (() => import ("./Components/Mami/Mami"))
const Bungalows = lazy (() => import ("./Components/Bungalows/Bungalows"))
const Optima80 = lazy (() => import ("./Components/Bungalows/Optima80/Optima80"))
const Optima90 = lazy (() => import ("./Components/Bungalows/Optima90/Optima90"))
const Optima902 = lazy (() => import ("./Components/Bungalows/Optima902/Optima902"))
const Uberuns = lazy (() => import ("./Components/UberUns/Uberuns"))
const Materiale = lazy (() => import ("./Components/Bauweise/Materiale/Materiale"))
const Wandaufbau = lazy (() => import ("./Components/Bauweise/Wandaufbau/Wandaufbau"))
const Tueren = lazy (() => import ("./Components/Bauweise/Tueren/Tueren"))
const Fenster = lazy (() => import ("./Components/Bauweise/Fenster/Fenster"))
// const Solarsysteme = lazy (() => import ("./Components/Bauweise/SolarSysteme/SolarSysteme"))
const Smart = lazy (() => import ("./Components/Bauweise/Smarte Haustechnik/Smart"))
const NewHome = lazy (() => import ("./Components/NewHome/NewHome"))
const OCM3001 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M300-1/ocm3001"))
const OCM6001 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M600-1/ocm6001"))
const OCM6002 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M600-2/ocm6002"))
const OCM6003 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M600-3/ocm6003"))
const OCM6004 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M600-4/ocm6004"))
const OCM6005 = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/OC-M600-5/ocm6005"))
const SCM2401 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M240-1/SCM2401"))
const SCM3001 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-1/SCM3001"))
const SCM3002 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-2/SCM3002"))
const SCM3003 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-3/SCM3003"))
const SCM6001 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-1/SCM6001"))
const SCM6002 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-2/SCM6002"))
const SCM6003 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-3/SCM6003"))
const SCM6004 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-4/SCM6004"))
const SCM6005 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-5/SCM6005"))
const SCM6006 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-6/SCM6006"))
const SCM6007 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-7/SCM6007"))
const LCM3001 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M300-1/LCM3001"))
const LCM3002 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M300-2/LCM3002"))
const LCM6001 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M600-1/LCM6001"))
const LCM6002 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M600-2/LCM6002"))
const LCM6003 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M600-3/LCM6003"))
const LCM6004 = lazy (() => import ("./Components/Container/Umkleidecontainer/LC-M600-4/LCM6004"))
const Hausemodelle = lazy (() => import ("./Components/Hausemodelle/HauseModelle"))
const Planung = lazy (() => import ("./Components/Planung/planung"))
const Privatbau = lazy (() => import ("./Components/Privatbau/Privatbau"))
const Gewerbebau = lazy (() => import ("./Components/Gewerbebau/Gewerbebau"))
const Gewerbeholzbau = lazy (() => import ("./Components/GewerblicherHolzbau/GewerblicherHolzbau"))
const Landwirtschaft = lazy (() => import ("./Components/Landwirschaft/Landwirtschaft"))
const Haustechnik = lazy (() => import ("./Components/Haustechnik/Haustechnik/Haustechnik"))
const Elektroinstallation = lazy (() => import ("./Components/Haustechnik/Elektroinstallation/Elektroinstallation"))
const Solarsysteme = lazy (() => import ("./Components/Solarsysteme/Solarsysteme"))
const Wasserinstallation = lazy (() => import ("./Components/Haustechnik/Wasserinstallation/Wasserinstallation"))
const Schwimmbecken = lazy (() => import ("./Components/Haustechnik/Schwimmbecken/Schwimmbecken"))
const Sauna = lazy (() => import ("./Components/Haustechnik/Sauna/Sauna"))
const Whirlpool = lazy (() => import ("./Components/Haustechnik/Whirlpool/Whirlpool"))
const Pergola = lazy (() => import ("./Components/Haustechnik/Pergola/Pergola"))
const Glasdach = lazy (() => import ("./Components/Haustechnik/Glasdach/Glasdach"))
const Kassettenmarkise = lazy (() => import ("./Components/Haustechnik/Kassettenmarkise/Kassettenmarkise"))
const Schiebesystem = lazy (() => import ("./Components/Haustechnik/Schiebesystem/Schiebesystem"))
const Poolabdeckung = lazy (() => import ("./Components/Haustechnik/Poolabdeckung/Poolabdeckung"))
const Innenausbau = lazy (() => import ("./Components/Innenausbau/Innenausbau/Innenausbau"))
const Treppen = lazy (() => import ("./Components/Innenausbau/Treppen/Treppen"))
const Bodenbelaege = lazy (() => import ("./Components/Innenausbau/Bodenbelaege/Bodenbelaege"))
const Mobel = lazy (() => import ("./Components/Innenausbau/Mobel/Mobel"))
const Kuchen = lazy (() => import ("./Components/Innenausbau/Kuchen/Kuchen"))
const Schlafzimmer = lazy (() => import ("./Components/Innenausbau/Schlafzimmer/Schlafzimmer"))
const Wohnzimmer = lazy (() => import ("./Components/Innenausbau/Wohnzimmer/Wohnzimmer"))
const Badezimmer = lazy (() => import ("./Components/Innenausbau/Badezimmer/Badezimmer"))
const Sanitaercontainer = lazy (() => import ("./Components/Container/Sanitarycontainer/Sanitaercontainer/Sanitaercontainer"))
const Buerocontainer = lazy (() => import ("./Components/Container/Buerocontainer/Buerocontainer/Buerocontainer"))
const Test = lazy (() => import ("./Components/Container/Test"))
const Umkleidescontainer = lazy (() => import ("./Components/Container/Umkleidecontainer/Umkleidecontainer/Umkleidecontainer"))
const Schlafcontainer = lazy (() => import ("./Components/Container/Sleepcontainer/Schlafcontainer/Schlafcontainer"))
const SCHM6001 = lazy (() => import ("./Components/Container/Sleepcontainer/DC-M600-1/ocm3001"))
const SCHM6002 = lazy (() => import ("./Components/Container/Sleepcontainer/DC-M600-2/ocm3001"))
const SCHM6003 = lazy (() => import ("./Components/Container/Sleepcontainer/DC-M600-3/ocm3001"))
const SCHM6004 = lazy (() => import ("./Components/Container/Sleepcontainer/DC-M600-4/ocm3001"))



function App() {
  // Funksioni për hapjen e live chat-it
  return (
    <Router>
      <Navbar />
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>

                <Home />
              </>
            }
          />
          <Route path="/test" element={<Test />} />

          {/* Legal */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/rechtlicherhinweise" element={<Rechtliche />} />

          {/* Pages */}
          
          <Route path="/kontakt" element={<ContactSection />} />
          <Route path="/anfragen" element={<Anfragen />} />
          <Route path="/doppelhaus" element={<Doppelhaus />} />
          <Route path="/mehrfamilienhaus" element={<Mehrfamilienhaus />} />
          <Route path="/modulhauser" element={<ModulhauserSection />} />
          <Route path="/new-home" element={<NewHome />} />
          <Route path="/hausemodelle" element={<Hausemodelle />} />
          <Route path="/planung" element={<Planung />} />
          <Route path="/privatbau" element={<Privatbau />} />
          <Route path="/gewerbebau" element={<Gewerbebau />} />
          <Route path="/gewerbeholzbau" element={<Gewerbeholzbau />} />
          <Route path="/landwirtschaft" element={<Landwirtschaft />} />
          <Route path="/haustechnik" element={<Haustechnik />} />
          <Route path="/elektroinstallation" element={<Elektroinstallation />} />
          <Route path="/solarsysteme" element={<Solarsysteme />} />
          <Route path="/wasserinstallation" element={<Wasserinstallation />} />
          <Route path="/schwimmbecken" element={<Schwimmbecken />} />
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/whirlpool" element={<Whirlpool />} />
          <Route path="/pergola" element={<Pergola />} />
          <Route path="/glasdach" element={<Glasdach />} />
          <Route path="/kassettenmarkise" element={<Kassettenmarkise />} />
          <Route path="/schiebesystem" element={<Schiebesystem />} />
          <Route path="/poolabdeckung" element={<Poolabdeckung />} />
          <Route path="/innenausbau" element={<Innenausbau />} />
          <Route path="/treppen" element={<Treppen />} />
          <Route path="/bodenbelaege" element={<Bodenbelaege />} />
          <Route path="/moebel" element={<Mobel />} />
          <Route path="/kuechen" element={<Kuchen />} />
          <Route path="/badezimmer" element={<Badezimmer />} />
          <Route path="/wohnzimmer" element={<Wohnzimmer />} />
          <Route path="/schlafzimmer" element={<Schlafzimmer />} />




          {/* Roani/Style routes */}
          <Route path="/einfamilienhauser" element={<Einfamilienhauser />} />
          <Route path="/roani130" element={<Style130 />} />
          <Route path="/roani130-2" element={<Style130_2 />} />
          <Route path="/mali140" element={<Roani140 />} />
          <Route path="/mali140-2" element={<Roani142 />} />
          <Route path="/blini150" element={<Roani150 />} />
          <Route path="/blini150-2" element={<Roani152 />} />

          {/* Modulhauser*/}
          <Route path="/hutspace" element={<Hutspace />} />
          <Route path="/marigona" element={<Marigona />} />
          <Route path="/mama" element={<Mami />} />

          {/* Buero Container*/}
          <Route path="/buerocontainer" element={<Buerocontainer />} />
          <Route path="/oc-m300-1" element={<OCM3001 />} />
          <Route path="/oc-m600-1" element={<OCM6001 />} />
          <Route path="/oc-m600-2" element={<OCM6002 />} />
          <Route path="/oc-m600-3" element={<OCM6003 />} />
          <Route path="/oc-m600-4" element={<OCM6004 />} />
          <Route path="/oc-m600-5" element={<OCM6005 />} />

          {/* Sanitary Container */}
          <Route path="/sanitaercontainer" element={<Sanitaercontainer />} />
          <Route path="/sc-m240-1" element={<SCM2401 />} />
          <Route path="/sc-m300-1" element={<SCM3001 />} />
          <Route path="/sc-m300-2" element={<SCM3002 />} />
          <Route path="/sc-m300-3" element={<SCM3003 />} />
          <Route path="/sc-m600-1" element={<SCM6001 />} />
          <Route path="/sc-m600-2" element={<SCM6002 />} />
          <Route path="/sc-m600-3" element={<SCM6003 />} />
          <Route path="/sc-m600-4" element={<SCM6004 />} />
          <Route path="/sc-m600-5" element={<SCM6005 />} />
          <Route path="/sc-m600-6" element={<SCM6006 />} />
          <Route path="/sc-m600-7" element={<SCM6007 />} /> 

          {/* Schlafcontainer */}
          <Route path="/schlafcontainer" element={<Schlafcontainer />} /> 
          <Route path="/sch-m600-1" element={<SCHM6001 />} />
          <Route path="/sch-m600-2" element={<SCHM6002 />} />
          <Route path="/sch-m600-3" element={<SCHM6003 />} />
          <Route path="/sch-m600-4" element={<SCHM6004 />} />     


          {/* Lockcontainer */}
          <Route path="/umkleidescontainer" element={<Umkleidescontainer />} />
          <Route path="/uc-m300-1" element={<LCM3001 />} />
          <Route path="/uc-m300-2" element={<LCM3002 />} />
          <Route path="/uc-m600-1" element={<LCM6001 />} />
          <Route path="/uc-m600-2" element={<LCM6002 />} />
          <Route path="/uc-m600-3" element={<LCM6003 />} />
          <Route path="/uc-m600-4" element={<LCM6004 />} />


          {/* Bungalows*/}
          <Route path="/bungalows" element={<Bungalows />} />
          <Route path="/optima-80" element={<Optima80 />} />
          <Route path="/optima-90" element={<Optima90 />} />
          <Route path="/optima-90-2" element={<Optima902 />} />

          {/* Uber Uns*/}
          <Route path="/uber-uns" element={<Uberuns />} />

          {/* Materiale*/}
          <Route path="/materiale" element={<Materiale />} />
          <Route path="/wandaufbau" element={<Wandaufbau />} />
          <Route path="/tueren" element={<Tueren />} />
          <Route path="/fenster" element={<Fenster />} />
          {/* <Route path="/solarsysteme" element={<Solarsysteme />} /> */}
          <Route path="/smart-haus-technik" element={<Smart />} />
         
          {/* 404 */}
          <Route
            path="*"
            element={<div style={{ padding: "2rem" }}>404 – Seite nicht gefunden</div>}
          />
        </Routes>

      {/* Ngarko analytics vetëm nëse ka pëlqim për "statistik" */}
      {/* <GoogleAnalytics /> */}

      {/* Modal i pëlqimit për cookies */}
      <CookieConsentModal privacyLink="/datenschutz" imprintLink="/impressum" />

      {/* Scroll to top */}
      <ScrollToTopButton />

      <Footer />
    </Router>
  );
}

export default App;



// import { BrowserRouter as Router, Routes, Route, useNavigationType, useLocation } from "react-router-dom";
// import "flag-icons/css/flag-icons.min.css";

// // Layout
// import Navbar from "./Components/Reusable/Navbar";
// import Footer from "./Components/Reusable/Footer";
// import ScrollToTopButton from "../src/Components/Home/ScrollToTopButton";
// import Anfragen from "./Components/Kontakt/Anfragen"
// import Doppelhaus from "./Components/DoppelHaus/doppelhaus"
// import Mehrfamilienhaus from './Components/Mehrfamilienhaus/mehrfamilienhaus'

// // Cookie consent (modal i ri) + Analytics
// import CookieConsentModal from "./Components/Reusable/CookieConsentModal";
// import GoogleAnalytics from "./Components/Analytics/GoogleAnalytics";

// // Loading Bar Component
// const LoadingBar = ({ isLoading }) => {
//   return (
//     <div className={`loading-bar ${isLoading ? 'loading' : ''}`}>
//       <div className="loading-progress"></div>
//     </div>
//   );
// };

//   return (
//     <div style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//       <div className="loading-spinner"></div>
//     </div>
//   );
// };

// // Router Event Dispatcher Component
// const RouterEventDispatcher = () => {
//   const navigationType = useNavigationType();
//   const location = useLocation();

//   useEffect(() => {
//     window.dispatchEvent(new Event('routeChangeComplete'));
//   }, [location, navigationType]);

//   return null;
// };

// // Link Interceptor Component
// const LinkInterceptor = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const handleClick = (event) => {
//       const link = event.target.closest('a');
      
//       if (link && link.href) {
//         const targetUrl = new URL(link.href);
//         const currentUrl = new URL(window.location.href);
        
//         if (targetUrl.origin === currentUrl.origin) {
//           window.dispatchEvent(new Event('routeChangeStart'));
//         }
//       }
//     };

//     document.addEventListener('click', handleClick);
//     return () => document.removeEventListener('click', handleClick);
//   }, [location]);

//   return null;
// };

// // Pages (lazy)
// const Banner = lazy(() => import("./Components/Home/homebanner"));
// const Home = lazy(() => import("./Components/NewHome/NewHome"));
// const Impressum = lazy(() => import("./Components/Impressum/impressum"));
// const Datenschutz = lazy(() => import("./Components/Datenschutz/Datenschutz"));
// const Rechtliche = lazy(() => import("./Components/Rechtliche/Rechtliche"));
// const Einfamilienhauser = lazy(() => import("./Components/Einfamilienauser/Ein"));
// const Style130 = lazy(() => import("./Components/Einfamilienauser/Style130/Stile130"));
// const Style130_2 = lazy(() => import("./Components/Einfamilienauser/Style130-2/Stile130"));
// const Roani140 = lazy(() => import("./Components/Einfamilienauser/Style-140/Stile140"));
// const Roani142 = lazy(() => import("./Components/Einfamilienauser/Style140-2/Style140_2"));
// const Roani150 = lazy(() => import("./Components/Einfamilienauser/Roani 150/Stile150"));
// const Roani152 = lazy(() => import("./Components/Einfamilienauser/Roani 150-2/Stile150-2"));
// const ContactSection = lazy (() => import ("./Components/Kontakt/ContactSection"))
// const ModulhauserSection = lazy (() => import ("./Components/Modulhauser/Modulhauser"))
// const Hutspace = lazy (() => import ("./Components/Hutspace/Hutspace"))
// const Marigona = lazy (() => import ("./Components/Marigona/Marigona"))
// const Mami = lazy (() => import ("./Components/Mami/Mami"))
// const Bungalows = lazy (() => import ("./Components/Bungalows/Bungalows"))
// const Optima80 = lazy (() => import ("./Components/Bungalows/Optima80/Optima80"))
// const Optima90 = lazy (() => import ("./Components/Bungalows/Optima90/Optima90"))
// const Optima902 = lazy (() => import ("./Components/Bungalows/Optima902/Optima902"))
// const Uberuns = lazy (() => import ("./Components/UberUns/Uberuns"))
// const Materiale = lazy (() => import ("./Components/Bauweise/Materiale/Materiale"))
// const Wandaufbau = lazy (() => import ("./Components/Bauweise/Wandaufbau/Wandaufbau"))
// const Tueren = lazy (() => import ("./Components/Bauweise/Tueren/Tueren"))
// const Fenster = lazy (() => import ("./Components/Bauweise/Fenster/Fenster"))
// const Solarsysteme = lazy (() => import ("./Components/Bauweise/SolarSysteme/SolarSysteme"))
// const Smart = lazy (() => import ("./Components/Bauweise/Smarte Haustechnik/Smart"))
// const NewHome = lazy (() => import ("./Components/NewHome/NewHome"))
// const OCM3001 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M300-1/ocm3001"))
// const OCM6001 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M600-1/ocm6001"))
// const OCM6002 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M600-2/ocm6002"))
// const OCM6003 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M600-3/ocm6003"))
// const OCM6004 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M600-4/ocm6004"))
// const OCM6005 = lazy (() => import ("./Components/Container/Buerocontainer/OC-M600-5/ocm6005"))
// const SCM2401 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M240-1/SCM2401"))
// const SCM3001 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-1/SCM3001"))
// const SCM3002 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-2/SCM3002"))
// const SCM3003 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M300-3/SCM3003"))
// const SCM6001 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-1/SCM6001"))
// const SCM6002 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-2/SCM6002"))
// const SCM6003 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-3/SCM6003"))
// const SCM6004 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-4/SCM6004"))
// const SCM6005 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-5/SCM6005"))
// const SCM6006 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-6/SCM6006"))
// const SCM6007 = lazy (() => import ("./Components/Container/Sanitarycontainer/SC-M600-7/SCM6007"))

// const Hausemodelle = lazy (() => ("./Components/Hausemodelle/Hausemodelle"))

// function App() {
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const handleStart = () => {
//       setIsLoading(true);
//     };

//     const handleComplete = () => {
//       setIsLoading(false);
//     };

//     window.addEventListener('routeChangeStart', handleStart);
//     window.addEventListener('routeChangeComplete', handleComplete);
//     window.addEventListener('routeChangeError', handleComplete);

//     return () => {
//       window.removeEventListener('routeChangeStart', handleStart);
//       window.removeEventListener('routeChangeComplete', handleComplete);
//       window.removeEventListener('routeChangeError', handleComplete);
//     };
//   }, []);

//   // Funksioni për hapjen e live chat-it
//   const openLiveChat = () => {
//     if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
//       window.Tawk_API.maximize(); // hap chat-in
//     } else {
//       console.warn("Tawk chat nuk është gati ende.");
//     }
//   };

//   return (
//     <Router>
//       <RouterEventDispatcher />
//       <LinkInterceptor />
//       <LoadingBar isLoading={isLoading} />
//       <Navbar />
//         <Routes>
//           {/* Home */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Home />
//               </>
//             }
//           />

//           {/* Legal */}
//           <Route path="/impressum" element={<Impressum />} />
//           <Route path="/datenschutz" element={<Datenschutz />} />
//           <Route path="/rechtlicherhinweise" element={<Rechtliche />} />

//           {/* Pages */}
          
//           <Route path="/kontakt" element={<ContactSection />} />
//           <Route path="/anfragen" element={<Anfragen />} />
//           <Route path="/doppelhaus" element={<Doppelhaus />} />
//           <Route path="/mehrfamilienhaus" element={<Mehrfamilienhaus />} />
//           <Route path="/modulhauser" element={<ModulhauserSection />} />
//           <Route path="/new-home" element={<NewHome />} />
//           <Route path="/new-banner" element={<NewBanner />} />
//           <Route path="/hausemodelle" element={<Hausemodelle />} />


//           {/* Roani/Style routes */}
//           <Route path="/einfamilienhauser" element={<Einfamilienhauser />} />
//           <Route path="/roani130" element={<Style130 />} />
//           <Route path="/roani130-2" element={<Style130_2 />} />
//           <Route path="/mali140" element={<Roani140 />} />
//           <Route path="/mali140-2" element={<Roani142 />} />
//           <Route path="/blini150" element={<Roani150 />} />
//           <Route path="/blini150-2" element={<Roani152 />} />

//           {/* Modulhauser*/}
//           <Route path="/hutspace" element={<Hutspace />} />
//           <Route path="/marigona" element={<Marigona />} />
//           <Route path="/mama" element={<Mami />} />

//           {/* Container*/}
//           <Route path="/oc-m300-1" element={<OCM3001 />} />
//           <Route path="/oc-m600-1" element={<OCM6001 />} />
//           <Route path="/oc-m600-2" element={<OCM6002 />} />
//           <Route path="/oc-m600-3" element={<OCM6003 />} />
//           <Route path="/oc-m600-4" element={<OCM6004 />} />
//           <Route path="/oc-m600-5" element={<OCM6005 />} />

//           {/* Sanitary Container */}
//           <Route path="/sc-m240-1" element={<SCM2401 />} />
//           <Route path="/sc-m300-1" element={<SCM3001 />} />
//           <Route path="/sc-m300-2" element={<SCM3002 />} />
//           <Route path="/sc-m300-3" element={<SCM3003 />} />
//           <Route path="/sc-m600-1" element={<SCM6001 />} />
//           <Route path="/sc-m600-2" element={<SCM6002 />} />
//           <Route path="/sc-m600-3" element={<SCM6003 />} />
//           <Route path="/sc-m600-4" element={<SCM6004 />} />
//           <Route path="/sc-m600-5" element={<SCM6005 />} />
//           <Route path="/sc-m600-6" element={<SCM6006 />} />
//           <Route path="/sc-m600-7" element={<SCM6007 />} />

//           {/* Lockcontainer */}
//           <Route path="/uc-m300-1" element={<LCM3001 />} />
//           <Route path="/uc-m300-2" element={<LCM3002 />} />
//           <Route path="/uc-m600-1" element={<LCM6001 />} />
//           <Route path="/uc-m600-2" element={<LCM6002 />} />
//           <Route path="/uc-m600-3" element={<LCM6003 />} />
//           <Route path="/uc-m600-4" element={<LCM6004 />} />


//           {/* Bungalows*/}
//           <Route path="/bungalows" element={<Bungalows />} />
//           <Route path="/optima-80" element={<Optima80 />} />
//           <Route path="/optima-90" element={<Optima90 />} />
//           <Route path="/optima-90-2" element={<Optima902 />} />

//           {/* Uber Uns*/}
//           <Route path="/uber-uns" element={<Uberuns />} />

//           {/* Materiale*/}
//           <Route path="/materiale" element={<Materiale />} />
//           <Route path="/wandaufbau" element={<Wandaufbau />} />
//           <Route path="/tueren" element={<Tueren />} />
//           <Route path="/fenster" element={<Fenster />} />
//           <Route path="/solarsysteme" element={<Solarsysteme />} />
//           <Route path="/smart-haus-technik" element={<Smart />} />
         
//           {/* 404 */}
//           <Route
//             path="*"
//             element={<div style={{ padding: "2rem" }}>404 – Seite nicht gefunden</div>}
//           />
//         </Routes>

//       {/* Ngarko analytics vetëm nëse ka pëlqim për "statistik" */}
//       <GoogleAnalytics />

//       {/* Modal i pëlqimit për cookies */}
//       <CookieConsentModal privacyLink="/datenschutz" imprintLink="/impressum" />

//       {/* Scroll to top */}
//       <ScrollToTopButton />

//       <Footer />

//       <style>
//         {`
//           .loading-bar {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 3px;
//             background-color: transparent;
//             z-index: 9999;
//             overflow: hidden;
//           }
          
//           .loading-progress {
//             height: 100%;
//             width: 0%;
//             background: linear-gradient(90deg, #4f46e5, #3b82f6);
//             transition: width 0.4s ease;
//           }
          
//           .loading-bar.loading .loading-progress {
//             width: 70%;
//             transition: width 3s ease-out;
//           }
          
//           .loading-bar:not(.loading) .loading-progress {
//             width: 100%;
//             opacity: 0;
//             transition: width 0.3s ease-out, opacity 0.5s ease-out 0.2s;
//           }
          
//           .loading-spinner {
//             width: 50px;
//             height: 50px;
//             border: 5px solid #f3f3f3;
//             border-top: 5px solid #4f46e5;
//             border-radius: 50%;
//             animation: spin 1s linear infinite;
//           }
          
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </Router>
//   );
// }

// export default App;