
// static data considered as student-reducer : which would contain functions regarding students.
//state consist whole state.
const tweetArr = [
  {
    id: 1,
    first: "Archita",
    last: "Nayak",
    tweets: [
      { tweet: "Hello there, I'm Archita." },
      { tweet: "Hello there, I love writing." },
    ]
  },
  {
    id: 2,
    first: "Priyanka",
    last: "Mehta",
    tweets: [
      { tweet: "Hello there, I'm Priyanka." },
      { tweet: "Hello there, I love drawing." },
    ]
  },
  {
    id: 3,
    first: "Maitry",
    last: "Shah",
    tweets: [
      { tweet: "Hello there, I'm Maitry." },
      { tweet: "Hello there, I love playing Cricket." },
    ]
  },
  {
    id: 4,
    first: "Radha",
    last: "Kotecha",
    tweets: [
      { tweet: "Hello there, I'm Radha." },
      { tweet: "Hello there, I love coffee painting." },
    ]
  },
  {
    id: 5,
    first: "Rutani",
    last: "Thakker",
    tweets: [
      { tweet: "Hello there, I'm Rutani." },
      { tweet: "Hello there, I love coding." },
    ]
  }
];

const initialState = {
  tweets: tweetArr
}

export default function (state = initialState, action) {
  return { state }
}
