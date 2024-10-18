import {useState, useContext, ChangeEvent, MouseEvent} from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

export default function Settings() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <button
      onClick={handleToggleDarkMode}
      className="flex items-center justify-center w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 p-8 rounded-md"
    >
      {isDarkModeEnabled ? <MdLightMode size={40} /> : <MdDarkMode size={40} />}
    </button>
  );
}
