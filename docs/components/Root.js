
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Container,
  PageHeader,
  Heading,
  Section,
  SectionHeader,
  NavItem,
  Divider
} from '../../src'
import PropsTable from './PropsTable'
import Example from './Example'
import Permutations from './Permutations'

const css = `
.caps {
  text-transform: uppercase;
  letter-spacing: .2em;
}
.Button:hover {
  color: black;
}
.tomato { color: tomato }
`

class Root extends React.Component {

  constructor () {
    super()
  }

  static childContextTypes = {
    rebass: React.PropTypes.object
  }

  getChildContext () {
    return {
      rebass: {
      }
    }
  }

  render () {
    const { components, examples, description, version } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>Rebass</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href='https://npmcdn.com/basscss-basic@1.0.0/index.css' rel='stylesheet' />
          <link href='https://npmcdn.com/basscss@8.0.1/css/basscss.min.css' rel='stylesheet' />
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <Container>
            <PageHeader
              title='Rebass'
              description={`${components.length} ${description} [v${version}]`} />
            <nav>
              {components.map(c => (
                <NavItem key={c.name} href={`#${c.name}`} children={c.name} />
              ))}
            </nav>
            <main>
              <Divider />
              {components.map(component => {
                const { Component } = component
                return (
                  <section key={component.name}
                    id={component.name}
                    className='py3'>
                    <SectionHeader
                      title={component.name}
                      href={`#${component.name}`}
                      description={component.description || '☞ NEEDS DESCRIPTION'} />
                    {component.example && <Example example={component.example} />}
                    <Permutations {...component} />
                    <PropsTable props={component.props} />
                  </section>
                )
              })}
            </main>
            <hr />
            <pre className='tomato'>{JSON.stringify(this.props, null, 2)}</pre>
          </Container>
        </body>
      </html>
    )
  }
}

export default Root

