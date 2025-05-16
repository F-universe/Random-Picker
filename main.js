let pool = [];
let picked = [];
function getOptions() {
  const input = document.getElementById('inputList').value;
  return input.split(/\r?\n|,/).map(x=>x.trim()).filter(x=>x);
}
function pickRandom() {
  const options = getOptions();
  const noRepeat = document.getElementById('noRepeat').checked;
  if (options.length === 0) {
    document.getElementById('result').textContent = 'Add options above!';
    return;
  }
  if (noRepeat) {
    if (pool.length === 0 || pool.length !== options.length) {
      pool = [...options];
      picked = [];
    }
    if (pool.length === 0) {
      document.getElementById('result').textContent = 'All options picked!';
      return;
    }
    const idx = Math.floor(Math.random()*pool.length);
    const item = pool.splice(idx,1)[0];
    picked.push(item);
    document.getElementById('result').textContent = item;
    document.getElementById('pickedList').innerHTML = 'Picked: ' + picked.join(', ');
  } else {
    const item = options[Math.floor(Math.random()*options.length)];
    document.getElementById('result').textContent = item;
    document.getElementById('pickedList').innerHTML = '';
  }
}
function resetPicker() {
  pool = [];
  picked = [];
  document.getElementById('result').textContent = '';
  document.getElementById('pickedList').innerHTML = '';
}
function toggleTheme() {
  document.body.classList.toggle('dark');
  localStorage.setItem('randpick_theme', document.body.classList.contains('dark') ? 'dark' : '');
}
window.onload = () => {
  if (localStorage.getItem('randpick_theme') === 'dark') document.body.classList.add('dark');
};
