import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import { Link } from '../../routes';
import Campaign from '../../ethereum/campaign';
import Layout from '../../components/Layout';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of manager',
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: {
          overflowWrap: 'break-word'
        }
      },
      {
        header: minimumContribution,
        meta: 'Minimum contribution (wei)',
        description:
          'You must contribute at least this much to become a approver'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved first.'
      },
      {
        header: approversCount,
        meta: 'Number of approvers',
        description:
          'Number of people that have already donated to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance is how much money this campaign has left to spend'
      }
    ];

    return <Card.Group items={items} stackable />;
  }

  render() {
    // Row have to have 1 Col inside
    return (
      <Layout>
        <h3>Campaign Details</h3>

        <Grid>
          <Grid.Row reversed="computer">
            <Grid.Column mobile={16} computer={6}>
              <div>
                <ContributeForm address={this.props.address} />
                <style jsx>
                  {`
                    @media (max-width: 425px) {
                      div {
                        margin-bottom: 30px;
                      }
                    }
                  `}
                </style>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} computer={10}>
              {this.renderCards()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaign/${this.props.address}/requests`}>
                <a href="">
                  <Button primary>View Request</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
