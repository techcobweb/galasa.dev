import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Identifier from "../identifier/identifier"
import GitHubSVG from "../../images/github.inline.svg"
import TwitterSVG from "../../images/twitter.inline.svg"
import SpectrumSVG from "../../images/spectrum.inline.svg"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        consts: { githubOrgUrl, twitterUrl, spectrumUrl },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          consts {
            githubOrgUrl
            twitterUrl
            spectrumUrl
          }
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.identifier}>
        <Identifier id="footer-identifier" />
      </div>
      <div className={footerStyles.links}>
        <a href="https://www.ibm.com/privacy/us/en/">Privacy policy</a>
        <a href="https://www.ibm.com/legal">Terms of use</a>
      </div>
      <div>An open source project by IBM. Built in Hursley, UK.</div>
      <div>
        <a className={footerStyles.icon} href={githubOrgUrl}>
          <GitHubSVG />
        </a>
        <a className={footerStyles.icon} href={twitterUrl}>
          <TwitterSVG />
        </a>
        <a className={footerStyles.icon} href={spectrumUrl}>
          <SpectrumSVG />
        </a>
      </div>
    </footer>
  )
}

export default Footer
