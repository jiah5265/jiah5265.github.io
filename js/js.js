const pressBtn = document.getElementById("pressBtn");//getting data
const resetBtn = document.getElementById("resetBtn");
const gaugeFill = document.querySelector(".gaugeFill");
const instruction = document.querySelector(".instruction");
const record = document.querySelector(".record");
const number = document.querySelector(".number");
const recDel = document.getElementById("recDel");
const numDel = document.getElementById("numDel");
const submitBtn = document.getElementById("submitBtn");

let time;//place for data
let morseSignal = [];
let phoneNumber = "";

submitBtn.style.display = "none";

function startGauge() {//when pressing button
    time = Date.now();
    gaugeFill.style.width = "0%";

    const update = () => {
        const duration = Date.now() - time;
        const percent = Math.min((duration / 500) * 100, 100);
        gaugeFill.style.width = percent + "%";

        if (percent < 100 && pressBtnPressed) {
            requestAnimationFrame(update);
        }
    };
    requestAnimationFrame(update);
}

function stopGauge() {//when releasing button
    const duration = Date.now() - time;
    gaugeFill.style.width = "0%";

    morseSignal.push(duration < 250 ? "●" : "-");
    record.textContent = "[" + morseSignal.join(" ") + "]";

    if (morseSignal.length == 5) {
        const morseStr = morseSignal.join("");
        const digit = morseToDigit(morseStr);

        if (digit == null) {
            instruction.textContent = "Invalid Morse Code!";
        } else if (phoneNumber.length < 10) {
            phoneNumber += digit;
            number.textContent = "Phone Number: " + phoneNumber;

            const guideBox = document.querySelector(".guide");
            const opacity = Math.min(phoneNumber.length * 0.01, 1);
            guideBox.style.opacity = opacity;

            updateSubmitButton();
        }

    morseSignal = [];
    }
}

function morseToDigit(seq) {//changing morse to number
    const morseList = {
        "●----": "1",
        "●●---": "2",
        "●●●--": "3",
        "●●●●-": "4",
        "●●●●●": "5",
        "-●●●●": "6",
        "--●●●": "7",
        "---●●": "8",
        "----●": "9",
        "-----": "0",
    };
    return morseList[seq] || null;
}




let pressBtnPressed = false;

pressBtn.addEventListener("mousedown", () => {
    pressBtnPressed = true;
    startGauge();
});

pressBtn.addEventListener("mouseup", () => {
    pressBtnPressed = false;
    stopGauge();
});

resetBtn.addEventListener("click", () => {
    morseSignal = [];
    phoneNumber = "";
    record.textContent = "[]";
    number.textContent = "Phone Number: ";
    gaugeFill.style.width = "0%";
    document.querySelector(".guide").style.opacity = 0;
});

recDel.addEventListener("click", () => {
    morseSignal.pop();
    record.textContent = "[" + morseSignal.join(" ") + "]";
});

numDel.addEventListener("click", () => {
    phoneNumber = phoneNumber.slice(0, -1);
    number.textContent = "Phone Number: " + phoneNumber;
    const guideBox = document.querySelector(".guide");
    const opacity = Math.min(phoneNumber.length * 0.01, 1);
    guideBox.style.opacity = opacity;

    updateSubmitButton();
});



function updateSubmitButton() {
    if (phoneNumber.length == 10) {
        submitBtn.style.display = "block";
    } else {
        submitBtn.style.display = "none";
    }
}

submitBtn.addEventListener("click", () => {
    document.body.innerHTML = "Thank you for your phone number!";

    const thankYouDiv = document.createElement("div");
    thankYouDiv.style.fontSize = "3rem";
    document.body.appendChild(thankYouDiv);
    
});