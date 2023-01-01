import { Coffee } from 'src/coffees/entities/coffee.entitiy';
import { Flavor } from 'src/coffees/entities/flavor.entity';
import { SchemaSync1672553259079 } from 'src/migrations/1672553259079-SchemaSync';
import { SchemaSync1672553681143 } from 'src/migrations/1672553681143-SchemaSync';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'iluvcoffee',
  password: 'iluvcoffee_pass123',
  database: 'iluvcoffee',
  entities: [Coffee, Flavor],
  migrations: [SchemaSync1672553259079, SchemaSync1672553681143],
});
