<template>
    <b-container class="rating">
        <b-row>
            <span class="label">Note :</span>
            <span class="vote_average" v-if="note">
                <b-progress class="progress_bar" :value="note * 10" max="100" show-value variant="warning"/>
            </span>
            <span v-else>Pas de note disponible</span>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Rating",
        props: {
            note: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .rating {
        .label {
            padding-right: 5px;
            font-weight: bold;
        }

        .vote_average {
            width: 90%;
            margin-left: 10px;

            .progress_bar {
                margin-top: 5px;
                width: 70%;
            }
        }
    }
</style>
