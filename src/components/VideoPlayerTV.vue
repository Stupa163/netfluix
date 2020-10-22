<template>
    <div class="video_player">
        <img src="../assets/tv.png" alt="">
        <div class="video">
            <video ref="video_ref" muted loop/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayerTV",
        mounted: function () {
            this.$refs.video_ref.src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v';
            this.$refs.video_ref.play();
        }
    }
</script>

<style scoped lang="scss">
    .video_player {
        position: relative;

        img {
            position: relative;
            z-index: 9999;
        }

        .video {
            position: absolute;
            top: 97px;
            left: 84px
        }
    }
</style>
