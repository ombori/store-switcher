import queryString from 'query-string';

export default function getQuery(searchQuery = window.location.search) {
  return queryString.parse(searchQuery);
}
