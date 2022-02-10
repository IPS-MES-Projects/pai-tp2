"use strict";

/**
 * @class Saves all the information needed to run the application
 * @constructs Storage
 * @property {Class[]} classes - array of objects of type Class, to store all the classes in our system
 */
class Storage {
  constructor() {
    // Attributes
    this.classes = [
      {
        id: 1,
        year: 10,
        letter: "A",
        course: "IG",
        students: [],
      },
      {
        id: 2,
        year: 11,
        letter: "A",
        course: "GPSI",
        students: [],
      },
      {
        id: 3,
        year: 12,
        letter: "A",
        course: "GPSI",
        students: [],
      },
      {
        id: 4,
        year: 11,
        letter: "B",
        course: "AR",
        students: [],
      },
    ];
  }

  // Getters
  get Classes() {
    return this.classes;
  }

  /**
   * Loads data from local storage and update local data structures
   */
  loadFromStorage() {
    const classes = localStorage.getItem("classes");
    if (classes) {
      this.classes = JSON.parse(classes);
    } else {
      localStorage.setItem("classes", JSON.stringify(this.classes));
    }
  }

  /**
   * Function that aims to get a Class feature
   * @param {string} id The id of the class
   * @returns the class object
   */
  getClass(id) {
    // Checks if the class with the passed id exists
    const schoolClass = this.classes.find((c) => c.id === id);
    if (!schoolClass) {
      alert("A turma selecionada não pôde ser encontrada!");
    }

    return schoolClass;
  }

  /**
   * Function that aims to add or edits a Student feature
   * @param {string} studentName The name of the new student
   */
  createOrUpdateStudent(studentClass, studentNumber, studentName, finalGrade) {
    const currentClass = this.classes.find(
      (turma) => turma.id === studentClass
    );
    let student = currentClass.students.find(
      (student) => student.number === studentNumber
    );

    //create New Student
    if (!student) {
      student = new Student(studentNumber, studentName, finalGrade);
      currentClass.students.push(student);
    } else {
      student.name = studentName;
      student.finalGrade = finalGrade;
    }
    // // Updates the DOM of the playlists
    // window.viewManager.updatePlaylistsView(this.playlists);

    // Update local storage
    localStorage.setItem("classes", JSON.stringify(this.classes));
  }

  /**
   * Function that aims to remove a Playlist resource
   */
  deleteStudent(studentClass, studentNumber) {
    // Checks if the playlist with the passed id exists
    const currentClass = this.classes.find(
      (turma) => turma.id === studentClass
    );
    const index = currentClass.students.findIndex(
      (student) => parseInt(student.number) === studentNumber
    );
    console.dir(this.Classes);
    console.log("studentNumber" + studentNumber);
    console.log(index);
    if (index === -1) {
      alert("O aluno selecionado não pôde ser encontrado!");
    }

    // Remove a playlist da array
    currentClass.students.splice(index, 1);

    // // Updates the DOM of the playlists
    // window.viewManager.updatePlaylistsView(this.playlists);

    // Update local storage
    localStorage.setItem("classes", JSON.stringify(this.classes));
  }

  clearClass(studentClass) {
    const currentClass = this.classes.find(
      (turma) => turma.id === studentClass
    );
    currentClass.students = [];
    localStorage.setItem("classes", JSON.stringify(this.classes));
  }
}
