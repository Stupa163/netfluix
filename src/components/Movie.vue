<template>
    <div class="movie">
        <div class="image">
            <router-link :to="{name: 'Details', params: {id: id}}">
                <img :src="'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + poster_path" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Movie",
        props: {
            poster_path: {
                type: String,
                required: true
            },
            id: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .movie {
        width: 100%;

        .image {
            overflow: hidden;

            img {
                margin: auto;
                display: block;
                width: 90%;
                transition: transform .2s;

                &:hover {
                    transform: scale(1.2);
                }
            }
        }
    }
</style>
