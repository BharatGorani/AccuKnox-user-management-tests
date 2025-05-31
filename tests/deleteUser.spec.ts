import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test('Delete the user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdmin();
  await adminPage.searchUser('testuserUpdated');
  await adminPage.deleteUser();
});
