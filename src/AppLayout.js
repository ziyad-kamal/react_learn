import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppLayout({children}) {
  return (
    <div>
      <Navbar/>
      
      <div style={{display:"flex"}}>
        {children}
        <Sidebar/>
      </div>
    </div>
  )
}
