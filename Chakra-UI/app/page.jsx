"use client";
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
    return (
        <Box
            textAlign='center'
            bg="black"
            py="4"
        >
            <Heading
                color="white"
                fontWeight="bold"
            >
                Next.JS 13 With Chakra UI
            </Heading>
        </Box>
    )
};

export default Home;