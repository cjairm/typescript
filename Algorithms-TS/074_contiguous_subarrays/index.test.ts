// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
function printintegerArray(array: number[]) {
	var size = array.length;
	var res = "";
	res += "[";
	var i = 0;
	for (i = 0; i < size; i++) {
		if (i !== 0) {
			res += ", ";
		}
		res += array[i];
	}
	res += "]";
	return res;
}

var test_case_number = 1;

function check(expected: number[], output: number[]) {
	var expected_size = expected.length;
	var output_size = output.length;
	var result = true;
	if (expected_size != output_size) {
		result = false;
	}
	for (var i = 0; i < Math.min(expected_size, output_size); i++) {
		result &= output[i] == expected[i];
	}
	var rightTick = "\u2713";
	var wrongTick = "\u2717";
	if (result) {
		var out = rightTick + " Test #" + test_case_number;
		console.log(out);
	} else {
		var out = "";
		out += wrongTick + " Test #" + test_case_number + ": Expected ";
		out += printintegerArray(expected);
		out += " Your output: ";
		out += printintegerArray(output);
		console.log(out);
	}
	test_case_number++;
}

var test_1 = [3, 4, 1, 6, 2];
var expected_1 = [1, 3, 1, 5, 1];
var output_1 = countSubarrays(test_1);
check(expected_1, output_1);

var test_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [1, 2, 6, 1, 3, 1];
var output_2 = countSubarrays(test_2);
check(expected_2, output_2);

// Add your own test cases here
var test_3 = [];
var expected_3 = [];
var output_3 = countSubarrays(test_3);
check(expected_3, output_3);

var test_4 = [10000];
var expected_4 = [1];
var output_4 = countSubarrays(test_4);
check(expected_4, output_4);

var test_5 = [10000, 0, 0, 0, 0];
var expected_5 = [5, 4, 4, 4, 4];
var output_5 = countSubarrays(test_5);
check(expected_5, output_5);

var test_6 = [-1, 0, 1, 2, 10000];
var expected_6 = [1, 2, 3, 4, 5];
var output_6 = countSubarrays(test_6);
check(expected_6, output_6);
