import { v4 as uuidv4 } from 'uuid';
export function getNewCommentDS(text) {
  return {
    id: uuidv4(),
    text,
    timestamp: Date.now(),
    threads: [],
  };
}
export function deleteRecursively(comments, id) {
  return comments
    .map((c) => {
      return { ...c };
    })
    .filter((c) => {
      if ('threads' in c) {
        c.threads = deleteRecursively(c.threads, id);
      }
      return c.id !== id;
    });
}
