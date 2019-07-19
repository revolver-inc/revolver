import React from "react"
import Collapsible from "react-collapsible"

const Accordion = ({ title, content }) => {
  return (
    <Collapsible trigger={title}>
      <p>{content}</p>
    </Collapsible>
  )
}

export default Accordion
