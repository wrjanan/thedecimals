
# Description

This serves as a frontend JS creator for the decimals NFT.
https://thedecimals.org

Allowing developers to access NFT decimals given a tokenID without needing access to web3js / ethereum blockchain.

# Usage

```
npm i --save thedecimals
```

```
const { getDecimal } = require("thedecimals");

getDecimal(0, 111) // (decimalPosition: number {0-7}, tokenid: number)

```