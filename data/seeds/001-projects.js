exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "Project 1", description: "proj-1" },
        { name: "Project 2", description: "proj-2" },
        { name: "Project 3", description: "proj-3" }
      ]);
    });
};
