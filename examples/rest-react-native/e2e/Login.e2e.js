describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow a user to log in', async () => {
    await expect(
      element(by.text('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')),
    ).not.toExist();
    await expect(element(by.text('John'))).not.toExist();
    await expect(element(by.text('Maverick'))).not.toExist();

    const LoginTextInput = await element(by.id('LoginTextInput'));
    await LoginTextInput.typeText('johnUser');
    await LoginTextInput.tapReturnKey();

    await expect(
      element(by.text('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')),
    ).toBeVisible();
    await expect(element(by.text('John'))).toBeVisible();
    await expect(element(by.text('Maverick'))).toBeVisible();
  });
});
