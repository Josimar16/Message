import { ElementType } from 'react';
import {
  Flex,
  Checkbox as CheckboxChakra,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button
} from '@chakra-ui/react';
import { Icon } from './Icon';

interface CheckboxProps {
  name: string;
  icon: ElementType;
}

export function Checkbox({ name, icon }: CheckboxProps) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <CheckboxChakra
        colorScheme="green"
        isChecked={true}
      >
        <Text fontSize="0.875rem" color="#919191" marginLeft="0.375rem">
          {name}
        </Text>
      </CheckboxChakra>
      <Popover>
        <PopoverTrigger>
          <Button
            variant="link"
            _focus={{
              outline: "0"
            }}
          >
            <Icon color="#497173" icon={icon} />
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{border: '0', outline: 0}}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Descrição</PopoverHeader>
          <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}