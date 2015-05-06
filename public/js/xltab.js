
//
function tabname(titlename,tabname,tabNum,tabcishu)   
{   
	for (var i = 1; i <= tabcishu; i++)   
	{   
	document.getElementById(tabname + i).style.display = (i == tabNum) ? 'block' : 'none';   
	document.getElementById(titlename+ i).className = (i == tabNum) ? 'sd01' : 'sd02';   
	}   
}

function zbyby(titlename,tabname,tabNum,tabcishu)   
{   
	for (var i = 1; i <= tabcishu; i++)   
	{   
	document.getElementById(tabname + i).style.display = (i == tabNum) ? 'block' : 'none';   
	document.getElementById(titlename+ i).className = (i == tabNum) ? 'sdd01' : 'sdd02';   
	}   
}
