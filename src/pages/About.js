import React from 'react';

export default function About() {
    return (
        <div className="flex full about-container">
            <div className="flex main-container about-subcontainer">
                <div className="flex img-container"></div>
                <div className="flex column info-container">
                    <h1 className="capitalize">paolo groppi</h1>
                    <p className="presentation-container">
                        Hey!<br />
                        I'm Paolo, nice to meet you.<br />
                        I was born and raised in Milan, Italy, and I've been living here in Israel for the past 22 years.<br />
                        I'm married with 2 cats, very passionate about football, music, gaming, and one of my newest passions is coding.<br />
                        My main professional background is sound designing, I've practiced it for more than a decade, mainly in the post production field.
                    </p>
                    <div>
                        <h2>Why Should MisterBit pick me?</h2>
                        <p>
                            I always give my 100% when it's about doing something that I care about and enjoy.<br />
                            I think that even though I don't have a lot of background in programing, it's not a disadvantage, as I'm eager to learn, to improve
                            and to master techniques that I know that only with time I'll be able to master. <br />
                            I've found that there are a lot of resemblances between sound engineering and programing, so I think I can give something different.<br />
                            I love to have fun while I work and I love to help those around me.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}