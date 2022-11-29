const cardBlot1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const cardBlot2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const cardFlag = document.querySelector(".cc-logo span:nth-child(2) img")

export function changeCardType(type = "default") {
    const Types = {
        visa: {
            colors: ["#436D99", "#2D57F2"],
            flag: "cc-visa.svg"
        },
        mastercard: {
            colors: ["#DF6F29", "#C69347"],
            flag: "cc-mastercard.svg"
        },
        default: {
            colors: ["black", "gray"],
            flag: "cc-default.svg"
        },
    }

    cardBlot1.setAttribute("fill", Types[type].colors[0])
    cardBlot2.setAttribute("fill", Types[type].colors[1])
    cardFlag.setAttribute("src", Types[type].flag)
}

globalThis.changeCardType = changeCardType