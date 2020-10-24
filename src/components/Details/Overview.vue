<template>
    <b-container class="overview">
        <b-row>
            <span class="label">Description :</span>
            <p>{{overview}}</p>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "Overview",
        props: {
            overview: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .overview {
        .label {
            padding-right: 5px;
            font-weight: bold;
        }

        p {
            text-align: justify;
        }
    }
</style>
