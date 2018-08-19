import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestsTable extends Component {
  state = {
    loading: false
  };
  onApprove = async index => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    this.setState({ loading: true });
    try {
      await campaign.methods.approveRequest(index).send({
        from: accounts[0]
      });
      Router.replaceRoute(`/campaign/${this.props.address}/requests`);
    } catch (err) {
      console.log('err', err);
    }
    this.setState({ loading: false });
  };

  renderCells({ value, description, recipient, approvalCount }, index) {
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
        <Button
          loading={loading}
          color="green"
          basic
          onClick={() => this.onApprove(index)}
        >
          Approve
        </Button>
      </Cell>,
      <Cell key={6}>
        <Button color="red" basic>
          Finalize
        </Button>
      </Cell>
    ];
  }
  renderRows() {
    const { Row, Cell } = Table;
    return this.props.requests.map((request, index) => {
      return <Row key={index}>{this.renderCells(request, index)}</Row>;
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    return (
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Descripti</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>{this.renderRows()}</Body>
      </Table>
    );
  }
}

export default RequestsTable;
