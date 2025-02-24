'use strict';

module.exports = {
    async up(knex) {
        await knex.schema.createTable('user_favorites', (table) => {
            table.integer('user_id').unsigned().references('id').inTable('user').onDelete('CASCADE');
            table.integer('movie_id').unsigned().references('id').inTable('movies').onDelete('CASCADE');
            table.primary(['user_id', 'movie_id']);
            table.timestamps(true, true);
        });
    },

    async down(knex) {
        await knex.schema.dropTableIfExists('user_favorites');
    }
};
