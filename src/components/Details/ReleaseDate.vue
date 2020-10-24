<template>
    <b-container class="release_date">
        <b-row>
            <span class="label">Date de sortie :</span>
            <span class="date">{{release_date}}</span>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ReleaseDate",
        props: {
            release_date: {
                type: String,
                required:true
            }
        }
    }
</script>

<style scoped lang="scss">

    .release_date {
        .label {
            padding-right: 5px;
            font-weight: bold;
        }

        .date {
            font-weight: bold;
        }
    }
</style>
