const pressBtn = document.getElementById("pressBtn");//getting data
const resetBtn = document.getElementById("resetBtn");
const gaugeFill = document.querySelector(".gaugeFill");
const instruction = document.querySelector(".instruction");
const record = document.querySelector(".record");
const number = document.querySelector(".number");

let time;//place for data
let morseSignal = [];
let phoneNumber = "";



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
        phoneNumber += morseToDigit(morseStr);
        number.textContent = "Phone Number: " + phoneNumber;
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
    return morseList[seq] || "";
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
});