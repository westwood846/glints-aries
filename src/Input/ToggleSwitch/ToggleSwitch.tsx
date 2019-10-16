import * as React from 'react';

import { Icon, SecondaryColor } from '../../index';
import { Toggle, ToggleBall, ToggleSwitchWrapper, ToggleSwitchProps } from './';

const ToggleSwitch: React.FunctionComponent<ToggleSwitchProps> = ({
  defaultActive,
  activeIconName,
  inactiveIconName,
  activeBackgroundColor,
  inactiveBackgroundColor,
  activeBallColor,
  inactiveBallColor,
  onChange,
}) => {
  const [active, setActive] = React.useState(defaultActive || false);

  return (
    <ToggleSwitchWrapper>
      <Toggle
        onClick={() => {
          const newActiveState = !active;
          setActive(newActiveState);
          if(onChange) onChange(newActiveState);
        }}
        active={active}
        activeBackgroundColor={activeBackgroundColor}
        inactiveBackgroundColor={inactiveBackgroundColor}
      >
        <ToggleBall
          active={active}
          activeBallColor={activeBallColor}
          inactiveBallColor={inactiveBallColor}
        >
          {activeIconName && inactiveIconName && (
            <Icon
              name={active ? activeIconName : inactiveIconName}
              color={active ? activeBackgroundColor : inactiveBackgroundColor}
            />
          )}
        </ToggleBall>
      </Toggle>
    </ToggleSwitchWrapper>
  );
};

ToggleSwitch.defaultProps = {
  activeBackgroundColor: SecondaryColor.actionblue,
  inactiveBackgroundColor: SecondaryColor.darkgrey,
  activeBallColor: SecondaryColor.white,
  inactiveBallColor: SecondaryColor.white,
  defaultActive: false,
};

export default ToggleSwitch;
