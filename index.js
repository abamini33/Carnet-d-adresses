
new Vue({
    el: '#app',

    //liste des composants à charger
    components: { 'AddContact' : httpVueLoader('./components/AddContact.vue'), 'ShowContacts' : httpVueLoader('./components/ShowContacts.vue') },

    //déclaration de notre propriété qui contiendra l'ensemble des contacts
    data: {
        contacts: []
    },
    methods: {
        //méthode qui sert à aller chercher les données dans le localstorage si elles existent
        loadContacts() {
            
            //récupération des données du localstorage
            let contacts = localStorage.getItem('contacts');
            
            //si il y a qqch dedans
            if (contacts != null) {
                //on le transforme en tableau et on le met dans la propriété contacts
                this.contacts = JSON.parse(contacts);
            }

            console.log(this.contacts);
        },
        
        //méthode qui enregistre les contacts dans le localstorage
        saveInLocalStorage() {
            
            //on transforme nos contacts en une chaine de caractère (JSON)
            let contacts = JSON.stringify(this.contacts);
            
            //puis on l'enregistre dans le localstorage sous le nom 'contacts'
            localStorage.setItem('contacts', contacts);
        }
    },
    
    //au chargement de la vue, on lance de suite la méthode qui récupère les données existantes dans le localstorage
    beforeMount() {
        this.loadContacts();
    }

});
