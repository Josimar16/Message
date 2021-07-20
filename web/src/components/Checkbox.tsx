import { ElementType } from 'react';
import {
  HStack,
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
    <HStack
      justifyContent="space-between"
      alignItems="center"
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
            <Icon icon={icon} />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        </PopoverContent>
      </Popover>
    </HStack>
  );
}