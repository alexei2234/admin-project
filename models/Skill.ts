import { integer, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Skill = list({
  fields: {
    employee: relationship({ref: 'Employee', many: false}),
    tech: relationship({ref: 'Technology', many: false}),
    yearsOfExperience: integer({defaultValue: 1, isRequired: true})
  },
  db: {
    idField: { kind: 'autoincrement'}
  },
});

export default Skill;
