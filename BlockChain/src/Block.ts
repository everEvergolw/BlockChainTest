import { SHA256 } from 'crypto-js';

export class Block{

    index: number;  // Block Index
    timestamp : string;  // Timeline
    data: string;  //Block data
    previousHash: string; // pre block's hash 
    hash:string; // current block hash
    nonce : number; // random number
    
    
    constructor(index: number, timestamp: string, data:string, previousHash:string='')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;

    }


    // calculate the block's hash value
    calculateHash(): string{
        return SHA256(this.index + this.previousHash + this.timestamp + this.data + this.nonce).toString();
    }


    //mining new block
    mineBlock(difficulty : number) : void{

        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join('0')){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log('Block mined: '+ this.hash);
    } 



}


