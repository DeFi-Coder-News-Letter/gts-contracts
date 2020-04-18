pragma solidity ^0.4.24;

import "../../contracts/GTSImplementationV2.sol";


contract GTSWithBalance is GTSImplementationV2 {

    function initializeBalance(address initialAccount, uint initialBalance) public {
        balances[initialAccount] = initialBalance;
        totalSupply_ = initialBalance;
    }

}
