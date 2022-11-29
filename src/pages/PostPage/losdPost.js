import https from '../../services/htpp';

export default function loadPost(id) {
  return https.get(`/posts/${id}`);
}
