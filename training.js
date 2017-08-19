window.addEventListener("load",
                        function(e)
                        {
                           var btn = document.getElementById("btn");
                           btn.addEventListener("click", message, false);
                        }, false);

function message(e)
{
  var textbox = document.getElementById("caesar");
  alert(caesar(textbox.value, 13));
}

function caesar(sentence, shift)
{
  sentence = sentence.toLowerCase();
  var len=sentence.length;
  var memmory=0;
  var text="";
  var a="a";
  var z="z";
  var edge1= a.charCodeAt(0);
  var edge2= z.charCodeAt(0);

  for(var i=0; i<len; i++)
  {
    if(sentence[i]!=" ")
    {
      memmory= sentence.charCodeAt(i);
      memmory= memmory + shift;
      if(memmory > edge2)
      {
        memmory-= edge2;
        memmory+= edge1-1;
      }
      text+= String.fromCharCode(memmory);
    }
    else
    {
        text+= sentence[i];
    }
  }
  return text;
}
