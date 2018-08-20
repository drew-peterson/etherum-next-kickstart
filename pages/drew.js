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
            <Column width={16}>
              <Link route="/">
                <a href="">Back</a>
              </Link>
            </Column>
          </Row>
          <Row>
            <Column width={6}>
              <Button content="Get Secret Message [POST]" onClick={this.drew} />
            </Column>
            <Column width={10}>
              <h3>secret message is: {this.state.message}</h3>
            </Column>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default Drew;
