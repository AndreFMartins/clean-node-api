import { SignUpController } from './signup'

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
  })
})
