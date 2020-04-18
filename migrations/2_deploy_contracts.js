const GTS = artifacts.require('GTSImplementation');
const Proxy = artifacts.require('AdminUpgradeabilityProxy');

module.exports = async function(deployer) {
  await deployer;

  await deployer.deploy(GTS);
  const proxy = await deployer.deploy(Proxy, GTS.address);
  const proxiedGTS = await GTS.at(proxy.address);
  await proxy.changeAdmin("0xf0b1eef88956b0a307fa87b5f5671aad6a5d330f");
  await proxiedGTS.initialize();
};
