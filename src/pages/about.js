import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <Seo title="About Us" />
      <h1>About Me!</h1>
      <p>
        I’m a Web Designer + Front-End Web Developer. A Queens Native, now
        residing in Brooklyn. I grew up in St.Albans, Queens, which is known for
        its deep history in Jazz and Hip-Hop culture. It’s lead me to be “a
        Hungry Hip-Hop Junkie” with a passion for visual art and new technology.
        Hobbies include: Photography, Video Games, Comic Books, R/C racing.
      </p>
      <p>
        I also run my business – StompinGrounDigital Design (SGD-DESIGN).
        Through it, I have worked on a variety of freelance projects (Web,
        Interactive, Print &amp; Identity), some of my most recent projects
        include: Loud Speakers Network, YouGottaEatThis, Swaray, BCakeNY and
        Black Girls Rock
      </p>
      <h3 class="fulltime__description_title is-animated animated fadeInUp">
        Front-End Web Developer
      </h3>
      <div class="about-fulltime-logo is-animated animated fadeInUp">
        <img
          class="desktop"
          title="UMG"
          alt="UMG"
          src="https://www.calvinharris.me/wp-content/uploads/2016/03/universal.png"
        />
      </div>
      <h3 class="freelance__description_title is-animated animated fadeInUp">
        Founder
      </h3>
      <div class="about-freelance-logo is-animated animated fadeInUp">
        <img
          class="desktop"
          title=""
          alt=""
          src="https://www.calvinharris.me/wp-content/uploads/2016/03/SG_logo_textSymbol_white.png"
        />
      </div>
      <h3 class="skills-title is-animated animated fadeInUp">Skills</h3>
      <ul class="skills">
        <li class="skill_level_4 is-animated animated fadeInUp">Wordpress </li>
        <li class="skill_level_2 is-animated animated fadeInUp">Drupal </li>
        <li class="skill_level_4 is-animated animated fadeInUp">PHP/MySQL </li>
        <li class="skill_level_4 is-animated animated fadeInUp">
          HTML / SASS{" "}
        </li>
        <li class="skill_level_4 is-animated animated fadeInUp">
          Javascript / jQuery{" "}
        </li>
        <li class="skill_level_3 is-animated animated fadeInUp">
          Node, Gulp, Bower{" "}
        </li>
        <li class="skill_level_3 is-animated animated fadeInUp">GIT </li>
        <li class="skill_level_4 is-animated animated fadeInUp">HTML Email </li>
        <li class="skill_level_4 is-animated animated fadeInUp">
          Adobe CS6 + CC{" "}
        </li>
      </ul>
      <h3 class="clients-title is-animated animated fadeInUp">Clients</h3>
      <ul class="list-inline clients">
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/defjam_logo-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/island_logo-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/republic_logo-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/logo-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/BGR_logo_2016-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/lsn_logo-1.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/TheCombatJackShow_logo_white.png"
          />
        </li>
        <li class="is-animated animated fadeInUp">
          <img
            class="client"
            title=""
            alt=""
            src="https://www.calvinharris.me/wp-content/uploads/2014/07/yget_website_footer.png"
          />
        </li>
      </ul>
      <p>
        Go back <Link to={"/"}>home</Link>
      </p>
    </Layout>
  )
}
