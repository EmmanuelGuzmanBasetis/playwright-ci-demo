import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.describe('Demo Login Tests', () => {
  let loginPage: LoginPage

  test.beforeEach(async({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.goto()
  })

  test('Successful login shows success message', async() => {
    await loginPage.login('user', 'pass')
    await expect(loginPage.message).toHaveText('Login successful!')
  })

  test('Invalid login shows error message', async() => {
    await loginPage.login('wrong', 'wrong')
    await expect(loginPage.message).toHaveText('Invalid credentials')
  })
})
