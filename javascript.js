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
    { title: "YOASOBI「たぶん」Official Music Video/264秒", src: "music/YOASOBI「たぶん」Official Music Video.mp3" },
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

audioData.forEach(audio => {
    const audioItem = audioItemTemplate.content.cloneNode(true);
    audioItem.querySelector(".audio-title").textContent = audio.title;
    audioItem.querySelector("audio").src = audio.src;
    audioList.appendChild(audioItem);
});
document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('audio');
    audioPlayers.forEach(audio => {
        audio.volume = 0.02;
    });
});