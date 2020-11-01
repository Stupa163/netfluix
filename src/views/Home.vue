<template>
    <b-container fluid>

        <!-- SECTION 1 -->
        <b-row class="p-5 titre" style="height: 65vh;">
            <div class="text-center text-light w-100">
                <p class="h1 font-weight-bold" style="font-size: 5vh; padding-top: 10%">
                    Films, séries TV et bien plus en illimité.
                </p>
                <p class="" style="font-size: 3vh">
                    Où que vous soyez. Annulez à tout moment.
                </p>
                <p>
                    Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre
                    abonnement.
                </p>
            </div>
        </b-row>

        <!-- SECTION 2 -->
        <b-row style="border-top: 7px solid gray; border-bottom: 3.5px solid gray; background-color: black; padding: 70px 45px;"
               align-v="center">

            <b-col md=6>
                <p class="h1 text-center text-light font-weight-bold">
                    Regardez Netflix sur votre TV.
                </p>
                <p class="text-center text-light">
                    Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et
                    bien plus.
                </p>
            </b-col>

            <b-col md=6>
                <video class="video-tv"
                       src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                       muted loop autoplay/>
                <b-img style="position: absolute; top: -1%; z-index: 2;" src="../assets/tv.png" alt="Test" fluid-grow
                       center/>
            </b-col>
        </b-row>

        <b-row style="border-top: 3.5px solid gray; border-bottom: 3.5px solid gray; background-color: black; padding: 70px 45px;"
               align-v="center">
            <b-col md=6>
                <b-img src="../assets/image_section_2.png" alt="Test" fluid center/>
            </b-col>

            <b-col md=6>
                <p class="h1 text-center text-light font-weight-bold">
                    Regardez Netflix sur votre TV.
                </p>
                <p class="text-center text-light">
                    Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et
                    bien plus.
                </p>
            </b-col>
        </b-row>

        <b-row style="border-top: 3.5px solid gray; background-color: black; padding: 70px 45px;" align-v="center">

            <b-col md=6>
                <p class="h1 text-center text-light font-weight-bold">
                    Où que vous soyez.
                </p>
                <p class="text-center text-light">
                    Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur,
                    tout compris.
                </p>
            </b-col>

            <b-col md=6>
                <video class="video-mac"
                       src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                       muted loop autoplay/>
                <b-img style="position: absolute; top: -10%; left: 15%; z-index: 1; width: 70%"
                       src="../assets/device-pile.png" alt="Test" fluid center/>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
    export default {
        name: "Home",
    };
</script>

<style scoped lang="scss">
    .titre {
        background-image: url("../assets/background_home.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .video-tv {
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .video-mac {
        position: relative;
        z-index: 1;
        width: 70%;
        left: 15%;
        height: 100%;
    }
</style>
