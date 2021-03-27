const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notesUtilities = require("./notes.js");
const notes = require("./notes.js");

// const myNotes = getNotes();
// console.log(myNotes);
// console.log(process.argv);

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
  handler: function (argv) {
    notesUtilities.addNote(argv.title, argv.body);
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
  handler: function (argv) {
    notesUtilities.removeNote(argv.title);
  },
});

//Creating list command
yargs.command({
  command: "list",
  describe: "List's the notes",
  handler: function () {
    console.log("Listing the quotes");
  },
});

//Creating read command
yargs.command({
  command: "read",
  describe: "read's the notes",
  handler: function () {
    console.log("Read's up the notes");
  },
});

yargs.parse();
// console.log(yargs.argv);
