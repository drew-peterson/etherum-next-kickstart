import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import axios from 'axios';
import Layout from '../components/Layout';
import { Link } from '../routes';

class Drew extends Component {
  static async getInitialProps() {
    return {};
  }

  state = {
    message: ''
  };

  drew = async () => {
    const res = await axios.post('/drew');
    this.setState({ message: res.data.message });
  };

  render() {
    return (
      <Layout>
        <Link route="/">
          <a href="">Back</a>
        </Link>
        <Button content="Get Secret Message [POST]" onClick={this.drew} />
        <h1>secret message is: {this.state.message}</h1>
      </Layout>
    );
  }
}

export default Drew;
