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

export const PlantComponentStrings = new LocalisedStrings({
    en:{
        myName: "I'm a plant and my name is",
        needWatering: "I need watering!",
        quenched: "I'm quenched!",
        waterMe: "Water me!",
        noMoreWater: "No more water for me!"
    },
    fr:{
        myName: "Je suis une plane et je m'appelle",
        needWatering: "J'ai soif!",
        quenched: "Je me suis désaltérée",
        waterMe: "Arrosez-moi!",
        noMoreWater: "Plus besoin de me arroser!"
    }
})