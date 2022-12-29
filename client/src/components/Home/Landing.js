import React, { useEffect } from 'react'
import Bosch from '../../sponsors/tataland.svg'
import UdgamShapping from '../../icons/udgam-spring.png'
import landingSponsors from '../../icons/lands.png'
import CountIn from './LAnding_CountIn'
import Navbar2 from '../Navbar2'
import Loading from './loading'
import idfc from '../../icons/idfcbank.svg'
import havells from '../../icons/havells.svg'
import zaloni from '../../icons/zaloni.svg'
import Line from '../../icons/Line.svg'
import {motion} from 'framer-motion';

function Landing() {
  useEffect(() => {
    setTimeout(()=>{
      document.getElementById("countinbuttondiv").style.display="block"
     }, 3000)
    }, [])
  return (
  
    <div className='landing'>
      <Loading/>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:[0,0,1]}}
      transition={{duration:8, ease:'easeOut'}}
      style={{width:`100%`, zIndex:`10000`}}>
       <Navbar2 />
       </motion.div>
       <div className='titlesponsor'>
       <img className='Tata' src={Bosch} alt=''/> 
       <p className="pr pr1">presents</p>
       </div>
       <div className='udgamland'>
        <a href="/">
       <svg width="100%" height="auto" viewBox="0 0 420 238" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M343.208 135.508V30.3293C343.208 28.3228 344.328 27.3195 346.009 27.3195H353.292C356.653 27.3195 356.653 29.3261 356.653 30.3293C356.653 75.6441 356.093 132.297 356.093 135.508V160.59C356.093 161.426 356.429 163.098 357.774 163.098C364.31 163.265 377.717 163.499 379.062 163.098C380.406 162.697 380.743 161.259 380.743 160.59V135.508V134.832V30.3293C380.743 28.3228 381.863 27.3195 383.544 27.3195H390.827C394.188 27.3195 394.188 29.3261 394.188 30.3293C394.188 75.6441 393.628 132.297 393.628 135.508V160.59C393.628 161.426 393.964 163.098 395.308 163.098H417.717C418.277 162.931 419.398 162.195 419.398 160.59V15.7818C419.398 3.34113 409.314 0.230959 405.392 0.230957H382.423C374.58 0.230957 371.779 5.24735 369.538 8.25719C366.737 5.24735 363.936 0.230957 356.093 0.230957H329.763C325.655 0.565385 317.438 4.14375 317.438 15.7818V160.59C317.438 161.426 317.774 163.098 319.119 163.098H341.527C342.088 162.931 343.208 162.195 343.208 160.59V135.508Z" fill="white"/>
