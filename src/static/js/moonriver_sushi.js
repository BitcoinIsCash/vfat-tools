$(function () {
consoleInit(main)
});

const SUSHI_CHEF_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_sushi","internalType":"contract IERC20"}]},{"type":"event","name":"Deposit","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"EmergencyWithdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Harvest","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"LogPoolAddition","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"address","name":"lpToken","internalType":"contract IERC20","indexed":true},{"type":"address","name":"rewarder","internalType":"contract IRewarder","indexed":true}],"anonymous":false},{"type":"event","name":"LogSetPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false},{"type":"address","name":"rewarder","internalType":"contract IRewarder","indexed":true},{"type":"bool","name":"overwrite","internalType":"bool","indexed":false}],"anonymous":false},{"type":"event","name":"LogSushiPerSecond","inputs":[{"type":"uint256","name":"sushiPerSecond","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"LogUpdatePool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint64","name":"lastRewardTime","internalType":"uint64","indexed":false},{"type":"uint256","name":"lpSupply","internalType":"uint256","indexed":false},{"type":"uint256","name":"accSushiPerShare","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"Withdraw","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"SUSHI","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"address","name":"_lpToken","internalType":"contract IERC20"},{"type":"address","name":"_rewarder","internalType":"contract IRewarder"}]},{"type":"function","stateMutability":"payable","outputs":[{"type":"bool[]","name":"successes","internalType":"bool[]"},{"type":"bytes[]","name":"results","internalType":"bytes[]"}],"name":"batch","inputs":[{"type":"bytes[]","name":"calls","internalType":"bytes[]"},{"type":"bool","name":"revertOnFail","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"deposit","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"emergencyWithdraw","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"harvest","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IERC20"}],"name":"lpToken","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[{"type":"uint256[]","name":"pids","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"migrate","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IMigratorChef"}],"name":"migrator","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pendingOwner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"pending","internalType":"uint256"}],"name":"pendingSushi","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"permitToken","inputs":[{"type":"address","name":"token","internalType":"contract IERC20"},{"type":"address","name":"from","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"deadline","internalType":"uint256"},{"type":"uint8","name":"v","internalType":"uint8"},{"type":"bytes32","name":"r","internalType":"bytes32"},{"type":"bytes32","name":"s","internalType":"bytes32"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint128","name":"accSushiPerShare","internalType":"uint128"},{"type":"uint64","name":"lastRewardTime","internalType":"uint64"},{"type":"uint64","name":"allocPoint","internalType":"uint64"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"pools","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"contract IRewarder"}],"name":"rewarder","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"},{"type":"address","name":"_rewarder","internalType":"contract IRewarder"},{"type":"bool","name":"overwrite","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setMigrator","inputs":[{"type":"address","name":"_migrator","internalType":"contract IMigratorChef"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setSushiPerSecond","inputs":[{"type":"uint256","name":"_sushiPerSecond","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"sushiPerSecond","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"totalAllocPoint","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"},{"type":"bool","name":"direct","internalType":"bool"},{"type":"bool","name":"renounce","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"tuple","name":"pool","internalType":"struct MiniChefV2.PoolInfo","components":[{"type":"uint128","name":"accSushiPerShare","internalType":"uint128"},{"type":"uint64","name":"lastRewardTime","internalType":"uint64"},{"type":"uint64","name":"allocPoint","internalType":"uint64"}]}],"name":"updatePool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"int256","name":"rewardDebt","internalType":"int256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdraw","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"withdrawAndHarvest","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"address","name":"to","internalType":"address"}]}]
const MOVR_REWARDS_ABI = [{"type":"constructor","stateMutability":"nonpayable","inputs":[{"type":"address","name":"_rewardToken","internalType":"contract IERC20"},{"type":"uint256","name":"_rewardPerSecond","internalType":"uint256"},{"type":"address","name":"_MASTERCHEF_V2","internalType":"address"}]},{"type":"event","name":"LogInit","inputs":[],"anonymous":false},{"type":"event","name":"LogOnReward","inputs":[{"type":"address","name":"user","internalType":"address","indexed":true},{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"amount","internalType":"uint256","indexed":false},{"type":"address","name":"to","internalType":"address","indexed":true}],"anonymous":false},{"type":"event","name":"LogPoolAddition","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"LogRewardPerSecond","inputs":[{"type":"uint256","name":"rewardPerSecond","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"LogSetPool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint256","name":"allocPoint","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"LogUpdatePool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256","indexed":true},{"type":"uint64","name":"lastRewardTime","internalType":"uint64","indexed":false},{"type":"uint256","name":"lpSupply","internalType":"uint256","indexed":false},{"type":"uint256","name":"accSushiPerShare","internalType":"uint256","indexed":false}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"type":"address","name":"previousOwner","internalType":"address","indexed":true},{"type":"address","name":"newOwner","internalType":"address","indexed":true}],"anonymous":false},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"add","inputs":[{"type":"uint256","name":"allocPoint","internalType":"uint256"},{"type":"uint256","name":"_pid","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claimOwnership","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"massUpdatePools","inputs":[{"type":"uint256[]","name":"pids","internalType":"uint256[]"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"onSushiReward","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"},{"type":"address","name":"to","internalType":"address"},{"type":"uint256","name":"","internalType":"uint256"},{"type":"uint256","name":"lpToken","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"pendingOwner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"pending","internalType":"uint256"}],"name":"pendingToken","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"address","name":"_user","internalType":"address"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address[]","name":"rewardTokens","internalType":"contract IERC20[]"},{"type":"uint256[]","name":"rewardAmounts","internalType":"uint256[]"}],"name":"pendingTokens","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"},{"type":"address","name":"user","internalType":"address"},{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"poolIds","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint128","name":"accSushiPerShare","internalType":"uint128"},{"type":"uint64","name":"lastRewardTime","internalType":"uint64"},{"type":"uint64","name":"allocPoint","internalType":"uint64"}],"name":"poolInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"pools","internalType":"uint256"}],"name":"poolLength","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"rewardPerSecond","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"set","inputs":[{"type":"uint256","name":"_pid","internalType":"uint256"},{"type":"uint256","name":"_allocPoint","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setRewardPerSecond","inputs":[{"type":"uint256","name":"_rewardPerSecond","internalType":"uint256"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"transferOwnership","inputs":[{"type":"address","name":"newOwner","internalType":"address"},{"type":"bool","name":"direct","internalType":"bool"},{"type":"bool","name":"renounce","internalType":"bool"}]},{"type":"function","stateMutability":"nonpayable","outputs":[{"type":"tuple","name":"pool","internalType":"struct ComplexRewarderTime.PoolInfo","components":[{"type":"uint128","name":"accSushiPerShare","internalType":"uint128"},{"type":"uint64","name":"lastRewardTime","internalType":"uint64"},{"type":"uint64","name":"allocPoint","internalType":"uint64"}]}],"name":"updatePool","inputs":[{"type":"uint256","name":"pid","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"amount","internalType":"uint256"},{"type":"uint256","name":"rewardDebt","internalType":"uint256"}],"name":"userInfo","inputs":[{"type":"uint256","name":"","internalType":"uint256"},{"type":"address","name":"","internalType":"address"}]}]

