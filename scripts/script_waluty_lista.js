function onload_getRates()
{
	getRates();
}

function createHeader(text1,text2,text3,text4)
{
	var tr = document.createElement('tr');   

	var th1 = document.createElement('th');
	//var th2 = document.createElement('th');
	var th3 = document.createElement('th');
	var th4 = document.createElement('th');
	var text1 = document.createTextNode(text1);
	//var text2 = document.createTextNode(text2);
	var text3 = document.createTextNode(text3);
	var text4 = document.createTextNode(text4);

	th1.appendChild(text1);
	//th1.setAttribute("width", "50px");
	//th2.appendChild(text2);
	//th2.setAttribute("width", "100%");
	th3.appendChild(text3);
    th4.appendChild(text4);
    th4.setAttribute("width", "100%");
	//th4.setAttribute("width", "100%");
	tr.appendChild(th1);
	//tr.appendChild(th2);
	tr.appendChild(th3);
	tr.appendChild(th4);
	//
	return tr;
}

function createRecord(text1,text2,text3,text4)
{
	var tr = document.createElement('tr');   

	var td1 = document.createElement('td');
	//var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');

	var text1 = document.createTextNode(text1);
//	var text2 = document.createTextNode(text2);
	var text3 = document.createTextNode(text3);
	var text4 = document.createTextNode(text4);

	td1.appendChild(text1);
	//td2.appendChild(text2);
	td3.appendChild(text3);
	td4.appendChild(text4);
	tr.appendChild(td1);
	//tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	//	
	return tr;	
}


function getRates() 
{
	var kwotaPLN = getValue('idKwotaPLN');
	var table = document.createElement('table');
	var tr = createHeader('Symbol', 'Name', 'Course', 'Amount');
	table.appendChild(tr);		
	
	$.get('https://api.nbp.pl/api/exchangerates/tables/a/', 
		{}, 
		function(data) 
		{
			var a = data[0].rates;
			//	
			for (i = 0; i < a.length; i++)
			{
                var rate = a[i];	
                
                var kwota = kwotaPLN / rate.mid;
				
				var tr = createRecord(rate.code, rate.currency, rate.mid, kwota.toFixed(2));
				table.appendChild(tr);		
				
			}				
			var idWyniki = document.getElementById("idWyniki");
			if (idWyniki.hasChildNodes())
				idWyniki.removeChild(idWyniki.childNodes[0]);
			idWyniki.appendChild(table);			
		}
	);	
}
