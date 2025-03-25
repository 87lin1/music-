const audioData = [
    { title: "originalあくあ色ぱれっとホロライブ湊あくあ/271秒", src: "music/originalあくあ色ぱれっとホロライブ湊あくあ.mp3" },
    { title: "快晴--startend-cover/263秒", src: "music/快晴--startend-cover.mp3" },
    { title: "林檎売りの泡沫少女／湊あくあ×紫咲シオン/362秒", src: "music/林檎売りの泡沫少女／湊あくあ×紫咲シオン.mp3" },
    { title: "【あくありうむ。主題歌】未だ、青い／湊あくあ【マンガMV】/221秒", src: "music/【あくありうむ。主題歌】未だ、青い／湊あくあ【マンガMV】.mp3" },
    { title: "【original】海想列車／湊あくあ【アニメーションMV】/251秒", src: "music/【original】海想列車／湊あくあ【アニメーションMV】.mp3" },
    { title: "空奏列車 ／ Startend cover/252秒", src: "music/空奏列車 ／ Startend cover.mp3" },
    { title: "インテグラル ⧸ Startend (cover)/279秒", src: "music/インテグラル ⧸ Startend (cover).mp3" },
    { title: "【メン限】夜撫でるメノウ　歌ってみた Ver.湊あくあ/263秒", src: "music/【メン限】夜撫でるメノウ　歌ってみた Ver.湊あくあ.mp3" },
    { title: "tuki.『晩餐歌』Official Music Video/220秒", src: "music/tuki.『晩餐歌』Official Music Video.mp3" },
    { title: "ヨルシカ - 花に亡霊（OFFICIAL VIDEO）/243秒", src: "music/ヨルシカ - 花に亡霊（OFFICIAL VIDEO）.mp3" },
    { title: "治愈系女声(日语版) - 错位时空/208秒", src: "music/治愈系女声(日语版) - 错位时空 ｜ Cuo Wei Shi Kong 一开口就甜到融化！【动态歌.mp3" },
    { title: "music/ヨルシカ - だから僕は音楽を辞めた (Music Video)/247秒", src: "music/ヨルシカ - だから僕は音楽を辞めた (Music Video).mp3" },
    { title: "YOASOBI「たぶん」Official Music Video/264秒", src: "music/YOASOBI「たぶん」Official Music  Video.mp3" },
    { title: "YOASOBI「アンコール」Official Music Video/282秒", src: "music/YOASOBI「アンコール」Official Music Video.mp3" },
    { title: "YOASOBI「あの夢をなぞって」 Official Music Video/240秒", src: "music/YOASOBI「あの夢をなぞって」 Official Music Video.mp3" },
    { title: "5 Seconds of Summer - Teeth (Official Video)/219秒", src: "music/5 Seconds of Summer - Teeth (Official Video).mp3" },
    { title: "Die For You ft. Grabbitz ⧸⧸ Official Music Video/218秒", src: "music/Die For You ft. Grabbitz ⧸⧸ Official Music Video ⧸⧸ VALORANT Champions 2021.mp3" },
    { title: "好きだから。（feat.れん）/ 『ユイカ』【MV】/298秒", src: "music/好きだから。（feat.れん）⧸ 『ユイカ』【MV】.mp3" },
    { title: "tuki.『愛の賞味期限』Official Music Video/214秒", src: "music/tuki.『愛の賞味期限』Official Music Video.mp3" },
    { title: "tuki.『純恋愛のインゴット』Official Music Video/244秒", src: "music/tuki.『純恋愛のインゴット』Official Music Video.mp3" },
    { title: "tuki.『ひゅるりらぱっぱ』Official Music Video/201秒", src: "music/tuki.『ひゅるりらぱっぱ』Official Music Video.mp3" },
    { title: "Henceforth / 結城さくな(Cover)/236秒", src: "music/Henceforth ⧸ 結城さくな(Cover).mp3" },
    { title: "恋愛サーキュレーション ⧸ 結城さくな(Cover)/253秒", src: "music/恋愛サーキュレーション ⧸ 結城さくな(Cover).mp3" },
];

const audioList = document.getElementById("audio-list");
const audioItemTemplate = document.getElementById("audio-item-template");
const playlist = document.getElementById("playlist");
const currentSongInfo = document.getElementById("current-song-info");
const repeatOneButton = document.getElementById("repeat-one");
const shuffleButton = document.getElementById("shuffle");
const repeatAllButton = document.getElementById("repeat-all");
const addAllButton = document.getElementById("add-all"); // 新增一鍵添加按鈕

