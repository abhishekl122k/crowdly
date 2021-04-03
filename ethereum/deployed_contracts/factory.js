//OM NAMO NARAYANA
import web3 from '../web3';
import Crowdly from '../build/contracts/Crowdly.json';

const instance = new web3.eth.Contract(
	Crowdly.abi,
	//address of crowdly here
	'0x72b84cAe7b47D20ba2a45EBA443d0dB9e6527F17'
	);

console.log(instance);

export default instance;
