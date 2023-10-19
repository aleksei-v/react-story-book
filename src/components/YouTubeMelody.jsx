import React, { useEffect, useState } from 'react'
import VolumeOn from '../icons/VolumeOnIcon';
import VolumeOff from '../icons/VolumeOffIcon';

const YouTubeMelody = () => {
    const [player, setPlayer] = useState(null);
    const [isMuted, setIsMuted] = useState(true)
    useEffect(() => {
        window.onYouTubeIframeAPIReady = loadPlayer;
    }, [])
    const loadPlayer = () => {
        setPlayer(new window.YT.Player('youtube-player', {
            videoId: 'wkb5ul0RgqQ',
            playerVars: {
                autoplay: 1,
                controls: 0,
                modestbranding: 1,
                showinfo: 0,
            },
            events: {
                onReady: (event) => {
                    event.target.playVideo();
                },
            },
        }))
     
    };
    const playVideo = () => {
        setIsMuted(false)
        player.playVideo();
        if (player) {
            player.unMute();
           
        }
    };
    const stopVolume = () => {
      
        player.mute();
        setIsMuted(true)
    }
    return (
        <>
            <div className="volume-btn" >
                {
                    isMuted ? <button className="story-btn" type="button" onClick={playVideo}>
                        <VolumeOn />
                    </button>
                        :
                        <button className="story-btn" type="button" onClick={stopVolume}>
                            <VolumeOff />
                        </button>
                }
                <div style={{ display: 'none' }} id="youtube-player" />
           
            </div>
        </>
    );
};

export default YouTubeMelody;