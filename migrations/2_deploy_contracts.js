const Premint = artifacts.require("Premint");

module.exports = function (deployer) {
    deployer.deploy(Premint);
};