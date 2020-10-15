import React from 'react'
import PropTypes from 'prop-types'

class BackTextInput extends React.Component {
  render () {
    const { value = '', stateName = '', onChange = () => {} } = this.props;
    return (
      <input
        name={stateName}
        value={value}
        onChange={val => onChange(stateName, val.target.value)}
        className="p-2 cursor-pointer"
        style={{
          textAlign: 'center',
          fontSize: 50,
          width: "100%",
          height: 100,
          borderRadius: 5,
          border: "1px solid rgba(0,0,0,.125)",
        }}
      />
    )
  }
}

export default BackTextInput;
