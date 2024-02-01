<template>
     <form @submit.prevent="addContact">
        <h1>Ajouter un contact</h1>
            <p>
                <label for='nom'>Nom</label>
                <input type='text' name='nom' v-model="nom">
            </p>
            <p>
                <label for='prenom'>Prénom</label>
                <input type='text' name='prenom' v-model="prenom">
            </p>
            <p>
                <label for='tel'>Téléphone</label>
                <input type='text' name='tel' v-model="tel">
            </p>
             <p>
                <label for='email'>Email</label>
                <input type='email' name='email' v-model="email">
            </p>
            <p>
                <button type="submit" class="btn btn-success">Ajouter un contact</button>
            </p>    
        </form>
</template>
<script>
module.exports = {
     data() {
        return {
            nom:'',
            prenom:'',
            tel:'',
            email:''
       };
    },
    
    //récupération des contacts envoyés par le parent
    props: ['contacts'],
    methods:{
        addContact(){
            
            //on récupère les données saisies dans les champs de form et on les met dans un objet
            const contact = {nom:this.nom,prenom:this.prenom,tel:this.tel,email:this.email,modifyOn:false};
            
            //on ajoute cet objet au tableau global des contacts
            this.contacts.push(contact);
            
            //on demande au parent de lancer la méthode save qui permet l'enregistrepment dans le local storage
            this.$emit('save');

            //on vide les champs du formulaire
            this.nom='';
            this.prenom='';
            this.tel='';
            this.email='';
            
        }
        
    }
}


</script>
<style scoped>
    label{
        display:inline-block;
        width:100px;
    }

</style>
