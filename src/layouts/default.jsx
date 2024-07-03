import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">Discover Africa</NavLink>
          <nav className="hidden md:flex space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="#about">About</NavItem>
            <NavItem to="#destinations">Destinations</NavItem>
            <NavItem to="#culture">Culture</NavItem>
            <NavItem to="#contact">Contact</NavItem>
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors",
        isActive
          ? "text-white"
          : "text-gray-400 hover:text-white"
      )
    }
  >
    {children}
  </NavLink>
);

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <nav className="grid gap-6 text-lg font-medium">
        <NavItem to="/">Home</NavItem>
        <NavItem to="#about">About</NavItem>
        <NavItem to="#destinations">Destinations</NavItem>
        <NavItem to="#culture">Culture</NavItem>
        <NavItem to="#contact">Contact</NavItem>
      </nav>
    </SheetContent>
  </Sheet>
);

export default Layout;