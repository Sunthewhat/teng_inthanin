import { Box, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FindingPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleStartGame = () => {
      navigate("/game/question");
    };
    setTimeout(() => {
      handleStartGame();
    }, 2000);
  }, [navigate]);

  return (
    <Box
      h={"100vh"}
      textAlign={"center"}
      color={"#333333"}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      fontSize={"30"}
    >
      <Text>มาหา เทพที่แท้</Text>
      <Text>กาแฟที่โดนของคุณกันเลย</Text>
    </Box>
  );
};

export { FindingPage };
