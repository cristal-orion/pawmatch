import * as migration_20260407_145338_initial from './20260407_145338_initial';
import * as migration_20260407_150219_add_homepage from './20260407_150219_add_homepage';

export const migrations = [
  {
    up: migration_20260407_145338_initial.up,
    down: migration_20260407_145338_initial.down,
    name: '20260407_145338_initial',
  },
  {
    up: migration_20260407_150219_add_homepage.up,
    down: migration_20260407_150219_add_homepage.down,
    name: '20260407_150219_add_homepage'
  },
];
