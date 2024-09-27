import { DataSource } from 'typeorm';

export default new DataSource({
  database: process.env.DB_DATABASE_NAME || 'exa-candidate',
  host: process.env.DB_HOST || 'postgres',
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  type: 'postgres',
  // autoLoadEntities: true,
  synchronize: true,
  entities: ['src/**/entities/*.js'],
  migrations: ['src/**/migrations/*.js'],
});
