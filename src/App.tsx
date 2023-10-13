import React from 'react';
import './App.css';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Header from './components/Header';
import Main from './components/Main';



function App() {
  return (
    <>
      <ChakraProvider>
        <Box background="#2400FF" position='fixed' w='100%' h='100%'>
          <Flex>
            <Header />
            <Main />

          </Flex>
        </Box>


      </ChakraProvider >

    </>
  );
}

export default App;
