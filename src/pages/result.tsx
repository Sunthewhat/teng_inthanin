import { Box, Image, Text } from "@chakra-ui/react";
import { FC, useContext, useEffect } from "react";
import {
  getResult,
  getGodDescription,
  getDrinkDescription,
} from "../data/result";
import { UserContext } from "../components/childRoot";
import { useNavigate } from "react-router-dom";

const ResultPage: FC = () => {
  const Result = getResult();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const Data = {
    name: user.name,
    god: Result.god,
    drink: Result.drink,
    godPath: Result.godImage,
    drinkPath: Result.drinkImage,
    godDesc: getGodDescription(Result.god),
    drinkDesc: getDrinkDescription(Result.drink),
  };

  useEffect(() => {
    if (!user.name || user.name === "") {
      navigate("/");
    }
  }, [navigate, user.name]);

  return (
    <Box
      w={"100%"}
      h={"100%"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text> {Data.name ?? "Placeholder"} </Text>
      <Text> คุณคือ {Data.drink} อินทนิล </Text>
      <Box
        mt={"2dvh"}
        p={"2"}
        w={"92dvw"}
        h={"92dvw"}
        bg={"#EBEAD4B5"}
        borderColor={"#A06254"}
        borderWidth={"2px"}
        borderRadius={"20"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <Box
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyItems={"space-around"}
        >
          <Box
            w={"40dvw"}
            h={"40dvw"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            mr={"2"}
          >
            <Text fontWeight={"bold"}> {Data.god} </Text>
            <Text fontSize={"12"}> {Data.godDesc} </Text>
          </Box>
          <Box w={"40dvw"} h={"40dvw"} bg={"white"} borderRadius={10}>
            <Image src={Data.godPath} />
          </Box>
        </Box>
        <Box w={"90%"} borderColor={"#A06254"} borderWidth={"1px"} />
        <Box
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyItems={"space-around"}
        >
          <Box w={"40dvw"} h={"40dvw"} bg={"white"} borderRadius={10}>
            <Image src={Data.drinkPath} borderRadius={10} />
          </Box>
          <Box
            w={"40dvw"}
            h={"40dvw"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            ml={"2"}
          >
            <Text fontWeight={"bold"}> {Data.drink} </Text>
            <Text fontSize={"12"}> {Data.drinkDesc} </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ResultPage };
