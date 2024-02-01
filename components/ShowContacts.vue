<template>
     <table class="table table-dark table-striped table-hover">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Téléphone</th>
                <th>Email</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(contact,index) of contacts">
                <td v-if="!contact.modifyOn"> {{contact.nom}}</td>
                <td v-else><input v-model="contact.nom"></td>
                <td v-if="!contact.modifyOn"> {{contact.prenom}}</td>
                <td v-else><input v-model="contact.prenom"></td>
                <td v-if="!contact.modifyOn"> {{contact.tel}}</td>
                <td v-else><input v-model="contact.tel"></td>
                <td v-if="!contact.modifyOn"> {{contact.email}}</td>
                <td v-else><input v-model="contact.email"></td>
                <td><i @click="modify(index)" class="far fa-edit"></i></td>
                <td><i @click="deleteOne(index)" class="far fa-trash-alt"></i></td>
            </tr>
            </tbody>
        </table>
</template>
<script>
    module.exports = {
        data() {
            return {

            }

        },
        //récupération des contacts provenant du parent
        props: ['contacts'],

        //liste des méthodes
        methods: {
            modify(index) {

                //on change le statut modyfyOn de l'élément en cours de modif
                this.contacts[index].modifyOn = !this.contacts[index].modifyOn;

                if (!this.contacts[index].modifyOn) {
                    //si nous sommes en mode edition, on enregistre les nouvelles données  dans le localstorage
                    this.$emit('save');

                }

            },
            deleteOne(index) {

                //demande de confirmation auprès de l'utilisateur
                if (confirm('Etes-vous sûr de vouloir supprimer ce contact? Cette action sera irréversible.')) {
                    //on supprime du tableau la case qui contient notre contact
                    this.contacts.splice(index, 1);
                    //delete this.contacts[index];
                    //this.contacts.$remove(index);

                    //on lance lanregistrement dans le storage
                    this.$emit('save');
                }
            }

        }
    }
</script>
<style scoped>
    i {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    ul span {
        display: block;
    }
</style>
