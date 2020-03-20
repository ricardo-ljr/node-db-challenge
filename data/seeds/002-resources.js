exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "Resource 1", description: "I'm resource 1" },
        { name: "Resource 2", description: "I'm resource 2" },
        { name: "Resource 3", description: "I'm resource 3" }
      ]);
    });
};
