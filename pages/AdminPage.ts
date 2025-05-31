import { Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async navigateToAdmin() {
   // await this.page.getByRole('link', { name: 'Admin' }).click();
   await this.page.locator('nav >> text=Admin').click();

  }

  async addUser({ role, empName, username, status, password }: any) {
    await this.page.getByRole('button', { name: 'Add' }).click();
   
  await this.page.locator('.oxd-select-text').nth(0).click();
  
  await this.page.locator('.oxd-select-dropdown .oxd-select-option').getByText(role).click();
    await this.page.getByPlaceholder('Type for hints...').fill(empName);
    
     await this.page.locator('.oxd-select-text').nth(1).click();
  await this.page.locator('.oxd-select-dropdown .oxd-select-option').getByText(status).click();

    await this.page.locator('input.oxd-input.oxd-input--active').nth(0).fill(username);

    
    await this.page.locator('input[type="password"]').nth(0).fill(password);
    await this.page.locator('input[type="password"]').nth(1).fill(password);
   
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async searchUser(username: string) {
    await this.page.locator('input.oxd-input.oxd-input--active').nth(0).fill(username);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async editUser(updatedUsername: string) {
    await this.page.getByRole('button', { name: 'Edit' }).first().click();
    await this.page.getByLabel('Username').fill(updatedUsername);
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async deleteUser() {
     
 await this.page.locator('i.bi-trash').first().click();
await this.page.getByRole('button', { name: 'Yes, Delete' }).click();

  }
}