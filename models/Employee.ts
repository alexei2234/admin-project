import { checkbox, float, relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";

const Employee = list({
  fields: {
    firstName: text(),
    lastName: text(),
    entitlement: text(),
    isOnBench: checkbox(),
    level: select({
      dataType: 'enum',
      options: [
        { label: 'Junior Engineer', value: 'junior' },
        { label: 'Mid-level Engineer', value: 'midlevel' },
        { label: 'Senior Engineer', value: 'senior' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' }
    }),
    gender: select({
      dataType: 'string',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      isRequired: true,
      ui: { displayMode: 'select' }
    }),
    manager: relationship({ref: 'Employee', many: false}),
    project: relationship({ref: 'Project', many: false}),
    linkedin: text(),
    hiringRank: text(),
    backgroundCheckStatus: checkbox(),
    onBoardingStatus: checkbox(),
    source: text(),
    leverLink: text(),
    education: text(),
    employeeType: text(),
    isBillable: text(),
    billRate: float({defaultValue: 0.0, isRequired: true}),
    address: relationship({ref: 'Address', many: false})
  },
  db: {
    idField: { kind: 'autoincrement'}
  },
});

export default Employee;
