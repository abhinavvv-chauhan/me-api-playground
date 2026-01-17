const User = require('../models/User');

const getProfile = async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const user = await User.findOne();
    const { skill } = req.query;

    if (!user) return res.status(404).json({ message: 'User not found' });

    let projects = user.projects;

    if (skill) {
      projects = projects.filter(project => 
        project.description.toLowerCase().includes(skill.toLowerCase()) ||
        project.title.toLowerCase().includes(skill.toLowerCase())
      );
    }
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const search = async (req, res) => {
  try {
    const user = await User.findOne();
    const { q } = req.query;

    if (!q) return res.status(400).json({ message: 'No search query provided' });

    const foundSkills = user.skills.filter(skill => 
      skill.toLowerCase().includes(q.toLowerCase())
    );

    const foundProjects = user.projects.filter(p => 
      p.title.toLowerCase().includes(q.toLowerCase()) || 
      p.description.toLowerCase().includes(q.toLowerCase())
    );

    res.json({ skills: foundSkills, projects: foundProjects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile, getProjects, search };