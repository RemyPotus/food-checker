import { Aliment } from "..models/aliment.model";

export const mockAlimentList: Aliment[] = [
{
    generic_name: "Chocolat",
    nutriments: {
    "energy-kcal_100g":256,
    "carbohydrates_100g":50,
    "proteins_100g":10,
    "fat_100g":40
    },
    image_url: 'some link to an image'
},
{
    generic_name: "Nutella",
    nutriments: {
    "energy-kcal_100g":539,
    "carbohydrates_100g":57.5,
    "proteins_100g":6.3,
    "fat_100g":30.9
    },
    image_url: 'some link to an image'
},
{
    generic_name: "Test",
    nutriments: {
    "energy-kcal_100g":1,
    "carbohydrates_100g":2,
    "proteins_100g":3,
    "fat_100g":4
    },
    image_url: 'some link to an image'
}
];