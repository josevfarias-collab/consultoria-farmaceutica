// MENU MOBILE
function toggleMenu() {
  document.getElementById('mobMenu').classList.toggle('open');
}

// MODAL
function openModal() {
  document.getElementById('modalOrc').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOrc').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOut(e) {
  if (e.target.id === 'modalOrc') {
    closeModal();
  }
}

// ABAS FORMULÁRIO
function switchTab(type) {
  document.querySelectorAll('.ftab').forEach(btn => {
    btn.classList.remove('active');
  });

  document.querySelectorAll('.fpanel').forEach(panel => {
    panel.classList.remove('active');
  });

  if (type === 'pj') {
    document.querySelector('.ftab[onclick*="pj"]').classList.add('active');
    document.getElementById('panel-pj').classList.add('active');
  }
  if (type === 'pf') {
    document.querySelector('.ftab[onclick*="pf"]').classList.add('active');
    document.getElementById('panel-pf').classList.add('active');
  }
}

// ANIMAÇÃO AO ROLAR
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-up');
  observer.observe(section);
});

// FORM SUBMIT
const formPJ = document.getElementById('form-pj');
if (formPJ) {
  formPJ.addEventListener('submit', function () {
    const btn = this.querySelector('.btn-solicitar');
    if (btn) {
      btn.innerText = 'Enviando...';
      btn.disabled = true;
    }
  });
}

const formPF = document.getElementById('form-pf');
if (formPF) {
  formPF.addEventListener('submit', function () {
    const btn = this.querySelector('.btn-solicitar');
    if (btn) {
      btn.innerText = 'Enviando...';
      btn.disabled = true;
    }
  });
}

// FECHAR MENU AO CLICAR LINK
document.querySelectorAll('.mob-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobMenu').classList.remove('open');
  });
});

// ESC FECHA MODAL
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});