async function main() {
    const App = await init_ethers();

    _print(`Initialized ${App.YOUR_ADDRESS}\n`);
    _print("Reading smart contracts...\n");

    const SUSHI_CHEF_ADDR = "0x3dB01570D97631f69bbb0ba39796865456Cf89A5";
    const MOVR_REWARDS_ADDR = "0x1334c8e873e1cae8467156e2a81d1c8b566b2da1";
    const rewardTokenTicker = "SUSHI";
    const rewardMoonriverTicker = "MOVR";
    const SUSHI_CHEF = new ethers.Contract(SUSHI_CHEF_ADDR, SUSHI_CHEF_ABI, App.provider);
    const MOVR_REWARDS_CONTRACT = new ethers.Contract(MOVR_REWARDS_ADDR, MOVR_REWARDS_ABI, App.provider);

    const moonriverTokenAddress = "0x98878B06940aE243284CA214f92Bb71a2b032B8A";

    const rewardsPerWeek = await SUSHI_CHEF.sushiPerSecond() / 1e18 * 604800;
    const moonriverRewardsPerWeek = await MOVR_REWARDS_CONTRACT.rewardPerSecond() / 1e18 * 604800;

    const tokens = {};
    const prices = await getMoonriverPrices();

    await loadMoonriverSushiContract(App, tokens, prices, SUSHI_CHEF, SUSHI_CHEF_ADDR, SUSHI_CHEF_ABI, rewardTokenTicker,
        "SUSHI", null, rewardsPerWeek, "pendingSushi", [1], MOVR_REWARDS_CONTRACT, MOVR_REWARDS_ADDR, MOVR_REWARDS_ABI,
        rewardMoonriverTicker, moonriverTokenAddress, moonriverRewardsPerWeek);

    hideLoading();
}

