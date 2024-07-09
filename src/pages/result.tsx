import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import {
  getResult,
  getGodDescription,
  getDrinkDescription,
} from "../data/result";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const ResultPage: FC = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies([
    "name",
    "god",
    "drink",
    "godPath",
    "drinkPath",
  ]);
  const newResult = getResult();
  const user = {
    name: cookies.name,
    god: cookies.god,
    drink: cookies.drink,
    godPath: cookies.godPath,
    drinkPath: cookies.drinkPath,
  };
  const checkCookies = () => {
    if (cookies.name === undefined || cookies.name === "") navigate("/");
    let isValid = true;
    if (cookies.god === undefined || cookies.god === "") isValid = false;
    if (cookies.drink === undefined || cookies.drink === "") isValid = false;
    if (cookies.godPath === undefined || cookies.godPath === "")
      isValid = false;
    if (cookies.drinkPath === undefined || cookies.drinkPath === "")
      isValid = false;
    if (isValid) return;
    setCookies("god", newResult.god);
    setCookies("drink", newResult.drink);
    setCookies("godPath", newResult.godImage);
    setCookies("drinkPath", newResult.drinkImage);
  };

  checkCookies();
  const godDescription = getGodDescription(user.god);
  const drinkDescription = getDrinkDescription(user.drink);

  return (
    <Box
      w={"100%"}
      h={"100%"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text> {user.name ?? "Placeholder"} </Text>
      <Text> คุณคือ {user.drink} อินทนิล </Text>
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
          >
            <Text fontWeight={"bold"}> {user.god} </Text>
            <Text fontSize={"12"}> {godDescription} </Text>
          </Box>
          <Box w={"40dvw"} h={"40dvw"} bg={"white"} borderRadius={10}>
            <Image src={user.godPath} />
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
            <Image src={user.drinkPath} borderRadius={10} />
          </Box>
          <Box
            w={"40dvw"}
            h={"40dvw"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text fontWeight={"bold"}> {user.drink} </Text>
            <Text fontSize={"12"}> {drinkDescription} </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ResultPage };
