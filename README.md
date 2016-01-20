## React Native Workshop App

### Setup General

*The Current/Stable version of node is v4.2.1 (2015-10-21) see: *nodejs.org*(https://nodejs.org/) for latest.*

Step 1 - Get NVM (Node Version Manger):

  - `$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash && source ~/.nvm/nvm.sh`

  If you're curious about the installation command read the *source code*(https://github.com/creationix/nvm/blob/master/nvm.sh)
  ... its been reviewed by several *security experts*(https://nodesecurity.io/)

Step 2 - Install the version of node.js that you need:

  Once you've got *NVM* you can install a specific version of Node.js using the `nvm` command:

  - `$ nvm install v4.2.1`

  *Note:* you may need to close & re-open your terminal window for `nvm` command to be available.

Step 3 - Use the version you just installed:

  - `$ nvm use v4.2.1`

Step 4 - Install project dependences:

  - `$ sudo npm install`

Step 5 - Back permissions to your user:

  - `$ sudo chown -R $(echo $USER):staff node_modules/`


### Setup Android

  1. Download the latest SDK(http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

  2. Install the Android SDK with `brew install android-sdk`

  3. Add this to your `~/.bashrc`, `~/.zshrc` or whatever your shell uses:
    `export ANDROID_HOME=/usr/local/opt/android-sdk`

  4. Start a new shell and run `android`; in the window that appears make sure you check:
    - Android SDK Build-tools version 23.0.1
    - Android 6.0 (API 23)
    - Android Support Repository

  5. Click "Install Packages"

  6. Start a new shell and run `android`; in the window that appears make sure you check:
    - Intel x86 Atom System Image (for Android 5.1.1 - API 22)
    - Intel x86 Emulator Accelerator (HAXM installer)

  7. Click "Install Packages"

  8. Configure HAXM(http://developer.android.com/tools/devices/emulator.html#vm-mac)

  9. Create an Android Virtual Device (AVD) to use with the Android emulator:
    - Run `android avd` and click on *Create*...

  10. With the new AVD selected, click *Start*...

  11. `$ react-native run-android`:
    - Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change!
    - Run `adb logcat *:S ReactNative:V ReactNativeJS:V` in a terminal to see your app's logs


### Internationalization
All App's strings are internationalized. Locale strings are provided as js objects (in /App/locales).

There's also a wrapper in around the I18N library polyglot that allows the simple form:

`i18n.t('login_error')`