async function loadMoonriverSushiContract(App, tokens, prices, chef, chefAddress, chefAbi, rewardTokenTicker,
  rewardTokenFunction, rewardsPerBlockFunction, rewardsPerWeekFixed, pendingRewardsFunction,
  deathPoolIndices, chefMoonriverRewardsContract, chefMoonriverRewardsAddress, chefMoonriverRewardsAbi, rewardMoonriverTicker, moonriverTokenAddress,
  moonriverRewardsPerWeek) {
  const chefContract = chef ?? new ethers.Contract(chefAddress, chefAbi, App.provider);

  const poolCount = parseInt(await chefContract.poolLength(), 10);
  const totalAllocPoints = await chefContract.totalAllocPoint();

  _print(`Found ${poolCount} pools.\n`)

  _print(`Showing incentivized pools only.\n`);

  var tokens = {};

  const rewardTokenAddress = await chefContract.callStatic[rewardTokenFunction]();
  const rewardToken = await getMoonriverToken(App, rewardTokenAddress, chefAddress);
  const rewardsPerWeek = rewardsPerWeekFixed ??
    await chefContract.callStatic[rewardsPerBlockFunction]()
    / 10 ** rewardToken.decimals * 604800 / 3

  const poolInfos = await Promise.all([...Array(poolCount).keys()].map(async (x) =>
    await getSushiPoolInfo(App, chefContract, chefAddress, x, pendingRewardsFunction, chefMoonriverRewardsContract,
        chefMoonriverRewardsAddress)));

  var tokenAddresses = [].concat.apply([], poolInfos.filter(x => x.poolToken).map(x => x.poolToken.tokens));

  await Promise.all(tokenAddresses.map(async (address) => {
      tokens[address] = await getMoonriverToken(App, address, chefAddress);
  }));

  if (deathPoolIndices) {   //load prices for the deathpool assets
    deathPoolIndices.map(i => poolInfos[i])
                     .map(poolInfo =>
      poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "moonriver") : undefined);
  }

  const poolPrices = poolInfos.map(poolInfo => poolInfo.poolToken ? getPoolPrices(tokens, prices, poolInfo.poolToken, "moonriver") : undefined);


  _print("Finished reading smart contracts.\n");

  let aprs = []
  for (i = 0; i < poolCount; i++) {
    if (poolPrices[i]) {
      const apr = printSushiPool(App, chefAbi, chefAddress, prices, tokens, poolInfos[i], i, poolPrices[i],
        totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
        pendingRewardsFunction, null, null, "moonriver", chefMoonriverRewardsAbi, chefMoonriverRewardsAddress, moonriverRewardsPerWeek,
        rewardMoonriverTicker, moonriverTokenAddress)
      aprs.push(apr);
    }
  }
  let totalUserStaked=0, totalStaked=0, averageApr=0;
  for (const a of aprs) {
    if (!isNaN(a.totalStakedUsd)) {
      totalStaked += a.totalStakedUsd;
    }
    if (a.userStakedUsd > 0) {
      totalUserStaked += a.userStakedUsd;
      averageApr += a.userStakedUsd * a.yearlyAPR / 100;
    }
  }
  averageApr = averageApr / totalUserStaked;
  _print_bold(`Total Staked: $${formatMoney(totalStaked)}`);
  if (totalUserStaked > 0) {
    _print_bold(`\nYou are staking a total of $${formatMoney(totalUserStaked)} at an average APR of ${(averageApr * 100).toFixed(2)}%`)
    _print(`Estimated earnings:`
        + ` Day $${formatMoney(totalUserStaked*averageApr/365)}`
        + ` Week $${formatMoney(totalUserStaked*averageApr/52)}`
        + ` Year $${formatMoney(totalUserStaked*averageApr)}\n`);
  }
  return { prices, totalUserStaked, totalStaked, averageApr }
}

