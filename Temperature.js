let celsius;

function inputCelsius()
{
    celsius = parseInt(prompt("Nhập vào độ C"));
}

function celsiusToFahrenheit(fahrenheit)
{
    return (celsius - 32)/1.8;
}

function celsiusToKelvin(kelvin)
{
    return celsius + 273.15;
}

inputCelsius();
let fahrenheit = celsiusToFahrenheit();
let kelvin = celsiusToKelvin();

alert(celsius + " độ C sang " + fahrenheit + " độ F");
alert(celsius + " độ C sang " + kelvin + " độ K");