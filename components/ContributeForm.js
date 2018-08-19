import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { value } = this.state;
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();

    this.setState({ loading: true, errorMessage: '' });
    try {
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(value, 'ether')
      });
      Router.replaceRoute(`/campaign/${this.props.address}`); // refresh page and fetch new data
    } catch ({ message }) {
      this.setState({ errorMessage: message });
    }
    this.setState({ loading: false, value: '' });
  };

  render() {
    const { errorMessage, value, loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label htmlFor="">Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={value}
            onChange={e => this.setState({ value: e.target.value })}
          />
        </Form.Field>
        <Message error header="Oops.." content={errorMessage} />
        <Button primary loading={loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
