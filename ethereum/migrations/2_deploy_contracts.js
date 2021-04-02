//OM NAMO NARAYANA

var Spectrum = artifacts.require("Spectrum");
var Post = artifacts.require("Post");


module.exports = function(deployer){
    // deployer.deploy(ApiConsumer);
    // deployer.deploy(PriceConsumerV3);
    deployer.deploy(Spectrum, "OM NAMO NARAYANA", "Arvinth");
    deployer.deploy(Post,"0x604BCD042D2d5B355ecE14B6aC3224d23F29a51c", "OM NAMO NARAYANA", "Arvinth");
};