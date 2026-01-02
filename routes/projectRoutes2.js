import express from "express";
import Project from "../models/Project2.js";

const router = express.Router();

/* READ */
// GET all projects (Public)
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});
// ADD project (Admin)
router.post("/admin", async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
});

// UPDATE project (Admin)
router.put("/admin/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE project (Admin)
router.delete("/admin/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
