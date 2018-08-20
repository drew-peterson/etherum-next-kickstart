import React, { Component } from 'react';
import { Table, Button, Message } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import Campaign from '../../ethereum/campaign';
import { Router } from '../../routes';

class RequestsTable extends Component {
  state = {
    loading: false,
    errorMessage: ''
  };
  onApprove = async index => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: '' });
    try {
      await campaign.methods.approveRequest(index).send({
        from: accounts[0]
      });
      Router.replaceRoute(`/campaign/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  finalizeRequest = async index => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true, errorMessage: '' });

    try {
      await campaign.methods.finalizeRequest(index).send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  renderCells(
    { value, description, recipient, approvalCount, complete },
    index
  ) {
    const { Cell } = Table;
    const { approversCount } = this.props;
    const { loading } = this.state;
    return [
      <Cell key={0}>{index}</Cell>,
      <Cell key={1}>{description}</Cell>,
      <Cell key={2}>{web3.utils.fromWei(value, 'ether')}</Cell>,
      <Cell key={3}>{recipient}</Cell>,
      <Cell key={4}>
        {approvalCount}/{approversCount}
      </Cell>,
      <Cell key={5}>
        {complete ? null : (
          <Button
            loading={loading}
            color="green"
            basic
            onClick={() => this.onApprove(index)}
          >
            Approve
          </Button>
        )}
      </Cell>,
      <Cell key={6}>
        {complete ? null : (
          <Button
            color="teal"
            basic
            loading={loading}
            onClick={() => this.finalizeRequest(index)}
          >
            Finalize
          </Button>
        )}
      </Cell>
    ];
  }
  renderRows() {
    const { Row, Cell } = Table;

    return this.props.requests.map((request, index) => {
      const readyToFinalize =
        request.approvalCount > this.props.approversCount / 2;
      return (
        <Row
          positive={readyToFinalize && !request.complete}
          disabled={request.complete}
          key={index}
        >
          {this.renderCells(request, index)}
        </Row>
      );
    });
  }

  renderHeader() {
    const { HeaderCell } = Table;
    const headerCells = [
      'ID',
      'Description',
      'Amount',
      'Recipient',
      'Approval Count',
      'Approve',
      'Finalize'
    ];
    return headerCells.map((header, index) => (
      <HeaderCell key={index}>{header}</HeaderCell>
    ));
  }

  render() {
    const { Header, Row, Body } = Table;
    const { errorMessage } = this.state;

    return (
      <div>
        <Table>
          <Header>
            <Row>{this.renderHeader()}</Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <Message
          hidden={!errorMessage}
          error
          header="Oops.."
          content={errorMessage}
        />
      </div>
    );
  }
}

export default RequestsTable;
