import './style.css'
import axios from 'axios'

const signInForm = document.querySelector('#signInForm')

signInForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('提交')
})

