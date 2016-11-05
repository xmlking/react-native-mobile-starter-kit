import { AppRegistry, StatusBar } from 'react-native'
import Root from './build'

StatusBar.setBarStyle('default');
AppRegistry.registerComponent('MobileStarterKit', () => Root);