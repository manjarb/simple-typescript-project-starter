import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersColection = new CharactersCollection('Xaayb');
// const sorter2 = new Sorter(charactersColection);
// sorter2.sort();
charactersColection.sort();
console.log(charactersColection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
