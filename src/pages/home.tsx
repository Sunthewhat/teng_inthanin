import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import Logo from "../assets/inthanin.png";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();
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
      <Image src={Logo} pos={"absolute"} top={"17%"} />
      <Box
        alignSelf={"center"}
        mb={"4dvh"}
        color={"#A06254"}
        w={"45%"}
        onClick={handleContinue}
        bgColor={"#EBEAD4"}
        borderRadius={"50"}
        border={"2px"}
        borderColor={"#A06254"}
      >
        <Text textAlign={"center"} m={"1"}>
          Let's find out your
        </Text>
        <Text textAlign={"center"} m={"1"}>
          mu & menu
        </Text>
      </Box>
    </Box>
  );
};

export { HomePage };
