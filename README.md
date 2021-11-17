# Selenium Web Driver
## Test cases
### Se hizo 3 casos de prueba, una de ellas es:
```
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
```

##Resultado: 

![resultado](https://user-images.githubusercontent.com/83424577/142174291-b6f4bb80-4590-42d9-9447-ce29c40c32f0.PNG)
