var first = 2;
var second = 10;
var cyfryDuze = ["A", "B", "C", "D", "E", "F"];
function doCalculate() {
	var input = document.getElementById("idFirst").value;
	var numSystem = first;
	//
		
	var numSystemInt = parseInt(numSystem);
	//zamiana na system dziesietny	
	var num10 = parseInt(input, numSystemInt);
	
	//zamiana na system docelowy
	var output = "";
	while (num10 > 0)
	{
		var r = num10 % second;
		num10 -= r;
		num10 = num10 / second;
		if (r < 10)
		{
			output = r.toString() + output;
		}
		else
		{
			r -= 10;
			output = cyfryDuze[r] + output;
		}
	}
	
	document.getElementById("idSecond").value = output;	        	
}

function doCalculateFirst(n) {
	first = n;
	doCalculate();
}

function doCalculateSecond(n) {
	second = n;
	doCalculate();
}
