"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Abbey Road",
    artist: "The Beatles",
    year: "1969"
  },
  {
    title: "American Idiot",
    artist: "Green Day",
    year: "2004"
  },
  {
    title: "Nevermind",
    artist: "Nirvana",
    year: "1991"
  },
  {
    title: "Songs of Experience",
    artist: "U2",
    year: "2017"
  },
  {
    title: "Rocket to Russia",
    artist: "Ramones",
    year: "1977"
  }
];

const musicCollection = {
  albums,
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.albums.length) {
          return {
            value: this.albums[index++],
            done: false
          }
        }
        return {
          done: true
        }
      }
    }
  }
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
