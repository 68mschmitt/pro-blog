import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

// Expose theme and switchers from context
export function useTheme() {
  return useContext(ThemeContext);
}
