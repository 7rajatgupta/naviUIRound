import { Flex, Text, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { getNewCommentDS } from '../utils/commentHelper';
let threadlevel = 0;

const ShowComments = ({ comment, set, level }) => {
  const [isReply, setIsReply] = useState(false);
  const [replyText, setReplyText] = useState('');

  function addCommentToId(text, id) {
    const newComment = getNewCommentDS(text);
    let updatedComment = comment;
    updatedComment.threads = [...updatedComment.threads, newComment];
    set(updatedComment);
    setReplyText('');
    setIsReply(false);
  }
  // function deleteCommentFromId(id) {
  //   let updatedComments = comment.threads.filter((c) => c.id !== id);
  // }
  const threadedComments = (comment.threads || []).map((c, id) => {
    return (
      <ShowComments comment={c} set={set} key={id} level={++threadlevel} />
    );
  });
  return (
    <Flex direction={'column'} ml={level * 3}>
      <Flex gap={'1rem'} mb={5}>
        <Text>{comment.text}</Text>
        <Button
          colorScheme={'red'}
          variant={'outline'}
          size={'xs'}
          onClick={() => console.log(`Delete comment with id : ${comment.id}`)}
        >
          Delete
        </Button>
        {isReply === true ? (
          <Flex gap={'1rem'}>
            <Input
              placeholder={'Enter your reply...'}
              value={replyText}
              size={'sm'}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              size={'sm'}
              disabled={replyText.length > 0 ? false : true}
              onClick={() => addCommentToId(replyText, comment.id)}
            >
              Reply
            </Button>
          </Flex>
        ) : (
          <Button
            colorScheme={'blue'}
            variant={'outline'}
            size={'xs'}
            onClick={() => setIsReply(true)}
          >
            Reply
          </Button>
        )}
      </Flex>
      {threadedComments}
    </Flex>
  );
};

export default ShowComments;
