document.addEventListener("DOMContentLoaded", function () {
    // Mengambil referensi elemen-elemen HTML
    const inputField = document.getElementById("celcius");
    const resultField = document.getElementById("result");
    const explanationField = document.getElementById("explanation");
    const convertButton = document.getElementById("konversi");
    const resetButton = document.getElementById("reset");
    const reverseButton = document.getElementById("reverse");
    const inputLabel = document.getElementById("input-type");
    const resultLabel = document.getElementById("result-type");
    const inputDescription = document.getElementById("input-label");

    // Menentukan arah konversi (default: Celcius ke Fahrenheit)
    let isCelsiusToFahrenheit = true;

    function convertTemperature() {
        // Mengambil nilai input dan mengonversinya ke angka
        let inputValue = parseFloat(inputField.value);
        if (isNaN(inputValue)) { // Validasi input agar tidak kosong atau bukan angka
            alert("Masukkan angka yang valid!");
            return;
        }

        let result, explanation;
        if (isCelsiusToFahrenheit) {
            // Konversi Celcius ke Fahrenheit
            result = (inputValue * 9/5) + 32;
            explanation = `(${inputValue} × 9/5) + 32 = ${result.toFixed(2)}°F`;
        } else {
            // Konversi Fahrenheit ke Celcius
            result = (inputValue - 32) * 5/9;
            explanation = `(${inputValue} - 32) × 5/9 = ${result.toFixed(2)}°C`;
        }
        
        // Menampilkan hasil konversi dan penjelasan
        resultField.value = result.toFixed(2);
        explanationField.value = explanation;
    }

    function resetFields() {
        // Mengosongkan semua field input dan output
        inputField.value = "";
        resultField.value = "";
        explanationField.value = "";
    }

    function reverseConversion() {
        // Membalikkan arah konversi
        isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
        let tempValue = inputField.value;
        let tempResult = resultField.value;
        let tempExplanation = explanationField.value;

        // Menukar nilai input dan hasil jika tidak kosong
        if (tempValue !== "" || tempResult !== "") {
            inputField.value = tempResult;
            resultField.value = "";
            explanationField.value = tempExplanation;
        }
        
        // Mengubah label dan deskripsi sesuai arah konversi
        if (isCelsiusToFahrenheit) {
            inputLabel.textContent = "Celcius (°C)";
            resultLabel.textContent = "Fahrenheit (°F)";
            inputDescription.textContent = "Masukkan suhu derajat Celcius (°C) ke kotak di bawah, lalu tekan tombol konversi untuk memperoleh nilai dalam bentuk Fahrenheit (°F)";
            inputField.placeholder = "Masukkan suhu dalam Celcius";
        } else {
            inputLabel.textContent = "Fahrenheit (°F)";
            resultLabel.textContent = "Celcius (°C)";
            inputDescription.textContent = "Masukkan suhu derajat Fahrenheit (°F) ke kotak di bawah, lalu tekan tombol konversi untuk memperoleh nilai dalam bentuk Celcius (°C)";
            inputField.placeholder = "Masukkan suhu dalam Fahrenheit";
        }

        // Jika sudah ada input, langsung konversi ulang
        if (inputField.value !== "") {
            convertTemperature();
        }
    }

    // Menambahkan event listener untuk tombol
    convertButton.addEventListener("click", convertTemperature);
    resetButton.addEventListener("click", resetFields);
    reverseButton.addEventListener("click", reverseConversion);
});