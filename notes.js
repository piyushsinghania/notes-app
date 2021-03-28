const fs = require("fs");
const chalk = require("chalk");

//Add Notes Function
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  // console.log(duplicateNote);
  if (!duplicateNote) {
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
const removeNote = (title) => {
  const notes = loadNotes();
  if (notes.length != 0) {
    const unmatchedNotes = notes.filter((note) => note.title !== title);

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

//List Notes Function
const listNotes = () => {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.red.inverse("No Notes Found!"));
  } else {
    console.log(chalk.blue.inverse("Your Notes: "));
    notes.forEach((note) => {
      console.log(chalk.yellow.inverse(note.title));
    });
  }
};

//Read Note Function
const readNote = (title) => {
  const notes = loadNotes();
  const requiredNote = notes.find((note) => note.title === title);
  if (requiredNote) {
    console.log(chalk.blue.inverse(requiredNote.title));
    console.log(chalk.yellow.bold(requiredNote.body));
  } else {
    console.log(chalk.red.inverse("No Note found with that title"));
  }
};

//Utilites Functions
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
