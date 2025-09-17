import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Navbar() {
  return (
    <nav className="bg-[#15803D]">
      <div className="container mx-auto px-4 sm:px-10 py-4  flex justify-between">
        <DropdownNavLinks></DropdownNavLinks>
        <LogoAndTitle></LogoAndTitle>
        <NavLinks></NavLinks>
        <PlantATreeButton></PlantATreeButton>
      </div>
    </nav>
  );
}

function LogoAndTitle() {
  return (
    <div className="flex gap-1 items-center">
      <FontAwesomeIcon
        className="text-xl sm:text-2xl"
        icon="fa-solid fa-leaf"
      />
      <h3 className="font-inter text-xl sm:text-2xl font-bold">Green Earth</h3>
    </div>
  );
}

function NavLinks() {
  return (
    <ul className="hidden md:flex gap-4 items-center font-inter text-base font-medium">
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Gallery</a>
      </li>
      <li>
        <a href="">Plant a Tree</a>
      </li>
    </ul>
  );
}

function PlantATreeButton() {
  return (
    <button className="btn btn-primary bg-[#FACC15] border-none rounded-full shadow-none font-inter text-base font-medium text-[#15803D]">
      <FontAwesomeIcon icon="fa-solid fa-seedling" />
      <span className="hidden sm:inline-block">Plant a Tree</span>
    </button>
  );
}

function DropdownNavLinks() {
  return (
    <div className="dropdown dropdown-start md:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 bg-transparent border-none shadow-none"
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm font-inter text-base text-[#1F2937]"
      >
        <li>
          <a
            className="hover:bg-[#15803D] hover:text-white active:!bg-[#15803D] active:!text-white rounded-box"
            href=""
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:bg-[#15803D] hover:text-white active:!bg-[#15803D] active:!text-white rounded-box"
            href=""
          >
            Gallery
          </a>
        </li>
        <li>
          <a
            className="hover:bg-[#15803D] hover:text-white active:!bg-[#15803D] active:!text-white rounded-box"
            href=""
          >
            Plant a Tree
          </a>
        </li>
      </ul>
    </div>
  );
}
