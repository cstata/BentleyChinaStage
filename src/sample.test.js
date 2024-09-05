const { Builder, By, Key, until, Capabilities, WebElement } = require("selenium-webdriver");
const assert = require('assert');
const { post } = require("selenium-webdriver/http");
const { percy } = require('browserstack-node-sdk');
const xml2js = require('xml2js');
const { count } = require("console");
const { isNumber } = require("util");


describe("BentleyChina.com - ", () => {
  //Checking Pencil Banner 
  test("Cn Check Pencil Banner", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Cn Testcase6', 'Bentley.cn Pencil Banner');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-41789'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const pencilbanner = driverTestcase.findElement(By.css('#premium-carousel-209dd086 > div > div > div > div > section'));
    let flag = "false";
    if (pencilbanner) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  //CN Search for No Result

  test("CN Search for No Results ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('CnTestcase28', 'Bentley.cn Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-41789'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('42');
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElement(By.css('#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-d06728c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > div'));

    // Check if any of the elements are visible
    let isVisible = "false";

    if ((await elements.getText()).includes('Keep calm')) {
      isVisible = "true";
    }


    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  // CN Double Word Search 
  test("CN Double Word Search  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('CnTestcase27', 'Bentley.cn Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-41789'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('Bentley View');
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }

    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  //CN Generic Search  
  test("CN Generic Search  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('CnTestcase3', 'Bentley.cn Search');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const bodyElement = await driverTestcase.findElement(By.id('post-41789'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    driverTestcase.switchTo().activeElement();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    var searchbar = driverTestcase.findElement(By.css('#site-navigation > div > div.menu-bar-items > span > a'));
    searchbar.click();
    var searchtext = driverTestcase.findElement(By.css('#site-navigation > div > form > input'));
    searchtext.sendKeys('SYNCHRO');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await driverTestcase.actions().sendKeys(Key.ENTER).perform();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }

    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  //CN Check Video
  test("CN Check Video  ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Testcase4', 'Bentleychina.com Check Video');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/company/about-us/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-7220'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    var videobutton = driverTestcase.findElement(By.css('#vjs_video_3 > button'));
    videobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    var timeplayed = driverTestcase.findElement(By.css('#vjs_video_3 > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display'));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Check if any of the elements are visible
    let isVisible = false;
    if (timeplayed) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });

  //CN Search Channelpartner listing 
   test("CN Search Channelpartner listing", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Search Channel Partners', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/channel-partners/listing/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-24137'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const channelpartnercountry = await driverTestcase.findElement(By.css('#post-24137 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-46290d53.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-3edb5092 > div > div > div > div > fieldset > div > label > select > option:nth-child(40)'));
    channelpartnercountry.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let elements = await driverTestcase.findElement(By.css('#post-24137 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3af43797.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > span'));
    let flag = "false";
    if ((await elements.getText()).includes('12')) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("CN Search Jobs", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Search Jobs', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/company/careers/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-7236'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const careersearch = await driverTestcase.findElement(By.css('#post-7236 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-27f81869.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-6cf4a7f1 > div > section > div > div > div > div.elementor-element.elementor-element-bb61d76.elementor-widget.elementor-widget-html > div > div > div > form > div > input'));
    careersearch.sendKeys('Bentley');
    const enterbutton = await driverTestcase.findElement(By.css('#post-7236 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-27f81869.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-6cf4a7f1 > div > section > div > div > div > div.elementor-element.elementor-element-bb61d76.elementor-widget.elementor-widget-html > div > div > div > form > div > button'));
    enterbutton.click();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    //Get all window handles 
    let windows = await driverTestcase.getAllWindowHandles();
    let found = false;
    let url = "";
    for (let handle of windows) {
      await driverTestcase.switchTo().window(handle);
      // Get the URL of the current window
      let currentURL = await driverTestcase.getCurrentUrl();
      // Check if the URL contains "jobs.b"
      if (currentURL.includes("jobs.bentley.com")) {
        url = currentURL;
        found = true;
        break;
      }
    }



    let flag = "false";
    if (url.includes('jobs.bentley.com')) {
      flag = "true";
    }




    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("CN Test Tabs", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/company/careers/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-7236'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 4000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let newtab = await driverTestcase.findElement(By.css('#premium-tabs-6d9ffff0 > div.premium-tabs-nav.horizontal > ul > li.premium-tabs-nav-list-item.elementor-repeater-item-2e555f5'));
    newtab.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //Check if the section's display is set to block 
    let section = await driverTestcase.findElement(By.css('#section-flip-1-6d9ffff0'));
    let sectionvalue = await section.getCssValue('display');
    let flag = "false";
    if (sectionvalue === 'block') {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("CN Read Bio", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/company/executive-bios/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-8288'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 4000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let biobutton = await driverTestcase.findElement(By.css('#post-8288 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-6113bf3.profile-grid.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-10b9124 > div > div.elementor-element.elementor-element-5de022e.elementor-widget.elementor-widget-premium-addon-modal-box > div > div > div.premium-modal-trigger-container > button'));
    biobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //Check if the section's display is set to block 
    let section = await driverTestcase.findElement(By.css('#premium-modal-5de022e'));
    let sectionvalue = await section.getCssValue('display');
    let flag = "false";
    if (sectionvalue === 'flex') {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Infrastructure Year Book ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Infrastructure Year Book', 'Bentley.cn - Infrastructure Year Book');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/company/infrastructure-yearbook/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-49331'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const downloadbutton = await driverTestcase.findElement(By.css('#post-49331 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3c5d15cc.elementor-section-height-min-height.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle.elementor-motion-effects-element.elementor-motion-effects-element-type-background > div.elementor-container.elementor-column-gap-default > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-38ff41b0 > div > section > div > div > div > div.elementor-element.elementor-element-291e89b9.elementor-widget__width-auto.elementor-widget-tablet__width-auto.elementor-widget-mobile__width-inherit.white.elementor-widget.elementor-widget-button > div > div > a'));
    downloadbutton.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const currenturl = driverTestcase.getCurrentUrl();


    let flag = "false";
    if (((await currenturl).includes('Cover'))) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Check ESG Video ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check ESG Video', 'Bentley.cn Check ESG Video');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/esg/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-7262'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    var videobutton = driverTestcase.findElement(By.css('#vjs_video_3'));
    videobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    var timeplayed = driverTestcase.findElement(By.css('#vjs_video_3 > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display'));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Check if any of the elements are visible
    let isVisible = false;
    if (timeplayed) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });

  test("Check ESG Tabs ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check ESG Tabs', 'Bentley.cn Check ESG Tabs');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/esg/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-7262'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    // Wait until the <ul> element is present
    await driverTestcase.wait(until.elementLocated(By.css('.premium-nav-menu.premium-main-nav-menu')), 10000);

    // Locate the <ul> element
    let ulElement = await driverTestcase.findElement(By.css('.premium-nav-menu.premium-main-nav-menu'));

    // Find all <li> elements within the <ul> element
    let menuItems = await ulElement.findElements(By.css('li.menu-item.premium-nav-menu-item'));

    // Count the number of <li> elements
    let itemCount = menuItems.length;
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Number of menu items: ' + itemCount + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (itemCount > 1) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });


  test("Check Accessibility Icon", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Accessibility Icon', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-41789'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 4000));
    driverTestcase.switchTo().activeElement();
    
 
    // Execute JavaScript code to get the font size    
    const zoomsizeelement1 = await driverTestcase.findElement(By.css('#page'));
    const zoomsizebefore = await driverTestcase.executeScript('return window.getComputedStyle(arguments[0]).zoom', zoomsizeelement1);
   
    const accessibilitybutton = await driverTestcase.findElement(By.css('#userwayAccessibilityIcon > span.uiiw > img'));
    accessibilitybutton.click();
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const iframes = await driverTestcase.findElements(By.css('iframe'));

    console.log("Number of iframes:", iframes.length);

    // Iterate through each iframe and log its src attribute
    for (let iframe of iframes) {
      const src = await iframe.getAttribute('src');
      console.log("Src of iframe:", src);
      if (src.includes('cdn.userway.org')) {
        driverTestcase.switchTo().frame(iframe);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Find all buttons within the iframe
        const buttonsInIframe = await driverTestcase.findElements(By.css('button'));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Log the number of buttons found and their text
        console.log("Number of buttons in iframe:", buttonsInIframe.length);
        let flag = "false";
        for (let button of buttonsInIframe) {
          const buttonText = await button.getText();
          if (buttonText.includes('較大的文字')) {
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            button.click();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            break;
          }
        }
        const closebuttonaccessibility = await driverTestcase.findElement(By.css('body > main > div > div > div:nth-child(1) > div > button'));
        closebuttonaccessibility.click();
        break;
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    driverTestcase.switchTo().defaultContent();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 2000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //const headerelement = await driverTestcase.findElement(By.css('#post-41789 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4b847c88.elementor-section-full_width.elementor-section-height-min-height.elementor-section-height-default.elementor-section-items-middle > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-68a307e4 > div > section > div > div > div > div.elementor-element.elementor-element-13879578.hero-inherit.elementor-widget.elementor-widget-heading > div > h1'))


    const zoomsizeelement = await driverTestcase.findElement(By.css('#page'));
    const zoomsizeafter = await driverTestcase.executeScript('return window.getComputedStyle(arguments[0]).zoom', zoomsizeelement);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    var flag = "false";
    if (zoomsizeafter != zoomsizebefore) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Check Iframe - Events ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII Redirect');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/events/overview/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-45413'));
    bodyElement.click();

    const iframes = await driverTestcase.findElements(By.css('iframe'));


    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Iframe   -  ' + iframes.length + '", "level": "info"}}');
    let flag = "false";
    if (iframes.length >= 1) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Check News Feed ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check News Feed', 'Bentley.cn Check News Feed');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/news/feed/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let feed = await driverTestcase.findElement(By.css('body > pre'));
    const searchterm = '<item>';
    let itemCount = (await feed.getText()).split(searchterm).length;


    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Number of menu items: ' + itemCount + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (itemCount > 1) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });

  test("CN Search Newsroom", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Cn Testcase19', 'Bentley.cn Search Newsroom');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/newsroom");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-13841'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    //await driverTestcase.executeScript('window.scrollTo(0, 1000);');
    const newsinput = await driverTestcase.findElement(By.css('#post-13841 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-14f6c38.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-40e9e0a.elementor-widget.elementor-widget-wpgb-facet > div > div > fieldset > div > label > input'));
    newsinput.sendKeys('press coverage');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('window.scrollTo(0, 800);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let elements = await driverTestcase.findElement(By.css('#post-13841 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-14f6c38.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-0d3d089.elementor-widget.elementor-widget-wpgb-facet > div > div > fieldset > div > ul > li > div > span.wpgb-checkbox-label'));
    let flag = "false";
    if ((await elements.getText()).includes('2')) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
 

  test("Search Trainingpartner listing", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Search Trainingpartner', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/product-training-partners/listing/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-24162'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const trainingpartnerproduct = await driverTestcase.findElement(By.css('#post-24162 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-72704ecc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-4d43c3a2 > div > div > div > div > fieldset > div > label > select > option:nth-child(87)'));

    trainingpartnerproduct.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let elements = await driverTestcase.findElement(By.css('#post-24162 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-1cec3356.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > span'));
    let flag = "false";
    if ((await elements.getText()).includes('1')) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Cn Search software database", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Cn Testcase2', 'Bentley.cn software database');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-48367'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchtext = driverTestcase.findElement(By.css('#post-48367 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-a6da7b4.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > fieldset > div > label > input'));
    searchtext.sendKeys('utilities');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });
  test("Cn Search Resource database", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Cn Testcase2', 'Bentley.cn Resource database');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/resources/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-8848'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    driverTestcase.switchTo().activeElement();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    var searchtext = driverTestcase.findElement(By.css('#post-8848 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-a6da7b4.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > fieldset > div > label > input'));
    searchtext.sendKeys('utilities');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Find all elements matching the selector
    let elements = await driverTestcase.findElements(By.css('mark.searchwp-highlight'));

    // Check if any of the elements are visible
    let isVisible = "false";
    for (let element of elements) {
      if (await element.isDisplayed()) {
        isVisible = "true";
        break; // Exit the loop if any element is visible
      }
    }
    expect(isVisible).toBe('true');
    await driverTestcase.quit();
  });

  test("Check Stubs on hover - Digital Twins ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Stubs on hover - Digital Twins ', 'Bentley.cn Check Stubs on hover - Digital Twins ');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/digital-twins/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-6781'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    let hoverElement = await driverTestcase.findElement(By.css('#post-6781 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-37edd6a.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-a0ce219 > div > div > div > div > div > section > div > div > div > div.elementor-element.elementor-element-5cd92a84.premium-flip-style-fade.elementor-widget.elementor-widget-premium-addon-flip-box > div > div > div.premium-flip-back.premium-flip-back > div > div > a')); // Replace with your element locator

    // Perform hover action using Actions class
    let actions = driverTestcase.actions({ async: true });
    await actions.move({ origin: hoverElement }).perform();

    // Example: Locate the image that appears after hover
    let imageElement = await driverTestcase.findElement(By.css('#post-6781 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-37edd6a.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-a0ce219 > div > div > div > div > div > section > div > div > div > div.elementor-element.elementor-element-5cd92a84.premium-flip-style-fade.elementor-widget.elementor-widget-premium-addon-flip-box > div > div > div.premium-flip-back.premium-flip-back > div > div > div > img')); // Replace with your image locator

    // Check if the image is displayed
    let isDisplayed = await imageElement.isDisplayed();
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Hover image visibility  -  ' + isDisplayed + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (isDisplayed) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check Electric Utilities Video ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Electric Utilities Video ', 'Bentley.cn Check Electric Utilities Video ');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/electric-utilities/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-47957'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    var videobutton = driverTestcase.findElement(By.css('#vjs_video_3'));
    videobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    var timeplayed = driverTestcase.findElement(By.css('#vjs_video_3 > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display'));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Check if any of the elements are visible
    let isVisible = false;
    if (timeplayed) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });

  test("Check for Icon - Digital Twins", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check for Icon - Digital Twins');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/infrastructure-digital-twins");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-8494'));
    bodyElement.click();

    const icon = await driverTestcase.findElement(By.css('#post-8494 > div > div.entry-content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-47fc11a8.elementor-section-full_width.elementor-section-height-min-height.software-banner.elementor-section-height-default.elementor-section-items-middle > div.elementor-container.elementor-column-gap-no > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-29290e09 > div > div > div > img'));

    let iconcss = await icon.getCssValue('display');

    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Icon image visibility  -  ' + iconcss + '", "level": "info"}}');
    let flag = "false";
    if (iconcss != "none") {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });

  test("Check Microstation Button", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check sub-nav under hero image', 'Bentley.cn Check sub-nav under hero image');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/microstation/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-14394'));
    bodyElement.click();
    //await driverTestcase.executeScript('window.scrollTo(0, 1050);');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let formbutton = await driverTestcase.findElement(By.css('#post-14394 > div > div.entry-content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-46d5c641.elementor-section-full_width.elementor-section-height-min-height.software-banner.elementor-section-height-default.elementor-section-items-middle > div.elementor-container.elementor-column-gap-no > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-23d5a2a2 > div > div.elementor-element.elementor-element-2a67de5.white.elementor-widget.elementor-widget-premium-addon-modal-box > div > div > div.premium-modal-trigger-container > button'));
    formbutton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let form = await driverTestcase.findElement(By.css('#premium-modal-2a67de5 > div'));
    let isformVisible = form.isDisplayed();
    let getcssvalue_form = await form.getCssValue('display');
    let isVisible = false;
    if (isformVisible) {
      isVisible = true;
    }


    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Button in the header  ' + getcssvalue_form + '", "level": "info"}}');
    // Check if any of the elements are visible


    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Search Software Database", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Search Software Database', 'Bentley.cn');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/overview");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-48367'));
    bodyElement.click();

    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 15000);');
    const softwaretextbox = await driverTestcase.findElement(By.css('#post-48367 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4106dc01.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div > div > div > div > div > fieldset > div > label > input'));
    softwaretextbox.sendKeys('plaxis');
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let elements = await driverTestcase.findElements(By.className('searchwp-highlight'));
    let lenghtoflements = elements.length;
    let flag = "false";
    if (lenghtoflements > 1) {
      flag = "true";
    }
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Search results have   ' + lenghtoflements + ' items", "level": "info"}}');
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check Prostructure Video ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Prostructure Video', 'Bentley.cn Check ESG Video');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/prostructures/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-6499'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));



    var videobutton = driverTestcase.findElement(By.css('#vjs_video_3'));
    videobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 15000));
    var timeplayed = driverTestcase.findElement(By.css('#vjs_video_3 > div.vjs-control-bar > div.vjs-current-time.vjs-time-control.vjs-control > span.vjs-current-time-display'));
    await new Promise((resolve) => setTimeout(resolve, 4000));
    // Check if any of the elements are visible
    let isVisible = false;
    if (timeplayed) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check Prostructure Tabs ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Prostructure Tabs', 'Bentley.cn Check ESG Tabs');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/prostructures/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-6499'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1750);');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let newtab = await driverTestcase.wait(until.elementLocated(By.css('#premium-tabs-2804819d > div.premium-tabs-nav.horizontal > ul > li.premium-tabs-nav-list-item.elementor-repeater-item-8623ceb')), 10000);
    newtab.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Scroll to the clicked element
    await driverTestcase.executeScript("arguments[0].scrollIntoView(true);", newtab);
    let tabcss = await driverTestcase.wait(until.elementLocated(By.css('#section-flip-1-2804819d')));
    let tabcssdisplay = await tabcss.getCssValue('display');

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Css value for the display tab  ' + tabcssdisplay + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (tabcssdisplay == "block") {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check Roads&Bridges Tabs ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Roads&Bridges Tabs', 'Bentley.cn Check Roads and Bridges Tabs');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/roads-and-bridges/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-47960'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    await driverTestcase.executeScript('window.scrollTo(0, 1550);');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let newtab = await driverTestcase.wait(until.elementLocated(By.css('#premium-tabs-3f0af89f > div.premium-tabs-nav.horizontal > ul > li.premium-tabs-nav-list-item.elementor-repeater-item-2e555f5')), 10000);
    newtab.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Scroll to the clicked element
    let tabcss = await driverTestcase.wait(until.elementLocated(By.css('#section-flip-1-3f0af89f > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-3dfbea41.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div > div.elementor-element.elementor-element-171a1ade.elementor-widget.elementor-widget-heading > div')));
    let tabcssdisplay = tabcss.getText();
    let tabcontent = (await tabcssdisplay).toString();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Tab Title -  ' + tabcontent + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (tabcontent == "公路和桥梁设计") {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
    // });

  });
  test("Check STAAD Tabs ", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Roads&Bridges Tabs', 'Bentley.cn Check Roads and Bridges Tabs');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/software/STAAD/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-6619'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    await driverTestcase.executeScript('window.scrollTo(0, 1350);');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let newtab = await driverTestcase.wait(until.elementLocated(By.css('#premium-tabs-a643d68 > div.premium-tabs-nav.horizontal > ul > li.premium-tabs-nav-list-item.elementor-repeater-item-3a184ad')), 10000);
    newtab.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Scroll to the clicked element
    let tabcss = await driverTestcase.wait(until.elementLocated(By.css('#section-tzoid-2-a643d68 > div > div.computer-split-content > h3')));
    let tabcssdisplay = tabcss.getText();
    let tabcontent = (await tabcssdisplay).toString();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Tab Title -  ' + tabcontent + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (tabcontent.includes('Structural WorkSuite')) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check H1 Heading", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Roads&Bridges Tabs', 'Bentley.cn Check H1 Heading');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/support");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('post-40535'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let headerelement = await driverTestcase.findElement(By.css('#post-40535 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2f982a2f.elementor-section-full_width.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-49162bec > div > section > div > div > div > div.elementor-element.elementor-element-192ee572.hero.elementor-widget.elementor-widget-heading > div'));
    let fontvalue =  headerelement.getCssValue('font-size');    
    let isVisible = false;
    if ((await fontvalue).includes('16')) {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check 404 Error", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Check Roads&Bridges Tabs', 'Bentley.cn Check 404 Error');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/unknown");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const bodyElement = await driverTestcase.findElement(By.id('content'));
    bodyElement.click();

    //await new Promise((resolve) => setTimeout(resolve, 30000));

    //await driverTestcase.executeScript('window.scrollTo(0, 1350);');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let newtab = await driverTestcase.wait(until.elementLocated(By.css('#content > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-4b63f62c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-31569205 > div > section > div > div > div > div.elementor-element.elementor-element-7a287037.hero.elementor-widget.elementor-widget-heading > div > h1')), 10000);
    let tabcssdisplay = newtab.getText();
    let tabcontent = (await tabcssdisplay).toString();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Not Found message -  ' + tabcontent + '", "level": "info"}}');
    // Check if any of the elements are visible
    let isVisible = false;
    if (tabcontent == "出现问题了……") {
      isVisible = true;
    }
    expect(isVisible).toBe(true);
    await driverTestcase.quit();
  });
  test("Check YII Nomination", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII Nomination popup');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/yii/categories");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-48395'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 1000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let biobutton = await driverTestcase.findElement(By.css('#yii-category-grid-row > div > div.elementor-column.elementor-col-33.elementor-inner-column.elementor-element.elementor-element-3cd7dc2 > div > div.elementor-element.elementor-element-7843dd1.modal-overlay.yii-cat-grid.elementor-widget.elementor-widget-premium-addon-modal-box > div > div > div.premium-modal-trigger-container > button > div'));
    biobutton.click();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //Check if the section's display is set to block 
    let section = await driverTestcase.findElement(By.css('#premium-modal-7843dd1'));
    let sectionvalue = await section.getCssValue('display');
    let flag = "false";
    if (sectionvalue === 'flex') {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check YII Awards Countdown", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII awards Countdown');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/yii/awards");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-48392'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await driverTestcase.executeScript('window.scrollTo(0, 1000);');
    await new Promise((resolve) => setTimeout(resolve, 5000));


    let countdown = await driverTestcase.findElement(By.css('#post-48392 > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-39354739.elementor-section-height-min-height.elementor-section-boxed.elementor-section-height-default.elementor-section-items-middle > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-28bfc45a > div > div.elementor-element.elementor-element-4354f4e6.elementor-countdown--label-block.elementor-widget.elementor-widget-countdown > div > div > div:nth-child(1) > span.elementor-countdown-digits.elementor-countdown-days'));
    let countdownnumber = countdown.getText();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let num = Number(countdownnumber);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "containsNumber  -  ' + num + '", "level": "info"}}');
    let flag = "false";
    if (num != NaN) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check YII Image Gallery", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII Image Gallery');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/yii/image-gallery");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-48396'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let imagegallery = await driverTestcase.findElement(By.css('#yii-image-gallery > div > div.elementor-gallery__container.e-gallery-container.e-gallery-grid.e-gallery--ltr.e-gallery--lazyload'));
    let images = await imagegallery.findElements(By.className("e-gallery-item elementor-gallery-item elementor-animated-content"));

    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Number of images -  ' + images.length + '", "level": "info"}}');
    let flag = "false";
    if (count != "") {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check YII Image Popup", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII Image Popup');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/yii/image-gallery");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const readyState = await driverTestcase.executeScript('return document.readyState');
    //Click on the page 
    const bodyElement = await driverTestcase.findElement(By.id('post-48396'));
    bodyElement.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    let image = await driverTestcase.findElement(By.css('#yii-image-gallery > div > div.elementor-gallery__container.e-gallery-container.e-gallery-grid.e-gallery--ltr.e-gallery--lazyload > a:nth-child(31)'));
    image.click();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    let imagepopup = await driverTestcase.findElement(By.className('elementor-lightbox-image elementor-lightbox-prevent-close swiper-lazy swiper-lazy-loaded'));

    let popupvalue = await imagepopup.getCssValue('display');
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Display variable for clicked image -  ' + popupvalue + '", "level": "info"}}');
    let flag = "false";
    if (popupvalue == "block") {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  });
  test("Check YII Redirect", async () => {
    // Create BrowserStack capabilities
    const capabilities = Capabilities.chrome()
      .set('Test Tabs', 'Bentley.cn Check YII Redirect');
    const driverTestcase = new Builder().usingServer('http://localhost:4444/wd/hub').withCapabilities(capabilities).build();
    await driverTestcase.get("https://bentleybsystg.wpengine.com/events/going-digital-awards/");
    await driverTestcase.manage().window().maximize();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    let newurl = driverTestcase.getCurrentUrl();
    await driverTestcase.executeScript('browserstack_executor: {"action": "annotate", "arguments": {"data": "Current URL  -  ' + newurl + '", "level": "info"}}');
    let flag = "false";
    if (((await newurl).includes('welcome'))) {
      flag = "true";
    }
    expect(flag).toBe('true');
    await driverTestcase.quit();
  }); 
}); 