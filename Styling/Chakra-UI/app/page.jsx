"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import {
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/button';

const Home = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            textAlign='center'
            py="8"
        >
            <Heading
                fontWeight="bold"
            >
                Next.JS 13 With Chakra UI
            </Heading>

            <Box>
                <IconButton mt={10} aria-label="Toggle Mode" onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </IconButton>
            </Box>
        </Box>
    )
};

export default Home;