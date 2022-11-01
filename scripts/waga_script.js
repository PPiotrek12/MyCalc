	var first;
		var first;
		function FirstGramy()
		{
			first="g";
			przeliczJednostek();
		}
		function FirstDekagramy()
		{
			first="dg";
			przeliczJednostek();
		}
		function FirstKilogramy()
		{
			first="kg";
			przeliczJednostek();
		}
		function FirstTony()
		{
			first="t";
			przeliczJednostek();
		}
		
	
		var second;
		function SecondGramy()
		{
			second="g";
			przeliczJednostek();
		}
		function SecondDekagramy()
		{
			second="dg";
			przeliczJednostek();
		}
		function SecondKilogramy()
		{
			second="kg";
			przeliczJednostek();
		}
		function SecondTony()
		{
			second="t";
			przeliczJednostek();
		}
		
		
		
		function przeliczJednostek()
		{
			var x = getValue("idFirst");
			var wspolczynnik=1;
			//zamieniamy wszystlo na  kg 
			if(first=="g")
			{
				x*=0.001;
			}
			else if(first=="dg")
			{
				x*=0.01;
			}
			else if(first=="t")
			{
				x*=1000;
			}
			
			
			//kurna, jak zrobić dalej???????????(nie wiem czy mam dobrze)
			if(second=="g")
			{
				x*=1000;
			}
			else if(second=="dg")
			{
				x*=100;
			}
			else if(second=="t")
			{
				x*=0.001;
			}
			
			setValue("idSecond", x);
		}
		document.getElementById(id).value = value;