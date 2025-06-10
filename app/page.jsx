"use client"
import React, { useState } from 'react'

const page = () => {
  const [papers, setPapers] = useState([]);
  const [selected, setSelected] = useState(false);
  const [created, setCreated] = useState(false);
  const createPaper = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const paper = formdata.get("paper");
    if (paper.length > 2) {
      setPapers(prev => [...prev, paper]);
      e.target.reset();
    } else {
      alert("Paper can not be empty.");
    }
  }
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  return (
    <>
      {
        created ?
          <div className="papers">
            <div className="reset" onClick={() => { [setCreated(false), setSelected(false)] }}>
              <span>Go back</span>
            </div>
            {
              papers.map((paper, index) => (
                <div key={index} className="paper" aria-checked={selected === index} onClick={() => { setSelected(index) }}>{paper}</div>
              ))
            }
          </div> :
          <div className='root'>
            <form onSubmit={createPaper}>
              <input type="text" placeholder='Paper value' name='paper' />
            </form>
            {
              papers.map((paper, index) => (
                <input key={index} type="text" defaultValue={paper} readOnly />
              ))
            }
            {papers.length > 1 ? <button onClick={() => { [setCreated(true), setPapers(shuffleArray(papers))] }}>Create Shuffle</button> : <></>}
            <p className='about'>Many Paper is a helpful tool for situations where someone has multiple choices but isn’t sure which one to pick. Instead of overthinking, the user can simply enter all the possible options as "papers" and let the system shuffle them. This randomization makes it easier to make a fair, unbiased decision — whether it's choosing between tasks, names, ideas, or any kind of options.</p>
          </div>
      }
    </>
  )
}

export default page