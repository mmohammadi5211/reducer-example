import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useState } from 'react';

interface Props {
  addCard: (x: string) => void;
}

const AddTask = (props: Props) => {
  const [text, setText] = useState('');
  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => props.addCard(text)}>add</button>
    </>
  );
};

export default AddTask;
