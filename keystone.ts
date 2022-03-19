import { config, list } from '@keystone-6/core';
import {
  integer,
  text,
  timestamp
} from '@keystone-6/core/fields';

export default config({
  db: {
    provider: 'sqlite',
    url: 'file:./keystone.db',
  },
  lists: {
    Quantity: list({
      fields: {
        area: text({ validation: { isRequired: true } }),
        segment: text({ validation: { isRequired: false } }),
        quantity: integer({ validation: { isRequired: true } }),
        created_at: timestamp({
          defaultValue: { kind: 'now' }, 
        }),
      },
    }),
  },
});