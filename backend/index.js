import express from 'express'
import cors from 'cors'
import { supabase } from './supabaseClient.js'

const app = express()
app.use(cors())
app.use(express.json())

// Add a student
app.post('/students', async (req, res) => {
  const { data, error } = await supabase.from('students').insert([req.body])
  if (error) return res.status(400).json({ error })
  res.json(data)
})

// Add a teacher
app.post('/teachers', async (req, res) => {
  const { data, error } = await supabase.from('teachers').insert([req.body])
  if (error) return res.status(400).json({ error })
  res.json(data)
})

// Add a fee payment (generate receipt)
app.post('/fees', async (req, res) => {
  const { data, error } = await supabase.from('fees').insert([req.body])
  if (error) return res.status(400).json({ error })
  res.json(data)
})

// Generate leaving certificate
app.post('/certificates', async (req, res) => {
  const { data, error } = await supabase.from('certificates').insert([req.body])
  if (error) return res.status(400).json({ error })
  res.json(data)
})

// Generate report card (marksheet)
app.post('/marksheets', async (req, res) => {
  const { data, error } = await supabase.from('marksheets').insert([req.body])
  if (error) return res.status(400).json({ error })
  res.json(data)
})

// Get all students
app.get('/students', async (req, res) => {
  const { data, error } = await supabase.from('students').select('*')
  if (error) return res.status(400).json({ error })
  res.json(data)
})

app.listen(5000, () => console.log('Server running on port 5000'))