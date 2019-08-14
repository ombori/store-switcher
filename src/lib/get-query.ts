import queryString from 'query-string';
import { StringRecord } from '../types';

export default function getQuery(searchQuery = window.location.search) {
  return queryString.parse(searchQuery) as StringRecord;
}
