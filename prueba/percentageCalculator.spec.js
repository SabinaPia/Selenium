const { Builder } = require('selenium-webdriver')
const { getElementById, getElementByXPath } = require('./function')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')

jest.setTimeout(30000);

let driver

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build()
})

afterAll(async () => driver.quit())

const rootURL = 'https://www.calculator.net/percent-calculator.html';
var a, b, button, result

describe('Percentage Calculator 01', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje y numero válidos', async () => {
    // Enter  a value in the first number of the percent Calculator
    a = await getElementById('cpar1', driver);
    await a.sendKeys('70');
    
    // Enter a value in the second number of the percent Calculator
    b = await getElementById('cpar2', driver);
    await b.sendKeys('20');

    // Click Calculate Button
    button = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await button.click()

    // Compare expected result with current result
    result = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font/b', driver)
    const actual = await result.getText()
    const expected = '14'
    expect(actual).toEqual(expected)
  });

});

describe('Percentage Calculator 02', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje inválido y numero válido', async () => {
    // Enter  a value in the first number of the percent Calculator
    a = await getElementById('cpar1', driver);
    await a.sendKeys('fff');
    
    // Enter a value in the second number of the percent Calculator
    b = await getElementById('cpar2', driver);
    await b.sendKeys('30');

    // Click Calculate Button
    button = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await button.click()

    // Compare expected result with current result
    result = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual = await result.getText()
    const expected = 'Please provide two numeric values in any fields below.'
    expect(actual).toEqual(expected)
  });

});

describe('Percentage Calculator 03', () => {
  test('Página principal', async () => {
    await driver.get(rootURL)
  });

  test('Porcentaje válido y numero inválido', async () => {
    // Enter  a value in the first number of the percent Calculator
    a = await getElementById('cpar1', driver);
    await a.sendKeys('50');
    
    // Enter a value in the second number of the percent Calculator
    b = await getElementById('cpar2', driver);
    await b.sendKeys('ggg');

    // Click Calculate Button
    button = await getElementByXPath('/html/body/div[3]/div[1]/table[1]/tbody/tr[2]/td/input[2]', driver)
    await button.click()

    // Compare expected result with current result
    result = await getElementByXPath('/html/body/div[3]/div[1]/p[2]/font', driver)
    const actual = await result.getText()
    const expected = 'Please provide two numeric values in any fields below.'
    expect(actual).toEqual(expected)
  });
});
