import { Knex } from 'knex';

const TABLE_NAME = 'users';


/**
 * Create table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.bigIncrements();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('refresh_token').notNullable();

    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
      
    table.timestamp('updated_at').nullable();
  });
}

/**
 * Drop table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}