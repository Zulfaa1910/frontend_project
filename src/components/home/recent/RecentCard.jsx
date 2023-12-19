import React from "react"
import { list } from "../../data/Data"
import { useHistory } from 'react-router-dom';


const RecentCard = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to the "ProductPage" route
    history.push('/ProductPage');
  };

  const handleButtonClickk = () => {
    // Navigate to the "ProductPage" route
    history.push('/cart');
  };

  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name, price, add, type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' href="/ProductPage"/>
                
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2' onClick={handleButtonClickk} >{add}</button> <label htmlFor=''></label>
                  <button className='btn2' onClick={handleButtonClick} >{price}</button> <label htmlFor=''>/Produk</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
