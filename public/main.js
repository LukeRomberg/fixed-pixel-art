var palette = document.getElementsByClassName('palette')[0];
var artArea = document.getElementsByClassName('artArea')[0];
var color = "";

for (i = 0; i < 5000; i++) {
	let div = document.createElement('div');
	div.setAttribute('class', 'grid')
	artArea.append(div)
}


artArea.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className = 'grid' && color === 'blue') {
    event.target.className = 'blue'
  } else if (event.target.className = 'grid' && color === 'red') {
    event.target.className = 'red'
  }
})

palette.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className === 'pallete_Blue') {
    color = 'blue';
  } else if (event.target.className === 'pallete_Red') {
    color = 'red';
  }
})

clear.addEventListener('click', (event) => {
  event.preventDefault();
  var gridReset = artArea.children
	if (gridReset.length > 1){
	  for (var i = 0; i < gridReset.length; i++) {
	    gridReset[i].className = 'grid'

			console.log(gridReset.length);
	  }
	}else{console.log('bork?');}
})
