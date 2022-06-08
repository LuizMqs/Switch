document.getElementById("button").addEventListener("click", function () {
    const num = parseFloat(document.getElementById("number").value)

    if (num == parseInt(num)) {
        switch (num) {
            case 0:
                document.querySelector("h3").innerHTML = "Zero";
                break;

            case 1:
                document.querySelector("h3").innerHTML = "Um"
                break;

            case 2:
                document.querySelector("h3").innerHTML = "Dois"
                break;

            case 3:
                document.querySelector("h3").innerHTML = "Três"
                break;

            case 4:
                document.querySelector("h3").innerHTML = "Quatro"
                break;

            case 5:
                document.querySelector("h3").innerHTML = "Cinco"
                break;

            case 6:
                document.querySelector("h3").innerHTML = "Seis"
                break;

            case 7:
                document.querySelector("h3").innerHTML = "Sete"
                break;

            case 8:
                document.querySelector("h3").innerHTML = "Oito"
                break;

            case 9:
                document.querySelector("h3").innerHTML = "Nove"
                break;

            case 10:
                document.querySelector("h3").innerHTML = "Dez"
                break;

            default:
                document.querySelector("h3").innerHTML = "Um valor de 0 a 10"
        }
    }

    else {
        document.querySelector("h3").innerHTML = "Insira um valor inteiro"
    }
})