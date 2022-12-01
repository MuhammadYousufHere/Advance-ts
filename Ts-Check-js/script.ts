const input = document.getElementById('name') as HTMLInputElement;

input.autofocus = true;
input.addEventListener('input', e => {
  const i = e.currentTarget as HTMLInputElement
  console.log(i.value);
})