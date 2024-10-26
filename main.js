import './style.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8888'

const signInForm = document.querySelector('#signInForm')

signInForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('提交')
})

const sendCodeBtn = document.querySelector('#sendCodeBtn')
sendCodeBtn.addEventListener('click', (e) => {
  const emailInput = document.querySelector('#emailInput')
  if(emailInput === undefined){ return }
  const email = emailInput.value
  axios.post('/validation_codes', { email })
    .then(() => {
      window.alert('发送成功')
    }, () => {
      window.alert('发送失败')
    })
})
