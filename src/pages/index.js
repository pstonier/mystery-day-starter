import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import EventStop from "../components/event-stop"
import bgImage from "../images/jassemine-mystery-day-background.png"
import tacoPaul from "../images/paul-at-taco-bell.jpg"
import cafeKubal from "../images/cafe-kubal.jpg"
import eversonMuseum from "../images/everson-museum.jpg"
import otroCinco from "../images/otro-cinco.jpg"
import RojiTea from "../images/roji-tea.jpg"
import SweetPraxis from "../images/sweet-praxis.jpg"
import BooksMelodies from "../images/books-melodies.jpg"
import DestinyUSA from "../images/destiny-usa.jpg"

const IndexPage = () => [
  <Helmet>
    <link href="https://fonts.googleapis.com/css?family=Calistoga&display=swap" rel="stylesheet"></link>
  </Helmet>,
  <Layout>
    <SEO title="Home" />
    <div className="intro">
      <p>On December 7th, we'll be off on another adventure together to explore Syracuse.</p>
      <p>You'll have $100 to spend on whatever you like as we shop with some yummy pit stops along the way.</p>
    </div>
    <EventStop
      eventNumber="1"
      eventLocation="Taco Bell"
      eventImage={ tacoPaul }
      eventLink="https://www.instagram.com/tacobell/"
      eventDescription="Hanging with my Taco Bell Bae"
    />
    <EventStop
      eventNumber="2"
      eventLocation="Cafe Kubal"
      eventImage={ cafeKubal }
      eventLink="https://www.instagram.com/cafekubal/"
      eventDescription="Energy and maybe a snack for our next adventure."
    />
    <EventStop
      eventNumber="3"
      eventLocation="Everson Museum of Art"
      eventImage={ eversonMuseum }
      eventLink="https://www.instagram.com/eversonmuseum/"
    />
    <EventStop
      eventNumber="4"
      eventLocation="Otro Cinco"
      eventImage={ otroCinco }
      eventDescription="Linner"
      eventLink="https://www.instagram.com/otro5cinco/"
    />
    <EventStop
      eventNumber="5"
      eventLocation="Roji Tea Lounge"
      eventImage={ RojiTea }
      eventDescription="Let's get some boba!"
      eventLink="https://www.instagram.com/rojitealounge/"
    />
    <EventStop
      eventNumber="6"
      eventLocation="The Sweet Praxis"
      eventImage={ SweetPraxis }
      eventDescription="Sweets for my sweet."
      eventLink="https://www.instagram.com/thesweetpraxis/"
    />
    <EventStop
      eventNumber="7"
      eventLocation="Books n Melodies"
      eventImage={ BooksMelodies }
      eventLink="https://www.instagram.com/books_and_melodies/"
      eventDescription="Gettin jazzy…"
    />
    <EventStop
      eventNumber="8"
      eventLocation="DestinyUSA"
      eventDescription="Torrid, Nordstrom, etc… it's your turn for a shopping montage."
      eventImage={ DestinyUSA }
      eventLink="https://www.instagram.com/destinyusa/"
    />
  </Layout>
]

export default IndexPage
