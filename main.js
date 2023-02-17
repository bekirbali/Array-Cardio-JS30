const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicola", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "BloodShell", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lisa", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "HammerStorm", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethel, Erin",
  "Becker, Carl",
  "Benison, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Bedloe, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilario",
  "Begin, Menarches",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benetton, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Senna, Tony",
  "Benson, Leona",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingram",
  "Black, Elk",
  "Beria, Luciano",
  "Bern, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Guiro, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Carrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Miranda, Frank",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const bornAt1500 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(bornAt1500);

const names = inventors.map((inventor) => {
  //   return `name: ${inventor.first} and lastName: ${inventor.last}`;
  return inventor.last + " " + inventor.first;
});

console.log(names);

// !! S O R T I N G   O B J E C T

const sorted = inventors.sort((a, b) => b.year - a.year);

console.table(sorted);

const ageSum = inventors.reduce(
  (sum, inventor) => sum + (inventor.passed - inventor.year),
  0
);

console.log(ageSum);

const sortByAge = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);

console.table(sortByAge);

// const sortedPeople = people
//   .map((person) => person.split(","))
//   .map((lastName) => lastName[1])
//   .sort();
// console.log(sortedPeople); // only last name

const sortedPeople = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(",");
  const [bFirst, bLast] = b.split(",");
  console.log(bLast);
  return aLast > bLast ? 1 : -1;
});

console.log(sortedPeople);

const transportation = data.reduce((sum, item) => {
  if (!sum[item]) {
    sum[item] = 0;
  }
  sum[item]++;
  return sum;
}, {});

console.log(transportation);

const myArr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

const odd = myArr.reduce((sum, item) => {
  if (!sum[item]) {
    sum[item] = 0;
  }
  sum[item]++;
  return sum;
}, {});

for (let [k, v] of Object.entries(odd)) {
  if (v % 2) {
    console.log(k);
  }
}

const text = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

const oddFinder = (a) => a.reduce((x, s) => x ^ s);

console.log(oddFinder(text));

function findOdd(arr) {
  const oddObj = arr.reduce((sum, item) => {
    if (!sum[item]) {
      sum[item] = 0;
    }
    sum[item]++;
    return sum;
  }, {});
  for (let [key, value] of Object.entries(oddObj)) {
    if (value % 2) {
      return key;
    }
  }
}
console.log(findOdd(text));
