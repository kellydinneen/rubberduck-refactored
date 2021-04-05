import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Duck from '../Duck/Duck';
import postStrategy from './post-idea';
import './Submission.css';

const Submission = () => {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  const submitStrategy = async () => {
    const promise = await postStrategy({name: title, content: description, resource: link});
    setTitle('');
    setDescription('');
    setLink('');
  }

  return (
    <>
    <Duck />
      <section className='prescription-card submit'>
        <h4 className='submit-heading'>Submit A Problem Solving Strategy</h4>
        <p>Title</p>
          <input
            aria-label="title input"
            className="title-input sub-i"
            placeholder="what do you call this strategy?"
            value={title}
            onChange={event => setTitle(event.target.value)}>
          </input>
          <p>Description</p>
          <input
            aria-label="description input"
            className="desc-input sub-i"
            placeholder="tell us more"
            value={description}
            onChange={event => setDescription(event.target.value)}>
          </input>
          <p>Link</p>
          <input
            aria-label="link input"
            className="link-input sub-i"
            placeholder="where can we learn more?"
            value={link}
            onChange={event => setLink(event.target.value)}>
          </input>
        <button className='pres-button' onClick={(event) => {
          submitStrategy()}}>Submit</button>
      </section>
    </>
  )
}

export default Submission;
