import { Outlet } from "react-router-dom"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer.tsx";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="container pt-[101px] lg:pt-[104px] mx-auto">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default MainLayout