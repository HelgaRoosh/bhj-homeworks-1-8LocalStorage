const text = document.getElementById('editor');
const clear = document.getElementById('clear');
text.value = localStorage.getItem('myText');

text.onkeyup = ((e) => {
  localStorage.setItem('myText', text.value);
});

clear.onclick = ((e) => {
  localStorage.removeItem('myText');
  text.value='';
});