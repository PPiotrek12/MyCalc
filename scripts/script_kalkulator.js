var strInput, strOutput;
function usuwanieSpacji(s)
{
	var indexPom = s.indexOf(" ");
	while(indexPom != -1)
	{
		s = s.replace(" ", "");
		indexPom = s.indexOf(" ");
	}
	return s;
}
function findOperacje(s, operacja)
{
	var wynik = new Array();
	for(var i = 0; i < s.length; i++)
	{
		if(s[i] == operacja)
			wynik.push(i);
	}
	return wynik;
}

function GetIndexLiczbaMnozenieL(s, index)
{
	if(index < 0)
		return -1;

	var i = index;
	var czyLiczba = false;
	while(i >= 0)
	{
		if(s[i] == '*' || s[i] == '/' || s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')')
		{
			//gdy jest ujemna liczba z lewej strony
			if (s[i] == '-' && i != index)
			{
				i--;
			}
			break;
		}
		else
		{
			i--;
			czyLiczba = true;
		}
	}
	if(s[i + 1] == '^')
		return -1;
	if(czyLiczba)
		return i + 1;
	else
		return -1;
}
function GetIndexLiczbaMnozenieP(s, index)
{
	if(index >= s.length)
		return -1;
	var i = index;
	var czyLiczba = false;
	while(i < s.length)
	{
		if(s[i] == '*' || s[i] == '/' || s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')')
		{
			//gdy jest ujemna liczba z prawej strony
			if (s[i] == '-' && i == index)
			{
				i++;
			}
			else
				break;
		}
		else
		{
			i++;
			czyLiczba = true;
		}
	}
	if(czyLiczba)
		return i - 1;
	else
		return -1;
}


function GetLiczba(s, indexStart, indexEnd)
{
	var liczbaStr = s.substr(indexStart, indexEnd - indexStart + 1);
	return parseFloat(liczbaStr); 
}


function wykonajMnozenie_Dzielenie_internal(indexOperacji, operacja, oprList, oprResults)
{
	var wynik = false;
	var indexPom = indexOperacji;
	var lewo, prawo, indexP, indexL;
	indexL = GetIndexLiczbaMnozenieL(strOutput, indexPom - 1);
	indexP = GetIndexLiczbaMnozenieP(strOutput, indexPom + 1);
	if(indexL != -1 && indexP != -1)
	{
		wynik = true;
		lewo = GetLiczba(strOutput, indexL, indexPom - 1);
		prawo = GetLiczba(strOutput, indexPom + 1, indexP);
		var WynikDzialaniaInt = 0;
		if (operacja == '*')
			WynikDzialaniaInt = lewo * prawo;
		else
			WynikDzialaniaInt = lewo / prawo;
			
		//WynikDzialaniaInt = WynikDzialaniaInt.toFixed(2);
		var WynikDzialaniaStr = WynikDzialaniaInt.toString();
		if(indexL > 0 && strOutput[indexL - 1] == '(' && indexP < strOutput.length - 1 && strOutput[indexP + 1] == ')')
			indexL--, indexP++;
		var subS = strOutput.substr(indexL, indexP - indexL + 1);
		strOutput = strOutput.replace(subS, WynikDzialaniaStr);
		oprList.push(subS);
		oprResults.push(WynikDzialaniaStr);
	}
	return wynik;
}


function wykonajMnozenie_Dzielenie(operacja, oprList, oprResults)
{	
	var result = false;
	var v = findOperacje(strOutput, operacja);
	for (var i = 0; i < v.length; i++)
	{
		result = wykonajMnozenie_Dzielenie_internal(v[i], operacja, oprList, oprResults);
		if (result)
			return true; 
	}
	return false;
}


function GetIndexLiczbaDodawanieL(s, index)
{
	if(index < 0)
		return -1;

	var i = index;
	var czyLiczba = false;
	while(i >= 0)
	{
		if(s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')')
		{
			//gdy jest ujemna liczba z lewej strony
			if (s[i] == '-' && i != index)
			{
				i--;
			}
			break;
		}
		else
		if(s[i] == '*' || s[i] == '/')
		{
			czyLiczba = false;
			break;
		}
		else
		{
			i--;
			czyLiczba = true;
		}
	}
	if(s[i + 1] == '^')
		return -1;
	if(czyLiczba)
		return i + 1;
	else
		return -1;
}

