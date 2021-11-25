var generateDigitsOtp = (count = 4) => {
    return Math.floor(10**(count-1) + Math.random() * 9*(10**(count-1)));
}


module.exports = generateDigitsOtp;