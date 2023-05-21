"use client";

import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import { useState } from "react";

const playlist: { name: string, src: string }[] = [
    { name: "Whole Ride (feat. Nosgov) by Nova x Hiko Momoji", src: "https://od.lk/s/MThfNDEzODAzNDZf/Whole%20Ride%20%28Feat.%20Nosgov%29%20-%20Nova%20x%20Hiko.mp3" },
    { name: "E t h e r e a l by TOKYOPILL", src: "https://od.lk/s/MThfNDEzODAzNDRf/E%20t%20h%20e%20r%20e%20a%20l.mp3" },
    { name: "The Difference (feat. Toro y Moi) by Flume", src: "https://od.lk/s/MThfNDEzODAzNDVf/The%20Difference%20%28feat.%20Toro%20y%20Moi%29.mp3" },
    { name: "moment by vierre cloud", src: "https://od.lk/s/MThfNDEzODAzMzVf/moment.mp3" },
    { name: "GORE-TEX COVERS MY SOUL by BLKSMIITH", src: "https://od.lk/s/MThfNDEzODAzNThf/9.%20GORE%20-%20TEX%20COVERS%20MY%20SOUL.mp3" },
    { name: "b4 by Heatace", src: "https://od.lk/s/MThfNDEzODAzNjBf/b4.mp3" },
    { name: "Blazing In The Dark by GNB CHILI", src: "https://od.lk/s/MThfNDEzODAzNjFf/gnb%20chili%20-%20Blazing%20In%20The%20Dark.mp3" },
    { name: "DESTROY The Wired by TOKYOPILL", src: "https://od.lk/s/MThfNDEzODAzNDJf/DESTROY%20The%20Wired.mp3" }
];

const playlistIchigo: { name: string, src: string }[] = [
    { name: "Arc [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMjFf/Arc%20%5Bprod.%20Ichigo%5D.wav" },
    { name: "Destined [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMjRf/Destined.wav" },
    { name: "Fatty Back Pt. 2 - Angel Mane, 3m & Madara TBH (prod. Ichigo)", src: "https://od.lk/s/MThfNDE0MTIxMjVf/Fatty%20Back%20Pt.2%20%28Angel%20Mane%2C%203m%2C%20Madara%20TBH%29%20%28online-audio-converter.com%29.mp3" },
    { name: "Splinter [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMjdf/Splinter%20%5Bprod.%20Ichigo%5D.mp3" },
    { name: "bleed lean [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMjhf/bleed%20lean%20%5Bprod.%20Ichigo%5D.mp3" },
    { name: "Mary Jane [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMzJf/Mary%20Jane.mp3" },
    { name: "Will He [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMzRf/Will%20He.mp3" },
    { name: "Dreamin' [prod. Ichigo]", src: "https://od.lk/s/MThfNDE0MTIxMzVf/Dreamin%27.mp3" }
];

export default function MusicPlayer() {
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const handleClickPrevious = () => {
        currentMusicIndex === 0
            ? setCurrentMusicIndex(playlist.length - 1)
            : setCurrentMusicIndex(currentMusicIndex - 1);
    };
    const handleClickNext = () => {
        currentMusicIndex < playlist.length - 1
            ? setCurrentMusicIndex(currentMusicIndex + 1)
            : setCurrentMusicIndex(0);
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <p className="flex items-center justify-center pb-2">
                {playlist[currentMusicIndex].name}
            </p>
            <AudioPlayer
                onEnded={handleClickNext}
                autoPlayAfterSrcChange={true}
                showSkipControls={true}
                showJumpControls={false}
                src={playlist[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                preload="none"
            />
        </div>
    );
}

export function MusicPlayerIchigo() {
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const handleClickPrevious = () => {
        currentMusicIndex === 0
            ? setCurrentMusicIndex(playlistIchigo.length - 1)
            : setCurrentMusicIndex(currentMusicIndex - 1);
    };
    const handleClickNext = () => {
        currentMusicIndex < playlistIchigo.length - 1
            ? setCurrentMusicIndex(currentMusicIndex + 1)
            : setCurrentMusicIndex(0);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 pb-4 pt-2">
            <p className="flex items-center justify-center pb-2">
                {playlistIchigo[currentMusicIndex].name}
            </p>
            <AudioPlayer
                onEnded={handleClickNext}
                autoPlayAfterSrcChange={true}
                showSkipControls={true}
                showJumpControls={false}
                src={playlistIchigo[currentMusicIndex].src}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                preload="none"
            />
        </div>
    );
}