function GetIndexLiczbaDodawanieP(s, index)
{
	if(index >= s.length)
		return -1;
	var i = index;
	var czyLiczba = false;
	while(i < s.length)
	{
		if(s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')')
		{
			//gdy jest ujemna liczba z prawej strony
			if (s[i] == '-' && i == index)
			{
				i++;
			}
			else
				break;
		}
		else
		if(s[i] == '*' || s[i] == '/')
		{
			czyLiczba = false;
			break;
		}
		else
		{
			i++;
			czyLiczba = true;
		}
	}
	if(czyLiczba)
		return i - 1;
	else
		return -1;
}

function wykonajDodawanie_Odejmowanie_internal(indexOperacji, operacja, oprList, oprResults)
{
	var wynik = false;
	var indexPom = indexOperacji;
	var lewo, prawo, indexP, indexL;
	indexL = GetIndexLiczbaDodawanieL(strOutput, indexPom - 1);
	indexP = GetIndexLiczbaDodawanieP(strOutput, indexPom + 1);
	if(indexL != -1 && indexP != -1)
	{
		wynik = true;
		lewo = GetLiczba(strOutput, indexL, indexPom - 1);
		prawo = GetLiczba(strOutput, indexPom + 1, indexP);
		var WynikDzialaniaInt = 0;
		if (operacja == '+')
			WynikDzialaniaInt = lewo + prawo;
		else
			WynikDzialaniaInt = lewo - prawo;
			
		
		var WynikDzialaniaStr = WynikDzialaniaInt.toString();
		if(indexL > 0 && strOutput[indexL - 1] == '(' && indexP < strOutput.length - 1 && strOutput[indexP + 1] == ')')
			indexL--, indexP++;
		var subS = strOutput.substr(indexL, indexP - indexL + 1);
		strOutput = strOutput.replace(subS, WynikDzialaniaStr);
		oprList.push(subS);
		oprResults.push(WynikDzialaniaStr);
	}
	return wynik;
}
function wykonajDodawanie_Odejmowanie(operacja, oprList, oprResults)
{
	var result = false;
	var v = findOperacje(strOutput, operacja);
	for (var i = 0; i < v.length; i++)
	{
		result = wykonajDodawanie_Odejmowanie_internal(v[i], operacja, oprList, oprResults);
		if (result)
			return true; 
	}
	return false;
}
function ascii (a) 
{
	return a.charCodeAt(0);
}
function czyNawiasySieZgadzaja(s)
{
	var pom = "";
	for(var i = 0; i < s.length; i++)
	{
		if(s[i] == "(" || s[i] == ")")
			pom += s[i];
	}
	s =  pom;
	var suma = 0;
	var wynik1 = 0;
	var wynik2 = 0;
	for(var i = 0; i < s.length; i++)
	{
		if(s[i] == "(")
			suma++;
		else
		{
			suma--;
			if(suma < 0)
			{
				wynik1++;
				suma = 0;
			}
		}
	}
	if(suma != 0)
		wynik2 = suma;
	if(wynik1 != 0 || wynik2 != 0)
		return false;
	else
		return true;
}
function czyOperacjeSieZgadzaja(s)
{
	for(var i = 1; i < s.length; i++)
	{
		pom = ascii(s[i]);
		pom1 = ascii(s[i - 1]);
		if(pom == 45)
			continue;
		if((pom == 42 || pom == 43 || pom == 45 || pom == 47) && (pom1 == 42 || pom1 == 43 || pom1 == 45 || pom1 == 47 || pom == 94))
			return false
	}
	return true;
	
}
function czyNieMaGlupot(s)
{
	for(var i = 0; i < s.length; i++)
	{
		pom = ascii(s[i]);
		if((pom == 94 || pom >= 48 && pom <= 48 + 9) || pom == 42 || pom == 43 || pom == 45 || pom == 47 || pom == 40 || pom == 41 || pom == 46 || pom == 118)
			;
		else
			return false;
	}
	return true;
}
function sprawdzeniePoprawnosci(s)
{
	var b1 = czyNawiasySieZgadzaja(s);
	var b2 = czyOperacjeSieZgadzaja(s);
	var b3 = czyNieMaGlupot(s);
	if(b1 && b2 && b3)
		return true;
	else
		return false;
}
function coJestPierwsze(a1, a2, s)
{
	
	for(var i = 1; i < s.length; i++)
	{
		if(s[i] == a1)
			return a1;
		if(a2 != '0')
		{
			if(s[i] == a2)
				return a2;
		}
	}
	return -1;
}

