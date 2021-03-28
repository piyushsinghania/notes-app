const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customise yargs version
yargs.version("1.1.0");

//Creating add command
yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Creating remove command
yargs.command({
  command: "remove",
  describe: "Remove's a note",
  builder: {
    title: {
      describe: "Title of note to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Creating list command
yargs.command({
  command: "list",
  describe: "List's the notes",
  handler() {
    notes.listNotes();
  },
});

//Creating read command
yargs.command({
  command: "read",
  describe: "read's the notes",
  builder: {
    title: {
      describe: "Title of Note to be searched",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//setting up yargs by explicitly calling it
yargs.parse();
// console.log(yargs.argv);
