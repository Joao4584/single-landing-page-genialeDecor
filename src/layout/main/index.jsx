// * Modules * //
import React, { } from 'react'
import Fade from 'react-reveal/Fade';
import parse from 'html-react-parser';

// * Exports * //
import * as Styled from '../../styles/main.style';

// * Components * //
export function Main(props) {

    return (
        <Styled.Container mainPresets={topHome} mainColors={defaultColors}>
            <div className='darkBackground'>
                <div className='centerModel'>
                    <Fade bottom cascade>
                        <div className='text-section'>
                            <h2>{parse(topHome.title)}</h2>
                            <p className="textMain">{parse(topHome.text)}</p>
                            <Fade bottom cascade>
                                <a href={topHome.button.link}>
                                    <div className="buttonMain">{parse(topHome.button.title)}</div>
                                </a>

                            </Fade>
                        </div>

                    </Fade>

                </div>
            </div>
            <div    className='waves-back' />



        </Styled.Container>
    )
}