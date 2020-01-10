import React from 'react'
import { NextPage } from 'next'
import Component from '../components'

type Props = {
  title: string
}
type NextPageWithProps = NextPage<Props>

const IndexPage: NextPageWithProps = ({ title }) => (
  <>
    <div>
      <h1>{ title }</h1>
    </div>
    <Component />
  </>
)
IndexPage.getInitialProps = async () => ({
  title: 'Hello world with Next.js!'
})

export default IndexPage
