import {
  Box, Flex, Grid, useBreakpointValue
} from '@chakra-ui/react';
import Head from 'next/head';

import {
  NavigationDrawerMini
} from '../../components/Navigation/NavigationDrawerMini';
import { Card } from "../../components/Chat/Card";
import { Profile } from '../../components/Profile';

export default function NewChat() {
  const breakpoint = useBreakpointValue({
    base: '1120px',
    md: '1480px'
  });

  return (
    <>
      <Head>
        <title>Dashboard | Mensageria</title>
        <meta name="description" content="Home do app de Portfólio" />
      </Head>
      <Box
        as={Flex}
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(#D2E0E0 0%, #D2E0E0 25%, #D2E0E0 85%, #ADCCCC 85%)"
      >
        <Flex
          width={breakpoint}
          height="calc(100vh - 2.5rem)"
          margin="1.25rem"
          bg="#497173"
          direction="row"
        >
          <NavigationDrawerMini />
          <Flex flex="1" bg="#EFF5F5">
            <Grid gap="0.5rem" templateColumns="repeat(4,1fr)" marginTop="0.625rem">
              <Card />
            </Grid>
          </Flex>
        </Flex>
      </Box>
      <Profile />
    </>
  );
}