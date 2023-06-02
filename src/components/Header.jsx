import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"20px"} >
      <Button variant={"unstyled"} color={"white"} size={"lg"}>
        <Link to="/">CryptoStar</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} size={"md"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} size={"md"}>
        <Link to="/coins">Coins</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} size={"md"}>
        <HashLink to="/#about">About</HashLink>
      </Button >
    </HStack >
  );
};

export default Header;
