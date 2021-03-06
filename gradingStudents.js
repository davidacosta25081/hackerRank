function gradingStudents(grades) {
  return grades.map(grade => {
  if (((grade + 1) %5)  == 0 && grade >=38) {  
    return (grade + 1)  
  }
  else if (((grade+2)%5) == 0 && grade >= 38) {
      return (grade+2)
  }
  else {
    return grade;
  }
 })
}