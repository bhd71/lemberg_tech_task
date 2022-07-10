import {Component, OnInit} from '@angular/core';


declare function nameValidation(value: string): object;

declare function phoneValidation(value: string): object;

declare function emailValidation(value: string): object;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: Variables;
  email: Variables;
  phone: Variables;
  message: Variables;
  companyName: Variables;

  constructor() {
    this.name = {
      value: '',
      valid: true,
      text: ''
    }
    this.email = {
      value: '',
      valid: true,
      text: ''
    }
    this.phone = {
      value: '',
      valid: true,
      text: ''
    }
    this.companyName = {
      value: '',
      valid: true,
      text: ''
    }
    this.message = {
      value: '',
      valid: true,
      text: ''
    }
  }

  submitHandler() {
    let value = {
      fullName: this.name.value,
      companyName: this.companyName.value,
      phone: this.phone.value,
      email: this.email.value,
      message: this.message.value
    }
    alert(JSON.stringify(value))


    this.name.value = ''
    this.companyName.value = ''
    this.phone.value = ''
    this.email.value = ''
    this.message.value = ''
  }

  validation_name(value: string) {
    this.name = {
      ...this.name,
      ...nameValidation(value)
    }
  }

  validation_companyName(value: string) {
    this.companyName = {
      ...this.companyName,
      ...nameValidation(value)
    }
  }

  validation_phone(value: string) {
    this.phone = {
      ...this.phone,
      ...phoneValidation(value)
    }
  }

  validation_email(value: string) {
    this.email = {
      ...this.email,
      ...emailValidation(value)
    }
  }


}


export default interface Variables {
  value: string,
  valid: boolean
  text: string
}
