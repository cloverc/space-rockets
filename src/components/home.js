import React from "react";
import { Flex, Box, Text, Stack, Link } from "@chakra-ui/core";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";
import SpaceAnimation from "./space-animation";
import { css } from "@emotion/css";

export default function Home() {
  return (
    <div
      className={css`
        background: url("https://i.postimg.cc/MpMhnpLG/background.png")
          no-repeat center center fixed;
        background-size: cover;
        width: 100%;
        height: 100vh;
        position: fixed;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <SpaceAnimation />
      <Stack m="6" spacing="6">
        <PageLink color="white" url="/launches">
          Browse SpaceX Launches
        </PageLink>
        <PageLink color="white" url="/launch-pads">
          Browse SpaceX Launch Pads
        </PageLink>
      </Stack>
    </div>
  );
}

function PageLink({ url, children, ...rest }) {
  return (
    <Link as={BrowserLink} to={url} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="md"
        borderWidth="1px"
        rounded="lg"
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} />
      </Flex>
    </Link>
  );
}
