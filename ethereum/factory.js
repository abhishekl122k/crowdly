//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x5ac60112AedFa4DF0Dcc745F85b4b03e79a008F3'
	);

console.log(instance);

export default instance;
