require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/YF7emKGl3rYvS9zVo1cS6_4Rx5wsFWB4",
      accounts: ["03072c8ed276e5c171d39e612b8548474e106527abf031d746b71536727feb4d"],
    }
  }
};