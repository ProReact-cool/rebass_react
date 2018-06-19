import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
// import { Head, ScopeProvider } from 'ok-docs'
import { Helmet as Head } from 'react-helmet'
import { ScopeProvider } from '@compositor/x0/components'
import pkg from '../package.json'
import * as Rebass from '../src'
import { photo } from './_constants'

import Layout from '!!babel-loader!ok-docs/src/Layout'

const scope = {
  ...Rebass,
  photo
}

export default class extends React.Component {
  static defaultProps = {
    navOrder: [
      'Home',
      'getting-started',
      'props',
      'grid-system',
      'theming',
      'extending',
      'components',
      'server-side-rendering',
    ]
  }

  state = {
    menu: false,
    update: fn => this.setState(fn)
  }

  render () {
    // const { Component, nav } = this.props
    /*
    nav.push({
      key: 'github',
      name: 'GitHub',
      path: 'https://github.com/jxnblk/rebass',
    })
    nav.push({
      key: 'jxnblk',
      name: 'Made by Jxnblk',
      path: 'https://jxnblk.com',
    })
    */

    // x0 app
    const {
      routes,
      route,
      render
    } = this.props

    const nav = [...routes]

    return (
      <React.Fragment>
        <Head>
          <title>Rebass</title>
          <meta
            name='description'
            content='React UI component library & design system, built with styled-components and styled-system'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Rebass' />
          <meta
            name='twitter:description'
            content='React UI component library & design system, built with styled-components and styled-system'
          />
          <meta name='twitter:image' content='https://jxnblk.com/rebass/card.png' />
          <link rel='stylesheet' href='https://fonts.google.com/css?family=Roboto+Mono' />
        </Head>
        <ScopeProvider scope={scope}>
          <RefunkProvider pkg={pkg}>
            <Rebass.Provider>
              <Layout
                {...this.state}
                routes={routes}
                nav={nav}
                content={render()}
              />
              {/*
              {render()}
              <Component
                {...this.props}
                nav={nav}
              />
              */}
              <Scripts />
            </Rebass.Provider>
          </RefunkProvider>
        </ScopeProvider>
      </React.Fragment>
    )
  }
}

const Scripts = props => (
  <React.Fragment>
    <Script value={ga} />
    <Script value={twttr} />
  </React.Fragment>
)

const Script = ({ value }) => false &&
  <script
    dangerouslySetInnerHTML={{
      __html: value
    }}
  />

const twttr = `
window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);
t._e = [];
t.ready = function(f) {
t._e.push(f);
};
return t;
}(document, "script", "twitter-wjs"));
`

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');
`
