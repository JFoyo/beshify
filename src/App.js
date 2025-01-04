import { Flex, HStack, Input, Stack, Text, useToast } from '@chakra-ui/react';
import './App.css';
import { useState } from 'react';
import ColorMode from './components/ColorMode';
import CardComponent from './components/CardComponent';

function App() {
  const [text, setText] = useState("");
  const toast = useToast();

  const generateText = () => {
    const trimmedText = text.trim ();
    if (trimmedText.length > 0){
      const replaceValue = trimmedText.replace(/\s+/g, " ");
      const newValue = replaceValue.replace(/\s/g, "🤸");
      setText (newValue);
      return newValue;
    }
    else {
      setText(trimmedText);
    }
  };

  const copyTextUsingTextArea = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  };

  const copyText = () => {
    copyTextUsingTextArea(text);

    toast({
      title: "🤸Beshify🤸",
      description: "Text Copied Succesfully!",
      status: "success",
      duration: 3000,
      isClosable: "false",
    });
  };

  return (
    <>
      <Flex height={"100vh"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <Text fontSize={{base: '4xl', md: '4xl', xl: '6xl'}} fontFamily={"Shrikhand, cursive"}>🤸Beshify🤸</Text>
          <Stack>
            <HStack>
              <Input placeholder='Enter text...' onChange={(event) => setText(event.target.value)}></Input>
              <ColorMode/>
            </HStack>
            {(text.length > 0 && <CardComponent
                text={text}
                generateText={generateText}
                copyText={copyText}
              />)}
          </Stack>
        </Stack>
      </Flex>
    </>
  );
};

export default App
