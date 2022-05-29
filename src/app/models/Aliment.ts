export interface Nutriments{
    "energy-kcal_100g":number;
    "carbohydrates_100g":number;
    "proteins_100g":number;
    "fat_100g":number
}

export interface Aliment{
    generic_name_fr: String
    nutriments: Nutriments
    image_front_small_url: String
}