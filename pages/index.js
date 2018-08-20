import React, { Component } from 'react';
import { Card, Button, Grid } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  // static : class function - dont have to create an instance
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const { campaigns } = this.props;
    const items = campaigns.map(address => ({
      header: address,
      description: (
        <Link route={`/campaign/${address}`}>
          <a>View Campaign</a>
        </Link>
      ),
      fluid: true // fill parent width
    }));

    return <Card.Group items={items} />;
  }

  render() {
    const { Row, Column } = Grid;
    return (
      <Layout>
        <h3>Open Campaigns</h3>
        <Grid columns="equal" stackable>
          <Row textAlign="justified" reversed="tablet computer">
            <Column>
              <Link route="/campaign/new">
                <a>
                  <Button content="Create Campaign" icon="add circle" primary />
                </a>
              </Link>
            </Column>
            <Column>{this.renderCampaigns()}</Column>
          </Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;
