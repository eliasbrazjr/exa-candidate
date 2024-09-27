import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IDatabase {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export default registerAs(
  'database',
  (): Partial<TypeOrmModuleOptions> => ({
    database: process.env.DB_DATABASE_NAME || 'exa-candidate',
    host: process.env.DB_HOST || 'postgres',
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    type: 'postgres',
    // autoLoadEntities: true,
    synchronize: true,
    entities: ['src/**/entities/*.js'],
    migrations: ['src/**/migrations/*.js']
  }),
);
