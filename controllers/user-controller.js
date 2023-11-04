// controllers/userController.js
const { User } = require('../models');

const UserController = {
  renderUserForm: (req, res) => {
    res.render('user', { user: null });
  },

  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.redirect(`/users/${user.id}`);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  editUserForm: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render('edituser', { user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      const { name, number, address } = req.body;
      await User.update(
        { name, number, address },
        { where: { id: req.params.id } }
      );
      res.redirect(`/users/${req.params.id}`);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.destroy({ where: { id: req.params.id } });
      res.redirect('/users'); // Redirect to the user list or any other relevant page
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  },

  displayUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.render('displayuser', { user });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

  displayAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.render('allusers', { users });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users' });
    }
  }

};

module.exports = UserController;
