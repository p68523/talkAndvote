import { useState } from "react";
import Logo from "./layout/Logo";
import DesktopAuthButtons from "./auth/DesktopAuthButtons";
import MobileMenu from "./layout/MobileMenu";
import MobileToggleButton from "./layout/MobileToggleButton";
import Categories from "./layout/Categories";
import SearchMenu from "./layout/SearchMenu";
import { useAuth } from "../../hooks/useAuth";
import { useSearchParams } from "react-router-dom";

function Navbar({ onLoginClick, onSignupClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, isAuthenticated } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";

  const onLogoutClick = () => {
    logout();
  };

  const onSearchInputChange = (e) => {
    const updated = new URLSearchParams(searchParams);
    updated.set("search", e.target.value);
    updated.set("page", "1");
    setSearchParams(updated);
  };

  const onCategoryClick = (newCategory) => {
    const updated = new URLSearchParams(searchParams);
    updated.set("category", newCategory === "전체" ? "" : newCategory);
    updated.set("page", "1");
    setSearchParams(updated);
  };

  return (
    <nav className="bg-emerald-500">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          <div className="flex items-center flex-1">
            <Logo />
            <SearchMenu
              searchQuery={searchQuery}
              onSearchInputChange={onSearchInputChange}
            />
          </div>
          <MobileToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <DesktopAuthButtons
            isAuthenticated={isAuthenticated}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onLogoutClick={onLogoutClick}
            onLoginClick={onLoginClick}
            onSignupClick={onSignupClick}
          />
        </div>

        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isAuthenticated={isAuthenticated}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onSignupClick={onSignupClick}
          searchQuery={searchQuery}
          onSearchInputChange={onSearchInputChange}
        />
      </div>

      <Categories currentCategory={category} onClick={onCategoryClick} />
    </nav>
  );
}

export default Navbar;
