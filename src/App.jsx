import './App.css';
import { Flex, Heading } from '@chakra-ui/react';
import CommentWidget from './components/CommentWidget';
import { useState } from 'react';
import ShowComments from './components/ShowComments';
import { getNewCommentDS } from './utils/commentHelper';

function App() {
  const [comments, setComments] = useState([]);

  function modifyComment(comment) {
    let updatedComments = comments;
    updatedComments.map((c, id) => {
      if (c.id === comment.id) {
        c.threads = comment.threads;
      }
    });
    setComments(updatedComments);
  }

  function addTopLevelComment(text) {
    const newComment = getNewCommentDS(text);
    setComments([...comments, newComment]);
  }

  return (
    <div className='App'>
      <Heading fontSize={'3xl'} mb={5} mt={2}>
        Navi UI 2 Coding Round
      </Heading>
      <Flex direction={'column'}>
        <CommentWidget add={addTopLevelComment} />
        <Flex direction={'column'}>
          {comments?.map((c, id) => {
            return <ShowComments comment={c} key={id} set={modifyComment} />;
          })}
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
