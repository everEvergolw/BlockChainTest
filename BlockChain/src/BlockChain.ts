import { Block } from "./Block";

export class BlockChain{

    chain: Block[]; // blockchain
    difficulty : number; // proof of workload difficulty
    height: number ; // the height of the block chain

    constructor(){
            this.chain = [this.createGenesisBlock()];
            this.difficulty = 2;
            this.height = 1;

    }

    //create genesisBlcok
    createGenesisBlock(): Block{
        return new Block(0,"20241-02-18","Genesis block","0");
    }

    // get latest block
    getLatestBlock(): Block{
        return this.chain[this.chain.length - 1];
    }


    // add new block
    addBlock(newBlock: Block):void{
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
        this.height++;
    }

    // validate the blockchain
    isChainValid(): boolean{
        for( let i = 1; i < this.chain.length; i ++){
            const currentBlock = this.chain[i];
            const previouBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            

            if(currentBlock.previousHash !== previouBlock.hash){
                return false;
            }

        }
        return true;
    }


}