import { GetStaticProps } from "next";
import Image from 'next/image';
import { Box, Flex, Image as ImageChakra, Text } from '@chakra-ui/react';

export function Welcome() {
  return (
    <Box
      bg="#F8F9FA"
      as={Flex}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      height="100%"
    >
      <Flex 
        flex="1" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
      >
        <Box as={Flex} flexDirection="column" alignItems="center">
          <ImageChakra
            src="/assets/images/logo.png"
            alt=""
            width="18rem"
            height="auto"
          />
          <Text
            fontSize="2rem"
            color="#525252"
            fontWeight="normal"
            marginTop="2rem"
          >
            Mantenha sempre seus protocolos em dias
          </Text>
          <Text
            fontSize="0.875rem"
            color="#777"
            fontWeight="normal"
            marginTop="1.25rem"
            lineHeight="1.25rem"
            textAlign="center"
          >
            O Message conecta os integrantes para compartilhar a documentação,
            <br />
            assim reduzindo o uso de e-mails e organizar o tempo de entrega.
          </Text>
        </Box>
        <Box 
          width="100%" 
          as={Flex} 
          justifyContent="space-between"
          marginTop="3.5rem"
        >
        <Image 
            src="/assets/images/img2.png"
            width="300px"
            height="300px"
            alt="Imagem 1"
          />
          <Image 
            src="/assets/images/img.png"
            width="300px"
            height="300px"
            alt="Imagem 1"
          />
        </Box>
      </Flex>
      <Box
        width="100%"
        height="0.5rem"
        marginBottom="0"
        bgGradient="linear(to-l, #A51890 0%, #A51890 15% #4F9FA6 15%, #4F9FA6 30%, #f36f20 30%, #f36f20 45%, #93DA49 45%, #93DA49 60%, #0091DA 60%, #0091DA 75%, #DB0B5B 75%, #DB0B5B 90%, #702F8A 90%, #702F8A 100%)"
      />
    </Box>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {}
  }
}