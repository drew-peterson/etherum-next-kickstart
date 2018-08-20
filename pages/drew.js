import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
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
    const { Column, Row } = Grid;
    return (
      <Layout>
        <Grid>
          <Row>
            <Link route="/">
              <a href="">Back</a>
            </Link>
          </Row>
          <Row>
            <Column>
              <Button content="Get Secret Message [POST]" onClick={this.drew} />
            </Column>
            <Column>
              <h1>secret message is: {this.state.message}</h1>
            </Column>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default Drew;
