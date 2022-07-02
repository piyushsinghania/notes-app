import yargs from 'yargs';

import { addNote, removeNote, listNotes, readNote } from './notes.js';

// setting up commands for command line via yargs

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      demandOption: true,
      type: 'string',
      describe: 'Note Title',
    },
    body: {
      demandOption: true,
      type: 'string',
      describe: 'Note Body',
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

// create remove command
yargs.command({
  command: 'remove',
  describe: 'Revome a node',
  builder: {
    title: {
      demandOption: true,
      type: 'string',
      describe: 'Note title',
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

// create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler() {
    listNotes();
  },
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      demandOption: true,
      type: 'string',
      describe: 'Note Title',
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

yargs.parse();
