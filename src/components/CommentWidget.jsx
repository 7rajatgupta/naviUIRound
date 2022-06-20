import { useState } from 'react';
import { Button, Input, Flex, Text } from '@chakra-ui/react';

const CommentWidget = ({ add }) => {
  const [text, setText] = useState('');
  function onClickHandler() {
    add(text);
    setText('');
  }
  return (
    <Flex direction={'column'} mb={10}>
      <Text fontSize={'2xl'} mb={5}>
        {' '}
        Comment Widget{' '}
      </Text>
      <Flex gap={'1rem'}>
        <Input
          placeholder='Enter a top level comment'
          size='lg'
          width={'30rem'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          size={'lg'}
          colorScheme={'blue'}
          padding={'1rem 2rem'}
          onClick={onClickHandler}
          disabled={text.length > 0 ? false : true}
        >
          Add Comment{' '}
        </Button>
      </Flex>
    </Flex>
  );
};

export default CommentWidget;
