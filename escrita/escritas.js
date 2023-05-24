const fontSelect = document.getElementById('font-alteration');
const texto = document.getElementById('texto');

fontSelect.addEventListener('change', () => {
  texto.style.fontFamily = fontSelect.value;
});

const fontSizeRange = document.getElementById('font-size-range');
const range = document.getElementById('texto');

fontSizeRange.addEventListener('input', () => {
  range.style.fontSize = `${fontSizeRange.value}px`;
});

const range1 = document.getElementById('font-spacing');
const texto2 = document.getElementById('texto');

range1.addEventListener('input', () => {
  texto2.style.letterSpacing = `${range1.value}px`;
});
function Abilita() {
  var meuTexto = document.getElementById('texto');
  if (meuTexto.style.fontWeight === 'bold') {
    meuTexto.style.fontWeight = 'normal';
  } else {
    meuTexto.style.fontWeight = 'bold';
  }
}
function Underline(){
  var seila = document.getElementById('texto');
  if (seila.style.textDecoration === 'underline'){
    seila.style.textDecoration = 'none';
  }else{
    seila.style.textDecoration = 'underline';
  }
}