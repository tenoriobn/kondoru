'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import process from 'process';
import { Dialect } from 'sequelize/types';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];

const db: any = {};

const sequelize = config.use_env_variable
  ? new Sequelize(process.env[config.use_env_variable] as string, config)
  : new Sequelize(
      config.database as string,
      config.username as string,
      config.password as string,
      config as { dialect: Dialect }
    );

const loadModels = async () => {
  const files = fs.readdirSync(__dirname).filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
    );
  })

  for (const file of files) {
    const model = (await import(path.join(__dirname, file))).default(sequelize, DataTypes);
    db[model.name] = model;
  };
  
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
}

loadModels().catch((error) => {
  console.error("Erro ao carregar modelos:", error);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;