import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Plane, Menu, Moon, Sun, Globe, User, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const mainNavLinks = [
    { path: "/", label: "Home" },
    { path: "/planner", label: "AI Trip Planner" },
    { path: "/local-connect", label: "Local Connect" },
    { path: "/hidden-gems", label: "Hidden Gems" },
  ];

  const travelToolsLinks = [
    { path: "/expenses", label: "Expense Splitter" },
    { path: "/safety", label: "Safety Dashboard" },
    { path: "/eco-score", label: "Eco Score" },
  ];

  const languages = ["EN", "ES", "FR", "DE", "HI"];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-hero p-2 rounded-lg group-hover:shadow-hover transition-shadow">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              TripMind
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Travel Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Travel Tools
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                {travelToolsLinks.map((link) => (
                  <DropdownMenuItem key={link.path} asChild>
                    <Link to={link.path} className="cursor-pointer">
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Select language">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={language === lang ? "bg-accent" : ""}
                  >
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile / Auth */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="User menu">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-popover z-50">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setIsLoggedIn(true)}>
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-hero hover:shadow-hover transition-shadow">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card">
              <div className="flex flex-col gap-4 mt-8">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="border-t border-border pt-4 mt-2">
                  <p className="text-xs font-semibold text-muted-foreground mb-3">
                    TRAVEL TOOLS
                  </p>
                  {travelToolsLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-3"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive("/about") ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  About
                </Link>

                <div className="border-t border-border pt-4 mt-2 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        {language}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-popover">
                      {languages.map((lang) => (
                        <DropdownMenuItem
                          key={lang}
                          onClick={() => setLanguage(lang)}
                          className={language === lang ? "bg-accent" : ""}
                        >
                          {lang}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {!isLoggedIn ? (
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" onClick={() => setIsLoggedIn(true)}>
                      Login
                    </Button>
                    <Button className="bg-gradient-hero">Sign Up</Button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline">Dashboard</Button>
                    <Button variant="outline">Settings</Button>
                    <Button variant="outline" onClick={() => setIsLoggedIn(false)}>
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
