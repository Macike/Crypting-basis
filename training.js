window.addEventListener("load",
                        function(e)
                        {
                           var btn = document.getElementById("btn");
                           btn.addEventListener("click", message, false);
                        }, false);

/**
*button click handler
*
*@param{Object}
*/
function message(e)
{
  var textbox = document.getElementById("caesar");
  var code= caesar(textbox.value, 13);
  textbox.value=code;
  var encrypt= julius(code,13);
  var textboxes = document.getElementById("caesar2");
  textboxes.value= encrypt;
}

/**
*encodes the caesar code
*
*@param{String}
*@param{Number}
*@return{String}
*/
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

/**
*decodes the caesar code
*
*@param{String}
*@param{Number}
*@return{String}
*/
function julius(sentence, shift)
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
      if(sentence[i]==" ")
      {
        text+= sentence[i];
      }
      else
      {
        memmory= sentence.charCodeAt(i);
        memmory= memmory - shift;
        if(memmory<edge1)
        {
          memmory+= edge2-edge1+1;
        }
        text+= String.fromCharCode(memmory);
      }
  }
  return text;
}
