exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.string("description", 255);

      tbl
        .boolean("completed")
        .defaultTo(0)
        .notNullable();
    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();

      tbl.string("description", 255);
    })
    .createTable("tasks", tbl => {
      tbl.increments();

      tbl.string("description", 255).notNullable();

      tbl.string("notes", 255);

      tbl
        .boolean("completed")
        .defaultTo(0)
        .notNullable();

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("contexts", tbl => {
      tbl.increments();

      tbl.string("name", 255);
    })
    .createTable("projects_resources", tbl => {
      tbl.increments();

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
    .createTable("tasks_contexts", tbl => {
      tbl.increments();

      tbl
        .integer("task_id")
        .unsigned()
        .references("id")
        .inTable("tasks")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");

      tbl
        .integer("context_id")
        .unsigned()
        .references("id")
        .inTable("contexts")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("tasks_contexts")
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("contexts")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
