import { relationship, text, timestamp } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Project = list({
  fields: {
    name: text({
      isRequired: true
    }),
    description: text(),
    startDate: timestamp({
      isRequired: true
    }),
    client: relationship({ ref: 'Client', many: false })
  },
  db: {
    idField: { kind: 'autoincrement'}
  }
});

export default Project;