function GetIndexLiczbaPotegowanieL(s, index)
{
	if(index < 0)
		return -1;

	var i = index;
	var czyLiczba = false;
	while(i >= 0)
	{
		if(s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')' || s[i] == '*' || s[i] == '/')
			break;
		else
		if(s[i] == '*' || s[i] == '/')
		{
			czyLiczba = false;
			break;
		}
		else
		{
			i--;
			czyLiczba = true;
		}
	}
	if(czyLiczba)
		return i + 1;
	else
		return -1;
}

function GetIndexLiczbaPotegowanieP(s, index)
{
	if(index >= s.length)
		return -1;
	var i = index;
	var czyLiczba = false;
	while(i < s.length)
	{
		if(s[i] == '+' || s[i] == '-' || s[i] == '(' || s[i] == ')' || s[i] == '*' || s[i] == '/')
		{
			//gdy jest ujemna liczba z prawej strony
			if (s[i] == '-' && i == index)
			{
				i++;
			}
			else
				break;
		}
		else
		if(s[i] == '*' || s[i] == '/')
		{
			czyLiczba = false;
			break;
		}
		else
		{
			i++;
			czyLiczba = true;
		}
	}
	if(czyLiczba)
		return i - 1;
	else
		return -1;
}

function wykonajPotegowanie_internal(indexOperacji, oprList, oprResults)
{
	var wynik = false;
	var indexPom = indexOperacji;
	var lewo, prawo, indexP, indexL;
	indexL = GetIndexLiczbaPotegowanieL(strOutput, indexPom - 1);
	indexP = GetIndexLiczbaPotegowanieP(strOutput, indexPom + 1);
	if(indexL != -1 && indexP != -1)
	{
		wynik = true;
		lewo = GetLiczba(strOutput, indexL, indexPom - 1);
		prawo = GetLiczba(strOutput, indexPom + 1, indexP);
		var WynikDzialaniaInt = 1;
		for(var i = 1; i <= prawo; i++)
			WynikDzialaniaInt *= lewo;
		
		var WynikDzialaniaStr = WynikDzialaniaInt.toString();
		if(indexL > 0 && strOutput[indexL - 1] == '(' && indexP < strOutput.length - 1 && strOutput[indexP + 1] == ')')
			indexL--, indexP++;
		var subS = strOutput.substr(indexL, indexP - indexL + 1);
		strOutput = strOutput.replace(subS, WynikDzialaniaStr);
		oprList.push(subS);
		//oprList.push('0');
		
		oprResults.push(WynikDzialaniaStr);
	}
	return wynik;
}
function czyJestPotegowanie(oprList, oprResults)
{
	var result = false;
	var v = findOperacje(strOutput, '^');
	for (var i = 0; i < v.length; i++)
	{
		result = wykonajPotegowanie_internal(v[i], oprList, oprResults);
		if (result)
			return true; 
	}
	return false;
}


