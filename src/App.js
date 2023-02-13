import React from 'react';
import video1 from './Lead generation (copy).mp4';
import video2 from './Campaign_Structure.mp4';
import video3 from './Facebook_adv.mp4';

import { useState } from 'react';


export default function App() {

    const [slide, setSlide] = useState(1);
    const [form, setForm] = useState(false)

    const handleSlide = (s) => {
        setSlide(s)
    }

    const handleForm = () => {
        setForm(true)
    }
    const handleSpeed = (vid) => {


        if (vid === 1) {
            const currSpeed = document.querySelector('.video1').playbackRate;
            console.log(currSpeed)
            if (currSpeed === 2.0) {
                document.querySelector('.video1').playbackRate = 1;
                document.querySelector('#speed-div').innerHTML = '[1x]';
            }
            else {

                document.querySelector('.video1').playbackRate = currSpeed + 0.5;
                document.querySelector('#speed-div').innerHTML = `[${currSpeed + 0.5}x]`;
            }
        }
        else if (vid === 2) {
            const currSpeed = document.querySelector('.video2').playbackRate;
            console.log(currSpeed)
            if (currSpeed === 2.0) {
                document.querySelector('.video2').playbackRate = 1;
                document.querySelector('#speed-div').innerHTML = '[1x]';
            }
            else {

                document.querySelector('.video2').playbackRate = currSpeed + 0.5;
                document.querySelector('#speed-div').innerHTML = `[${currSpeed + 0.5}x]`;
            }
        }
        else if (vid === 3) {
            const currSpeed = document.querySelector('.video3').playbackRate;
            console.log(currSpeed)
            if (currSpeed === 2.0) {
                document.querySelector('.video3').playbackRate = 1;
                document.querySelector('#speed-div').innerHTML = '[1x]';
            }
            else {

                document.querySelector('.video3').playbackRate = currSpeed + 0.5;
                document.querySelector('#speed-div').innerHTML = `[${currSpeed + 0.5}x]`;
            }
        }
    }

    return (
        <>

            {slide === 1 &&
                <div id='first'>
                    <div id='speed-div' onClick={() => { handleSpeed(1) }}>  [1x] </div>
                    <video autoPlay={true} data-qa="media-player" id="player" className='video1' playsInline="" preload="auto" src={video1} type="captions" controls></video>
                    <div>

                        <button onClick={() => { handleSlide(2) }}> <span>
                            A
                        </span>
                            Campaign Structure</button>
                        <button onClick={() => { handleSlide(3) }} > <span>
                            B
                        </span>Facebook Structure</button>
                        <button id='button-3' onClick={() => { handleSlide(2) }}>
                            <span >
                                C
                            </span>
                            3rd Choice</button>
                    </div>
                </div>
            }
            {slide === 2 &&
                <div id='first'>
                    <div id='speed-div' onClick={() => { handleSpeed(2) }}> [ 1x ] </div>
                    <video autoPlay="" data-qa="media-player" data-testid="media-player-video" id="player" className='video2' playsInline="" preload="auto" src={video2} type="captions" controls></video>
                    <div>
                        {form === true ?

                            <form action="">
                                <div id='form-wrapper'>
                                    <div id='form-heading'>Before you go, please leave your contact details so we can get back to you...</div>
                                    <input type="text" name="" id="" required placeholder='* Your Name' />
                                    <input type="email" name="" id="" required placeholder='* Your Email' />
                                    <div id='agreement'>
                                        <input type="checkbox" required />
                                        <div>
                                            * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX</div>
                                    </div>
                                </div>
                                <button id='form-button'>Send your answer <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="" /></button>
                            </form>

                            :

                            <button id='v-button' onClick={handleForm}>
                                Download Campaign Structure
                            </button>

                        }

                    </div>
                </div>

            }
            {slide === 3 &&
                <div id='first'>
                    <div id='speed-div' onClick={() => { handleSpeed(3) }}> [1x] </div>
                    <video autoPlay="" data-qa="media-player" data-testid="media-player-video" id="player" className='video3' playsInline="" preload="auto" src={video3} type="captions" controls></video>
                    <div>
                        {form === true ?

                            <form action="">
                                <div id='form-wrapper'>
                                    <div id='form-heading'>Before you go, please leave your contact details so we can get back to you...</div>
                                    <input type="text" name="" id="" required placeholder='* Your Name' />
                                    <input type="email" name="" id="" required placeholder='* Your Email' />
                                    <div id='agreement'>
                                        <input type="checkbox" required />
                                        <div>
                                            * [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX</div>
                                    </div>
                                </div>
                                <button id='form-button'>Send your answer <img src="https://cdn-icons-png.flaticon.com/512/545/545682.png" alt="" /></button>
                            </form>

                            :

                            <button id='v-button' onClick={handleForm}>
                                Sign up for free webinar</button>

                        }



                    </div>
                </div>

            }

        </>
    )
}
