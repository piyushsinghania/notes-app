import fs from 'fs';
import chalk from 'chalk';

// Add notes
export const addNote = (title, body) => {
  const notes = loadNotes();

  // check if note title already exists
  const duplicateNotes = notes.find((note) => note.title === title);
  if (duplicateNotes) {
    console.log(chalk.red('Note title taken'));
    return;
  }

  notes.push({
    title,
    body,
  });
  saveNotes(notes);
  console.log(chalk.green('Note Taken'));
};

// Remove note
export const removeNote = (title) => {
  const notes = loadNotes();
  const reqNote = notes.find((note) => note.title === title);

  if (reqNote) {
    console.log(
      chalk.green(`Note with title: ${chalk.blue(reqNote.title)} removed`)
    );
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red('Note not found'));
  }
};

// List Notes
export const listNotes = () => {
  const notes = loadNotes();
  if (notes.length) {
    console.log(chalk.blue('Your Notes -'));
    notes.forEach((note) => console.log(chalk.yellow(note.title)));
  }
};

// Read Note
export const readNote = (title) => {
  const notes = loadNotes();
  const reqNote = notes.find((note) => note.title === title);
  if (reqNote) {
    console.log(chalk.green(`Title: ${chalk.blue(reqNote.title)}`));
    console.log(chalk.green(`Body: ${chalk.blue(reqNote.body)}`));
  } else {
    console.log(chalk.red('Note not found'));
  }
};

// Load notes
const loadNotes = () => {
  try {
    const data = fs.readFileSync('notes.json').toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

// Save notes
const saveNotes = (notes) => {
  const data = JSON.stringify(notes);
  fs.writeFileSync('notes.json', data);
};
