import React from "react"

import { scrollTo } from "../lib/utils"

import { 
  Page, 
  Section,
  Hero, 
  SEO
} from "../components/ui"
import {
  Services,
  Solutions,
  Pricing
} from "../containers"
import {
  EmailLeadSubscriptionForm
} from "../containers/forms"

const IndexPage = () => (
  <Page
    pageLayout="vertical"
    contentLayout="vertical"
    contentSpacing="fluid"
    justifyNavContent="end"
    navPlacement="sticky"
  >
    <SEO title="Home" />
    <Section>{/* Fullscreen Hero */}
      <Hero
        bgImage="https://cdn.stocksnap.io/img-thumbs/960w/A0DYKMDRAL.jpg"
        subtitle="We are the web dev agency"
        title="Grow your digital business today"
        alignTitle="right"
        textColor="#fffafa"
        invertTitlePlacement
        fullscreen
      >
        <a 
          onClick={() => scrollTo('.services__container')} 
          className="btn__link animated fadeInUp delay-2s"
        >
          Learn More
        </a>
      </Hero>
    </Section>
    <Section>{/* Services */}
      <Services/>
    </Section>
    <Section>{/* Video CTA (Hero) */}
      <Hero
        title="10 reasons to get a website"
        bgColor="#f6f7fe"
        alignTitle="center"
        isFlat
      >
        <a href="#" className="btn__play">
          <div className="btn__play--icon">
            <i className="fas fa-play"/>
          </div>
          <div className="btn__play--cta">
            <h4>Watch Video</h4>
          </div>
        </a>
      </Hero>
    </Section>
    <Section>{/* Solutions  */}
      <Hero
        title="Unleash cross-media timely deliverables"
        alignTitle="left"
        alignFooter="left"
      >
        <Solutions/>
      </Hero>
      <Section isWide bgColor="#fffafa">
        <figure className="image__container">
          <img 
            src="https://colabrio.ams3.cdn.digitaloceanspaces.com/norebro_landing/demo16/2017/08/dm16__image_09-min.png"
            srcSet="https://colabrio.ams3.cdn.digitaloceanspaces.com/norebro_landing/demo16/2017/08/dm16__image_09-min.png 349w, https://colabrio.ams3.cdn.digitaloceanspaces.com/norebro_landing/demo16/2017/08/dm16__image_09-min-233x300.png 233w, https://colabrio.ams3.cdn.digitaloceanspaces.com/norebro_landing/demo16/2017/08/dm16__image_09-min-120x155.png 120w"  
          />
        </figure>
      </Section>
    </Section>
    <Section>{/* Pricing */}
      <Hero
        title="Simple Pricing"
        subtitle="Your first 30 days are free! - no credit card required"
        
      >
        <Pricing/>
      </Hero>
    </Section>
    <Section bgColor="#f6f7fe" style={{ padding: `60px 25px 60px 25px` }}>{/* Newsletter Subscription */}
      <header>
        <h3>Be the first to know</h3>
        <p>
          <b>Your first 30 days are free!</b>
          - no credit card required &nbsp; {`👍`}
        </p>
      </header>
      <EmailLeadSubscriptionForm/>
    </Section>
  </Page>
)

export default IndexPage
