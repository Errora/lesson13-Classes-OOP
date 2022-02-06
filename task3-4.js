class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }
  add(word, description) {
    let count = 0;
    for (const key in this.words) {
      if (this.words[key] == word) {
        count ++;
      }
    }
    if (count == 0 ) {
      this.words[word] = {word: word, description: description}
    } else {
      console.log('Такое слово уже есть');
    }
  }

  remove(key) {
    delete this.words[key];
  }

  get(key) {
    console.log(`${this.words[key].word} - ${this.words[key].description}`);
  }

  showAllWords() {
    for (const key in this.words) {
      console.log(`${this.words[key].word} - ${this.words[key].description}`);
    }
  }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

dictionary.remove('JavaScript');
dictionary.showAllWords();

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }

  add(word, description) {
    let count = 0;
    for (const key in this.words) {
      if (this.words[key] == word) {
        count ++;
      }
    }
    if (count == 0 ) {
      this.words[word] = {word: word, description: description, isDifficult: true}
    } else {
      console.log('Такое слово уже есть');
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();