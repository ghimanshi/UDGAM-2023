import React from 'react'
import { Button } from '@cred/neopop-web/lib/components';
import './allspeaker.css'
import Navbar from '../components/Navbar';
import './ourteam.css';import charlie from "../PhotosPng/charlie.png"
import jimmy from "../PhotosPng/jimmy.png"
import pulkit from "../PhotosPng/pulkit.png"
import kevin from "../PhotosPng/kevin.png"
import michael from "../PhotosPng/michael.png"
import ankur from "../PhotosPng/ankur.png"
import amit from "../PhotosPng/amit.png"
import amod from "../PhotosPng/amod.png"
import ankit from "../PhotosPng/ankit.png"
import rohit from "../PhotosPng/rohit.png"
import kaushik from "../PhotosPng/kaushik.png"
import brijesh from "../PhotosPng/brijesh.png"
import linkicon from "../icons/Frame 341665.png"
import Footer from '../components/Home/footer';
function AllSpeakers() {
    return (
        < body style={{ height: "max-content", background: "#09021C", overflowX: "hidden" }}>
            <Navbar />

            {/* <div className='currentspeak'>
                <div class="topallmembers">
                    <h1>SPEAKERS</h1>
                </div>
                <div className='teamrow row' >
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={speak} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Ankur Warikoo</h1>
                        <h2>CEO</h2>
                        <h4>Nearbuy</h4>
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={speak} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Ankur Warikoo</h1>
                        <h2>CEO</h2>
                        <h4>Nearbuy</h4>
                    </div>
                    <div className='memberteam col-lg-4'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={speak} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Ankur Warikoo</h1>
                        <h2>CEO</h2>
                        <h4>Nearbuy</h4>
                    </div>
                </div>
                <div className='teamrow row'>
                    <div className='memberteam col-lg-6'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={speak} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Ankur Warikoo</h1>
                        <h2>CEO</h2>
                        <h4>Nearbuy</h4>
                    </div>
                    <div className='memberteam col-lg-6'>
                        <div className='imgteam'>
                            <svg width="303" height="333" viewBox="0 0 303 333" fill="none" xmlns="http://www.w3.org/2000/svg">

                                <rect x="24.7363" y="39.8867" width="252" height="252" rx="126" fill="#DDF140" />

                                <path d="M162.282 23.6976L175.994 47.6172C180.33 55.183 189.689 58.2402 197.656 54.6938L221.963 43.874C230.997 39.8527 241.035 46.99 240.203 56.8436L237.698 86.5359C236.992 94.901 242.498 102.529 250.66 104.493L278.096 111.097C287.46 113.351 291.207 124.648 285.047 132.051L265.735 155.259C260.492 161.561 260.492 170.706 265.735 177.007L285.047 200.215C291.207 207.618 287.46 218.916 278.096 221.169L250.659 227.773C242.498 229.738 236.992 237.366 237.698 245.731L240.203 275.423C241.035 285.276 230.997 292.414 221.963 288.392L197.656 277.573C189.689 274.026 180.33 277.083 175.994 284.649L162.282 308.569C157.288 317.282 144.72 317.282 139.726 308.569L126.014 284.649C121.678 277.083 112.319 274.026 104.352 277.573L80.0453 288.392C71.0112 292.414 60.9733 285.276 61.8047 275.423L64.3102 245.731C65.016 237.366 59.5102 229.738 51.3485 227.773L23.9118 221.169C14.5482 218.916 10.8008 207.618 16.961 200.215L36.273 177.007C41.5163 170.706 41.5163 161.561 36.273 155.259L16.961 132.051C10.8008 124.648 14.5483 113.351 23.9118 111.097L51.3485 104.493C59.5102 102.529 65.016 94.901 64.3102 86.5359L61.8047 56.8436C60.9733 46.99 71.0112 39.8527 80.0453 43.874L104.352 54.6938C112.319 58.2402 121.678 55.183 126.014 47.6172L139.726 23.6976C144.72 14.9842 157.288 14.9842 162.282 23.6976Z" stroke="#5D32FE" stroke-width="4" />
                            </svg>
                            <img className='teammembg' src={speak} alt="" />
                            <a href="www.facebook.com"><img className='linkicon' src={linkicon} alt="" /></a>
                        </div>
                        <h1>Ankur Warikoo</h1>
                        <h2>CEO</h2>
                        <h4>Nearbuy</h4>
                    </div>
                    


                </div>
            </div> */}

            <h1 className='pastspeakerstitle'>PAST SPEAKERS</h1>

            <div class="sliderspeak row">

                <div className='row'>
                <div className="img col-lg-3 col-sm-12">
            <a href="https://www.linkedin.com/in/ccheever/"><img src={charlie} alt="photo" /></a>
            <h1>Charlie Cheever</h1>
            <h3>Quora</h3>
            <p>Co-Founder</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/jimmy-wales-919a8b/"><img src={jimmy} alt="photo"  /></a>
            <h1>Jimmy Wales</h1>
            <h3>Wikipedia</h3>
            <p>Founder</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/jainpulkit/"><img src={pulkit} alt="photo" /></a>
            <h1>Pulkit Jain</h1>
            <h3>Vedantu</h3>
            <p>Co-Founder</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/thekevinharrington/"><img src={kevin} alt="photo" /></a>
            <h1>Kevin Harrington</h1>
            <h3>Shark Tank</h3>
            <p>Original Shark</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/mwseibel/"><img src={michael} alt="photo"/></a>
            <h1>Michael Siebel</h1>
            <h3>Y-Combinator</h3>
            <p>CEO</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/warikoo/"><img src={ankur} alt="photo"/></a>
            <h1>Ankur Warikoo</h1>
            <h3>Nearbuy</h3>
            <p>Founder</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/amit-kumar-agarwal-5b30301/"><img src={amit} alt="photo"/></a>
            <h1>Amit Agarwal</h1>
            <h3>No Broker</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/amodm/"><img src={amod} alt="photo" /></a>
            <h1>Amod Malviya</h1>
            <h3>Udaan</h3>
            <p>Co-Founder</p>
          </div><div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/ankitnagori/"> <img src={ankit} alt="photo" /></a>
            <h1>Ankit Nagori</h1>
            <h3>Cure.Fit</h3>
            <p>Founder</p>
          </div><div className="img col-lg-3 col-sm-12">
          <a href="https://in.linkedin.com/in/rohit-kapoor-99a30436"><img src={rohit} alt="photo"/></a>
            <h1>Rohit Kapoor</h1>
            <h3>Swiggy</h3>
            <p>CEO</p>
          </div><div className="img col-lg-3 col-sm-12">
          <a href="https://in.linkedin.com/in/kmitra"><img src={kaushik} alt="photo"/></a>
            <h1>Kaushik Mitra</h1>
            <h3>Pepsico India</h3>
            <p>CEO & VP</p>
          </div><div className="img col-lg-3 col-sm-12">
          <a href="https://www.linkedin.com/in/brijeshagrawal"><img src={brijesh} alt="photo"  /></a>
            <h1>Brijesh Agarwal</h1>
            <h3>Indiamart</h3>
            <p>Co-Founder & Director</p>
          </div>
                </div>

            </div>
            <Footer/>
        </body>
    );
}

export default AllSpeakers
