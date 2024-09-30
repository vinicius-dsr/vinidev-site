"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {isClient && (
        <Button
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="icon"
          className="flex items-center rounded-full py-5"
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      )}
    </>
  );
}
