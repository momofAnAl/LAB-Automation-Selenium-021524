const { Builder, Capabilities, By, until, Key} = require("selenium-webdriver");

let driver;
beforeEach(async() => {
    driver = await new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get('http://localhost:3000');
});

afterEach(async() => {
    await driver.quit();
});

test('Adding the multiple movies', async() => {

    let message;
    // TODO: adding the movie 
    await driver.findElement(By.name("movieTitle")).sendKeys("Love story", Key.RETURN);

    // TODO: check the box for watched
    await driver.findElement(By.id("movie-0")).click();
    message = await driver.findElement(By.id("message"));
    await driver.wait(until.elementIsNotVisible(message), 1000);

    // TODO: uncheck the box for added back
    await driver.findElement(By.id("movie-0")).click();
    message = await driver.findElement(By.id("message"));
    await driver.wait(until.elementIsNotVisible(message), 1000);

    // TODO: delete the 1st movie
    await driver.findElement(By.className("delete-btn")).click();
    message = await driver.findElement(By.id("message"));
    await driver.wait(until.elementIsNotVisible(message), 2000);
});


