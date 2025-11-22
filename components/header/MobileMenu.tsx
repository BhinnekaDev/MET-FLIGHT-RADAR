import { Menu, X } from "lucide-react";
import { MobileMenuProps } from "@/interfaces/mobile-menu-props";

export function MobileMenu({ darkMode, isOpen, onToggle }: MobileMenuProps) {
  return (
    <>
      <button
        onClick={onToggle}
        className={`p-2 rounded-xl backdrop-blur-md transition-all duration-300 md:hidden ${
          darkMode
            ? "bg-linear-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50"
            : "bg-linear-to-br from-white/60 to-gray-100/60 border border-gray-200/60"
        }`}
        aria-label={isOpen ? "Tutup menu" : "Buka menu"}
      >
        {isOpen ? (
          <X
            size={18}
            className={darkMode ? "text-gray-300" : "text-gray-700"}
          />
        ) : (
          <Menu
            size={18}
            className={darkMode ? "text-gray-300" : "text-gray-700"}
          />
        )}
      </button>
    </>
  );
}
