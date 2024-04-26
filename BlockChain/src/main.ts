import { Block } from "./Block";
import { BlockChain } from "./BlockChain";

const myBlockchain = new BlockChain();

console.debug("Mining block 1 ...");

myBlockchain.addBlock(
    new Block(
        1,
        "2024-2-18",
        JSON.stringify({
            amount : 4, 
           
        })
    )
);


console.debug("Mining block 2 ...");

myBlockchain.addBlock(
    new Block(
        2,
        "2024-2-18",
        JSON.stringify({
            amount : 10, 
           
        })
    )
);


console.debug("Blockchain is valid:" , myBlockchain.isChainValid());

// change the value of data in the first block then validate it  
myBlockchain.chain[1].data = JSON.stringify({
    amount: 100,

});
console.debug("Blockchain is valid:" , myBlockchain.isChainValid());
