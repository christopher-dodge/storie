import React from 'react';
import { Button, FormGroup, TextField } from '@material-ui/core';
import { useState } from 'react';

export default function BlogForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleFormSubmit = () => {
    if (title === '' || body === '') {
      return;
    } else {
      const postBody = {
        title,
        body
      };
      console.log(postBody);
    }
  };

  return (
    <FormGroup>
      <TextField
        type='text'
        name='blog-title'
        label='Blog post title'
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        multiline
        rows={10}
        name='blog-body'
        label='Blog post body'
        value={body}
        onChange={e => {
          setBody(e.target.value);
        }}
      />
      <Button type='primary' onClick={handleFormSubmit}>
        Submit
      </Button>
    </FormGroup>
  );
}
