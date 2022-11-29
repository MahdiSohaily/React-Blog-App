import https from '../../../services/htpp';

export default function loadComments(id) {
  return https.get(`./comments?post-id=${id}`);
}
