import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import { Router, Link } from '../routes';
import web3 from '../ethereum/web3';

class RequestNewForm extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    loading: false,
    errorMessage: false
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { description, recipient, value } = this.state;
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: '' });
    try {
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({
          from: accounts[0]
        });
      Router.pushRoute(`/campaign/${this.props.address}/requests`);
    } catch ({ message }) {
      this.setState({ errorMessage: message });
    }
    this.setState({ loading: false });
  };

  render() {
    const { loading, errorMessage, value, description, recipient } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} error={!!errorMessage}>
        <Form.Field>
          <label htmlFor="">Description</label>
          <Input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="">Value in Ether</label>
          <Input
            value={value}
            label="Ether"
            labelPosition="right"
            onChange={e => this.setState({ value: e.target.value })}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="">Recipient</label>
          <Input
            value={recipient}
            onChange={e => this.setState({ recipient: e.target.value })}
          />
        </Form.Field>
        <Message error header="Oops.." content={errorMessage} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
    );
  }
}

export default RequestNewForm;
