import { text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Technology = list({
  fields: {
    name: text(),
    description: text(),
  },
  db: {
    idField: { kind: 'autoincrement'}
  },
})

export default Technology;
