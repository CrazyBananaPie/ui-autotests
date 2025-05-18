# Playwright UI Tests + Allure Reporting

This project contains automated **end-to-end UI tests** written in [Playwright](https://playwright.dev/).  
It is the practical part of my **DevOps-for-QA learning path**, whose final objective is to:

1. **Run the tests automatically in Jenkins** via a Declarative Pipeline.  
2. **Publish an Allure HTML report** for every build and archive it as a Jenkins artifact.  
3. Serve as a template I can reuse for future projects.

---

## Quick start (local)

```bash
# install dependencies
npm ci
# install browsers (first run only)
npx playwright install --with-deps
# run tests with the Allure reporter
npx playwright test --reporter=allure-playwright
# generate HTML report
npx allure generate ./allure-results -o ./allure-report --clean
# open report in default browser
npx allure open ./allure-report
