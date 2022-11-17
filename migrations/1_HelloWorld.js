// const HelloWorld = artifact.require("HelloWorld");

// module.export = function (deploy){
//     deployer.deploy(HelloWorld);
// };

const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};