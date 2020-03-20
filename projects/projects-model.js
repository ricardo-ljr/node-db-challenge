const db = require("../data/dbConfig");

module.exports = {
  getResources,
  getProjects,
  getTasks,
  getContexts,

  addResource,
  addProject,
  addTask,
  addContext,

  getResourceByID,
  getProjectByID,
  getTaskByID,
  getContextByID,

  getTasksByProjectID,
  getResourcesByProjectID
};

function getResources() {
  return db("resources");
}

function getProjects() {
  return db("projects");
}

function getTasks() {
  return db("tasks as t")
    .join("projects", "project_id", "=", "projects.id")
    .select(
      "t.id as task_id",
      "t.description as task_description",
      "t.notes as task_notes",
      "t.completed as task_completed",
      "projects.id as project_id",
      "projects.name as project_name",
      "projects.description as project_description"
    )
    .orderBy("project_id");
}

function getContexts() {
  return db("contexts");
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addProject(project) {
  return db("projects").insert(project);
}

function addTask(task) {
  return db("tasks").insert(task);
}

function addContext(context) {
  return db("contexts").insert(context);
}

function getProjectByID(id) {
  return db("projects")
    .first()
    .where({ id });
}

function getTaskByID(id) {
  return db("tasks")
    .first()
    .where({ id });
}

function getResourceByID(id) {
  return db("resources")
    .first()
    .where({ id });
}

function getContextByID(id) {
  return db("contexts")
    .first()
    .where({ id });
}

function getTasksByProjectID(project_id) {
  return db("tasks").where({ project_id });
}

function getResourcesByProjectID(project_id) {
  return db("resources").where({ project_id });
}
