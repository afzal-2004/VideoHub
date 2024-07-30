import { useColorMode } from "@chakra-ui/react";

import { IoMdMoon } from "react-icons/io";
export function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      {colorMode ? (
        <IoMdMoon className="    text-[30px]" onClick={toggleColorMode} />
      ) : (
        ""
      )}
    </header>
  );
}
