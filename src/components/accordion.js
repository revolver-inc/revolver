import React from "react"
import Collapsible from "react-collapsible"

const Accordion = ({ title, content, idx }) => {
  return (
    <Collapsible
      trigger={title}
      transitionTime={200}
      easing="ease-in"
      open={idx === 0}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Collapsible>
  )
}

export default Accordion
