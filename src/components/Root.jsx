import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="h-full">
      <header className="w-100">
    <nav className="flex justify-between p-4 items-center flex-row top-0">
       <h1 className="text-lg font-bold">My Swag website</h1>
          <div>
            <NavLink className="mr-5" to="/">Home</NavLink>
            <NavLink className="mr-5" to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
     </nav>
 </header>
 <main>
  <Outlet/>
 </main>
        
    </div>
  )
}
