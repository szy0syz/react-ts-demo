import React, { useReducer } from 'react';

// type 可以具体限制有哪些可能值
// 或者可以理解为 要么-某 、要么-某某 、要么-某某某
type Actions = { type: 'add'; text: string } | { type: 'remove'; idx: number };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'add':
      return [...state, { text: action.text, complete: false }];
    case 'remove':
      return state.filter((_, i) => action.idx !== i); // 这里返回新的数组了！
    default:
      return state;
  }
};

export const ReducerExample: React.FC = () => {
  const [todos, disptch] = useReducer(TodoReducer, []);
  return (
    <div>
      {JSON.stringify(todos)}
      <button
        onClick={() => {
          disptch({ type: 'add', text: '...' });
        }}>
        +
      </button>
    </div>
  );
};
