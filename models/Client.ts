import { relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Client = list({
  fields: {
    name: text(),
    description: text(),
    website: text(),
    representatives: relationship({ ref: 'ClientRepresentative', many: true, ui: { labelField: 'email'} })
  },
  db: {
    idField: { kind: 'autoincrement' }
  },
});

export default Client;
