import { Box, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import background from "../assets/background.png";

const RootLayout = () => {
  return (
    <Box w={"100dvw"} h={"100dvh"} fontFamily={"Noto Sans Thai Variable"}>
      <Image
        src={background}
        pos={"absolute"}
        zIndex={-1}
        w={"100%"}
        h={"100%"}
      />
      <Outlet />
    </Box>
  );
};

export { RootLayout };
