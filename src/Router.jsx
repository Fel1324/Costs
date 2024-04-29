import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/Home.jsx";
import { Company } from "./pages/company/Company.jsx";
import { Contact } from "./pages/contact/Contact.jsx";
import { NewProject } from "./pages/new-project/NewProject.jsx";
import { Projects } from "./pages/projects/Projects.jsx";

import { Container } from "./components/layout/container/Container.jsx";
import { Navbar } from "./components/layout/navbar/Navbar.jsx";
import { Footer } from "./components/layout/footer/Footer.jsx";

export function Router(){
  return(
    <BrowserRouter>
      <Navbar/>

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  )
}
