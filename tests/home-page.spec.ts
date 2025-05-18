import { test, expect, type Locator } from '@playwright/test';
import { HomePage } from './page-objects/home-page';



test('Home page has correct page title', async ({ page }) => {
  let homePage = new HomePage(page)

  await homePage.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Practice/);
});

test('Main header has correct text', async ({ page }) => {
  let homePage = new HomePage(page)

  await homePage.goto()

  await expect(homePage.automationPracticeHeading).toContainText("Automation Practice")
});

test('Links are correct', async ({ page }) => {
  let homePage = new HomePage(page)

  await homePage.goto()

  const linksLocators = await homePage.getlinksToPractices()
  let actualLinks: string[] = []
  let expectedLinks: string[] = [
    '../complicated-page',
    '../fake-landing-page',
    '../fake-pricing-page',
    'https://ultimateqa.com/filling-out-forms/',
    'https://ultimateqa.com/sample-application-lifecycle-sprint-1/',
    'http://courses.ultimateqa.com/users/sign_in',
    '../simple-html-elements-for-automation/'
  ]

  for (const linkLocator of linksLocators) {
    const link = await linkLocator.locator('a').getAttribute('href')

    if (link !== null) {
      actualLinks.push(link)
    }
  }

  expect(actualLinks).toEqual(expectedLinks)
});