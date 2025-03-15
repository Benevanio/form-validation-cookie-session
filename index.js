const express = require('express');
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.use(cookieParser('keyboard'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 } 
}));

app.use(flash());

app.get('/', (req, res) => {
  res.render('index', {
    emailError: req.flash('emailError'),
    nameError: req.flash('nameError'),
    pontosError: req.flash('pontosError'),
    emailValue: req.flash('emailValue'),
    nameValue: req.flash('nameValue'),
    pontosValue: req.flash('pontosValue')
  });
});

app.post('/form', (req, res) => {
  const { email, name, pontos } = req.body;

  let emailError = "";
  let nameError = "";
  let pontosError = "";
  let hasError = false;

  if (!email) {
    emailError = "Campo obrigatório";
    hasError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailError = "E-mail inválido";
    hasError = true;
  }

  if (!name) {
    nameError = "Campo obrigatório";
    hasError = true;
  } else if (name.length < 3) {
    nameError = "Nome deve ter pelo menos 3 caracteres";
    hasError = true;
  }

  if (!pontos) {
    pontosError = "Campo obrigatório";
    hasError = true;
  } else if (isNaN(pontos) || pontos < 0) {
    pontosError = "Os pontos devem ser um número positivo";
    hasError = true;
  }

  if (hasError) {
    req.flash('emailError', emailError);
    req.flash('nameError', nameError);
    req.flash('pontosError', pontosError);

    req.flash('emailValue', email);
    req.flash('nameValue', name);
    req.flash('pontosValue', pontos);

    return res.redirect('/');
  }

  res.send("✅ Cadastro realizado com sucesso!");
});

app.listen(3000, () => {
    console.log('🚀 Server is running on port 3000');
});