async function getSushiPoolInfo(app, chefContract, chefAddress, poolIndex, pendingRewardsFunction, chefMoonriverRewardsContract,
    chefMoonriverRewardsAddress) {
    const poolInfo = await chefContract.poolInfo(poolIndex);
    const lpToken = await chefContract.lpToken(poolIndex);
    if (poolInfo.allocPoint == 0) {
      return {
        address: lpToken,
        allocPoints: poolInfo.allocPoint ?? 1,
        poolToken: null,
        userStaked : 0,
        pendingRewardTokens : 0,
      };
    }
    const poolToken = await getMoonriverToken(app, lpToken, chefAddress);
    const userInfo = await chefContract.userInfo(poolIndex, app.YOUR_ADDRESS);
    const pendingRewardTokens = await chefContract.callStatic[pendingRewardsFunction](poolIndex, app.YOUR_ADDRESS);
    const pendingMoonriverTokens = await chefMoonriverRewardsContract.pendingToken(poolIndex, app.YOUR_ADDRESS);
    const staked = userInfo.amount / 10 ** poolToken.decimals;
    return {
        address: lpToken,
        allocPoints: poolInfo.allocPoint ?? 1,
        poolToken: poolToken,
        userStaked : staked,
        pendingRewardTokens : pendingRewardTokens / 10 ** 18,
        pendingMoonriverTokens : pendingMoonriverTokens / 10 ** 18,
    };
  }

function printSushiPool(App, chefAbi, chefAddr, prices, tokens, poolInfo, poolIndex, poolPrices,
                       totalAllocPoints, rewardsPerWeek, rewardTokenTicker, rewardTokenAddress,
                       pendingRewardsFunction, fixedDecimals, claimFunction, chain="moonriver",
                       chefMoonriverRewardsAbi, chefMoonriverRewardsAddress, moonriverRewardsPerWeek,
                       rewardMoonriverTicker, moonriverTokenAddress) {
  fixedDecimals = fixedDecimals ?? 2;
  const sp = (poolInfo.stakedToken == null) ? null : getPoolPrices(tokens, prices, poolInfo.stakedToken);
  var poolRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * rewardsPerWeek;
  let poolMoonriverRewardsPerWeek = poolInfo.allocPoints / totalAllocPoints * moonriverRewardsPerWeek;
  if (poolRewardsPerWeek == 0 && rewardsPerWeek != 0) return;
  const userStaked = poolInfo.userLPStaked ?? poolInfo.userStaked;
  const rewardPrice = getParameterCaseInsensitive(prices, rewardTokenAddress)?.usd;
  const rewardMoonriverPrice = getParameterCaseInsensitive(prices, moonriverTokenAddress)?.usd;
  const staked_tvl = sp?.staked_tvl ?? poolPrices.staked_tvl;
  poolPrices.print_price(chain);
  sp?.print_price(chain);
  const apr = printSushiAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek, poolPrices.stakeTokenTicker,
    staked_tvl, userStaked, poolPrices.price, fixedDecimals, poolMoonriverRewardsPerWeek, rewardMoonriverPrice, rewardMoonriverTicker);
  if (poolInfo.userLPStaked > 0) sp?.print_contained_price(userStaked);
  if (poolInfo.userStaked > 0) poolPrices.print_contained_price(userStaked);
  _print("");
  return apr;
}

