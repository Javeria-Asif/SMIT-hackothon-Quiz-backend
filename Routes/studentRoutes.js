const express = require('express');
const { 
  getAllStudents, 
  getTopStudents, 
  addStudent, 
  addQuestion, 
  getAllQuestion,
  addResult,
  getAllResults,
  getUserResults 
} = require('../Controllers/studentController');

const router = express.Router();

router.get('/students', getAllStudents);
router.get('/top-students', getTopStudents);
router.post('/add-student', addStudent);
router.post('/add-question', addQuestion);
router.get('/questions', getAllQuestion);

// Result routes
router.post('/add-result', addResult);
router.get('/results', getAllResults);
router.get('/results/:email', getUserResults);

module.exports = router;
