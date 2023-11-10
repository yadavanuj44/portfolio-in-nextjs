"use client";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
export default function ThemeSwitch() {
  const { toggleTheme } = useTheme();
  return (
    <button
      className="fixed bottom-5 right-5 bg-white p-[0.66rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex gap-4 items-center justify-center transition-all dark:bg-slate-950"
      onClick={toggleTheme}
    >
      <div className="h-[32px] w-[32px] bg-amber-400 absolute rounded-full left-0 translate-x-[4px] -z-0 dark:bg-blue-300 dark:translate-x-[40px] transition-all"></div>
      <BsSun className="text-xl z-10" />
      <BsMoon className="text-xl z-10" />
    </button>
  );
}
