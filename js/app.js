import { Library } from './modules/Library.js'

class App {
    static init() {
        const libraryApp = new Library();
        libraryApp.render();
        libraryApp.clearUserInputs();
    }
}
  
App.init();