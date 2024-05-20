
let str = prompt ('Введите имя')
let ismPrompt = prompt('Введите любую букву из своего имени')
if (str.includes(ismPrompt)) {
    alert('Да, такая буква есть в имени');
}
else {
  alert('Нет, такой буквы нет в имени!');
}