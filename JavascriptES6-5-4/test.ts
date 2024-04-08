// Input: array number number[]
// output: total positive number number
const sumPositiveNumber = (arr: number[]): number => {
  const initialValue = 0;
  return arr
    .filter((num) => num >= 0)
    .reduce((prevValue, currValue) => prevValue + currValue, initialValue);
};

const case1 = [-5, -4, -3, 0, 1, 2];
const case2 = [0, 2, 3];
const case3 = [-5, 2, 9, 0, 1, -2];

console.log(sumPositiveNumber(case1));
console.log(sumPositiveNumber(case2));
console.log(sumPositiveNumber(case3));

//bai 12
//input: arrray names : string[]
//output: array names only names start with letter "A" : string[]
const startLetterA = (arr: string[]): string[] => {
  const newLetterA = [...arr];
  return newLetterA.filter((value: string) => value.startsWith("A"));
};

const const12 = ["An", "Anh", "Bao", "A"];
console.log(startLetterA(const12));

//bai 13
//input: array character: string[]
//output: reverse the order: string[]
const reverseArray = (arr: string[]): string[] => {
  const newReverseArr = [...arr];
  return newReverseArr.reverse();
};

const const13 = ["An", "Anh", "Bao", "A"];
console.log(reverseArray(const13));

//bai 14
//input: array string : string[]
//output:  new array with the strings sorted in alpha order : string[]
const sortArray = (strings: string[]): string[] => {
  const clonedArr = [...strings];
  const newArray: string[] = clonedArr.sort();
  return newArray;
};

const const14 = ["An", "Diem", "Bao", "Khang"];
console.log(startLetterA(const14));
//bai 21
//input: array numbers : number[]
//output: new array only the unique values : number[]
const numberArray = (arr: number[]): number[] => {
  const newArr: number[] = Array.from(new Set(arr));
  return newArr;
};
const const21 = [1, 3, 4, 1, 2, 6, 5, 2, 1];
console.log(numberArray(const21));
//bai 23
//input: two array arr1: T[], arr2:T[] : T[]
//output: new array containing the element appear in both array : T[]
const intersectionArr = <T>(arr1: T[], arr2: T[]): T[] => {
  const newIntersectionArr: T[] = arr1.filter((value) => arr2.includes(value));
  return newIntersectionArr;
};
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(intersectionArr(array1, array2));
//bai 26
//input: array object book with title, author, publicationYear
//output: array book publicationYear before the year 2000
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};
const getpublicationYearbefore2000 = (books: Book[]): Book[] => {
  const newBooks: Book[] = books.filter(
    (books: Book) => books.publicationYear < 2000
  );
  return newBooks;
};
const books: Book[] = [
  { title: "Book 1", author: "Author 1", publicationYear: 1998 },
  { title: "Book 2", author: "Author 2", publicationYear: 2005 },
  { title: "Book 3", author: "Author 3", publicationYear: 1995 },
  { title: "Book 4", author: "Author 4", publicationYear: 2001 },
];
console.log(getpublicationYearbefore2000(books));
