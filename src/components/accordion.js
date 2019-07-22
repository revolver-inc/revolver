import React from "react"
import Collapsible from "react-collapsible"

const Accordion = ({ title, content }) => {
  return (
    <Collapsible trigger={title} transitionTime={200} easing="ease-in">
      <p>{content}</p>
    </Collapsible>
  )
}

export default Accordion
