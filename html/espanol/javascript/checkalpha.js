function checksyntax(e, type)	{

  var checkOK;

  if(type)	{
  checkOK = "@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_. []()";
  } else {
  checkOK = "0123456789-_. +[]()";
  }

  var checkStr = e.value;
  var allValid = true;
  var clean = '';

  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++) {
      if (ch == checkOK.charAt(j)) {
        clean += ch;
        break;
      }

        if (j == checkOK.length - 1)
        {
          allValid = false;
          //break;
        }
    }
  }

  if (!allValid)
  {
    alert("Por favor solo ingrese caracteres alfa-numéricos, puntos, comas, guión, subrayado, paréntesis [] {} o () para el nombre del campo.");
	e.value = clean;
	e.focus();
    return (false);
  } else	 {
	return true;
  }

}

function checkjscriptchars(e)	{

  var checkNOTOK;
  checkNOTOK = "\\/-<>[]?*'\"";

  var checkStr = e.value;
  var allValid = true;
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkNOTOK.length;  j++)
      if (ch == checkNOTOK.charAt(j)) {
      allValid = false;
      break;
    }
  }

  if (!allValid)
  {
    alert("Introduce solo caracteres alfanumericos o caracteres - _ [] {} or () para el campo Nombre de carpeta.");
	e.value='';
	e.focus();
    return (false);
  } else	 {
	return true;
  }

}
