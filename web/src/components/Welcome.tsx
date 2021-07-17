import { GetStaticProps } from "next";
import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function Welcome() {
  return (
    <Box
      bg="#F8F9FA"
      as={Flex}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      borderBottom="0.375rem solid #0a5daf"
    >
      <Image 
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
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {}
  }
}