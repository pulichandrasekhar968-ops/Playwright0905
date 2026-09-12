import { Page, Locator } from "@playwright/test";

export class LogInPage {

    private readonly page: Page;
    private readonly Username: Locator;
    private readonly Password: Locator;
    private readonly Submit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Username = page.getByLabel("Username");
        this.Password = page.getByLabel("Password");
        this.Submit = page.getByRole('button', { name: "Submit" });
    }

    async login(Username: string, Password: string) {
        await this.Username.fill(Username);
        await this.Password.fill(Password);
        await this.Submit.click();

    }

}
 
  
