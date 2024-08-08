const Student = require('../Models/Student');
const Question = require('../Models/Question');
const Result = require('../Models/Result');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Get top 5 students
exports.getTopStudents = async (req, res) => {
  try {
    const topStudents = await Student.find().sort({ marks: -1 }).limit(5);
    res.status(200).json(topStudents);
  } catch (error) {
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
};

// Add a new student
exports.addStudent = async (req, res) => {
  const { name, marks, class: studentClass, subject, pass } = req.body;
  try {
    const newStudent = new Student({ name, marks, class: studentClass, subject, pass });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add student: ' + error.message });
  }
};

// Add a new question
exports.addQuestion = async (req, res) => {
  try {
    const { question, a, b, c, d, correct } = req.body;
    const newQuestion = new Question({ question, a, b, c, d, correct });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add question: ' + err.message });
  }
};

// Get all questions
exports.getAllQuestion = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json({ count: questions.length });
  } catch (err) {
    res.status(500).json({ message: 'Failed to get questions: ' + err.message });
  }
};

// Add a new result
exports.addResult = async (req, res) => {
  const { username, email, status, totalPoints, pointsEarned } = req.body;
  try {
    const newResult = new Result({ username, email, status, totalPoints, pointsEarned });
    await newResult.save();
    res.status(201).json(newResult);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add result: ' + error.message });
  }
};

// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get results: ' + error.message });
  }
};

// Get results for a specific user
exports.getUserResults = async (req, res) => {
  const { email } = req.params;
  try {
    const results = await Result.find({ email });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get results for user: ' + error.message });
  }
};