<path d="M0.500977 216.789V3.44714C0.500977 -0.568711 2.65233 0.226579 3.83979 0.435252C11.6303 1.80437 25.0577 8.41654 27.2114 22.0205V197.212C27.6566 200.425 29.6228 201.228 30.5503 201.228H37.7843C40.0102 201.228 40.9377 198.551 41.1231 197.212V22.0205C41.1231 17.3463 44.6016 5.33465 63.2033 0.42282C65.9856 0.422824 65.9856 1.92876 65.9856 1.92876V216.777C65.9856 229.326 56.1478 236.869 47.8008 236.869H18.8644C8.29153 235.363 0.500977 223.817 0.500977 216.789Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M157.348 22.1039C157.534 14.8129 162.927 0.230957 176.318 0.230957H203.1C208.865 0.562365 220.396 5.40092 220.396 22.1039V132.463C220.396 134.12 218.834 138.329 214.817 139.919C218.536 141.908 226.534 148.171 226.534 159.307C226.534 173.226 215.375 179.688 205.89 180.683H182.456C180.224 180.683 180.224 183.069 180.224 184.659C180.224 185.654 180.224 188.636 182.456 188.636C182.641 188.636 183.214 188.641 184.073 188.648C188.373 188.682 199.844 188.774 205.89 188.636C212.771 188.802 226.534 191.917 226.534 211.006C226.534 230.095 212.771 236.193 205.89 236.856H83.1403C83.1403 236.856 80.3506 237.055 80.3506 235.862C80.3506 234.371 84.8141 218.463 97.647 216.972H195.846C197.52 216.972 198.636 216.872 198.636 212.498C198.636 208.521 197.52 208.521 195.846 208.521H182.456H169.623C159.58 207.527 152.884 197.879 152.884 184.659C152.884 171.237 160.695 162.786 171.855 162.289H195.846C197.52 162.289 198.636 160.997 198.636 157.815C198.636 154.634 197.52 153.838 195.846 153.838H177.434C171.297 153.341 162.035 147.774 158.464 139.422C157.571 136.241 157.348 133.457 157.348 132.463V22.1039ZM182.311 34.059V121.863C182.311 123.535 182.869 124.66 185.101 124.66H191.796C191.904 124.66 192.021 124.664 192.146 124.668C193.321 124.706 195.144 124.765 195.144 121.863C195.144 121.145 195.172 118.301 195.215 113.883C195.366 98.5303 195.702 64.176 195.702 34.059C195.702 33.0555 195.702 31.0486 192.354 31.0486H185.101C183.427 31.0486 182.311 32.052 182.311 34.059Z" fill="white"/>
<path d="M317.463 182.904L317.467 196.395C317.467 197.555 317.339 200.977 319.638 200.25C325.962 199.222 329.204 192.541 328.964 189.971C328.964 189.757 328.96 191.441 328.96 187.844C328.96 184.246 331.834 184.832 333.271 184.832H339.532H346.718C350.167 184.832 351.029 187.83 351.029 189.329C351.029 192.112 351.033 195.624 351.033 200.25C351.033 204.876 348.159 206.032 346.722 206.032H324.653H322.497C320.82 206.032 317.467 206.931 317.467 210.529C317.467 214.127 317.463 227.661 317.463 232.372C317.702 233.871 319.475 236.869 324.649 236.869H363.245C364.394 236.355 364.682 235.584 364.682 234.941C363.532 228.26 356.538 225.519 353.185 225.305H331.116C329.391 225.305 328.96 224.448 328.96 224.02C328.96 223.164 328.964 217.981 328.964 216.953C328.964 215.925 330.401 215.668 331.12 215.668H353.189C360.087 215.668 362.291 209.672 362.53 206.674C362.53 200.678 362.526 190.1 362.526 182.904C362.526 175.709 356.299 173.91 353.185 173.91H328.241C319.619 173.91 317.463 179.906 317.463 182.904Z" fill="white"/>
<path d="M373.84 182.904V196.395C373.84 197.673 374.127 200.234 375.277 200.25C382.75 200.764 385.576 194.896 386.055 191.898V188.486C386.055 185.916 387.493 184.846 388.211 184.631H403.691C405.415 184.631 405.847 186.773 405.847 187.844V193.183C405.847 195.753 404.409 196.395 403.691 196.395H399.379C395.93 196.395 389.648 198.965 389.648 200.25V211.171C389.648 213.227 397.942 213.741 399.379 213.741H403.691C405.415 213.741 405.847 215.883 405.847 216.953V222.093C405.847 224.149 404.409 224.663 403.691 224.663H387.493C385.768 224.663 385.337 222.949 385.337 222.093V216.953C384.618 212.456 376.714 209.244 375.277 209.244C374.127 209.244 373.84 211.386 373.84 212.456V226.59C373.84 234.813 380.067 236.869 383.181 236.869H411.595C417.918 236.869 419.499 230.873 419.499 227.875V215.668C419.499 209.887 416.625 207.317 412.314 205.389C416.625 203.462 419.499 200.25 419.499 196.395V182.904C419.499 175.709 414.23 173.91 411.595 173.91H383.181C375.708 173.91 373.84 179.906 373.84 182.904Z" fill="white"/>
<path d="M317.463 182.904L317.467 196.395C317.467 197.555 317.339 200.977 319.638 200.25C325.962 199.222 329.204 192.541 328.964 189.971C328.964 189.757 328.96 191.441 328.96 187.844C328.96 184.246 331.834 184.832 333.271 184.832H339.532H346.718C350.167 184.832 351.029 187.83 351.029 189.329C351.029 192.112 351.033 195.624 351.033 200.25C351.033 204.876 348.159 206.032 346.722 206.032H324.653H322.497C320.82 206.032 317.467 206.931 317.467 210.529C317.467 214.127 317.463 227.661 317.463 232.372C317.702 233.871 319.475 236.869 324.649 236.869H363.245C364.394 236.355 364.682 235.584 364.682 234.941C363.532 228.26 356.538 225.519 353.185 225.305H331.116C329.391 225.305 328.96 224.448 328.96 224.02C328.96 223.164 328.964 217.981 328.964 216.953C328.964 215.925 330.401 215.668 331.12 215.668H353.189C360.087 215.668 362.291 209.672 362.53 206.674C362.53 200.678 362.526 190.1 362.526 182.904C362.526 175.709 356.299 173.91 353.185 173.91H328.241C319.619 173.91 317.463 179.906 317.463 182.904Z" stroke="#F0F0F0" stroke-width="0.938418"/>
<path d="M373.84 182.904V196.395C373.84 197.673 374.127 200.234 375.277 200.25C382.75 200.764 385.576 194.896 386.055 191.898V188.486C386.055 185.916 387.493 184.846 388.211 184.631H403.691C405.415 184.631 405.847 186.773 405.847 187.844V193.183C405.847 195.753 404.409 196.395 403.691 196.395H399.379C395.93 196.395 389.648 198.965 389.648 200.25V211.171C389.648 213.227 397.942 213.741 399.379 213.741H403.691C405.415 213.741 405.847 215.883 405.847 216.953V222.093C405.847 224.149 404.409 224.663 403.691 224.663H387.493C385.768 224.663 385.337 222.949 385.337 222.093V216.953C384.618 212.456 376.714 209.244 375.277 209.244C374.127 209.244 373.84 211.386 373.84 212.456V226.59C373.84 234.813 380.067 236.869 383.181 236.869H411.595C417.918 236.869 419.499 230.873 419.499 227.875V215.668C419.499 209.887 416.625 207.317 412.314 205.389C416.625 203.462 419.499 200.25 419.499 196.395V182.904C419.499 175.709 414.23 173.91 411.595 173.91H383.181C375.708 173.91 373.84 179.906 373.84 182.904Z" stroke="#F0F0F0" stroke-width="0.938418"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M240.546 50.1494C240.732 43.8183 246.1 31.1562 259.429 31.1562H286.086C291.825 31.444 303.302 35.6455 303.302 50.1494V234.037C303.302 234.613 302.969 235.85 301.636 236.196C300.303 236.541 287.012 236.34 280.532 236.196C279.199 236.196 278.866 234.757 278.866 234.037V219.518C278.866 217.792 276.645 217.648 275.534 217.792H268.87C266.648 217.792 266.093 218.943 266.093 219.518V234.037C266.093 235.419 264.982 236.052 264.427 236.196H242.212C240.88 236.196 240.546 234.757 240.546 234.037V50.1494ZM265.647 63.1427V194.736C265.647 196.106 266.235 197.028 268.589 197.028H275.649C275.762 197.028 275.886 197.031 276.017 197.034C277.256 197.065 279.179 197.114 279.179 194.736C279.179 194.183 279.205 189.688 279.246 182.588C279.4 155.914 279.767 92.472 279.767 63.1427C279.767 62.3205 279.767 60.6761 276.237 60.6761H268.589C266.824 60.6761 265.647 61.4983 265.647 63.1427Z" fill="white"/>
<path d="M240.545 17.3628C244.467 2.86662 253.993 0.230957 260.156 0.230957H272.763H286.043C297.249 0.230957 303.301 14.7271 303.301 17.3628C303.301 19.4713 301.059 21.3162 299.939 21.3162H244.467C241.105 21.3162 240.545 18.6806 240.545 17.3628Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M80.8257 4.88851V199.346V199.347C80.826 201.86 80.8263 204.876 83.0551 204.95H118.168C131.544 204.95 141.019 194.897 141.019 186.351V22.4819C141.019 4.88851 125.97 0.36451 118.168 0.364509C115.301 0.364508 111.339 0.336878 107.019 0.306752C98.5529 0.247719 88.7134 0.179107 83.0551 0.290047C81.383 0.457603 80.8257 1.67144 80.8257 4.88851ZM117.519 43.6506L107.121 81.5359L131.015 87.3425L117.519 43.6506ZM102.945 142.602L130.767 99.3761L113.894 164.364L102.945 142.602ZM104.167 89.7909L102.979 93.384L102.088 96.0799L101.5 93.2542C100.784 89.82 100.084 86.4592 99.2431 82.431C95.478 91.0883 91.9908 99.0994 88.42 107.302L109.706 119.395C107.821 109.316 106.046 99.8343 104.167 89.7909ZM107.458 86.7878L130.631 92.3026L113.469 119.244C112.675 114.96 111.9 110.774 111.129 106.61L111.071 106.294C109.876 99.8401 108.689 93.4335 107.458 86.7878ZM101.063 138.358L109.49 124.999L89.2117 113.59C91.7896 118.968 94.3672 124.358 97.0047 129.873L97.1048 130.083L97.5391 130.991C98.6996 133.418 99.8724 135.87 101.063 138.358Z" fill="white"/>
</svg>
</a>
</div>
<h3 className='taglineu'>VORTEX OF VENTURES</h3>
<p className='font-face-asl'><p className="pr">Co-presented by</p></p>

<div className="Footerland">
    <div >
      <img className='imgfoot' src={idfc} />
    </div>
       <img src={Line} alt="" />
    <div >
      <img className='imgfoot' src={havells}/>
    </div>
      <img src={Line} alt="" />
    <div>
      <img className='imgfoot' src={zaloni}/>
  </div>
</div>    
<div 
        id='countinbuttondiv'
        ><CountIn/></div>  
       
    </div>
  )
}

export default Landing
