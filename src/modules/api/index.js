import axios from 'axios'

const _getUrl = () => 'https://jsonplaceholder.typicode.com/users';
const _resolve = response => (response || {}).data || {};
const _catch = response => (response || {}).error || {};


export default {
  fetchEntities: () => axios.get(_getUrl()).then(_resolve).catch(_catch),
  fetchEntity: id => axios.get(_getUrl() + '/' + id).then(_resolve).catch(_catch)
}


