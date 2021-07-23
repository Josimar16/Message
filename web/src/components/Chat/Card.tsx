import React from "react";
import {
  Flex,
  Avatar,
  Popover,
  Text,
  PopoverTrigger,
  Button,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { Icon } from "../Icon";
import { RiInformationLine, RiAddLine } from "react-icons/ri";

export function Card() {
  return (
    <>
      <Flex
        border="1px solid #ddd"
        borderRadius={8}
        alignItems="center"
        justifyContent="space-between"
        height="6rem"
        bg="#F5F5F5"
      >
        <Avatar size="lg" name={"teste"} cursor="pointer" marginX="0.5rem" />
        <Flex flexDirection="column" flex="1">
          <Flex justifyContent="space-between" alignItems="flex-start">
            <Text
              fontSize="1rem"
              color="#000"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              testando
            </Text>
            <Popover>
              <PopoverTrigger>
                <Button
                  variant="link"
                  _focus={{
                    outline: "0"
                  }}
                >
                  <Icon color="#497173" icon={RiInformationLine} />
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Informações</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>Alguma coisa aqui</PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>

          <Text fontSize="0.90rem" color="#999" whiteSpace="nowrap">
            Testando dnv
          </Text>
        </Flex>

        <Flex></Flex>
      </Flex>
      <Flex
        border="1px solid #ddd"
        borderRadius={8}
        padding="1rem"
        alignItems="center"
        bg="#F5F5F5"
      >
        <Button
          colorScheme="teal"
          variant="ghost"
          _focus={{ outline: "0", bgColor: "transparent" }}
          _hover={{ bgColor: "transparent" }}
          _active={{
            bg: "transparent",
          }}
          w="100%"
          h="100%"
        >
          <Icon icon={RiAddLine} color="teal" size="2xl" />

          <Text fontSize="1.25rem"> Adicionar </Text>
        </Button>
      </Flex>
    </>
  );
}