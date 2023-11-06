import Constants from 'expo-constants';
import * as FileSystem from 'expo-file-system';
import { Dimensions, Platform } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Platform.OS === 'android' ? Dimensions.get('window').height : Dimensions.get('window').height - Constants.statusBarHeight ;
const displayHeight = Dimensions.get('window').height * 0.7;
const headerHeight = deviceHeight * 0.1;
const statusBarHeight = Constants.statusBarHeight;

const filepath = FileSystem.documentDirectory;

export { deviceWidth, deviceHeight, displayHeight, headerHeight, statusBarHeight, filepath};
