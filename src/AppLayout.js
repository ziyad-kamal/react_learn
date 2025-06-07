import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({children}) {
  return (
    <div>
      <Navbar/>
      
      <div className="flex justify-center">
        <Outlet/>
        <Sidebar/>
      </div>
    </div>
  )
}
