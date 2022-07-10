function nameValidation(value) {
  let valid = false;
  if (value === '') return {valid: false, text: 'This field is required'}
  value.split('').forEach(element => {
    if (!isNaN(element)) {
      valid = true;
    }
  })
  if (valid) return {valid: false, text: 'This field should not contain numbers'}
  return {valid: true}
}

function phoneValidation(value) {
  if (value === '') return {valid: false, text: 'Phone number is required field'}
  if (value.length !== 13) {
    return {valid: false, text: 'Phone number must contain 13 symbols'}
  }
  return {valid: true}
}

function emailValidation(value) {
  if (value === '') return {valid: false, text: 'Email is required field'}

  return {valid: value.includes('.com'), text: 'Email is invalid'}
}
