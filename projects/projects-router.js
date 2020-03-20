const express = require("express");

const projects = require("./projects-model");

const router = express.Router();

// GET PROJECTS
router.get("/projects", (req, res) => {
  projects
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: "Error, could not get projects", error });
    });
});

// GET PROJECTS BY ID
router.get("/projects/:id", (req, res) => {
  projects
    .getProjectByID(req.params.id)
    .then(projects => {
      let booleanText = projects.completed ? "true" : "false";

      res.status(200).json({ ...projects, completed: booleanText });
    })
    .catch(error => {
      res.status(500).json({
        message: "Could Not Find Project ID",
        error
      });
    });
});

// GET RESOURCES
router.get("/resources", (req, res) => {
  projects
    .getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error, could not get resources from server.",
        error
      });
    });
});

// GET TASKS
router.get("/tasks", (req, res) => {
  projects
    .getTasks()
    .then(task => {
      res.status(200).json(task);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error, could not get tasks from server.", error });
    });
});

// GET CONTEXTS
router.get("/contexts", (req, res) => {
  projects
    .getContexts()
    .then(context => {
      res.status(200).json(context);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error, could not get contexts from server.", error });
    });
});

// POST PROJECT
router.post("/projects", (req, res) => {
  if (!req.body || !req.body.name) {
    res.status(500).json({ message: "Project name is required." });
  } else {
    projects
      .addProject(req.body)
      .then(added => {
        res.status(200).json(added);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Error, could not add project to server.", error });
      });
  }
});

// POST RESOUCE
router.post("/resources", (req, res) => {
  if (!req.body || !req.body.name) {
    res.status(500).json({ message: "Resource name is required." });
  } else {
    projects
      .addResource(req.body)
      .then(added => {
        res.status(200).json(added);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Error, could not add resource to server." });
      });
  }
});

// POST TASK
router.post("/tasks", (req, res) => {
  if (!req.body || !req.body.description) {
    res.status(500).json({ message: "Task description is required." });
  } else {
    projects
      .addTask(req.body)
      .then(added => {
        res.status(200).json(added);
      })
      .catch(error => {
        res
          .status(500)
          .json({ message: "Error, could not add task to server." });
      });
  }
});

// POST CONTEXT
router.post("/contexts", (req, res) => {
  projects
    .addContext(req.body)
    .then(added => {
      res.status(200).json(added);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Error, could not add context to server.", error });
    });
});

module.exports = router;
