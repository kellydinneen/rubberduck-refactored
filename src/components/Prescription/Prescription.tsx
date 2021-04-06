import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import fetchSolution from './dataRetrievalAndProcessing/apiRequests';
import cleanData from './dataRetrievalAndProcessing/dataCleaning';
import Duck from '../Duck/Duck';
import './Prescription.css';

type PrescriptionProps = {
  type: string;
};

const Prescription = (props: PrescriptionProps) => {
  const [prescription, setPrescription] = useState({title: '', content: '', resource: ''});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPrescription = async (endpoint: any, source: any) => {
    try {
      const promise = await fetchSolution(endpoint);
      const data = await promise.json();
      const processedData = cleanData(data, source)
      if (processedData.title === 'bad data') {
        setError(true)
      } else {
        setPrescription(processedData);
      }
      setLoading(false);
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    let endpoint;
    let source;
    if (props.type === 'rest' || props.type === 'nourishment' || props.type === 'movement') {
      endpoint = `https://unstuck-rubberduck-api.herokuapp.com/api/v1/rr/${props.type}`
      source = 'unstuck'
    } else if (props.type === 'oblique' || props.type === 'science' || props.type === 'ideation') {
      endpoint = `https://unstuck-rubberduck-api.herokuapp.com/api/v1/thinking/${props.type}`
      source = 'unstuck'
    } else {
      endpoint = `https://api.adviceslip.com/advice`
      source = 'advice'
    }
    getPrescription(endpoint, source);
  }, [])

  return (
    <>
    <Duck />
    {loading && <h3>Hmmmmmmmm....I'm thinking</h3>}
    {error && <h3>Oh no! Something went wrong. Return home and try again</h3>}
    {!loading && !error &&
      <section className='prescription-card'>
        <h4>Well, I think what you need to try is</h4>
        <h3 className='title'>{prescription.title}</h3>
        <h4 className='content'>{prescription.content}</h4>
        <Link className='resource-link' to={prescription.resource}>
          <button className='pres-button'>Learn More</button>
        </Link>
        <Link className='start-over' to='/form'>
          <button className='pres-button'>Start Over</button>
        </Link>
      </section>
    }
    </>
  )
}


export default Prescription;
