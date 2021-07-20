import { useState } from 'react';
import {
  Box, Flex, Text, Stack, HStack
} from '@chakra-ui/react';

import { RiCloseLine, RiImageLine, RiInformationLine } from 'react-icons/ri';
import { BiVideo } from 'react-icons/bi';
import { CgFile } from 'react-icons/cg';
import { BsCardChecklist } from 'react-icons/bs';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

import { Icon } from '../Icon';
import { Checkbox } from '../Checkbox';

export function Information() {
  return (
    <Box
      as={Flex}
      width="25%"
      bg="#FFF"
      max-width="26rem"
      flexDirection="column"
      borderLeft="1px solid #DDD"
    >
      <Box
        as={Flex}
        flexDirection="column"
        bg="#EDEDED"
        padding="1.25rem"
      >
        <Box
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          marginBottom="0.5rem"
        >
          <Text fontSize="1rem" color="#000">
            Informações do protocolo
          </Text>
          <Icon icon={RiCloseLine} />
        </Box>

        <Stack>
          <Text fontSize="1rem" color="#000">Nome do protocolo</Text>
          <Text fontSize="0.75rem" lineHeight="0.5rem" color="#999">14 integrantes</Text>
        </Stack>

        <Stack marginTop="1.5rem">
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="#919191">Abertura: 20/07/2021 00:32 </Text>
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="#919191">Prazo limite: 22/07/2021 00:32 </Text>
          <Text fontSize="0.875rem" lineHeight="0.875rem" color="orange.500">Tempo corrido: 10 horas de 48 horas </Text>
        </Stack>
      </Box>

      <Stack
        bg="#EDEDED"
        marginTop="0.75rem"
        padding="0.75rem"
      >
        <HStack>
          <Icon icon={RiImageLine} />
          <Text fontSize="0.875rem" color="#919191">7 Fotos</Text>
        </HStack>
        <HStack>
          <Icon icon={BiVideo} />
          <Text fontSize="0.875rem" color="#919191">1 Video</Text>
        </HStack>
        <HStack>
          <Icon icon={CgFile} />
          <Text fontSize="0.875rem" color="#919191">1 Arquivo</Text>
        </HStack>
      </Stack>

      <Box
        bg="#EDEDED"
        marginTop="0.75rem"
        flex="1"
        overflowY="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '0.375rem',
            height: '0.375rem'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)'
          },
        }}
      >
        <HStack 
          justifyContent="space-between" 
          position="fixed"
          zIndex="2"
          margin="0"
          width="18.5%"
          bg="#EDEDED"
        >
          <Flex alignItems="center" paddingLeft="0.75rem">
            <Icon icon={BsCardChecklist} />
            <Text fontSize="0.875rem" color="#000" marginLeft="0.375rem">8 Subsídios</Text>
          </Flex>
          <Icon icon={HiOutlineViewGridAdd} />
        </HStack>
        <br />
        <Stack
          paddingLeft="1.5rem"
          marginTop="1.5"
        >
          <Checkbox name="Envio de documentação" icon={RiInformationLine} />
          <Stack spacing={-2} paddingLeft="1rem">
            <Checkbox name="CPF" icon={RiInformationLine} />
            <Checkbox name="Email" icon={RiInformationLine} />
            <Checkbox name="Ramal" icon={RiInformationLine} />
          </Stack>
          <Box width="90%" border="1px solid #DDD" />

          <Checkbox name="Cópia da certidão de nascimento" icon={RiInformationLine} />
          <Checkbox name="Recibo de compra de terreno" icon={RiInformationLine} />
          <Checkbox name="Recibo de compra de terreno" icon={RiInformationLine} />
          <Checkbox name="Recibo de compra de terreno" icon={RiInformationLine} />
          <Checkbox name="Xerox do cartão de vácina" icon={RiInformationLine} />

          <Checkbox name="Compra de material" icon={RiInformationLine} />

          <Stack spacing={1} paddingLeft="1rem">

            <Checkbox name="Notebooks" icon={RiInformationLine} />
            <Checkbox name="Acessórios" icon={RiInformationLine} />
            <Checkbox name="Monitores" icon={RiInformationLine} />

          </Stack>
          <Box width="90%" border="1px solid #DDD" />
        </Stack>
      </Box>
    </Box>
  );
}