		var first; 
		function FirstCelsjusz() 
		{ 
			first="C"; 
			przeliczJednostektemp(); 
		} 
		function FirstFahrenheit() 
		{ 
			first="F"; 
			przeliczJednostektemp(); 
		} 
		function FirstKelviny() 
		{ 
			first="K"; 
			przeliczJednostektemp(); 
		}
		
		var second; 
		function SecondCelsjusz() 
		{ 
			second="C"; 
			przeliczJednostektemp(); 
		} 
		function SecondFahrenheit() 
		{ 
			second="F"; 
			przeliczJednostektemp(); 
		} 
		function SecondKelviny() 
		{ 
			second="K"; 
			przeliczJednostektemp(); 
		}
		
		function przeliczJednostektemp() 
		{ 
			var x = getValue("idFirst"); 
			x = parseFloat(x);
			var wspolczynnik=1; 
			//zamieniamy wszystlo na Celsjusze z jednosci pierwotnej 
			if(first=="F") 
			{ 
				x = 5/9 * ( x - 32 ); 
			} 
			else if(first=="K") 
			{
				x = x - 273.15; 
			} 
			//zamieniamy z metrow na jednostke druga 
			if(second=="F") 
			{ 
				x = x*9/5 + 32; 
			} 
			else if(second=="K")
			{ 
				x = x + 273.15;
			} 
			setValue("idSecond", x);
		} 
		