let currentPlaylist = [];
let currentAudio = null;
let currentSongIndex = 0;
let repeatOne = false;
let shuffle = false;
let repeatAll = false;

// 初始化播放清單 (一開始為空)
playlist.innerHTML = "";

// 建立音訊項目
audioData.forEach(audio => {
    const audioItem = audioItemTemplate.content.cloneNode(true);
    const audioTitle = audioItem.querySelector(".audio-title");
    const audioElement = audioItem.querySelector("audio");
    const addToPlaylistButton = audioItem.querySelector(".add-to-playlist");

    audioTitle.textContent = audio.title;
    audioElement.src = audio.src;

    audioElement.addEventListener('loadedmetadata', () => {
        audioElement.volume = 0.05;
    });

    audioElement.onerror = function() {
        console.error("音訊檔案載入失敗：", audio.src);
        audioTitle.textContent = "音訊檔案載入失敗";
        audioElement.style.display = "none";
    };

    audioList.appendChild(audioItem);

    // 加入播放清單
    addToPlaylistButton.addEventListener("click", () => {
        // 檢查播放清單是否已存在該歌曲
        if (!currentPlaylist.some(song => song.src === audio.src)) {
            currentPlaylist.push(audio);
            updatePlaylistDisplay();
        }
    });

    // 曲目播放事件
    audioElement.addEventListener("play", () => {
        // 停止之前的播放
        if (currentAudio && currentAudio !== audioElement) {
            currentAudio.pause();
        }
        currentAudio = audioElement;
        updateCurrentSongInfo(audio);
    });

    // 曲目結束事件
    audioElement.addEventListener("ended", () => {
        playNextSong();
    });
});

// 更新目前播放歌曲資訊
function updateCurrentSongInfo(audio) {
    const duration = currentAudio.duration;
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    currentSongInfo.innerHTML = `
        <p>曲名: ${audio.title}</p>
        <p>來源: ${audio.src}</p>
        <p>時長: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}</p>
    `;
}

// 播放歌曲
function playSong(song) {
    const audioItems = document.querySelectorAll(".audio-item");
    audioItems.forEach(item => {
        const title = item.querySelector(".audio-title").textContent;
        if (title === song.title) {
            item.querySelector("audio").play();
        }
    });
}

// 播放清單的顯示を更新
function updatePlaylistDisplay() {
    playlist.innerHTML = "";
    currentPlaylist.forEach(song => {
        const playlistItem = document.createElement("li");
        playlistItem.textContent = song.title;
        playlistItem.addEventListener("click", () => {
            playSong(song);
        });
        playlist.appendChild(playlistItem);
    });
}

// 時間をフォーマット
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// 1曲リピート
repeatOneButton.addEventListener("click", () => {
    resetButtons();
    repeatOne = !repeatOne;
    repeatOneButton.classList.toggle("active", repeatOne);
});

// シャッフル
shuffleButton.addEventListener("click", () => {
    resetButtons();
    shuffle = !shuffle;
    shuffleButton.classList.toggle("active", shuffle);
});

// 全曲リピート
repeatAllButton.addEventListener("click", () => {
    resetButtons();
    repeatAll = !repeatAll;
    repeatAllButton.classList.toggle("active", repeatAll);
});

// 一鍵添加
addAllButton.addEventListener("click", () => {
    audioData.forEach(audio => {
        if (!currentPlaylist.some(song => song.src === audio.src)) {
            currentPlaylist.push(audio);
        }
    });
    updatePlaylistDisplay();
});

function resetButtons() {
    repeatOne = false;
    shuffle = false;
    repeatAll = false;
    repeatOneButton.classList.remove("active");
    shuffleButton.classList.remove("active");
    repeatAllButton.classList.remove("active");
}

function playNextSong() {
    if (currentPlaylist.length > 0) {
        if (repeatOne) {
            playSong(currentPlaylist[currentSongIndex]);
        } else if (shuffle) {
            currentSongIndex = Math.floor(Math.random() * currentPlaylist.length);
            playSong(currentPlaylist[currentSongIndex]);
        } else if (repeatAll) {
            currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
            playSong(currentPlaylist[currentSongIndex]);
        } else {
            currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
            playSong(currentPlaylist[currentSongIndex]);
        }
    }
}