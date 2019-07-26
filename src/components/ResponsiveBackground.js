import React from "react"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"

import Background from "./Background"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 767 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 575 })
  return isMobile ? children : null
}

const MobileBackground = styled(Background)`
  background-size: 230% 100%, cover, cover;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center, left;
`

const TabletBackground = styled(Background)`
  background-size: 160% 100%, cover, cover;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center, left;
`

const DesktopBackground = styled(Background)`
  background-size: 100% 100%, cover, cover;
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center, left;
`

const ResponsiveBackground = ({ children }) => (
  <>
    <Mobile>
      <MobileBackground>{children}</MobileBackground>
    </Mobile>
    <Tablet>
      <TabletBackground>{children}</TabletBackground>
    </Tablet>
    <Desktop>
      <DesktopBackground>{children}</DesktopBackground>
    </Desktop>
  </>
)

export default ResponsiveBackground
