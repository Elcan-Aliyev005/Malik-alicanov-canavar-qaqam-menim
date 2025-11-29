import { Outlet } from "react-router-dom"
import Header from "../components/layout/header"

function MainLayout() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <footer className="container mx-auto" >Footer</footer>
    </>
  )
}

export default MainLayout