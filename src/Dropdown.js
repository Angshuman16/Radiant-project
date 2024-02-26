import React from 'react'

const Dropdown = () => {
    const countries=["United States","India","Pakistan","Nigeria","Denmark"];
  return (
    <div>
           <select className='drop'>
            {
                countries.map((item)=>{
                    return <option value={item}>{item}</option>
                })
            }
           </select>
    </div>
  )
}

export default Dropdown