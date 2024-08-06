let generateOTP = ()=>{
    const otpLength = 6;

    const otp = Math.floor(Math.random() * Math.pow(10, otpLength));

    document.getElementById("otpDisplay").
    innerText = otp;
};


document.getElementById("generateBtn").
addEventListener("click",generateOTP);
window.addEventListener("load", generateOTP);







