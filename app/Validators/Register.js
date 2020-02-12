'use strict'

class Register {
  get rules () {
    return {
      // validation rules
      name:'required',
      email:'required|email|unique:users',
      password:'required|min:8'
    }
  }

  get messages(){
    return{
      'name.required':'Full name is required',
      'email.required':'email is required',
      'email.unique':'email already exists',
      'password.required':'password is required',
      'password.min':'password should be at least 8 characters'
    }
  }
}

module.exports = Register
