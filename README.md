
**Playwright Framework Structure**

1. POM (Page Object Model)
    * The Pages folder is used to store all page files.
    * Each page file contains locators, URLs, login functions, and page-specific other functionalities.
2. Playwright Config File
    * Used to set default timeout and browser settings.
    * Configurations can be updated as per project requirements.
3. Package.json File
    * Contains scripts to run different types of tests like smoke, integration, and e2e.
4. Package-lock.json File
    * Stores detailed information about Playwright version, dependencies, and Node modules.
5. .env File
    * Stores environment variables such as URLs, usernames, and passwords.
6. Utils/Utilities Folder
    * Contains reusable methods.
    * Includes functions to fetch data from Excel files.
7. Test Files
    * These are the main execution files where test cases and assertions are written.
    * Example: example.spec.js
    * We directly call page locators and methods from the Pages folder.
8. Test Data Folder
    * Stores test data files like Excel and JSON.
9. Fixture Folder
    * Contains JSON files with common data like URLs, usernames, and passwords.
10. Report Generation
    * Playwright has built-in report generation.
    * Allure Reports are also integrated for advanced reporting.
    * Commands:
        * Playwright report → npx playwright show-report
        * Allure report → npx allure generate allure-results --clean && npx allure open
11. Git Ignore (.gitignore)
    * Excludes unnecessary files/folders from Git.
    * Example:node_modules/
    * /test-results/
    * /playwright-report/
    * /blob-report/
    * /playwright/.cache/
    * /Playwright/downloads
    * Playwright/tests/downloads

Commands
* Run a test file:npx playwright test filename
* Run integration tests (headed mode optional):npx playwright test '@integration' test_name.spec.js --headed
* Run tests in headed mode (view application while execution):npx playwright test test_name.spec.js --headed
