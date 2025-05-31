import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await this.page.getByPlaceholder('Username').fill("Admin");
    await this.page.getByPlaceholder('Password').fill("admin123");
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}