function WykonajDzialanie()
{
	strInput = getValue("idDane");
	strOutput = usuwanieSpacji(strInput);
	var b = sprawdzeniePoprawnosci(strOutput);
	if(!b)
	{
		if(!czyNawiasySieZgadzaja(strOutput))
		{
			$("#myPopup").text("Wrong use of brackets");
			$("#myPopup").css('visibility', 'visible');
		}
		else if(!czyOperacjeSieZgadzaja(strOutput))
		{
			$("#myPopup").text("Wrong use of characters");
			$("#myPopup").css('visibility', 'visible');			
		}
		else if(!czyNieMaGlupot(strOutput))
		{
			$("#myPopup").text("There are unexpected characters");
			$("#myPopup").css('visibility', 'visible');			
		}

		return;
	}
	else
		$("#myPopup").css('visibility', 'collapse');
	var results = new Array();
	var oprList = new Array();
	var oprResults = new Array();
	//var currSize = results.length;
	var currSize = results.length;
	while(1==1)
	{
		currSize = results.length;
		pierwszeDzialanieMnozenia = coJestPierwsze('^', '0', strOutput);
		if(pierwszeDzialanieMnozenia == '^')
		{
			if(czyJestPotegowanie(oprList, oprResults))
				results.push(strOutput);
			else
			{
				pierwszeDzialanieMnozenia = coJestPierwsze('*', '/', strOutput);
				if(pierwszeDzialanieMnozenia != -1)
				{
					if(pierwszeDzialanieMnozenia == '*')
					{
						if (wykonajMnozenie_Dzielenie('*', oprList, oprResults))
							results.push(strOutput);
						else
						{
							if (wykonajMnozenie_Dzielenie('/', oprList, oprResults))
								results.push(strOutput);
							else
							{
								if(pierwszeDzialanieMnozenia == '+')
								{
									if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
										results.push(strOutput);
									else
									{
										if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
											results.push(strOutput);

									}
								}
								else
								{
									if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
										results.push(strOutput);
									else
									{
										if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
											results.push(strOutput);						
									}
								
								}
							}
						}
					}
				}
				else
				{
					pierwszeDzialanieMnozenia = coJestPierwsze('+', '-', strOutput);
					if(pierwszeDzialanieMnozenia != -1)
					{
						if(pierwszeDzialanieMnozenia == '+')
						{
							if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
								results.push(strOutput);
							else
							{
								if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
									results.push(strOutput);

							}
						}
						else
						{
							if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
								results.push(strOutput);
							else
							{
								if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
									results.push(strOutput);						
							}
							
						}

					}
				}
			}
		}
		else
		{
			pierwszeDzialanieMnozenia = coJestPierwsze('*', '/', strOutput);
			if(pierwszeDzialanieMnozenia != -1)
			{
				if(pierwszeDzialanieMnozenia == '*')
				{
					if (wykonajMnozenie_Dzielenie('*', oprList, oprResults))
						results.push(strOutput);
					else
					{
						if (wykonajMnozenie_Dzielenie('/', oprList, oprResults))
							results.push(strOutput);
						else
						{
							pierwszeDzialanieMnozenia = coJestPierwsze('+', '-', strOutput);
							if(pierwszeDzialanieMnozenia == '+')
							{
								if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
									results.push(strOutput);
								else
								{
									if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
										results.push(strOutput);

								}
							}
							else
							{
								if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
									results.push(strOutput);
								else
								{
									if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
										results.push(strOutput);						
								}
							
							}
						}
					}
				}
				else
				{
					if (wykonajMnozenie_Dzielenie('/', oprList, oprResults))
						results.push(strOutput);
					else
					{
						if(pierwszeDzialanieMnozenia == '+')
						{
							if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
								results.push(strOutput);
							else
							{
								if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
									results.push(strOutput);

							}
						}
						else
						{
							if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
								results.push(strOutput);
							else
							{
								if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
									results.push(strOutput);						
							}
						
						}
					}
				}
			}
			else
			{
				pierwszeDzialanieMnozenia = coJestPierwsze('+', '-', strOutput);
				if(pierwszeDzialanieMnozenia != -1)
				{
					if(pierwszeDzialanieMnozenia == '+')
					{
						if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
							results.push(strOutput);
						else
						{
							if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
								results.push(strOutput);

						}
					}
					else
					{
						if (wykonajDodawanie_Odejmowanie('-', oprList, oprResults))
							results.push(strOutput);
						else
						{
							if (wykonajDodawanie_Odejmowanie('+', oprList, oprResults))
								results.push(strOutput);						
						}
						
					}

				}
			}
		}
		//
		if(currSize == results.length)
			break;
	}
	var table = document.createElement('table');
	var tr = document.createElement('tr');   

	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var text1 = document.createTextNode("Lp");
	var text2 = document.createTextNode("Result");
	var text3 = document.createTextNode("Operation");

	th1.appendChild(text1);
	th1.setAttribute("width", "30");
	th2.appendChild(text2);
	th2.setAttribute("width", "100%");
	th3.appendChild(text3);
	th3.setAttribute("width", "200px");
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);

	table.appendChild(tr);		
	
	for (var i = 0; i < results.length; i ++ )
	{
		var tr = document.createElement('tr');   

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');

		var text1 = document.createTextNode((i+1).toString());
		var text2 = document.createTextNode(results[i]);
		var text3 = document.createTextNode(oprList[i] + "=" + oprResults[i]);		

		td1.appendChild(text1);
		td2.appendChild(text2);
		td3.appendChild(text3);
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		table.appendChild(tr);		
		//window.console.log(results[i]);
	}
	var idWyniki = document.getElementById("idWyniki");
	if (idWyniki.hasChildNodes())
		idWyniki.removeChild(idWyniki.childNodes[0]);
	idWyniki.appendChild(table);
	//table.setAttribute("border", "1");
}

