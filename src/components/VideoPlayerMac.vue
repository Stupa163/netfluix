<template>
    <div class="video_player">
        <img src="../assets/device-pile.png" alt="">
        <div class="video">
            <video ref="video_ref" muted loop/>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.$refs.video_ref.src = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v';
            this.$refs.video_ref.play();
        },
        name: "VideoPlayerMac"
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
            top: 47px;
            left: 120px;

            video {
                width: 400px;
            }
        }
    }
</style>
