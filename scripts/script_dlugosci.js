	var first = 1;
	
	function FirstMikrony()
	{
		first="mk";
		przeliczJednostekDlugosci();
	}

	function FirstMilimetry()
	{
		first="mm";
		przeliczJednostekDlugosci();
	}
	function FirstCentymetry()
	{
		first="cm";
		przeliczJednostekDlugosci();
	}
	function FirstCale()
	{
		first="C";
		przeliczJednostekDlugosci();
	}
	function FirstMetry()
	{
		first="m";
		przeliczJednostekDlugosci();
	}
	function FirstKilometry()
	{
		first="km";
		przeliczJednostekDlugosci();
	}
	function FirstMile()
	{
		first="Ml";
		przeliczJednostekDlugosci();
	}

	var second;
	function SecondMikrony()
	{
		second="mk";
		przeliczJednostekDlugosci();
	}
	function SecondMilimetry()
	{
		second="mm";
		przeliczJednostekDlugosci();
	}
	function SecondCentymetry()
	{
		second="cm";
		przeliczJednostekDlugosci();
	}

	function SecondMetry()
	{
		second="m";
		przeliczJednostekDlugosci();
	}
	
	function SecondCale()
	{
		second="C";
		przeliczJednostekDlugosci();
	}
	
	function SecondKilometry()
	{
		second="km";
		przeliczJednostekDlugosci();
	}
	
	function SecondMile()
	{
		second="Ml";
		przeliczJednostekDlugosci();
	}
	
	
	function przeliczJednostekDlugosci()
	{
		var x = getValue("idFirst");
		var wspolczynnik=1;
		if (first == second)
		{
			setValue("idSecond", x);
			return;
		}
		
		//zamieniamy wszystlo na metry z jednosci pierwotnej
		if (first == 'mk')
		{
			x*=0.000001;
		}
		if(first=="mm")
		{
			x*=0.001;
		}
		else if (first == 'cm')
		{
			x *= 0.01;
		}
		else if (first == 'C')
		{
			x *= 0.0254;
		}
		else if(first=="km")
		{
			x*=1000;
		}
		else if (first == 'Ml')
		{
			x *= 1609.344;
		}
		//x = x.toFixed(10);
		
		//zamieniamy wszystlo na jednostke docelowa z metrow
		if (second == 'mk')
		{
			x *= 10000000;
		}
		if(second=='mm')
		{
			x*=1000;
		}
		else 
		if (second == 'cm')
		{
			x *= 100;
		}
		else if (second == 'C')
		{
			x *= 39.3700787;
		}
		else if(second=='km')
		{
			x*=0.001;
		}
		else if (second == 'Ml')
		{
			x *= 0.000621371192;
		}
		/*
		*/
		setValue("idSecond", x);
	}
