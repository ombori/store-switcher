import redirect from './lib/redirect';
import queryString from 'query-string';

const query = queryString.parse(location.search);
const supportedOS = new Set(['AndroidOS', 'iOS']);

redirect(window.navigator.userAgent, query, supportedOS);
