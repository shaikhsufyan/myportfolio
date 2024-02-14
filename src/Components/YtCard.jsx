import React from 'react'
import ecommerce from "./ecommerce.png";
import food from "./food.png";
import news from "./news.png";
import travel from "./travel.png";

const YtCard = () => {
  return (
    <>
        <div className='youtubeCard'>
            <img src={ecommerce}/>
            <p className='titles'>Responsive Ecommerce Website</p>
            <a target="_blank" href="https://youtu.be/wKPepi1_mvs?si=kbM0TvkAe6AgwI_m">See Video</a>
        </div>
        <div className='youtubeCard'>
            <img src={news}/>
            <p className='titles'>Responsive Ecommerce Website</p>
            <a target="_blank" href="https://youtu.be/pQQZcA6GjJE?si=4ZBeuT2sw8s6LNIA">See Video</a>
        </div>

        <div className='youtubeCard'>
            <img src={travel}/>
            <p className='titles'>Responsive Travel Website</p>
            <a target="_blank" href="https://youtu.be/hdYrWhA5S4U?si=IV8dnZgbpzFE5jxy">See Video</a>
        </div>
        <div className='youtubeCard'>
            <img src={food}/>
            <p className='titles'>Responsive Food Website</p>
            <a target="_blank" href="https://youtu.be/0vSilHOQpY0?si=hUAZRI9Dkg35rpKA">See Video</a>
        </div>
    </>
  )
}

export default YtCard