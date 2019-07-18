import CMS from "netlify-cms"
import React, { Component } from "react"
import PropTypes from "prop-types"
import uuidv4 from "uuid/v4"

export class UuidControl extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: "",
  }

  componentDidMount() {
    const { value, onChange } = this.props

    if (!value) {
      onChange(uuidv4())
    }
  }

  render() {
    const { value, classNameWrapper, forID } = this.props

    return (
      <span id={forID} className={classNameWrapper}>
        {value}
      </span>
    )
  }
}

export const UuidPreview = props => <div />
