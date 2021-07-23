import { Avatar, Box, Flex, Switch, Text } from "@chakra-ui/react";
import React from "react";
import { RiMoonLine, RiParentLine, RiSearch2Line } from "react-icons/ri";
import { Icon } from "./Icon";
import { Modal } from "./Modal";
import { Participants } from "./Participants";

export function Profile() {
  return (
    <Modal title="Perfil" size="sm">
      <Box
        as={Flex}
        width="100%"
        bg="#FFF"
        max-width="26rem"
        flexDirection="column"
        // borderLeft="1px solid #DDD"
        height="80vh"
      >
        <Flex
          flexDirection="column"
          padding="1.5rem"
          alignItems="center"
          background="#EFF5F5"
        >
          <Avatar
            w="6rem"
            h="6rem"
            name="Josimar Junior"
            cursor="pointer"
            marginX="1rem"
          />
          <Text marginTop="0.5rem" fontSize="1rem">
            Nome teste
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          marginTop="1rem"
          background="#EFF5F5"
          justifyContent="space-between"
          padding="1rem"
        >
          <Flex alignItems="center">
            <Icon color="#497173" icon={RiMoonLine} size="2xl" />
            <Text paddingLeft="1rem">
              Modo noturno
            </Text>
          </Flex>

          <Flex>
            <Switch size="lg" />
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          background="#EFF5F5"
          marginTop="1rem"
          alignItems="flex-start"
          padding="1rem"
        >
          <Text marginBottom="1rem">
            Ferramenta de voz para texto
          </Text>
          <Flex justifyContent="space-between" w="100%">
            <Flex alignItems="center">
              <Switch size="lg" isChecked />
              <Text fontSize="1rem" paddingLeft="1rem">
                Português
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Switch id="email-alerts" size="lg" />
              <Text fontSize="1rem" paddingLeft="1rem">
                Inglês
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          marginTop="1rem"
          background="#EFF5F5"
          padding="1rem"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Icon 
              color="#497173" 
              paddingLeft="0.5rem" 
              icon={RiParentLine} 
              size="2xl" 
            />
            <Text fontSize="1rem">4 Participações</Text>
          </Flex>
          <Icon 
            color="#497173"
            icon={RiSearch2Line}
            size="2xl"
            paddingRight="12rem"
          />
        </Flex>
        <Flex
          flex="1"
          background="#EFF5F5"
          overflowY="auto"
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
          <Participants name="Departamento pessoal" members={10} />
          <Participants name="Jurídico Ofício" members={4} />
          <Participants name="Compras Claudia" members={7} />
          <Participants name="Suporte Jurídico" members={2} />
          <Participants name="Empresa Jurídico" members={2} />
          <Participants name="Suporte Dell" members={2} />
          <Participants name="Desenvolvimento CTI" members={2} />
          <Participants name="Suporte Redes" members={2} />
        </Flex>
      </Box>
    </Modal>
  );
}