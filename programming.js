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

            combination = combination.toString();
            split_combine = combination.split('');
            var prepare = [];
            var err = 0;

            split_combine.forEach(function(i) {
                if (Object.keys(letters_ar).indexOf(i) != -1) {
                    if (letters_ar[i] != null && letters_ar[i] != "" && letters_ar[i] != '') {
                        prepare.push(letters_ar[i]);
                    }
                } else {
                    var msg = "Please enter the number exist on " + Object.keys(letters_ar).join(',');
                    throw msg;
                }
            });
            // console.log("Splitted", split_combine, prepare);
            var result = [];
            var final_result = [];
            if (prepare.length == 0) throw "There is no combinations to display.";
            if (prepare.length == 1) {
                splitted = prepare[0].split('');
                for (i = 0; i < splitted.length; i++) {
                    final_result.push(splitted[i]);
                }
                return final_result;
            }
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
            console.log(e);
            console.warn(e);
        }
    }