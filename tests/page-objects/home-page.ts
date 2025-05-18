import { expect, type Locator, type Page } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly automationPracticeHeading: Locator
    private linksToPractices: Array<Locator>

    constructor(page: Page) {
        this.page = page
        this.automationPracticeHeading = page.locator('//*[@id="Automation_Practice"]')
    }

    async getlinksToPractices() {
        this.linksToPractices = await this.page.locator('div.et_pb_text_inner', { has: this.page.locator('ul') }).locator('li').all();
        
        return this.linksToPractices
    }

    async goto() {
        await this.page.goto("https://ultimateqa.com/automation")
    }
}