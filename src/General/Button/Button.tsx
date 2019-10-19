import * as React from 'react';

import DefaultButton from './DefaultButton';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import GhostButton from './GhostButton';
import LinkButton from './LinkButton';

import { Variant } from '../../Utils/StyleConfig';

const renderButton: React.FunctionComponent<Props> = ({
  children,
  block,
  className,
  disabled,
  onClick,
  removeHoverEffect,
  small,
  theme,
  variant,
  ...defaultProps
}) => {
  switch (variant) {
    case Variant.PRIMARY:
      return (
        <PrimaryButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {children}
        </PrimaryButton>
      );
    case Variant.SECONDARY:
      return (
        <SecondaryButton
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {children}
        </SecondaryButton>
      );
    case Variant.GHOST:
      return (
        <GhostButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </GhostButton>
      );
    case Variant.LINK:
      return (
        <LinkButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          {...defaultProps}
        >
          {children}
        </LinkButton>
      );
    default:
      return (
        <DefaultButton
          theme={theme}
          className={className}
          disabled={disabled}
          onClick={onClick}
          block={block}
          small={small}
          removeHoverEffect={removeHoverEffect}
          {...defaultProps}
        >
          {children}
        </DefaultButton>
      );
  }
};

const Button: React.FunctionComponent<Props> = props => (
  <React.Fragment>{renderButton(props)}</React.Fragment>
);

export interface Props {
  children: React.ReactNode;
  block?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  removeHoverEffect?: boolean;
  small?: boolean;
  theme?: string;
  variant?: string;
}

export default Button;
