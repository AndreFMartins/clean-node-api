import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

describe('Signup Controller', () => {
  test('should return 400 if no name is provided', () => {
    // sut = system under test -> qual classe está sendo testada
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'qualquer@email.com',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
  test('should return 400 if no email is provided', () => {
    // sut = system under test -> qual classe está sendo testada
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Rodrigo',
        password: '123456',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })
  test('should return 400 if no password is provided', () => {
    // sut = system under test -> qual classe está sendo testada
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Rodrigo',
        email: 'qualquer@uds.com.br',
        passwordConfirmation: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })
  test('should return 400 if no passwordConfirmation is provided', () => {
    // sut = system under test -> qual classe está sendo testada
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'Rodrigo',
        email: 'qualquer@uds.com.br',
        password: '123456'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
