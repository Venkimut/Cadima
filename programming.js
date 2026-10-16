//This is a JavaScript Console Script.
//Create and Mapping Letters array
let letters_ar = {
    "1": "",
    "2": "abc",
    "3": "def",
    "4": "tuv",
    "5": "wxyz"
}


function letterCombinations(combination = "") {
    try {
        //Input convert to sting
        combination = combination.toString();
        //String splitted to single character
        split_combine = combination.split('');

        //Prepare an array with the matched strings from the existing object with input
        var prepare = [];
        split_combine.forEach(function(i) {
            if (Object.keys(letters_ar).indexOf(i) != -1) {
                if (letters_ar[i] != null && letters_ar[i] != "" && letters_ar[i] != '') {
                    prepare.push(letters_ar[i]);
                }
            } else {

                //Message will be returned if the Mapped number is not entered..!
                var msg = "Please enter the number exist on " + Object.keys(letters_ar).join(',');
                throw msg;
            }
        });
        var result = [];
        var final_result = [];

        //In case there is no mapped numbers are dedected.
        if (prepare.length == 0) throw "There is no combinations to display.";

        //In case only one number entered..!
        if (prepare.length == 1) {
            splitted = prepare[0].split('');
            for (i = 0; i < splitted.length; i++) {
                final_result.push(splitted[i]);
            }
            return final_result;
        }

        //If user enter more than one digit numbers
        for (i = 1; i <= prepare.length - 1; i++) {
            if (i == 1) {
                previous = prepare[i - 1].split('');
                for (ii = 0; ii < previous.length; ii++) {
                    current = prepare[i].split('');
                    for (iii = 0; iii < current.length; iii++) {
                        result.push(previous[ii] + current[iii]);
                    }
                }
            }
            if (i == 1 && prepare.length == 2) {
                return result
            } else if (i < prepare.length - 1) {
                final_result = result;
                result = [];
                additional = prepare[i + 1].split('');
                for (iv = 0; iv < additional.length; iv++) {
                    for (v = 0; v < final_result.length; v++) {
                        result.push(final_result[v] + additional[iv]);
                    }
                }
                final_result = result;
            }
        }
        return final_result;
    } catch (e) {
        //Exception Handled
        console.log(e);
        console.warn(e);
    }
}

letterCombinations("23");