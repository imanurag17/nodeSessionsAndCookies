const User = require('../models/user')

exports.getLogin = (req, res, next) => {
  //const isLoggedIn = req.get('Cookie').split('=')[1]
 
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'login',
    isAuthenticated: req.session.isLoggedIn
  })
}

exports.postLogin = (req, res, next) => {
  //res.setHeader('Set-Cookie', 'loggenIn=true')
  User.findById('68d232e53654081c90271a4b')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
  
}

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    res.redirect('/')
  })
}
