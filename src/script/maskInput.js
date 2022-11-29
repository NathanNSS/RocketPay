import Imask from 'imask'


export function maskInputs() {
    //Security Code
    const securityCode = document.querySelector("#security-code")
    const securityCodePattern = {
        mask: "0000"
    }

    const securityCodeMasked = Imask(securityCode, securityCodePattern);

    securityCodeMasked.on("accept", () => {
        const cvc = securityCodeMasked.value
        document.querySelector(".cc-security .value").innerHTML = cvc.length === 0 ? "123" : cvc
    })

    //Expiration Date
    const expirationDate = document.querySelector("#expiration-date");
    const expirationDatePattern = {
        mask: "MM{/}YY",
        blocks: {
            MM: {
                mask: IMask.MaskedRange,
                from: "1",
                to: "12"
            },
            YY: {
                mask: IMask.MaskedRange,
                from: String(new Date().getFullYear() + 1).slice(2),
                to: String(new Date().getFullYear() + 10).slice(2)
            },
        }
    };

    const expirationDateMasked = Imask(expirationDate, expirationDatePattern);

    expirationDateMasked.on("accept", ()=>{
        const expDate = expirationDateMasked.value
        document.querySelector(".cc-expiration .value").innerHTML = expDate.length === 0 ? "??/??" : expDate
    })

    //Card Number
    const cardNumber = document.querySelector("#card-number")
    const cardNumberPettern = {
        mask: [
            {
                mask: "0000 0000 0000 0000",
                regex: /^4\d{0,15}/,
                cardType: "visa"
            },
            {
                mask: "0000 0000 0000 0000",
                regex: /(^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}/,
                cardType: "mastercard"
            },
            {
                mask: "0000 0000 0000 0000",
                cardType: "default"
            },
        ],
        dispatch: (appended, dynamicMasked) => {
            const number = (dynamicMasked.value + appended).replace(/\D/g, "");
            const findPattern = dynamicMasked.compiledMasks.find(({ regex }) => number.match(regex)); 
            
            return findPattern;
        }
    };

    const cardNumberMasked = Imask(cardNumber, cardNumberPettern);

    cardNumberMasked.on("accept",()=>{
        const value = cardNumberMasked.value;
        document.querySelector(".cc-number").innerHTML = value.length === 0 ? "0000 0000 0000 0000" : value
        globalThis.changeCardType(cardNumberMasked.masked.currentMask.cardType)
    })

}