function printSushiAPR(rewardTokenTicker, rewardPrice, poolRewardsPerWeek,
                  stakeTokenTicker, staked_tvl, userStaked, poolTokenPrice,
                  fixedDecimals, poolMoonriverRewardsPerWeek, rewardMoonriverPrice, rewardMoonriverTicker) {
  var usdPerWeek = poolRewardsPerWeek * rewardPrice;
  var usdMoonriverPerWeek = poolMoonriverRewardsPerWeek * rewardMoonriverPrice;
  fixedDecimals = fixedDecimals ?? 2;
  _print(`${rewardTokenTicker} Per Week: ${poolRewardsPerWeek.toFixed(fixedDecimals)} ($${formatMoney(usdPerWeek)})`);
  _print(`${rewardMoonriverTicker} Per Week: ${poolMoonriverRewardsPerWeek.toFixed(fixedDecimals)} ($${formatMoney(usdMoonriverPerWeek)})`);
  var weeklyAPR = usdPerWeek / staked_tvl * 100;
  var dailyAPR = weeklyAPR / 7;
  var yearlyAPR = weeklyAPR * 52;
  var weeklyMoonriverAPR = usdMoonriverPerWeek / staked_tvl * 100;
  var dailyMoonriverAPR = weeklyMoonriverAPR / 7;
  var yearlyMoonriverAPR = weeklyMoonriverAPR * 52;
  let totalDailyAPR = dailyAPR + dailyMoonriverAPR;
  let totalWeeklyAPR = weeklyAPR + weeklyMoonriverAPR;
  let totalYearlyAPR = yearlyAPR + yearlyMoonriverAPR;
  let totalUSDPerWeek = usdPerWeek + usdMoonriverPerWeek;
  _print(`APR SUSHI: Day ${dailyAPR.toFixed(2)}% Week ${weeklyAPR.toFixed(2)}% Year ${yearlyAPR.toFixed(2)}%`);
  _print(`APR MOVR: Day ${dailyMoonriverAPR.toFixed(2)}% Week ${weeklyMoonriverAPR.toFixed(2)}% Year ${yearlyMoonriverAPR.toFixed(2)}%`);
  var userStakedUsd = userStaked * poolTokenPrice;
  var userStakedPct = userStakedUsd / staked_tvl * 100;
  _print(`Total Per Week: $${formatMoney(totalUSDPerWeek)}`);
  _print(`Total APR: Day ${totalDailyAPR.toFixed(4)}% Week ${totalWeeklyAPR.toFixed(2)}% Year ${totalYearlyAPR.toFixed(2)}%`);
  _print(`You are staking ${userStaked.toFixed(fixedDecimals)} ${stakeTokenTicker} ($${formatMoney(userStakedUsd)}), ${userStakedPct.toFixed(2)}% of the pool.`);
  var userWeeklyRewards = userStakedPct * poolRewardsPerWeek / 100;
  var userMoonriverWeeklyRewards = userStakedPct * poolMoonriverRewardsPerWeek / 100;
  var userDailyRewards = userWeeklyRewards / 7;
  var userMoonriverDailyRewards = userMoonriverWeeklyRewards / 7;
  var userYearlyRewards = userWeeklyRewards * 52;
  var userMoonriverYearlyRewards = userMoonriverWeeklyRewards * 52;
  if (userStaked > 0) {
    _print(`Estimated ${rewardTokenTicker} earnings:`
        + ` Day ${(userDailyRewards+userMoonriverDailyRewards).toFixed(fixedDecimals)} ($${formatMoney(userDailyRewards*rewardPrice+userMoonriverDailyRewards*rewardMoonriverPrice)})`
        + ` Week ${(userWeeklyRewards+userMoonriverWeeklyRewards).toFixed(fixedDecimals)} ($${formatMoney(userWeeklyRewards*rewardPrice+userMoonriverWeeklyRewards*rewardMoonriverPrice)})`
        + ` Year ${(userYearlyRewards+userMoonriverYearlyRewards).toFixed(fixedDecimals)} ($${formatMoney(userYearlyRewards*rewardPrice+userMoonriverYearlyRewards*rewardMoonriverPrice)})`);
  }
  return {
    userStakedUsd,
    totalStakedUsd : staked_tvl,
    userStakedPct,
    yearlyAPR,
    userYearlyUsd : userYearlyRewards * rewardPrice + userMoonriverYearlyRewards * rewardMoonriverPrice
  }
}