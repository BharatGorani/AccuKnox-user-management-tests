import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test('Search for the created user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdmin();
  await adminPage.searchUser('testuser123');
});
