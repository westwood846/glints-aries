import React, { Component } from 'react';

import {
  AutoCompleteContainer,
  AutoCompleteLabel,
  AutoCompleteInput,
} from '../../Style/Input/AutoCompleteStyle';

class AutoComplete extends Component <Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      floating: false,
    };
  }

  handleFocusChange = (onBlur) => {
    const listener = (e) => {
      this.setState({
        floating: e.target.value.length > 0,
      });

      if (onBlur !== undefined) {
        return onBlur();
      }
    };

    return listener;
  }

  componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value !== undefined || defaultValue !== undefined) {
      if (value !== '') {
        this.setState({
          floating: true,
        });
      }
    }
  }

  render() {
    const {
      label,
      value,
      status,
      disabled,
      className,
      onBlur,
      small,
      removeFloatingLabel,
      ...defaultProps
    } = this.props;

    const { floating } = this.state;

    return (
      <AutoCompleteContainer id="aries-textfield" className={className}>
        <AutoCompleteInput
          type="text"
          placeholder={removeFloatingLabel && label}
          status={status}
          disabled={disabled}
          onBlur={this.handleFocusChange(onBlur)}
          floating={floating}
          value={value}
          aria-label={label}
          small={small}
          {...defaultProps}
        />
        <If condition={!removeFloatingLabel}>
          <AutoCompleteLabel
            floating={floating}
            status={status}
            small={small}
          >
            {label}
          </AutoCompleteLabel>
        </If>
      </AutoCompleteContainer>
    );
  }
}

type Props = {
  label: string,
  status: string,
  disabled: boolean,
  className: string,
  small: boolean,
  removeFloatingLabel: boolean,
}

type State = {
  floating: boolean,
};

export default AutoComplete;
