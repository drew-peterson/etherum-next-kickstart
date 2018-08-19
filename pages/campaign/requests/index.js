import React, { Component } from 'react';
import { Button, Grid, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import RequestsTable from '../../../components/RequestsTable';
import { Link } from '../../../routes';
import web3 from '../../../ethereum/web3';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    // solidity cannot return a array of structs
    // so we have to get them individually
    const requests = await Promise.all(
      Array(parseInt(requestCount)) // need to be a number or error ok at 0
        .fill() // create a new array and fill it but requesetCount # undefined
        .map((_, index) => campaign.methods.requests(index).call())
    );
    return { address, requests, approversCount };
  }
  render() {
    const { requests, approversCount, address } = this.props;
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaign/${this.props.address}/requests/new`}>
          <a href="">
            <Button primary> Add Request</Button>
          </a>
        </Link>
        <RequestsTable
          requests={requests}
          approversCount={approversCount}
          address={address}
        />
      </Layout>
    );
  }
}
export default RequestIndex;
