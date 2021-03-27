const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your Notes...";
};

//Add Notes Function
const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New Note Added!"));
  } else {
    console.log(chalk.red.inverse("Note Title Already Taken!"));
  }
};

//Remove Notes Function
const removeNote = function (title) {
  const notes = loadNotes();
  if (notes.length != 0) {
    const unmatchedNotes = notes.filter(function (note) {
      return note.title !== title;
    });

    if (unmatchedNotes.length != notes.length) {
      saveNotes(unmatchedNotes);
      console.log(
        chalk.green.inverse("Note with title: '" + title + "' removed!")
      );
    } else {
      console.log(chalk.red.inverse("No notes with title: '" + title + "'"));
    }
  } else {
    console.log(chalk.red.inverse("You Already don't have any notes"));
  }
};

//Utilites Functions
const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
