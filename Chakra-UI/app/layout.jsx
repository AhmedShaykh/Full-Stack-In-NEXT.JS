"use client";
import './globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/react";
import theme from './theme';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
};