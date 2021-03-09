const savePoint = "veryBasicIncrementall";

document.onclick = function() {
    coin = coin.add(0.1).add(
        coin.div(
            new Decimal.max(
                1,
                coin.add(1).log(10).pow(3)
            ).mul(
                new Decimal(1.03).pow(coin.add(1).log(10)).add(1)
            )
        ).mul(
            new Decimal(10).pow(upgrade.sub(1).pow(0.9))
        )
    );
    document.getElementById("coinDisplay").innerHTML = `You have ${notation(coin)} Coins`
};
function buyUpgrade() {
    if (coin.lt(getUpgradeCost())) return;
    coin = coin.sub(getUpgradeCost());
    upgrade = upgrade.add(1);
    document.getElementById("upgradeBtn").innerHTML = `Buy upgrade #${notation(upgrade)}<br>Cost ${notation(getUpgradeCost(), 3)} Coins<br>Coin Gain x${notation(new Decimal(10).pow(upgrade.sub(1).pow(0.9)))}`;
}

function getUpgradeCost(lv=upgrade) {
    lv = new Decimal(lv);
    return new Decimal(1e6).pow(lv).pow(lv.pow(1/3)).div(1e4);
}

function notation(num=0, dim=3) {
    num = new Decimal(num);
    return num.gte(1e6)?num.toExponential(dim).replace("+", ""):Math.floor(num.toNumber());
}
try {
    loadedSave = localStorage[savePoint].split(",");
} catch(e) {
    loadedSave = [];
}


let coin = loadedSave[0] || 10;
coin = new Decimal(coin);
document.getElementById("coinDisplay").innerHTML = `You have ${notation(coin)} Coins`;

let upgrade = loadedSave[1] || 1;
upgrade = new Decimal(upgrade);
document.getElementById("upgradeBtn").innerHTML = `Buy upgrade #${notation(upgrade)}<br>Cost ${notation(getUpgradeCost(), 3)} Coins<br>Coin Gain x${notation(new Decimal(10).pow(upgrade.sub(1).pow(0.9)))}`;

saveInterval = setInterval(function() {localStorage[savePoint] = [coin, upgrade]}, 5000);