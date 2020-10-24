<template>
    <b-container class="genres">
        <b-row>
            <span class="label">Genres :</span>
            <span v-if="genres.length !== 0" v-for="genre in genres">
                <span v-if="genre !== genres[0]" class="separator">-</span>
                {{genre.name}}
            </span>
            <span v-else>Pas de catégories disponible</span>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Genres",
        props: {
            genres: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .genres {
        .label {
            padding-right: 5px;
            font-weight: bold;
        }

        .separator {
            padding-left: 5px;
        }
    }
</style>
