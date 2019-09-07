import React, { useState, useRef } from 'react';

interface Person {
  firstname: string;
  lastname: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ text, person, handleChange }) => {
  console.log('[*] test:', text);
  console.log('[*] person:', person);

  const [count, setCount] = useState<TextNode>({ text: 'init' });

  console.log('[*] count:', count);

  const iptRef = useRef<HTMLInputElement>(null);
  console.log('[*] iptRef:', iptRef);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <input
        type='text'
        ref={iptRef}
        onClick={() => setCount({ text })}
        onChange={handleChange}
      />
    </div>
  );
};
