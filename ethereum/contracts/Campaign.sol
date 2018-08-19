pragma solidity ^0.4.17;

// FACTORY
contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minium) public {
        // deploy new instastance to blockchain
        address newCampaign = new Campaign(minium, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    //public: anyone can call
    // view: no data in contract is modified
    //returns: we are going to return a array of address
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}



contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount; // cannot/should not interate so we keep track
    }

   // storage on contract
    address public manager;
    uint public minimumContribution;
    Request[] public requests; // array of Request struct
    // keys are not stored in mapping
    // cannot interate over maping only lookup
    mapping(address => bool) public approvers;
    // avoid arrays whenever possible
   // never iterate over dynamic arrays
   uint public approversCount;


    // modifier usually go above contstructor
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

   constructor(uint minium, address creator) public {
        manager = creator;
        minimumContribution = minium;
    }

    // able to receive money w/ payable
    function contribute() public payable {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true; // create new key w/ address
        approversCount++;
    }

    // memory: copy of data, gets dumped after function exists - only usual in function
    // default is always memory with passing arguments can change with (uint storage amount){}
    //storage: will point to variables and hold state
    function createRequest(string description, uint value, address recipient) public restricted {
        // no request in storage so cannot point
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
          complete: false,
          approvalCount: 0
          // approvals is not required as its a reference
        });

        // alternative syntax
        // Request(description, value, recipient, false) // order is important - avoid this syntax

        requests.push(newRequest);
    }

    function approveRequest(uint index ) public {
        Request storage request = requests[index]; // no copy get real storage var and update
        // if false kick
        require(approvers[msg.sender]); // user is contributor
        require(!request.approvals[msg.sender]); // user has to voted already

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        require(!request.complete);
        require(request.approvalCount > (approversCount / 2)); // 50% of contributors must vote true

        request.recipient.transfer(request.value); // transfer funds - address has transfer method
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          address(this).balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestCount() public view returns (uint){
      return requests.length;
    }
}
