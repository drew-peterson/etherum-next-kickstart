import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import RequestNewForm from '../../../components/RequestNewForm';

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }
  render() {
    return (
      <Layout>
        <Link route={`/campaign/${this.props.address}/requests`}>
          <a href="">Back</a>
        </Link>
        <h3>Create a Request</h3>
        <RequestNewForm address={this.props.address} />
      </Layout>
    );
  }
}

export default RequestNew;
