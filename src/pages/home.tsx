import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import Logo from "../assets/inthanin.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [, , clearCookie] = useCookies([
    "name",
    "age",
    "god",
    "drink",
    "godPath",
    "drinkPath",
  ]);
  const clearPreviousData = () => {
    clearCookie("name");
    clearCookie("age");
    clearCookie("god");
    clearCookie("drink");
    clearCookie("godPath");
    clearCookie("drinkPath");
  };
  clearPreviousData();
  const handleContinue = () => {
    navigate("/game/name");
  };
  return (
    <Box
      h={"100%"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <Text textAlign={"center"} mt={"9dvh"} fontSize={[30]}>
        เทพที่แท้ กาแฟที่โดน
      </Text>
      <Image src={Logo} pos={"fixed"} top={"17%"} />
      <Box mb={"4dvh"} color={"#EBEAD4"} w={"100%"} onClick={handleContinue}>
        <Text textAlign={"center"}>Let's find out your</Text>
        <Text textAlign={"center"}>mu & menu</Text>
      </Box>
    </Box>
  );
};

export { HomePage };
