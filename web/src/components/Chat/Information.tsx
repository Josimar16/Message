import {
  Box, Flex, HStack, Stack, Text
} from '@chakra-ui/react';
import { BiVideo } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { CgFile } from 'react-icons/cg';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { RiCloseLine, RiImageLine, RiInformationLine } from 'react-icons/ri';
import { useAside } from '../../hooks/Aside';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';

export function Information() {
  const { setActive } = useAside();

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
        bg="#EFF5F5"
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
          <Icon 
            color="#497173" 
            icon={RiCloseLine} 
            handle={setActive}
          />
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
        bg="#EFF5F5"
        marginTop="0.75rem"
        padding="0.75rem"
      >
        <HStack>
          <Icon color="#497173" icon={RiImageLine} />
          <Text fontSize="0.875rem" color="#919191">7 Fotos</Text>
        </HStack>
        <HStack>
          <Icon color="#497173" icon={BiVideo} />
          <Text fontSize="0.875rem" color="#919191">1 Video</Text>
        </HStack>
        <HStack>
          <Icon color="#497173" icon={CgFile} />
          <Text fontSize="0.875rem" color="#919191">1 Arquivo</Text>
        </HStack>
      </Stack>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginTop="1rem"
        background="#EFF5F5"
        padding="1rem"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Icon color="#497173" paddingLeft="0.5rem" icon={BsCardChecklist} size="2xl" />
          <Text fontSize="1rem"> 8 Subsídios</Text>
        </Flex>
        <Icon color="#497173"
          icon={HiOutlineViewGridAdd}
          size="2xl"
          paddingRight="12rem"
        />
      </Flex>
      <Flex
        flex="1"
        overflowY="auto"
        background="#EFF5F5"
        css={{
          "&::-webkit-scrollbar": {
            width: "0.375rem",
            height: "0.375rem",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
        }}
        flexDirection="column"
        paddingX="1rem"
        alignItems="center"
      >
        <Checkbox name="Envio de documentação" icon={RiInformationLine} />
        <Stack spacing={-2} paddingLeft="1rem" width="100%">
          <Checkbox name="CPF" icon={RiInformationLine} />
          <Checkbox name="Email" icon={RiInformationLine} />
          <Checkbox name="Ramal" icon={RiInformationLine} />
        </Stack>
        <Box width="90%" border="1px solid #DDD" />

        <Checkbox name="Envio de documentação" icon={RiInformationLine} />
        <Stack spacing={-2} paddingLeft="1rem" width="100%">
          <Checkbox name="CPF" icon={RiInformationLine} />
          <Checkbox name="Email" icon={RiInformationLine} />
          <Checkbox name="Ramal" icon={RiInformationLine} />
        </Stack>
        <Box width="90%" border="1px solid #DDD" />

        <Checkbox name="Compra de material" icon={RiInformationLine} />
        <Checkbox name="Compra de material" icon={RiInformationLine} />
        <Checkbox name="Compra de material" icon={RiInformationLine} />
        <Checkbox name="Compra de material" icon={RiInformationLine} />
        <Checkbox name="Compra de material" icon={RiInformationLine} />
        <Checkbox name="Compra de material" icon={RiInformationLine} />

      </Flex>
    </Box>
  );
}