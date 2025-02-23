'use strict';

exports.up = function (knex) {
    return knex.schema
        .alterTable('user', (table) => {
            table.string('scope').notNull().defaultTo('user');
        });
};

exports.down = function (knex) {
    return knex.schema
        .alterTable('user', (table) => {
            table.dropColumn('scope');
        });
};
