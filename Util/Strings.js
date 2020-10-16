import LocalisedStrings from 'localized-strings'

export const ScreenHeadings = new LocalisedStrings({
    en:{
        plantScreen: "Your Plants",
        newPlantScreen: "Add New Plant"
    },
    fr:{
        plantScreen: "Vos plantes",
        newPlantScreen: "Nouvelle plante"
    }
});

export const HomeScreenStrings = new LocalisedStrings({
    en:{
        welcome: "Welcome to",
        enter: "Enter"
    },
    fr:{
        welcome: "Bienvenue à",
        enter: "Entrer"
    }
})

export const PlantScreenStrings = new LocalisedStrings({
    en:{
        noPlants: "You don't have any plants! :(",
        noPlantsAdd: "Add one above.",
        addNewPlant: "Add New Plant",
        newPlantDetails: "Enter your new plant's details.",
        addPlantButton: "Add Plant",
        plantName: "Name",
        plantOwner: "Owner",
    },
    fr:{
        noPlants: "Vous n'avez aucune plante! :(",
        noPlantsAdd: "Installez-une au-dessus.",
        addNewPlant: "Nouvelle plante",
        newPlantDetails: "Saisissez les détails de la nouvelle plante.",
        addPlantButton: "Fini",
        plantName: "Nom",
        plantOwner: "Apporte à"
    }
});