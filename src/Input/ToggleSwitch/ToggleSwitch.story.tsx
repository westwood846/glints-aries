import * as React from 'react';

import ToggleSwitch from './ToggleSwitch';
import { ToggleSwitchProps } from './ToggleSwitch.interface';
import StorybookComponent from '../../../stories/StorybookComponent';
import { SecondaryColor } from '../..';

const onClick = (e: any) => {}

const props: ToggleSwitchProps = {
  defaultActive: false,
  activeBallColor: SecondaryColor.white,
  inactiveBallColor: SecondaryColor.white,
  activeBackgroundColor: SecondaryColor.actionblue,
  inactiveBackgroundColor: SecondaryColor.grey,
  activeIconName: 'eye',
  inactiveIconName: 'eye-slashed',
  handleClick: onClick,
};

const propsObject = {
  ToggleSwitch: [
    {
      name: 'activeBackgroundColor',
      type: 'string',
      defaultValue: SecondaryColor.actionblue,
      require: 'No',
      possibleValue: 'Any hex code string',
      description:
        'The background color of the switch when the switch is active',
    },
    {
      name: 'inactiveBackgroundColor',
      type: 'string',
      defaultValue: SecondaryColor.darkgrey,
      require: 'No',
      possibleValue: 'Any hex code string',
      description:
        'The background color of the switch when the switch is inactive',
    },
    {
      name: 'activeBallColor',
      type: 'string',
      defaultValue: SecondaryColor.white,
      require: 'No',
      possibleValue: 'Any hex code string',
      description:
        'The color of ball(the switch handle) when the switch is active',
    },
    {
      name: 'inactiveBallColor',
      type: 'string',
      defaultValue: SecondaryColor.white,
      require: 'No',
      possibleValue: 'Any hex code string',
      description:
        'The color of ball(the switch handle) when the switch is inactive',
    },
    {
      name: 'defaultActive',
      type: 'boolean',
      defaultValue: false,
      require: 'No',
      possibleValue: 'True or False',
      description:
        'This will determine whether or not the component renders with an active or inactive state at the start.',
    },
  ],
};

const ToggleSwitchStory = () => (
  <StorybookComponent
    title="Toggle Switch"
    code="import { ToggleSwitch } from 'glints-aries'"
    propsObject={propsObject}
  >
    <ToggleSwitch {...props} />
  </StorybookComponent>
);

export default ToggleSwitchStory;
