import { useSelector } from "react-redux";
import Header from "../components/Header";
import Intro from "../components/Intro";
import MobileMenu from "../components/layout/MobileMenu";

export default function Home() {
  const mobileMenuState = useSelector((state) => state.menu.mobileMenu);

  return (
    <>
      <Header />
      <Intro />
      {mobileMenuState && <MobileMenu />}
    </>
  );
}
