---
title: "Solidity Gas Optimizations 101"
author: "0xIchigo"
date: "2023-06-24"
tags: Solidity, Gas, Solidity Gas Optimizations, Mana, Optimizations, EVM, Ethereum
---
## Becoming an Optimizoor

Gas is bad, but it is a necessary evil that powers the Ethereum network. As a Solidity developer, you should do everything in your power to reduce unnecessary gas costs; a user shouldn't have to suffer from poorly written code. Those who wage war against this economic Leviathan are colloquially referred to as Optimizoors.

It is a common misconception that optimized code is often hard to read. Yes, as a developer, it's easy to spend countless hours going from rabbit hole to rabbit hole coding the most elegant solution to your problem, and that jaw-dropping piece of code is not necessarily nice to read. However, as you'll see throughout this blog post, there are a number of elegant optimizations that are both easy to implement and easy to read. Sure, I can rewrite most of my smart contract in Yul to make it extremely gas efficient, but I also have a higher likelihood of introducing different security vulnerabilities to my smart contract by adding unnecessary complexity. True Optimizoors are able to strike a tasteful balance between Solidity and Yul, sanity and craziness, decipherable code and near-indecipherable code. The key to writing clean Solidity code is to have a deep understanding of how the code is executed, and write code that optimizes in accordance to this execution.

The goal of this post is to start you down the path of an Optimizoor. We'll do a quick overview of gas and the EVM before introducing a number of gas-saving techniques. So, you want to become an Optimizoor? Are you ready to Pop Punk Not Pills? Let's brush up on gas.

![High Gas Fees](/images/high-gas.png)

## What is Gas?

