//plik z nawigacja
function openNav()
{
    document.getElementById("myNav").style.width = "70%";
}

function closeNav()
{
    document.getElementById("myNav").style.width = "0%";
}

function getValue(id)
{
	return document.getElementById(id).value;
}
function setValue(id, value)
{
	document.getElementById(id).value = value;
}