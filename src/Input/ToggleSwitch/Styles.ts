import styled from 'styled-components';
import { ToggleBallProps, ToggleProps } from './ToggleSwitch.interface';

const ToggleSwitchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Toggle = styled.div<ToggleProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${({
    activeBackgroundColor,
    inactiveBackgroundColor,
    active,
  }) => (active ? activeBackgroundColor : inactiveBackgroundColor)};
  height: 25px;
  width: 56px;
  border-radius: 14px;
`;

const ToggleBall = styled.div<ToggleBallProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: ${props => props.inactiveBallColor};
  height: 19px;
  width: 19px;
  margin: 3px;
  transform: ${props =>
    props.active ? `translateX(31px)` : 'translateX(0px)'};
  &:active {
    background-color: ${props => props.activeBallColor};
  }
`;

export { ToggleSwitchWrapper, ToggleBall, Toggle };
