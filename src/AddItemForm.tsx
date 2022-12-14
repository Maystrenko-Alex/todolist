import { PostAdd } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React, { KeyboardEvent, ChangeEvent, useState, memo } from 'react';
import { v1 } from 'uuid';

type AddItemFormPropsType = {
  placeholder?: string
  addItem: (title: string, todoListID: string) => void
}

export const AddItemForm = memo((props: AddItemFormPropsType) => {
  // console.log('AddItemForm')
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const onChangeValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
    error && setError(false)
  }

  const onKeyPressAddItem = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addNewItemHandler();

  const addNewItemHandler = () => {
    if (title.trim()) {
      props.addItem(title.trim(), v1());
    } else {
      setError(true);
    }

    setTitle('');
  }

  return (
    <div className='addFormWrapper'>
      <div className='inputAndButtonBlock'>
        <TextField
          size='small'
          error={error}
          autoFocus
          label={error ? 'Title is required!' : (props.placeholder || 'title')}
          value={title}
          onChange={onChangeValueInputHandler}
          onKeyPress={onKeyPressAddItem}
        />
        <Button
          style={{ paddingRight: '0px', justifyContent: 'flex-end' }}
          onClick={addNewItemHandler}
        >
          <PostAdd fontSize='large' />
        </Button>
      </div>
      {/* {error && <div className={'errorMessage'}>Title is required!</div>} */}
    </div>
  );
}
)

export default AddItemForm;