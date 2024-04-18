import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Stepper, { Step } from "./components/Stepper/Stepper";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Contact" },
    { label: "Blog" },
    { label: "Careers" },
  ];

  const start: Step = { title: "Start", content: "1. start stepper" };
  const midle: Step = { title: "Midle", content: "2. in the process" };
  const finish: Step = { title: "Finish", content: "3. finish process" };

  return (
    <>
      <HamburgerMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems} // Look menu above
        menuSize={2} // Rem
        iconSize={4} // Rem
        lineHeight={7}
        color="black"
        menuBackgroundColor="gray"
        position="end" // "start" | "center" | "end"
      />
      <Stepper startStep={start} midleStep={midle} finishStep={finish} />
    </>
  );
}

export default App;
