import Portis from '@portis/web3';
import Web3 from 'web3';

const portis = new Portis('1e9f6ac7-1822-47c0-81af-f2d5c64d6ecf', 'maticMumbai');
let web3; 
web3 = new Web3(portis.provider);

console.log('portis');
console.log(portis);
export default web3;