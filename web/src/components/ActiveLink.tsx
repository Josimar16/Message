import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps } from 'next/link';
import { ReactElement, cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export const ActiveLink = ({
  children,
  ...rest
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const isPath = asPath === rest.href
    ? true
    : false;

  if (isPath) {
    return (
      <Link {...rest}>
        <a>
          {cloneElement(children, {
            color: 'green.300',
            size: '3xl'
          })}
        </a>
      </Link>
    );
  }
  return (
    <Link {...rest}>
      <a>
        {cloneElement(children)}
      </a>
    </Link>
  );
}