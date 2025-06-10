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
    setPapers(prev => [...prev, paper]);
    e.target.reset();
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
            {
              papers.map((paper, index) => (
                <div key={index} className="paper" aria-checked={selected === index} onClick={() => { setSelected(index) }} onDoubleClick={() => { [setCreated(false), setSelected(false)] }}>{paper}</div>
              ))
            }
          </div> :
          <div className='root'>
            <form onSubmit={createPaper}>
              <input type="text" placeholder='Enter option' name='paper' />
            </form>
            {
              papers.map((paper, index) => (
                <input key={index} type="text" defaultValue={paper} readOnly />
              ))
            }
            <button onClick={() => { [setCreated(true), setPapers(shuffleArray(papers))] }}>Create Shuffle</button>
          </div>
      }
    </>
  )
}

export default page