const arr = [
  {
    id: 1,
    first: "Archita",
    last: "Nayak",
    age: 22,
    technology: "ReactJS"
  },
  {
    id: 2,
    first: "Priyanka",
    last: "Mehta",
    age: 56,
    technology: "ReactJS"
  },
  {
    id: 3,
    first: "Maitry",
    last: "Shah",
    age: 67,
    technology: "AngularJS"
  },
  {
    id: 4,
    first: "Radha",
    last: "Kotecha",
    age: 45,
    technology: "ReactJS"
  },
  {
    id: 5,
    first: "Rutani",
    last: "Thakker",
    age: 21,
    technology: "ROR"
  }
];
const initialState = {
  students: arr,
  activeStudent: null,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ACTIVE_STUDENT':
      return { ...state, activeStudent: action.payload };
    case 'ADD_STUDENT':
      return { ...state, students: [...state.students, action.payload] }
    case 'DELETE_STUDENT':
      let filtered_state = state.students.filter(student => student.first !== action.payload.first)
      return { ...state, students: filtered_state }
    default:
  }
  return state;
}