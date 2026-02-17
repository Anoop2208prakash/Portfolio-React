import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // These children will render inside the <Outlet /> in App.tsx
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        ),
      },
      // You can add specific routes for your BCA projects here
      /* {
        path: "project/ims",
        element: <IMSDetails />,
      },
      */
    ],
  },
]);