<template>
    <div>
        <Header/>
        <div class="home">
            <div class="text">
                <div class="text_1">
                    <h1>Films, séries TV et bien plus en illimité</h1>
                </div>
                <div class="text_2">
                    <h2>Où que vous soyez. Annulez à tout moment.</h2>
                </div>
                <div class="text_3">
                    <h4>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre
                        abonnement.</h4>
                </div>
                <div class="form">
                    <input type="text" placeholder="Adresse e-mail  ">
                    <button class="btn btn-danger">Essayez gratuitement pendant 30 jours</button>
                </div>
            </div>
        </div>
        <div class="section_1">
            <b-container class="container">
                <b-row>
                    <b-col col lg="6" class="text_left">
                        <h1>Regardez Netflix sur votre TV.</h1>
                        <h2>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs
                            Blu-ray et bien plus.</h2>
                    </b-col>
                    <b-col col lg="6" class="image_right">
                        <VideoPlayerTV/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section_2">
            <b-container class="container">
                <b-row>
                    <b-col col lg="6" class="image_right">
                        <img src="../assets/image_section_2.png" alt="">
                    </b-col>
                    <b-col col lg="6" class="text_left">
                        <h1>Téléchargez vos séries préférées pour les regarder hors connexion.</h1>
                        <h2>Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder.</h2>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="section_3">
            <b-container class="container">
                <b-row>
                    <b-col col lg="6" class="text_left">
                        <h1>Où que vous soyez.</h1>
                        <h2>Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et
                            ordinateur, tout compris.</h2>
                    </b-col>
                    <b-col col lg="6" class="image_right">
                        <VideoPlayerMac/>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

    import VideoPlayerTV from "../components/VideoPlayerTV";
    import VideoPlayerMac from "../components/VideoPlayerMac";

    export default {
        name: 'Home',
        components: {VideoPlayerMac, VideoPlayerTV},
    }
</script>

<style scoped lang="scss">
    .home {
        background-image: url('../assets/background_home.png');
        height: 95vh;
        width: 100%;

        .text {
            width: 50vw;
            color: white;
            margin-left: 25vw;
            padding-top: 25vh;

            .text_1 {
                padding-bottom: 25px;

                h1 {
                    font-weight: bold;
                    font-size: 70px;
                }
            }

            .text_2, .text_3 {
                h2, h4 {
                    font-weight: bold;
                }

                padding-bottom: 25px;
            }

            .form {
                input {
                    padding: 22px;
                    width: 20vw;
                }

                button {
                    padding: 20px;
                    font-size: 20px;
                    background-color: #e50914;
                    border-radius: 0;
                }
            }
        }
    }

    .section_1, .section_2, .section_3 {
        border-top: 8px solid #222;
        width: 100%;
        height: 65vh;
        background-color: black;
        color: white;
    }

    .section_1, .section_3 {
        .container {
            .text_left {
                padding-top: 120px;
                text-align: left;

                h1 {
                    font-weight: bold;
                    font-size: 50px;
                    padding-bottom: 25px;
                }

                h2 {
                    font-size: 30px;
                }
            }

            .image_right {
                padding-top: 30px;
            }
        }
    }

    .section_2 {
        .container {
            padding-top: 120px;
            text-align: left;

            h1 {
                font-weight: bold;
                font-size: 50px;
                padding-bottom: 25px;
            }

            h2 {
                font-size: 30px;
            }
        }
    }
</style>
