import * as React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="My Favorite Films in 2024 So Far...">
      <div>
      <Link to="/KungFuPanda4">Kung Fu Panda 4</Link><br/>
      <Link to="/DunePartTwo">Dune: Part Two</Link>
      </div>
      </Layout>
  )
}

export default IndexPage