import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import { Router } from '../../routes';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
  state = {
    miniumContribution: '',
    errorMessage: '',
    loading: false
  };

  // dont need to bind(this) with this syntax
  handleSubmit = async e => {
    e.preventDefault();
    const { miniumContribution } = this.state;
    const accounts = await web3.eth.getAccounts(); // get accounts from metaMask - in browser dont need gas
    this.setState({ loading: true, errorMessage: '' });
    try {
      await factory.methods.createCampaign(miniumContribution).send({
        from: accounts[0]
      });
      Router.pushRoute('/'); // redirect to index
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    const { miniumContribution, message, errorMessage, loading } = this.state;
    return (
      <Layout>
        <h3>Create a Campaign</h3>

        <Form onSubmit={this.handleSubmit} error={!!errorMessage}>
          <Form.Field>
            <label htmlFor="">Minium Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={miniumContribution}
              onChange={e =>
                this.setState({ miniumContribution: e.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={errorMessage} />
          <Button
            content="Create"
            primary
            loading={loading}
            // disabled={loading}
          />
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