The [Ethereum docs](https://ethereum.org/en/developers/docs/gas/) note that gas refers both to: "the unit that measures the amount of computational effort required to execute specific operations on the Ethereum network", and "the fee required to execute a transaction on Ethereum, regardless of transaction success or failure". Every operation performed on the Ethereum network consumes a certain amount of gas depending on the computational resources needed to compute the transaction. For a simple transaction, gas fees are usually around 21 000 units of gas. These fees are paid for in Ether, and the gas prices are denoted in gwei (10^-9 ETH).

Traditionally, transaction cost can be written as `(gasUsed - gasRefund) * gasPrice`, where:
- `gasUsed` is the total amount of gas needed to execute the transaction
- `gasRefund` is the reduction in overall gas cost due to certain gas-saving computations 
- `gasPrice` is the amount of Ether that the transaction `msg.sender` is willing to pay for each unit of gas used

We can rewrite this simply as `gasUsed - gasPrice` since `gasUsed` will include the refunded gas. There are two ways to receive a gas refund, or a discount on your transaction fee, which is applied after the transaction is completed: clearing storage within a smart contract, and destroying a contract. With the London Upgrade, however, there are other factors that influence transaction cost calculations.

### The London Upgrade
The London Upgrade was introduced with [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) to reform the transaction fee market as well as gas refunds. The London Upgrade introduced the concepts of a base fee, priority fee (tip), and max fee. 

The [Ethereum docs](https://ethereum.org/en/developers/docs/gas/#base-fee) note that "every block has a base fee which acts as its reserve price." So, for a block to be included it must meet this base fee. The base fee is calculated by comparing the size of the previous block with the target size (the target is around 15 million, but it can scale with network demand up to 30 million). This base fee can increase by a maximum of 12.5% per block if the target block size is exceeded.

Prior to the London Upgrade, miners would receive the total gas fee from a transaction included in a block. Now, with fees getting burned, priority fees, or tips, were introduced to incentivize miners to include a transaction in a block. Without fees, miners could simply mine empty blocks since the block reward would be the same as mining a full block. Users can provide a higher tip to outbid competing transactions and incentivize miners to include their transaction first.

A user can also specify a maximum limit they are willing to pay for their transaction to be executed known as a max fee. This max fee must be greater than the sum of the base fee and the tip in order for the transaction to be included. If their transaction is included, the `msg.sender` is refunded the difference between the max fee and the sum of the base fee and the tip.

The benefit of EIP-1559 is that gas prices are more predictable, which makes for a more efficient transaction fee market. It is vital to note that, regardless of this new efficient transaction fee market, fees can still get out of hand. High gas fees are due to network demand: performing any operation requires gas, and gas space is limited per block. So, if there is a great deal of demand users will offer a higher tip amount, outbidding other users, so their transaction gets included faster. How can a smart contract limit the number of operations required for its desired functionality such that it'll require less gas to be consumed?

### Opcodes
These operations that we keep talking about are commonly referred to as operation codes, or opcodes. Opcodes are predetermined instructions that the EVM is able to interpret and execute. Knowing the differernt types of opcodes and how they are called is essential to becoming an Optimizoor as the way in which a contract is written could require more than the necessary number of opcodes to achieve its desired functionality. So, not only can developers do certain operations to refund gas, such as resetting a storage value to zero, but the way in which contracts are written can reduce gas costs. 

The [Ethereum docs](https://ethereum.org/en/developers/docs/evm/opcodes/) has a good overview regarding opcodes. You can play around with different opcodes using the [EVM Playground](https://www.evm.codes/playground?fork=shanghai), comparing your Yul, Solidity, Bytecode, or Mnemomic code with their respective opcodes. You can also learn more about opcodes and gas by reading Ethereum's infamous [Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) or the [Beige Paper](https://github.com/chronaeon/beigepaper/blob/master/beigepaper.pdf), a beginner friendly rewrite of the Yellow Paper. I highly recommend you take the time to properly understand the concepts laid out in the Yellow/Beige Paper, as well as practice coding in Yul, and learning the different opcodes available.

Let's start off with some easy to implement optimizations.

## Optimizing with Custom Errors

Custom errors were introduced in Solidity v0.8.4 as a convenient, gas efficient way to explain to users why an operation has failed. Custom errors are one of the easiest ways to save around [50 gas](https://gist.github.com/IllIllI000/ad1bd0d29a0101b25e57c293b4b0c746) each time a failed `require` statement would be reached. They are defined using the `error` statement inside or outside of a contract:
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

error Unauthorized();

contract SendEther {
    address payable immutable owner;

    constructor(address _owner) {
        owner = payable(_owner);
    }

    function withdraw() public {
        require(msg.sender == owner, "Unauthorized");
        owner.transfer(address(this).balance);
    }
    
    function withdrawOptimized() public {
        if (msg.sender != owner) {
            revert Unauthorized();
        }

        owner.transfer(address(this).balance);
    }
}
```
The syntax of errors are very similar to that of events.

## Gas-Friendly Events

### Indexing Events
Events are useful for storing data that does not need to be accessed on-chain. Indexing events, using the `index` keyword for value types such as `uint`, `bool`, and `address`, can save gas costs: 
```
// Gas Efficient
event Withdraw(uint256 indexed amount, address indexed sentFrom, address indexed receiver); 

// Not Gas Efficient
event Withdraw(uint256 amount, address sentFrom, address receiver);
``` 
However, an Optimizoor is mindful to not index every `event` parameter as indexing `bytes` and `string` values can be more expensive than leaving them un-indexed. An Optimizoor is also mindful of unnecessary event fields such as `block.timestamp` and `block.number` - adding them to an event is a waste of gas since they are added to the event information by default.

### Unnecessary Events
What's worse than over-indexing an event? Emitting unnecessary events. Logging opcodes can be quite expensive, so don't emit events for easily accessible data such as the value of a state variable or `block.timestamp`. Moreover, avoid redundant events such as emitting an event for when tokens are minted while the underlying function or library already emits such an event.

### Anonymous Events
Although rarely used in production, anonymous events are interesting insofar they are cheaper to deploy and call than regular events. Anonymous events also allow you to declare four indexed arguments as opposed to the standard three. An anonymous event is declared using the `anonymous` specifier: `event Withdraw(uint256 indexed amount, address indexed sentFrom, address indexed receiver, uint256 indexed timeSent) anonymous`. The key tradeoff is that anonymous events do not contain an indexed keccak of their signature. This makes it harder to search for, or decode, these kinds of events unless you have the specific contract ABI. This is one of those instances where you need to be conscious of code complexity - ask yourself, why do I need to emit an event that is increasingly hard to search for without the contract ABI?

## Optimizing Variables

### Knowing Variable Permanent Values
If you're developing a smart contract and already know the permanent value of a variable then declare it as `constant`. You could go one step further and delare your constants as `private` to save gas during deployment. This is because when constants are marked as `public`, extra getter functions are created for them, which increases deployment cost. Consider marking your `constant` variables as `private` to save deployment costs where applicable. 

If you want to assign a variable a permanent value at the time of construction then declare it as `immutable`. Using `constant` and `immutable` declarations where applicable saves gas since both get directly embedded into the bytecode, therefore saving a `SLOAD` opcode call to load the variable:
```
contract OptimizedVariables {
    uint256 private constant x = 1000;
    uint256 immutable y;

    constructor() {
        y = 1;
    }
}
```

If you don't know the permanent value of a variable and, for example, are dealing with an arbitrary length raw byte data or string, you should use the `bytes` value type. If, however, you know that you can limit the length to a maximum of 32 characters then use a value of `bytes1` to `bytes32` to save gas. This is important to know as contracts using a version of Solidity before 0.8.4 do not have access to custom errors. Thus, `require` strings longer than 32 bytes would cost extra gas - each extra memory word of bytes past the original 32 incurs an `MSTORE` which costs 3 gas. This also applies to `revert` strings. Overall, shorter `require` / `revert` strings can save deployment time as well as runtime costs. If you are using >=0.8.4, it is recommended to use custom errors instead.

If you know the permenent value of a variable will be zero, do not explicitly initialize it. Adding in an initialization to zero, or another default value, will increase both contract size and gas.

### Caching Variables
If you need to look up a variable's value more than once, consider caching it. For example, `<array>.length` should not be looked up every iteration of a `for` loop. Caching the array length will save gas since it'll avoid an `MLOAD` every loop for arrays stored in `memory`, an `SLOAD` for arrays stored in `storage`, and `CALLDATALOAD` for arrays stored in `calldata`. With the array length cached, the `MLOAD` / `SLOAD` / `CALLDATALOAD` operation is only called once and each subsequent call is a cheaper `dupN` instruction. Yes, `MLOAD`, `CALLDATALOAD`, and `dupN` have the same gas cost however `MLOAD` and `CALLDATALOAD` require an additional `dupN` call to put the offset in the stack.

Caching is also useful for multiple accesses of a mapping or array. For instance, caching a mapping's value in a local `storage` or `calldata` variable when the value is accessed multiple times reduces gas per access since the EVM does not have to recalculate the key's keccack256 hash. Caching is also useful for saving the value of a function call rather than calling the function multiple times.

### Storing Variables
Knowing how the EVM stores variables is crucial to reducing gas costs - the more slots needed for your contract, the more expensive it'll be. When you make a variable in a Solidity contract, the EVM stores it in a storage slot of 32 bytes, or 256 bits. So, when you make a `uint256` it fills its own slot. Different variable types have different sizes, for example: `uint256` is 32 bytes, `address` is 20 bytes, and `bool` is 1 byte. Multiple contiguous items that require less than 32 bytes can be packed into a single storage slot, if possible. There are a few rules that must be followed: 
- Items following struct or array data always start a new storage slot
- Value types only use as many bytes as necessary to store them
- The first item in a storage slot is lower-order aligned
- If a value does not fit into the remaining part of the storage slot then it is placed in the next storage slot
- Structs and array data always start a new slot packing their contents in accordance to these rules

```
// Takes up three slots
contract NotOptimized {
    uint128 x; // Slot 0
    uint256 y; // Slot 1
    uint128 z; // Slot 2
}

// Packed into two slots
contract Optimized {
    uint128 x; // Slot 0
    uint128 z; // Slot 0
    uint256 y; // Slot 1
}
```

Your contract's gas may be higher when using variables smaller than 32 bytes since the EVM operates on 32 bytes at a time. This is because the EVM must use more operations to reduce the size of the element from 32 bytes to the desired size. So, you should only use smaller `uint` sizes, for example, if you're packing them together or else a solo `uint8` will be more expensive than a solo `uint256`. Each operation involving a `uint8` costs an extra [22-28 gas](https://gist.github.com/IllIllI000/9388d20c70f9a4632eb3ca7836f54977) as compared to ones involving `uint256`. Therefore, it is recommended to use a larger size and downcast when needed.

Using booleans for storage incurs a significant overhead. Paraspace's [C4 report](https://code4rena.com/reports/2022-11-paraspace#g23--using-bools-for-storage-incurs-overhead) states that this is because booleans are more expensive than any other type that takes up a full word because each write operation emits an extra `SLOAD` to first read the slot's contents, replace the bits taken up by the boolean, and then write back. Instead, use `uint256(1)` and `uint256(2)` for `true` and `false`, respectively. This avoids a Gwarmaccess (100 gas) for the exta `SLOAD`, and avoids a Gsset (20000 gas) when changing from `false` to `true`.

As an aside, [EVM Storage](https://evm.storage/) is an amazing tool to use to see the storage slots of a contract and the values packed into those slots. 10/10, would recommend to absolutely anyone as it is very easy to use. Using a tool like EVM Storage makes packing variables simple for beginner Optimizoors.

## Arithmetic

### Iterations and Unchecked Blocks
An article on Solidity gas optimizations wouldn't be right if I didn't include the infamous `++i` costs less gas than `i++`, especially when used in `for` loops. This also applies to using `--i` over `i--`. If you're interested as to exactly why it's cheaper, I suggest reading [Cygaar's article on the topic](https://cygaar.substack.com/p/why-i-is-cheaper-than-i-in-solidity).

With Solidity v0.8.0, overflow and underflow checks are done implicitly via the compiler on unsigned integers. You can save gas by placing arithmetic operations that will not overflow or underflow (e.g., when a comparison is made before the arithmetic operation) in an `unchecked` block. Many people use this for optimizing `for` loops in tandem with the `++i` trick:
```
// 37947 gas
function loop_checked_plusplus() public pure returns (uint256 sum) {
    for(uint256 i = 0; i < 100; ++i) {
        sum += 1;
    }
}

// 25713  gas, which is 12234 gas cheaper than loop_checked_plusplus()
function loop_unchecked_plusplus() public pure returns (uint256 sum) {
    for(uint256 i = 0; i < 100;) {
        sum += 1;
        unchecked {
            ++i;
        }
    }
}
```

### Bit Shifting For Multiplication and Division
Both multiplication and division by two can be achieved via bit shifting as `x * 2 == x << 1` and `x / 2 == x >> 1`. The `MUL` and `DIV` opcodes both cost 5 gas whereas `SHL` and `SHR` both cost 3 gas. It's vital to note that if you are going to use bit shifting as a replacement for division by 2, this will bypass Solidity's division by zero prevention check. 

This concept can be applied to the multiplication and division of other numbers (e.g., shifting left by 5 instead of multiplying 32) however things can get complicated very quickly. It is another one of those instances where you must make the decision between saving gas and code complexity. 

## Conditionals

### Short Circuiting
`if` statements with more than one condition can be short circuited. The second case is checked for the logical `OR` and `AND` (`||` and `&&`) operators only if the first case does not suffice to determine the value of the expression (if the first case is equal to true for `||`, and if the first case is equal to `false` for `&&`). This is known as short-circuit evaluation. The idea is that you put the lower-cost expression first so the higher cost expression can be skipped (short circuited).
```
case1 = 1000 gas
case2 = 50 gas

Not optimized: require(case1 && case2, "Failed")
Optimized: require(case2 && case1, "Failed")
```

### Early Reverts
An Optimizoor always tries to make sure that if a transaction is going to revert then it should revert as early as possible. When a transaction reverts the user pays gas up until the revert was executed, not afterwards. It is also good practice to follow the [Checks-Effects-Interactions Pattern](https://docs.soliditylang.org/en/v0.6.11/security-considerations.html#use-the-checks-effects-interactions-pattern), so, naturally, these checks should be happening near the top of a function anyways. If not, make sure to move them where applicable.

### Costly Checks
The outcome of some conditions can be known without being executed and therefore do not need to be evaluated - including them would only increase gas costs. An example of this is the following check:
```
if (x > 1000) {
    if (x > 500) {
        return x;
    }
}
```
If `x > 1000` then `x` must be greater than 500. In computer science, this is known as [opaque predicate](https://en.wikipedia.org/wiki/Opaque_predicate). Sometimes opaque predicates are used as watermarks or for obfuscating the control or data flow of code to make reverse engineering harder however this is not necessary with Solidity smart contracts.

Moreover, we can also know if code will never run because its evaluation is predicated on a `false` condition:
```
if (x < 0) {
    if (x > 100) {
        return x;
    }
}
```
If `x < 0` is satisfied, then `x > 100` can never be true therefore making this snippet dead code. The inclusion of dead code and opaque predicates can be very expensive. Of course these examples are pretty elementary and will (hopefully) not reproduce themselves out in the wild, but be mindful of this possibility and thoroughly test your smart contract for these types of costly checks. For more costly patterns, I urge you to check out the article ["Under-Optimized Smart Contracts Devour Your Money"](https://arxiv.org/pdf/1703.03994.pdf).

### Ternary Operator
There are instances where a ternary operator can be used in place of an if-else statement to save a modest amount of gas. [Trader Joe's C4 report](https://code4rena.com/reports/2022-10-traderjoe#gas-optimizations) outlines a few instances, such as:
```
Not Optimized:

if (x == 0) return type(uint256).max;
return leastSignificantBit(x) + bit;

------------------------------------

Optimized:

return (x == 0) ? type(uint256).max : leastSignificantBit(x) + bit;
```

### Reducing Bytecode Size With Modifiers
If you are really constrained by bytecode size, consider refactoring a `modifier` so it calls an internal function. This approach is used in OpenZeppelin's [Ownable.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/cd48b3eab380254b08d7893a5a7bf568a33c5259/contracts/access/Ownable.sol#LL45C9-L45C9):
```
modifier onlyOwner() {
    _checkOwner();
    _;
}

function _checkOwner() internal view virtual {
    if (owner() != _msgSender()) {
        revert OwnableUnauthorizedAccount(_msgSender());
    }
}
```
Here, the `onlyOwner()` modifier calls `_checkOwner()` to validate whether the `msg.sender` is the owner. This is a more optimized version of:
```
modifier onlyOwner() {
    require(owner() == msg.sender, "Not owner");
    _;
}
```

## Functions

### Payable Functions
Non-payable functions are more expensive than payable functions as they require extra opcodes to check if an EOA or another contract is trying to send Ether to them, and revert the transaction if so. Payable functions don't require these extra opcodes as they are allowed to receive Ether. This can be useful for functions guaranteed to revert when called by normal users. For example, if you have a function that can only be used by the owner of the smart contract consider marking it `payable`. If a normal user tries to call this function then it'll revert, and if the owner uses this function then it'll be cheaper for them since it lacks the extra checks to see whether a payment was provided. So, where applicable, declare your functions as `payable`.

You can also cut out 10 opcodes in the creation-time EVM bytecode if you declare a `constructor()` as `payable`. This is due to the fact `payable` removes the need for an inital check of `msg.value == 0`, saving 13 gas on deployment with no pertinent security risks.

### Function Parameters
Function parameters should only be declared as `memory` if the variable needs to be modified. Otherwise, declare them as `calldata` as it is cheaper to load variables directly from `calldata` than it is copy them from `memory`. In this example, we are not modifying `numbersArray` so we can declare it as `calldata` to save gas:
```
function sum(uint[] calldata numbersArray) external pure returns (uint sum) {
    uint256 arrayLength = numbersArray.length;

    for  (uint i = 0; i < arrayLength; unchecked { ++i }) {
        sum += numbersArray[i];
    }
}
```

### Optimizing Function Names
`public` / `external` function names, and `public` variables can be optimized to save gas. The Solidity compiler reads and executes function names based on their selector. A function selector is made up of the first four bytes of the keccak256 hash of the function signature:
```
function optimizeMe(uint256 value, uint256 value2, bytes32 value3) external {}

Function signature: "optimizeMe(uint256,uint256,bytes32)"
Function selector: 0xfd25287f
```
The compiler sorts all of a contract's functions by their selector in hexadecimal order, and goes over each of them when a function was executed to see which selector was called. Thus, it makes sense to try and put the most used functions near the top of this list to save gas when searching for the called function. I'd recommend taking this into consideration when naming a function that'll be called frequently during the smart contract's lifetime.

## Solidity Gas Optimizations 101
Congrats Optimizoor, you've passed Solidity Gas Optimizations 101. An Optimizoor is a life-long learner tasked with the impossible goal of making your code as performant as possible. Now that you know the basics of optimizing Solidity smart contracts, put them to good use fellow Optimizoor! 

If you've read this far, thank you anon! If you want to keep up to date with my latest ramblings my [Twitter](https://twitter.com/0xIchigo) is a good place to start. I'd also like to give a big shoutout to giga-brain 100x auditooor [bl0ckpain](https://twitter.com/bl0ckpain) for reading over earlier drafts of this blogpost. 
