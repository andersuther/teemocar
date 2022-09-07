import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

declare global {
  interface Console {
    tron: typeof Reactotron | { log: () => null; display: () => null };
  }
}

const reactotron = __DEV__
  ? Reactotron.configure() // controls connection & communication settings
      .use(reactotronRedux())
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative() // add all built-in react native plugins
      .connect() // let's connect!
  : {
      createEnhancer: undefined,
      log: () => null,
      clear: () => null,
      display: () => null,
    };

reactotron.clear();

console.tron = reactotron;

// eslint-disable-next-line no-console
console.log = () => {};

export default reactotron;
