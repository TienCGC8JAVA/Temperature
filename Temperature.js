function inputCelsius()
{
    celsius = parseInt(prompt("Nhập vào độ C"));
}

function celsiusToFahrenheit()
{
    return (celsius - 32)/1.8;
}

function celsiusToKelvin()
{
    return celsius + 273.15;
}