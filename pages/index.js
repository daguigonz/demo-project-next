import 'isomorphic-fetch'

import ChannelGrid from '../components/ChannelGrid'
import Layout from '../components/Layout'

export default class extends React.Component {

  // Consumir Api con fetch
  static async getInitialProps() {
    let req = await fetch('https://api.audioboom.com/channels/recommended')
    let { body: channels } = await req.json()
    return { channels }
  }

  render() {

    const { channels } = this.props

    return <Layout title="Bienvenidos">
      <ChannelGrid channels={ channels } />
    </Layout>
  }
}