export const convertPercentage = (num) => {
    let x = (parseFloat(num))/100;
    return x;
};

//formula for def multi part of hsr damage calculations
export const calculateDefMulti = (charLevel, enemyLevel, defIgnore) => {
    if (defIgnore > 100){
        defIgnore = 100;
    }
    let x = (charLevel + 20) / ((parseInt(enemyLevel) + 20) *
            (1 - convertPercentage(defIgnore)) + charLevel + 20);
    return x;
};

export const checkIfExceedsHundredPercent = (num) => {
    if (num > 100){
        num = 100;
    }
    return num;
}
