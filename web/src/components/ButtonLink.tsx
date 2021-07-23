import { Button, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import { Icon } from './Icon';

interface ButtonLinkProps {
  title: string;
  icon: ElementType;
  color: string;
}

export function ButtonLink({ title, color, icon }: ButtonLinkProps) {
  return (
    <Button
      variant="link"
      _focus={{
        outline: "0"
      }}
      _hover={{ textDecoration: 'none' }}
    >
      <Icon color={color} icon={icon} />
      <Text fontWeight="normal" color={color}>
        {title}
      </Text>
    </Button>
  );
}