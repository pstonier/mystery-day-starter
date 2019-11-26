import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import EventStop from "../components/event-stop"
import bgImage from "../images/jassemine-mystery-day-background.png"
import tacoPaul from "../images/paul-at-taco-bell.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <EventStop
      eventNumber="1"
      eventLocation="Taco Bell"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="2"
      eventLocation="Cafe Kubala"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="3"
      eventLocation="Everson Museum of Art"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="4"
      eventLocation="Otro Cinco"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="5"
      eventLocation="Roji Tea Lounge"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="6"
      eventLocation="The Sweet Praxis"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="7"
      eventLocation="Books n Tunes"
      eventImage={ tacoPaul }
    />
    <EventStop
      eventNumber="7"
      eventLocation="DestinyUSA"
      eventDescription="Torrid, Nordstrom, etc."
      eventImage={ tacoPaul }
    />
  </Layout>
)

export default IndexPage
