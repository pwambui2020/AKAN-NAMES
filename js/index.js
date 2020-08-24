var getDayNumber = function (century, year, month, day) {
    return (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7;
};

function getName() {
    var century = document.getElementById('century').value;
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var gender = document.getElementById('gender').value;
    if (century == '' || month == '' || year == '' || day == '' || gender == '') {
        alert('Ensure all fields are properly filled');
    } else {
        var x = getDayNumber(century, year, month, day);
        var day = Math.floor(x);

        if (gender == "male") {
            switch (day) {
                case 0:
                    name = "kwasi";
                    break;
                case 1:
                    name = "kwadwo";
                    break;
                case 2:
                    name = "kwabena";
                    break;
                case 3:
                    name = "kwaku";
                    break;
                case 4:
                    name = "yao";
                    break;
                case 5:
                    name = "kofi";
                    break;
                case 6:
                    name = "kwame";
                    break;
                default:
                    name = "error";

            }
        } else {

            switch (day) {
                case 0:
                    name = "akosua";
                    break;
                case 1:
                    name = "adwoa";
                    break;
                case 2:
                    name = "abenaa";
                    break;
                case 3:
                    name = "akua";
                    break;
                case 4:
                    name = "yaa";
                    break;
                case 5:
                    name = "afua";
                    break;
                case 6:
                    name = "ama";
                    break;
                default:
                    name = "error";

            }
        }
        alert("your Akan name is " + name);
    }

}

