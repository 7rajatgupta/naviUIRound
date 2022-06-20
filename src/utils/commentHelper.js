import { v4 as uuidv4 } from 'uuid';
export function getNewCommentDS(text) {
  return {
    id: uuidv4(),
    text,
    timestamp: Date.now(),
    threads: [],
  };
}
