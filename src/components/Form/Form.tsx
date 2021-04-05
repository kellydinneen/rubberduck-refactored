import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MultiSelect from "react-multi-select-component";
import determinePrescriptionType from './formResponseProcessing';
import Duck from '../Duck/Duck';
import './Form.css';

const Form = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [incomplete, setIncomplete] = useState(true);
  const [userInputs, setUserInputs] = useState({});
  const [prescriptionType, setPrescriptionType] = useState('');
  const [name, setName] = useState('');
  const [problemType, setProblemType] = useState('');
  const [techType, setTechType] = useState('');
  const [vent, setVent] = useState('');
  const [ventTwo, setVentTwo] = useState('');
  const [issueAge, setIssueAge] = useState('');
  const [issueHours, setIssueHours] = useState('');
  const [progressTime, setProgressTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [breakTime, setBreakTime] = useState('');
  const [eatTime, setEatTime] = useState('');
  const [selfDescription, setSelfDescription] = useState(['filler']);
  const [feeling, setFeeling] = useState('');

  const getPrescriptionType = async () => {
    const type = await determinePrescriptionType(userInputs);
    setPrescriptionType(type);
  }

  const setInputs = () => {
    setUserInputs(
      {
        problemType: problemType,
        techType: techType,
        issueAge: issueAge,
        issueHours: issueHours,
        progressTime: progressTime,
        currentTime: currentTime,
        breakTime: breakTime,
        eatTime: eatTime,
        selfDescription: selfDescription,
        feeling: feeling
      }
    )
  };

  const testForCompleteness = () => {
    if (
      name &&
      problemType &&
      techType &&
      issueAge &&
      issueHours &&
      progressTime &&
      currentTime &&
      breakTime &&
      eatTime &&
      selfDescription &&
      feeling
    ) {
      setIncomplete(false);
      getPrescriptionType();
    }
  }

  const selfDescriptorOptions = [
    { label: "procrastinator", value: "procrastinator" },
    { label: "perfectionist", value: "perfectionist" },
    { label: "adventurous", value: "adventurous"},
    { label: "over-cautious", value: "over-cautious" },
    { label: "sloppy", value: "sloppy" },
    { label: "meticulous", value: "meticulous" },
    { label: "self-concious", value: "self-concious" },
    { label: "confident", value: "confident" },
    { label: "anxious", value: "anxious" },
    { label: "lazy", value: "lazy" },
    { label: "obsessive", value: "obsessive" },
    { label: "imaginative", value: "imaginative"},
    { label: "hard-working", value: "hard-working" },
    { label: "boring", value: "boring" },
    { label: "brilliant", value: "brilliant" },
    { label: "fast-learner", value: "fast-learner" },
    { label: "slow-learner", value: "slow-learner" },
    { label: "analytical", value: "analytical" },
    { label: "insightful", value: "insightful" },
    { label: "creative", value: "creative" }
  ]

  return (
    <>
    <Duck />
      <form>
        {currentQuestion === 1 && <label>
        What can I call you?
          <input
            aria-label="name input"
            className="name-input"
            placeholder="tell me your name"
            value={name}
            onChange={event => setName(event.target.value)}>
          </input>
        </label>}
        {currentQuestion === 2 && <label>
        How would you describe the trouble you're having {name}, duck-friend?
          <select className='problem-type-select' value={problemType} onChange={event => setProblemType(event.target.value)}>
            <option value="" disabled selected>Select a category</option>
            <option value="big bad bug">it's a big bad bug 🐛</option>
            <option value="don't know how to start">I just don't know how to start</option>
            <option value="concept confusion">I don't understand a concept I'm working with</option>
            <option value="coder's block">coder's block: I need ideas for what to build and I don't have them</option>
          </select>
        </label>}
        {currentQuestion === 3 && <label>
        Which of these categories is your problem related to?
          <select className='tech-type-select' value={techType} onChange={event => setTechType(event.target.value)}>
            <option value="" disabled selected>Select a category</option>
            <option value="styling">making things look pretty (css/scss stuff)</option>
            <option value="client-side">client side architecture</option>
            <option value="backend">backend architecture</option>
            <option value="crunchy">something isolated and crunchy (e.g. how do I make this one function do a fancy thing?)</option>
            <option value="git">git or github</option>
            <option value="everything">Everything! Everything is wrong!</option>
            <option value="some other kind">Something else (you don't know me, duck)</option>
          </select>
        </label>}
        {currentQuestion === 4 && <label>
        OK, {name} with the {techType} problem, tell me more.
           <textarea value={vent} onChange={event => setVent(event.target.value)} />
        </label>}
        {currentQuestion === 5 && <label>
        Ok, now tell me even more! I want you to vent. I'll only quack for you if you quack for me.
           <textarea value={ventTwo} onChange={event => setVentTwo(event.target.value)} />
        </label>}
        {currentQuestion === 6 && <>
          <h4 className='commentary'>I hope that helped you mull over your problem productively. Now answer just a few more questions for me.</h4>
          <label>
            How many days have you had this issue?
            <input
              aria-label="issue age input"
              placeholder="number of days"
              className="days-input"
              value={issueAge}
              onChange={event => setIssueAge(event.target.value)}>
            </input>
          </label>
          <label>
            How many hours TODAY have you been working on this issue?
            <input
              aria-label="issue work today input"
              placeholder="number of hours"
              className="hours-input"
              value={issueHours}
              onChange={event => setIssueHours(event.target.value)}>
            </input>
          </label>
        </>}
        {currentQuestion === 7 && <label>
          How long has it been since you saw any progress?
          <select className="progress-time-input" value={progressTime} onChange={event => setProgressTime(event.target.value)}>
            <option value="" disabled selected>Select time window</option>
            <option value="minutes">an hour or less</option>
            <option value="hours">several hours</option>
            <option value="yesterday">yesterday</option>
            <option value="days">days ago</option>
            <option value="never">I've never seen progress</option>
          </select>
        </label>}
        {currentQuestion === 8 && <>
          <h4 className='commentary'>Ok {name}, let's get you some progress. Just a few more questions for context.</h4>
          <label>
            About what time is it where you are?
            <select className="current-time-input" value={currentTime} onChange={event => setCurrentTime(event.target.value)}>
              <option value="" disabled selected>Select the closest match</option>
              <option value="early">early morning</option>
              <option value="morning">mid-morning</option>
              <option value="afternoon">early afternoon</option>
              <option value="end-of-day">approaching the end of the work day</option>
              <option value="6">after 6pm</option>
              <option value="9">after 9pm</option>
              <option value="11">after 11pm</option>
              <option value="unknown">I have no idea</option>
            </select>
          </label>
          <label>
            When was the last time you took a break longer than 5 minutes?
            <select className="break-input" value={breakTime} onChange={event => setBreakTime(event.target.value)}>
              <option value="" disabled selected>Select the closest match</option>
              <option value="minutes">an hour or less</option>
              <option value="hours">several hours</option>
              <option value="yesterday">yesterday</option>
            </select>
          </label>
          <label>
            When was the last time you ate?
            <select className="eat-input" value={eatTime} onChange={event => setEatTime(event.target.value)}>
              <option value="" disabled selected>Select the closest match</option>
              <option value="minutes">an hour or less</option>
              <option value="hours">several hours</option>
              <option value="yesterday">yesterday</option>
            </select>
          </label>
        </>}
        {currentQuestion === 9 && <>
          <label>
        How would you describe yourself?
          <MultiSelect
            options={selfDescriptorOptions}
            value={selfDescription}
            onChange={setSelfDescription}
            labelledBy={"Select all that apply"}
            className="multi"
          />
        </label>
        <label>
          How do you feel right now?
          <select className="feeling-input" value={feeling} onChange={event => {
            setFeeling(event.target.value)
            setInputs();
          }}>
            <option value="" disabled selected>Select the closest match</option>
            <option value='0'>hopeless</option>
            <option value='1'>incredibly frustrated</option>
            <option value='2'>sort of frustrated</option>
            <option value='3'>ok</option>
            <option value='4'>I'm having fun</option>
          </select>
        </label>
      </>}
        {currentQuestion > 1 && <button type='button' className='back-button'
        onClick={() => setCurrentQuestion(currentQuestion - 1)}>Back</button>}
        {currentQuestion < 9 && <button type='button' className='forward-button' onClick={() => setCurrentQuestion(currentQuestion + 1)}>Next</button>}
        {currentQuestion === 9 &&
          <button onClick={() => {
            setCurrentQuestion(10);
            testForCompleteness();
          }} className='penult-button' type='button'>What's Next?!</button>
        }
        {!incomplete && currentQuestion === 10 &&
          <>
          <h4 className='commentary'>You're done!</h4>
          <Link onClick={() => {
            setCurrentQuestion(1);
            getPrescriptionType();
          }}
          to={{
            pathname:`/advice/${prescriptionType}`
          }}>
          <button className='submit-button' type='button'>Submit</button>
        </Link>
        </>
      }
      {incomplete && currentQuestion === 10 &&
        <h4 className='commentary'>You're not quite done! Please go back and answer any unanswered questions</h4>
      }
      </form>
    </>
  )
}

export default Form;
