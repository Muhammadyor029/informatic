import React from 'react';

type GlassProps<T extends React.ElementType = 'div'> = {
  as?: T;
  refract?: boolean;
  interactive?: boolean;
  pill?: boolean;
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;

export function Glass<T extends React.ElementType = 'div'>({
  as,
  refract = false,
  interactive = false,
  pill = false,
  active,
  className = '',
  children,
  ...rest
}: GlassProps<T>) {
  const Tag = (as ?? 'div') as React.ElementType;
  return (
    <Tag
      data-active={active ? 'true' : undefined}
      className={[
        'lg-glass',
        refract && 'lg-refract',
        interactive && 'lg-interactive',
        pill && 'lg-pill',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
}
