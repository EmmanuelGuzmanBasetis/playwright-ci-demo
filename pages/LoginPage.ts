import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly message: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.locator('#username')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.message = page.locator('#message')
  }

  async goto() {
    await this.page.goto('public/index.html')
  }

  async login(user: string, pass: string) {
    await this.usernameInput.fill(user)
    await this.passwordInput.fill(pass)
    await this.loginButton.click()
  }

  async getMessage(): Promise<string> {
    return (await this.message.textContent()) ?? ''
  }
}
