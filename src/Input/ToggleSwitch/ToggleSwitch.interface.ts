interface ToggleSwitchProps {
  defaultActive?: Boolean;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
  activeBallColor?: string;
  inactiveBallColor?: string;
  activeIconName?: string;
  inactiveIconName?: string;
  onChange?: (active: boolean) => void;
  handleClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

interface ToggleProps {
  active: Boolean;
  activeBackgroundColor: string;
  inactiveBackgroundColor: string;
}

interface ToggleBallProps {
  active: Boolean;
  activeBallColor: string;
  inactiveBallColor: string;
}

export { ToggleSwitchProps, ToggleProps, ToggleBallProps };
