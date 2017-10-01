// @flow

import Expo from 'expo';
const I18nJs = require('i18n-js');

Expo.Util.getCurrentLocaleAsync().then(locale=>{
	I18nJs.locale = (locale) ? locale.replace(/_/, '-') : '';
});

export const getLanguages = [];
export default I18nJs;
