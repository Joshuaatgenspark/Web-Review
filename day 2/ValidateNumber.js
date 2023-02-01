function ValidateNumber(input) {

    var validRegex = /^[0-9]*$/;

    if (input.value.match(validRegex)) {

        alert("Valid number!");

        document.form2.text2.focus();

        return true;

    } else {

        alert("Invalid number!");

        document.form2.text2.focus();

        return false;

    }

}
