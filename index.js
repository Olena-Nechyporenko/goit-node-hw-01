const contacts = require("./contacts");
const { program } = require("commander");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const getAllContacts = await contacts.listContacts();
      return console.table(getAllContacts);

    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "removeContact":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    case "addContact":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-ph, --phone <type>");

program.parse();
const options = program.opts();
invokeAction(options);
