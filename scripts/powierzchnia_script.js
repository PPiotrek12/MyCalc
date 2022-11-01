var first;
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

	var second;
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
	function SecondKilometry()
	{
		second="km";
		przeliczJednostekDlugosci();
	}
	
	
	function przeliczJednostekDlugosci()
	{
		var x = getValue("idFirst");
		var wspolczynnik=1;
		//zamieniamy wszystlo na metry z jednosci pierwotnej
		if(first=="mm")
		{
			x*=0.000001;
		}
		else if (first == 'cm')
		{
			x *= 0.0001;
		}
		else if(first=="km")
		{
			x*=1000000;
		}
		
		//zamieniamy z metrow na jednostke druga
		if(second=="mm")
		{
			x*=1000000;
		}
		else if (second == 'cm')
		{
			x *= 10000;
		}
		else if(second=="km")
		{
			x*=0.000001;
		}
		setValue("idSecond", x);
	}
