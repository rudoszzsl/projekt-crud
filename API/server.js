import express from 'express'
import cors from 'cors'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
app.use(cors())
app.use(express.json())

function getFilePath(variant) {
  const num = String(variant).padStart(2, '0')
  return join(__dirname, 'data', `variant-${num}.json`)
}

function readData(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'))
}

function saveData(filePath, data) {
  writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
}

function nextId(data) {
  return data.length === 0 ? 1 : Math.max(...data.map(i => i.id)) + 1
}

// GET /api/:variant/items — list all items
app.get('/api/:variant/items', (req, res) => {
  const filePath = getFilePath(req.params.variant)
  if (!existsSync(filePath)) {
    return res.status(404).json({ error: `Variant ${req.params.variant} does not exist` })
  }
  res.json(readData(filePath))
})

// GET /api/:variant/items/:id — single item
app.get('/api/:variant/items/:id', (req, res) => {
  const filePath = getFilePath(req.params.variant)
  if (!existsSync(filePath)) {
    return res.status(404).json({ error: `Variant ${req.params.variant} does not exist` })
  }
  const item = readData(filePath).find(i => i.id === Number(req.params.id))
  if (!item) {
    return res.status(404).json({ error: `Item with id ${req.params.id} does not exist` })
  }
  res.json(item)
})

// POST /api/:variant/items — create a new item
app.post('/api/:variant/items', (req, res) => {
  const filePath = getFilePath(req.params.variant)
  if (!existsSync(filePath)) {
    return res.status(404).json({ error: `Variant ${req.params.variant} does not exist` })
  }
  const data = readData(filePath)
  const newItem = { id: nextId(data), ...req.body }
  data.push(newItem)
  saveData(filePath, data)
  res.status(201).json(newItem)
})

// PUT /api/:variant/items/:id — update an item
app.put('/api/:variant/items/:id', (req, res) => {
  const filePath = getFilePath(req.params.variant)
  if (!existsSync(filePath)) {
    return res.status(404).json({ error: `Variant ${req.params.variant} does not exist` })
  }
  const data = readData(filePath)
  const index = data.findIndex(i => i.id === Number(req.params.id))
  if (index === -1) {
    return res.status(404).json({ error: `Item with id ${req.params.id} does not exist` })
  }
  data[index] = { ...data[index], ...req.body, id: data[index].id }
  saveData(filePath, data)
  res.json(data[index])
})

// DELETE /api/:variant/items/:id — delete an item
app.delete('/api/:variant/items/:id', (req, res) => {
  const filePath = getFilePath(req.params.variant)
  if (!existsSync(filePath)) {
    return res.status(404).json({ error: `Variant ${req.params.variant} does not exist` })
  }
  const data = readData(filePath)
  const index = data.findIndex(i => i.id === Number(req.params.id))
  if (index === -1) {
    return res.status(404).json({ error: `Item with id ${req.params.id} does not exist` })
  }
  const deleted = data.splice(index, 1)[0]
  saveData(filePath, data)
  res.json(deleted)
})

app.get('/api', (req, res) => {
  res.json({
    info: 'Exam API — CRUD',
    routes: [
      'GET    /api/:variant/items',
      'GET    /api/:variant/items/:id',
      'POST   /api/:variant/items',
      'PUT    /api/:variant/items/:id',
      'DELETE /api/:variant/items/:id',
    ],
  })
})

app.listen(3001, () => {
  console.log('Exam API running on http://localhost:3001')
})
