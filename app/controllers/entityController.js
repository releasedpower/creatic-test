const entityService = require('../services/entityService');

async function getAllEntities(req, res) {
  try {
    const entities = await entityService.getAllEntities();
    res.json(entities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getEntityById(req, res) {
  try {
    const id = req.params.id;
    const entity = await entityService.getEntityById(id);
    if (!entity) return res.status(404).json({ error: 'Entity not found' });
    res.json(entity);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createEntity(req, res) {
  try {
    let { name } = req.body;
    name = name?.trim();
    const newEntity = await entityService.createEntity({ name });
    res.status(201).json(newEntity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function updateEntity(req, res) {
  try {
    const id = req.params.id;
    let { name } = req.body;
    if (name !== undefined) name = name.trim();
    const updatedEntity = await entityService.updateEntity(id, { name });
    if (!updatedEntity) return res.status(404).json({ error: 'Entity not found' });
    res.json(updatedEntity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function deleteEntity(req, res) {
  try {
    const id = req.params.id;
    const deleted = await entityService.deleteEntity(id);
    if (!deleted) return res.status(404).json({ error: 'Entity not found' });
    res.json({ message: 'Entity deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllEntities,
  getEntityById,
  createEntity,
  updateEntity,
  deleteEntity,
};
