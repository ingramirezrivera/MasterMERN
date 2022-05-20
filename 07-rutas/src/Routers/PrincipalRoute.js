import React from "react";
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { Error } from "../components/Error";
import { Person } from "../components/Person";
import { ControlPanel } from "../components/ControlPanel";
import { HomePanel } from "../components/panel/HomePanel";
import { Managment } from "../components/panel/Managment"
import { Create } from "../components/panel/Create";
import { About } from "../components/panel/About";

export const PrincipalRoute = () => {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Articles"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Controlpanel"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              Control Panel
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Person/:name/:lastName" element={<Person />} />
          <Route path="/Person/:name/" element={<Person />} />
          <Route path="/Redirect" element={<Navigate to="/Person/:Daniel/:Ramirez" />}/>
          <Route path="/Person/" element={<Person />} />
          <Route path="/Controlpanel/*" element={<ControlPanel />}>
          </Route>
                <Route path="HomePanel" element={<HomePanel/>}/>
                <Route path="Managment" element={<Managment/>}/>
                <Route paht="Create" element={<Create/>}/>
                <Route path="About" element={<About/>}/>

          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      {/* LOAD COMPONTENTS */}

      <hr />
      <footer>
        <p>This is the Footer</p>
      </footer>
    </BrowserRouter>
  );
};
