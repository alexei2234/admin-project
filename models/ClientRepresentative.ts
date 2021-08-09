import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const ClientRepresentative = list({
  ui: {
    labelField: 'firstName',
  },
  fields: {
    firstName: text(),
    lastName: text(),
    email: text(),
    client: relationship({ ref: 'Client', many: false })
  },
  db: {
    idField: { kind: 'autoincrement'}
  },
});

export default ClientRepresentative;
