import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login to OrangeHRM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('Admin', 'admin123');
});