document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const choice = document.querySelector('input[name="choice"]:checked').value;
    if (choice === 'option1') {
      window.location.href = ' https://apple.com/'; 
    } else if (choice === 'option2') {
      window.location.href = 'https://google.com/';
    }
});

document.querySelector('.first__cart').addEventListener('click', e => {
    e.target.nextElementSibling.classList.toggle('active');
  });
  