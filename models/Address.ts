import { checkbox, relationship, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Address = list({
  ui: {
    listView: {
      initialColumns: ['country', 'city', 'address', 'active', 'field'],
    },
  },
  fields: {
    country: text(),
    city: text(),
    address: text(),
    active: checkbox(),
    field: text(),
    employee: relationship({ ref: 'Employee', many: false})
  },
  db: {
    idField: { kind: 'autoincrement'}
  },
})

export default Address;
