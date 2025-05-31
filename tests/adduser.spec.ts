import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

test('Add a new user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const adminPage = new AdminPage(page);
  await loginPage.login('Admin', 'admin123');
  await adminPage.navigateToAdmin();
  await adminPage.addUser({
    role: 'ESS',
    empName: 'Daniel Thomas Anderson',
    username: 'testuser123',
    status: 'Enabled',
    password: 'Test@1234'
  });
});