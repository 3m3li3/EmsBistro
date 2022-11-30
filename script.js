//Nav on first page
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


//Form validation
const Namn = document.getElementById('Namn')
const Email = document.getElementById('Email')
const Antal = document.getElementById('Antal')
const Datum = document.getElementById('Datum')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (Namn.value === '' || Namn.value == null) {
    messages.push ('Fyll i namn')
  }

  if (Email.value.length <= 0) {
    messages.push('Fyll i epost')
  }

  if (Antal.value <= 0) {
    messages.push('Fyll i antal gäster')
  }

  if (Datum.value <= 0) {
    messages.push('Fyll i datum')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

})

