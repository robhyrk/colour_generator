var html = '';

  function colourify() {
    return Math.floor(Math.random() * 256 );
  }
  
  function randomColour() {
    var colour = 'rgb(';
      colour += colourify() + ',';
      colour += colourify() + ',';
      colour += colourify() + ')';
      return colour;
  }

function printColours() {
  document.write(html);
}

for (i=0; i<=100; i++)  {   
    rgbColor = randomColour();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

printColours()