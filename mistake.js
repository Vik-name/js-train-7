// Завдання 5: Створення символу з використанням Symbol.for()

// Функція createSymbolForKey створює новий символ за допомогою Symbol.for() та повертає його
function createSymbolForKey(key) {
  // Використовуємо Symbol.for() для створення нового символу symbol зі значенням key
  const symbol = Symbol.for(key);
  // Symbol.for() шукає символ в глобальному реєстру символів. Якщо символ з таким ключем вже існує, він повертає його, в іншому випадку створює новий символ з даним ключем та додає його в реєстр
  // Повертаємо створений символ
  return symbol;
}

// Функція compareSymbolsForKey порівнює два символи за допомогою оператора '==='
function compareSymbolsForKey(symbol1, symbol2) {
  // Використовуємо оператор '===' для порівняння двох символів
  if (symbol1 === symbol2) {
    return true;
  } else {
    return false;
  }

  // Якщо два символи однакові, він поверне true, в іншому випадку - false
}

console.log("Завдання 5 ====================================");
let symbol5 = createSymbolForKey("myKey"); // Створюємо новий символ
let symbol6 = createSymbolForKey("myKey"); // Створюємо новий символ
console.log(compareSymbolsForKey(symbol5, symbol6)); //Виведе: true

// Завдання 9: Використання Symbol.iterator

// Об'єкт "myObject" представляє значення   from: 1, to: 7, які можна перебрати
let rangeObject = {
  from: 1,
  to: 7,

  [Symbol.iterator](myObject) {
    this.current = this.from;

    return this;
  },

  next() {
    if (this.current < this.to) {
      return rangeObject;
    }

    // Використовуємо Symbol.iterator для створення ітератора всередині об'єкта "myObject"
    // this.current присвоюємо this.from

    // Повертаємо this
    //створюємо метод "next" який визначає поведінку при кожній ітерації

    // Використовуйте if
    if (this.current < this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },

  // Якщо current менше to, повертаємо об'єкт з властивістю "value",що містить поточне значення ,
  // та не забуваємо збільшити індекс за допомогою інкремент, і "done" - false, означаючи, що ітерація ще не закінчена
  // Якщо індекс вийшов за межі масиву ключів, повертаємо об'єкт з властивістю "done" - true, означаючи, що ітерація закінчена
};

// Функція "useSymbolIterator" використовує ітератор для отримання значень об'єкта

function useSymbolIterator(obj) {
  const iterator = obj[Symbol.iterator]();
  // result = iterator.next();

  for (let num of iterator) {
    result = iterator(num);
  }
  console.log(myObject);
  // Проходимо крізь елементи об'єкта obj, використовуючи цикл "for...of"
  // Додаємо кожне значення до масиву "result"
  // Повертаємо масив зі значеннями
}

console.log("Завдання 9 ====================================");

console.log(useSymbolIterator(rangeObject)); //Виведе [ 1, 2, 3, 4, 5, 6 ]

// Завдання 10: Використання Symbol.iterator

// Оголошення об'єкта "myObject" з властивістю "category"
let myObject = {
  //Cтворюємо масив category
  category: [
    { id: 1, name: "apple" }, // Об'єкт категорії з ідентифікатором 1 та назвою "apple"
    { id: 2, name: "banana" }, // Об'єкт категорії з ідентифікатором 2 та назвою "banana"
    { id: 3, name: "orange" }, // Об'єкт категорії з ідентифікатором 3 та назвою "orange"
    { id: 4, name: "grape" }, // Об'єкт категорії з ідентифікатором 4 та назвою "grape"
    { id: 5, name: "mango" }, // Об'єкт категорії з ідентифікатором 5 та назвою "mango"
  ],
  //Створюємо властивість currentIndex зі значенням 0, яка буде нашим лічильником в ітерації
  currentIndex: 0,

  // Оголошення методу Symbol.iterator для об'єкта "myObject"
  [Symbol.iterator](myObject) {
    return this,
  
  //Повертаємо this
  

  // Оголошення методу "next" для ітерації
  next() {
    if (this.currentIndex < this.category.length) {
      let value = name[this.category[currentIndex]]++
      return {value: this.value, done: false}   
    } else {
      return {done: true}
    }
  }
  }
  // Створюємо логічний оператор який буде перевіряти чи властивість об'єкту currentIndex менша ніж довжина масиву category
  //Створюємо змінну value якій присвоємо властивість name елемента масиву category з індексом currentIndex
  // Збільшимо currentIndex на одиницю
  // Повертаємо об'єкт з властивістю value значенням якої буде value,та прапорцем done: false
  //Якщо властивість об'єкту currentIndex більше або дорівнює довжині масиву category повертаємо об'єкт з прапорцем done: true, коли ітерація закінчена
};

console.log("Завдання 10 ====================================");

console.log(useSymbolIterator(myObject)); //Виведе [ 'apple', 'banana', 'orange', 'grape', 'mango' ]
