import { createSchema, list } from '@keystone-next/keystone/schema';
import {
  text,
  password,
} from '@keystone-next/fields';

import Address from './models/Address';
import Technology from './models/Technologhy';
import Client from './models/Client';
import ClientRepresentative from './models/ClientRepresentative';
import Project from './models/Project';
import Employee from './models/Employee';
import Skill from './models/Skill';

export const lists = createSchema({
  User: list({
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
      searchFields: ['name', 'email'],
      labelField: 'name',
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password({ isRequired: true }),
    },
    db: {
      idField: { kind: 'autoincrement'}
    },
    description: 'List of users'
  }),
  Address,
  Technology,
  Client,
  ClientRepresentative,
  Project,
  Employee,
  Skill
});
