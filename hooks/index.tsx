import { useState } from "react";

export const useMenuState = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };
  return { openMenuId, toggleMenu };
};