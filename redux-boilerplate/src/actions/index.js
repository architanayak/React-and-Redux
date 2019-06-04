// Every action is defined here with "type(mandatory field)" and "payload". 

// FROM.HERE ---> student-reducer (where each of these "type" performs as seperate function and 
// helps in manipulating the actual store)

export const activeStudent = (student) => {
  return{
    type : 'ACTIVE_STUDENT',
    payload : student
  }
}
export const addStudent = (newStudent) => {
    return{
    type : 'ADD_STUDENT',
    payload : newStudent
  }
}
export const deleteStudent = (deleteStudent) => {
  return{
  type : 'DELETE_STUDENT',
  payload : deleteStudent
}
}