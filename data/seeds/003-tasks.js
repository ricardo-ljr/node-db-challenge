exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          description: "Make Bed",
          notes: "Make bed",
          completed: 1,
          project_id: 1
        },
        {
          description: "Eat",
          notes: "Oats",
          completed: 1,
          project_id: 1
        },
        {
          description: "Poop",
          notes: "Flush",
          completed: 1,
          project_id: 1
        }
      ]);
    });
};
