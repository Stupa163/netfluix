<template>
    <b-container class="produced_by">
        <b-row>
            <span class="label">Produit par :</span>
            <span v-if="companies.length !== 0" v-for="company in companies">
                <span v-if="company !== companies[0]" class="separator">-</span>
                {{company.name}}
                <span class="logo" v-if="company.logo_path">
                    <img :src="`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${company.logo_path}`" alt="">
                </span>
            </span>
            <span v-else>Pas d'entreprise de production disponible</span>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ProducedBy",
        props: {
            companies: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .produced_by {
        .label {
            padding-right: 5px;
            font-weight: bold;
        }

        .separator {
            padding-left: 5px;
        }

        .logo {
            img {
                width: 15px;
            }
        }

    }
</style>
