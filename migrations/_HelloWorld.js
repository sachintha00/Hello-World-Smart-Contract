const HelloWorld = artifact.require("HelloWorld");

module.export = function (deploy){
    deployer.deploy(HelloWorld);
}