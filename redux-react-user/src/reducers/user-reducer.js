
// static data considered as student-reducer : which would contain functions regarding students.
//state consist whole state.
const userArr = [
  {
    id: 1,
    first: "Archita",
    last: "Nayak",
    age: 22,
    technology: "ReactJS",
    dateOfBirth: '13/02/1997',
    school: 'Adani Public School',
    address: [
      {
        first : 'A-40 Kalash Residency',
        second : 'Ahmedabad',
        third: '234681',
        fourth:'Gujarat'
      },
      {
        first : 'A-406 Shakti Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      }
    ]
  },
  {
    id: 2,
    first: "Priyanka",
    last: "Mehta",
    age: 56,
    technology: "ReactJS",
    dateOfBirth: '13/02/1997',
    school: "St. Xavier's",
    address: [
      {
        first : 'A-407 Kalash Residency',
        second : 'Ahmedabad',
        third: '234681',
        fourth:'Gujarat'
      },
      {
        first : 'A-40 Shiv Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      }
    ]
  },
  {
    id: 3,
    first: "Maitry",
    last: "Shah",
    age: 67,
    technology: "AngularJS",
    dateOfBirth: '13/02/1997',
    school: 'DAV Public School',
    address: [
      {
        first : 'A-780 Kalash Residency',
        second : 'Ahmedabad',
        third: '234681',
        fourth:'Gujarat'
      },
      {
        first : 'C-40 Shiv Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      }
    ]
  },
  {
    id: 4,
    first: "Radha",
    last: "Kotecha",
    age: 78,
    technology: "ReactJS",
    dateOfBirth: '13/02/1997',
    school: "St. Mary's",
    address: [
      {
        first : 'A-40 Shiv Shakti Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      },
      {
        first : 'A-409 Kalash Residency',
        second : 'Ahmedabad',
        third: '234681',
        fourth:'Gujarat'
      }
    ]
  },
  {
    id: 5,
    first: "Rutani",
    last: "Thakker",
    age: 21,
    technology: "ROR",
    dateOfBirth: '13/02/1997',
    school: 'Delhi Public School',
    address: [
      {
        first : 'A-407 Kalash Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      },
      {
        first : 'A-409 Kalash-A Residency',
        second : 'Gandhinagar',
        third: '234681',
        fourth:'Gujarat'
      }
    ]
  }
];

const initialState = {
  users: userArr
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'EDIT_USER':
      const arr = state.users.map(x => x.id !== action.payload.id ? x : action.payload);
      return { ...state, users: arr };
    default:
      return state;
  }
}
