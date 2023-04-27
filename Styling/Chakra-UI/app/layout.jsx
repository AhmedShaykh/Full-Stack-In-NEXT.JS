"use client";
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from "@chakra-ui/react";
import theme from './theme';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider theme={theme}>
          <ColorModeScript
            initialColorMode={theme.config.initialColorMode}
          />
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
};