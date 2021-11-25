# otpGenerator
Generate Digits OTP

const generateDigitsOtp = require("otpdigits")

// Default 4 Digits
otp = generateDigitsOtp();
console.log(otp)// 3262

// Specify digits count
otp = generateDigitsOtp(6);
console.log(otp)// 714186