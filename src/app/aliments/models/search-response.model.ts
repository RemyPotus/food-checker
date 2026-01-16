export interface SearchResponseDto {
  "count": 2701,
  "page": 1,
  "page_count": 24,
  "page_size": 24,
  "products": [
    {
      "product_type": "beauty",
      "product_name": "string",
      "abbreviated_product_name": "string",
      "code": "string",
      "codes_tags": [
        "code-13"
      ],
      "generic_name": "string",
      "id": "string",
      "lc": "string",
      "lang": "string",
      "nova_group": 0,
      "nova_groups": "string",
      "obsolete": "string",
      "obsolete_since_date": "string",
      "product_quantity": "500",
      "product_quantity_unit": "g",
      "quantity": "3 x 150 g",
      "schema_version": 999,
      "additives_n": 0,
      "checked": "string",
      "complete": 0,
      "completeness": 0,
      "ecoscore_grade": "string",
      "ecoscore_score": 0,
      "food_groups": "string",
      "food_groups_tags": [
        "string"
      ],
      "nutrient_levels": {
        "fat": "low",
        "salt": "low",
        "saturated-fat": "low",
        "sugars": "low"
      },
      "packaging_text": "packaging_text_en",
      "packagings": [
        {
          "number_of_units": 0,
          "shape": {
            "id": "string",
            "lc_name": "string"
          },
          "material": {
            "id": "string",
            "lc_name": "string"
          },
          "recycling": {
            "id": "string",
            "lc_name": "string"
          },
          "quantity_per_unit": "string",
          "quantity_per_unit_value": 0,
          "quantity_per_unit_unit": "string",
          "weight_specified": 0,
          "weight_measured": 0,
          "weight_estimated": 0,
          "weight": 0,
          "weight_source_id": "string"
        }
      ],
      "packagings_complete": 0,
      "pnns_groups_1": "string",
      "pnns_groups_1_tags": [
        "string"
      ],
      "pnns_groups_2": "string",
      "pnns_groups_2_tags": [
        "string"
      ],
      "popularity_key": 0,
      "popularity_tags": [
        "bottom-25-percent-scans-2020",
        "top-85-percent-scans-2021",
        "top-90-percent-scans-2022",
        "top-country-it-scans-2019",
        "top-100000-mg-scans-2024"
      ],
      "scans_n": 0,
      "unique_scans_n": 0,
      "serving_quantity": "string",
      "serving_quantity_unit": "g",
      "serving_size": "string",
      "brands": "string",
      "brands_hierarchy": [
        "string"
      ],
      "brands_lc": "string",
      "brands_tags": [
        "string"
      ],
      "categories": "string",
      "categories_hierarchy": [
        "string"
      ],
      "categories_lc": "string",
      "categories_tags": [
        "string"
      ],
      "checkers_tags": [
        "string"
      ],
      "cities": "string",
      "cities_tags": [
        {}
      ],
      "correctors_tags": [
        "string"
      ],
      "countries": "string",
      "countries_hierarchy": [
        "string"
      ],
      "countries_lc": "string",
      "countries_tags": [
        "string"
      ],
      "ecoscore_tags": [
        "string"
      ],
      "emb_codes": "EMB 2013330",
      "emb_codes_orig": "string",
      "emb_codes_tags": [
        {}
      ],
      "labels": "string",
      "labels_hierarchy": [
        "string"
      ],
      "labels_lc": "string",
      "labels_tags": [
        "string"
      ],
      "entry_dates_tags": [
        "string"
      ],
      "manufacturing_places": "string",
      "manufacturing_places_tags": [
        "string"
      ],
      "nova_groups_tags": [
        "string"
      ],
      "nutrient_levels_tags": [
        "string"
      ],
      "images": {
        "front": {
          "angle": 0,
          "coordinates_image_size": "full",
          "geometry": "0x0--1--1",
          "imgid": "121",
          "normalize": null,
          "rev": "420",
          "sizes": {
            "100": {
              "h": 400,
              "w": 255
            },
            "200": {
              "h": 400,
              "w": 255
            },
            "400": {
              "h": 400,
              "w": 255
            },
            "full": {
              "h": 400,
              "w": 255
            }
          },
          "white_magic": null,
          "x1": "-1",
          "x2": "-1",
          "y1": "-1",
          "y2": "-1"
        },
        "property1": {
          "imgid": 123456789,
          "sizes": {
            "full": {
              "h": 400,
              "w": 255
            }
          },
          "uploaded_t": "1457680652",
          "uploader": "openfoodfacts-contributors"
        },
        "property2": {
          "imgid": 123456789,
          "sizes": {
            "full": {
              "h": 400,
              "w": 255
            }
          },
          "uploaded_t": "1457680652",
          "uploader": "openfoodfacts-contributors"
        }
      },
      "last_image_dates_tags": [
        "string"
      ],
      "last_image_t": 0,
      "selected_images": {
        "front": {
          "display": {},
          "small": {},
          "thumb": {}
        }
      },
      "image_small_url": "string",
      "image_thumb_url": "string",
      "image_url": "string",
      "ecoscore_data": {
        "adjustments": {
          "origins_of_ingredients": {
            "aggregated_origins": [
              {
                "epi_score": "string",
                "origin": "string",
                "percent": 0,
                "transportation_score": null
              }
            ],
            "epi_score": 0,
            "epi_value": 0,
            "origins_from_categories": [
              "string"
            ],
            "origins_from_origins_field": [
              "string"
            ],
            "transportation_score": 0,
            "transportation_scores": {
              "property1": 0,
              "property2": 0
            },
            "transportation_value": 0,
            "transportation_values": {
              "property1": 0,
              "property2": 0
            },
            "value": 0,
            "values": {
              "property1": 0,
              "property2": 0
            },
            "warning": "string"
          },
          "packaging": {
            "non_recyclable_and_non_biodegradable_materials": 0,
            "packagings": [
              {
                "ecoscore_material_score": 0,
                "ecoscore_shape_ratio": 0,
                "material": "string",
                "shape": "string",
                "number_of_units": 1,
                "quantity_per_unit": "33 cL",
                "quantity_per_unit_unit": "cl",
                "quantity_per_unit_value": 33,
                "recycling": "en:recycle-in-sorting-bin",
                "weight_measured": 12.08
              }
            ],
            "score": 0,
            "value": 0,
            "warning": "string"
          },
          "production_system": {
            "labels": [
              "string"
            ],
            "value": 0,
            "warning": "string"
          },
          "threatened_species": {
            "ingredient": "string",
            "value": 0
          }
        },
        "agribalyse": {
          "agribalyse_proxy_food_code": "string",
          "agribalyse_food_code": "string",
          "co2_agriculture": 0,
          "co2_consumption": 0,
          "co2_distribution": 0,
          "co2_packaging": 0,
          "co2_processing": 0,
          "co2_total": 0,
          "co2_transportation": 0,
          "code": "string",
          "dqr": "string",
          "ef_agriculture": 0,
          "ef_consumption": 0,
          "ef_distribution": 0,
          "ef_packaging": 0,
          "ef_processing": 0,
          "ef_total": 0,
          "ef_transportation": 0,
          "is_beverage": 0,
          "name_en": "string",
          "score": 0,
          "version": "string"
        },
        "grade": "string",
        "grades": {},
        "missing": {
          "labels": 0,
          "origins": 0,
          "packagings": 0
        },
        "missing_data_warning": 0,
        "previous_data": {
          "grade": "string",
          "score": 0,
          "agribalyse": {
            "agribalyse_proxy_food_code": "string",
            "agribalyse_food_code": "string",
            "co2_agriculture": 0,
            "co2_consumption": 0,
            "co2_distribution": 0,
            "co2_packaging": 0,
            "co2_processing": 0,
            "co2_total": 0,
            "co2_transportation": 0,
            "code": "string",
            "dqr": "string",
            "ef_agriculture": 0,
            "ef_consumption": 0,
            "ef_distribution": 0,
            "ef_packaging": 0,
            "ef_processing": 0,
            "ef_total": 0,
            "ef_transportation": 0,
            "is_beverage": 0,
            "name_en": "string",
            "score": 0,
            "version": "string"
          }
        },
        "score": 0,
        "scores": {},
        "status": "string"
      },
      "ecoscore_extended_data_version": "string",
      "environment_impact_level": "string",
      "environment_impact_level_tags": [
        {}
      ],
      "additives_tags": [
        "string"
      ],
      "allergens": "string",
      "allergens_lc": "string",
      "allergens_hierarchy": [
        "string"
      ],
      "allergens_tags": [
        "string"
      ],
      "ingredients": [
        {
          "id": "string",
          "ingredients": {},
          "percent": 0,
          "percent_estimate": 0,
          "percent_max": "string",
          "percent_min": 0,
          "text": "string",
          "vegan": "string",
          "vegetarian": "string"
        }
      ],
      "ingredients_analysis": {
        "en:palm-oil": [
          "string"
        ],
        "en:vegan-status-unknown": [
          "string"
        ],
        "en:vegetarian-status-unknown": [
          "string"
        ]
      },
      "ingredients_analysis_tags": [
        "string"
      ],
      "ingredients_from_or_that_may_be_from_palm_oil_n": 0,
      "ingredients_from_palm_oil_n": 0,
      "ingredients_from_palm_oil_tags": [
        {}
      ],
      "ingredients_hierarchy": [
        "string"
      ],
      "ingredients_n": 0,
      "ingredients_n_tags": [
        "string"
      ],
      "ingredients_original_tags": [
        "string"
      ],
      "ingredients_percent_analysis": 0,
      "ingredients_sweeteners_n": 0,
      "ingredients_non_nutritive_sweeteners_n": 0,
      "ingredients_tags": [
        "string"
      ],
      "ingredients_lc": "string",
      "ingredients_text": "Farine de blé* 67,4%, sucre de canne*, huile de tournesol oléique*, graines de chia* 5,2%, son de blé*, oranges déshydratées * 0,9%, farine de riz*, poudres à lever (acide citrique, carbonates de sodium), arôme naturel d'orange.\n",
      "ingredients_text_with_allergens": "Farine de <span class=\"allergen\">blé*</span> 67,4%, sucre de canne*, huile de tournesol oléique*, graines de chia* 5,2%, <span class=\"allergen\">son de blé*</span>, oranges déshydratées * 0,9%, farine de riz*, poudres à lever (acide citrique, carbonates de sodium), arôme naturel d'orange.\n",
      "ingredients_that_may_be_from_palm_oil_n": 0,
      "ingredients_that_may_be_from_palm_oil_tags": [
        {}
      ],
      "ingredients_with_specified_percent_n": 0,
      "ingredients_with_specified_percent_sum": 0,
      "ingredients_with_unspecified_percent_n": 0,
      "ingredients_with_unspecified_percent_sum": 0,
      "known_ingredients_n": 0,
      "origins": "string",
      "origins_hierarchy": [
        {}
      ],
      "origins_lc": "string",
      "origins_tags": [
        {}
      ],
      "traces": "string",
      "traces_hierarchy": [
        {}
      ],
      "traces_lc": "string",
      "traces_tags": [
        {}
      ],
      "unknown_ingredients_n": 0,
      "no_nutrition_data": "on",
      "nutrition_data_per": "serving",
      "nutrition_data_prepared_per": "serving",
      "nutriments": {
        "alcohol": 0,
        "carbohydrates": 0,
        "carbohydrates-total": 0,
        "energy": 0,
        "energy_value": 0,
        "energy_unit": "kcal",
        "energy-kcal": 0,
        "energy-kj": 0,
        "fat": 0,
        "fruits-vegetables-legumes-estimate-from-ingredients": 0,
        "fruits-vegetables-nuts-estimate-from-ingredients": 0,
        "nova-group": 0,
        "nutrition-score-fr": null,
        "proteins": 0,
        "salt": 0,
        "saturated-fat": 0,
        "sodium": 0,
        "sugars": 0,
        "carbon-footprint-from-known-ingredients_product": 0,
        "carbon-footprint-from-known-ingredients_serving": 0,
        "erythritol": 12.5
      },
      "nutrition_grade_fr": "string",
      "nutrition_grades": "string",
      "nutrition_grades_tags": [
        "string"
      ],
      "nutrition_score_beverage": 0,
      "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients": 0,
      "nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value": 0,
      "nutrition_score_warning_no_fiber": 0,
      "other_nutritional_substances_tags": [
        {}
      ],
      "unknown_nutrients_tags": [
        {}
      ],
      "vitamins_tags": [
        {}
      ],
      "nutriscore": {
        "2021": {
          "category_available": 1,
          "grade": "d",
          "nutrients_available": 1,
          "nutriscore_applicable": 1,
          "nutriscore_computed": 1,
          "score": 13,
          "data": {
            "is_beverage": 0,
            "is_cheese": 0,
            "is_water": 0,
            "is_fat": 0,
            "energy": 1996,
            "energy_points": 5,
            "energy_value": 1996,
            "fiber": 3.8,
            "fiber_points": 4,
            "fiber_value": 3.8,
            "fruits_vegetables_nuts_colza_walnut_olive_oils": 0,
            "fruits_vegetables_nuts_colza_walnut_olive_oils_points": 0,
            "fruits_vegetables_nuts_colza_walnut_olive_oils_value": 0,
            "proteins": 6.6,
            "proteins_points": 4,
            "proteins_value": 6.6,
            "saturated_fat": 6.2,
            "saturated_fat_points": 6,
            "saturated_fat_value": 6.2,
            "sodium": 210,
            "sodium_points": 2,
            "sodium_value": 210,
            "sugars": 21.5,
            "sugars_points": 4,
            "sugars_value": 21.5,
            "negative_points": 17,
            "positive_points": 4,
            "grade": "d",
            "score": 13
          }
        },
        "2023": {
          "category_available": 1,
          "grade": "d",
          "nutrients_available": 1,
          "nutriscore_applicable": 1,
          "nutriscore_computed": 1,
          "score": 13,
          "data": {
            "is_beverage": 0,
            "is_cheese": 0,
            "is_water": 0,
            "is_fat_oil_nuts_seeds": 0,
            "is_red_meat_product": 0,
            "components": {
              "negative": [
                {
                  "id": "energy",
                  "points": 5,
                  "points_max": 10,
                  "unit": "kJ",
                  "value": 21.5
                }
              ],
              "positive": [
                {
                  "id": "energy",
                  "points": 5,
                  "points_max": 10,
                  "unit": "kJ",
                  "value": 21.5
                }
              ]
            },
            "count_proteins": 0,
            "count_proteins_reason": "negative_points_greater_than_or_equal_to_11",
            "negative_points": 19,
            "positive_points": 1,
            "negative_points_max": 55,
            "positive_points_max": 10,
            "positive_nutrients": [
              "string"
            ]
          }
        }
      },
      "nutriscore_2021_tags": [
        "a"
      ],
      "nutriscore_2023_tags": [
        "a"
      ],
      "nutriscore_data": {
        "saturated_fat_ratio": 0,
        "saturated_fat_ratio_points": 0,
        "saturated_fat_ratio_value": 0,
        "is_beverage": 0,
        "is_cheese": 0,
        "is_water": 0,
        "is_fat": 0,
        "energy": 1996,
        "energy_points": 5,
        "energy_value": 1996,
        "fiber": 3.8,
        "fiber_points": 4,
        "fiber_value": 3.8,
        "fruits_vegetables_nuts_colza_walnut_olive_oils": 0,
        "fruits_vegetables_nuts_colza_walnut_olive_oils_points": 0,
        "fruits_vegetables_nuts_colza_walnut_olive_oils_value": 0,
        "proteins": 6.6,
        "proteins_points": 4,
        "proteins_value": 6.6,
        "saturated_fat": 6.2,
        "saturated_fat_points": 6,
        "saturated_fat_value": 6.2,
        "sodium": 210,
        "sodium_points": 2,
        "sodium_value": 210,
        "sugars": 21.5,
        "sugars_points": 4,
        "sugars_value": 21.5,
        "negative_points": 17,
        "positive_points": 4,
        "grade": "d",
        "score": 13
      },
      "nutriscore_grade": "d",
      "nutriscore_score": 13,
      "nutriscore_score_opposite": -13,
      "nutriscore_tags": [
        "a"
      ],
      "nutriscore_version": "string",
      "data_quality_bugs_tags": [
        "string"
      ],
      "data_quality_errors_tags": [
        "string"
      ],
      "data_quality_info_tags": [
        "string"
      ],
      "data_quality_tags": [
        "string"
      ],
      "data_quality_warnings_tags": [
        "string"
      ],
      "data_sources": "string",
      "data_sources_tags": [
        "string"
      ],
      "last_check_dates_tags": [
        "string"
      ],
      "last_checked_t": 0,
      "last_checker": "string",
      "states": "string",
      "states_hierarchy": [
        "string"
      ],
      "states_tags": [
        "string"
      ],
      "misc_tags": [
        "string"
      ],
      "additives_original_tags": [
        "string"
      ],
      "additives_prev_original_tags": [
        "string"
      ],
      "added_countries_tags": [
        {}
      ],
      "allergens_from_ingredients": "string",
      "allergens_from_user": "string",
      "amino_acids_prev_tags": [
        {}
      ],
      "amino_acids_tags": [
        {}
      ],
      "carbon_footprint_percent_of_known_ingredients": 0,
      "categories_properties": {
        "agribalyse_food_code:en": "string",
        "agribalyse_proxy_food_code:en": "string",
        "ciqual_food_code:en": "string"
      },
      "categories_properties_tags": [
        "string"
      ],
      "category_properties": {
        "property1": "string",
        "property2": "string"
      },
      "ciqual_food_name_tags": [
        "string"
      ],
      "compared_to_category": "string",
      "conservation_conditions": "string",
      "customer_service": "string",
      "expiration_date": "string",
      "link": "string",
      "main_countries_tags": [
        {}
      ],
      "minerals_prev_tags": [
        {}
      ],
      "minerals_tags": [
        {}
      ],
      "owner_fields": {
        "additionalProperties": 0
      },
      "nova_groups_markers": {
        "property1": [
          [
            "string"
          ]
        ],
        "property2": [
          [
            "string"
          ]
        ]
      },
      "nucleotides_tags": [
        {}
      ],
      "origin": "string",
      "purchase_places": "Paris",
      "purchase_places_tags": [
        "string"
      ],
      "stores": "Walmart",
      "stores_tags": [
        "string"
      ],
      "traces_from_ingredients": "string",
      "traces_from_user": "string",
      "created_t": 1457680652,
      "creator": "string",
      "editors_tags": [
        "string"
      ],
      "informers_tags": [
        "string"
      ],
      "interface_version_created": "string",
      "interface_version_modified": "string",
      "languages": {},
      "languages_codes": {},
      "languages_hierarchy": [
        "string"
      ],
      "languages_tags": [
        "string"
      ],
      "last_edit_dates_tags": [
        "string"
      ],
      "last_editor": "string",
      "last_modified_by": "sebleouf",
      "last_modified_t": 0,
      "last_updated_t": 0,
      "owner": "string",
      "owners_tags": "string",
      "photographers_tags": [
        "string"
      ],
      "rev": 0,
      "sources": [
        {
          "fields": [
            "string"
          ],
          "id": "string",
          "images": [
            {}
          ],
          "import_t": 0,
          "manufacturer": 0,
          "name": "string",
          "source_licence": "string",
          "source_licence_url": "string",
          "url": null
        }
      ],
      "sources_fields": {
        "org-gs1": {
          "gln": "string",
          "gpcCategoryCode": "string",
          "gpcCategoryName": "string",
          "isAllergenRelevantDataProvided": "string",
          "lastChangeDateTime": "string",
          "partyName": "string",
          "productionVariantDescription": "string",
          "publicationDateTime": "string"
        }
      },
      "teams": "string",
      "teams_tags": [
        "string"
      ],
      "update_key": "string",
      "knowledge_panels": {
        "property1": {
          "type": "string",
          "expanded": false,
          "expand_for": "string",
          "evaluation": "bad",
          "half_width_on_mobile": true,
          "title_element": {
            "name": "string",
            "title": "string",
            "subtitle": "string",
            "type": "grade",
            "grade": "a+",
            "value": 0,
            "value_string": "string",
            "icon_url": "string",
            "icon_color_from_evaluation": "string",
            "icon_size": "string"
          },
          "elements": [
            {
              "element_type": "text",
              "text_element": {
                "type": "summary",
                "html": "string",
                "language": "string",
                "lc": "string",
                "edit_field_id": "string",
                "edit_field_type": "string",
                "edit_field_value": "string",
                "source_url": "https://en.wikipedia.org/wiki/Sodium acetate",
                "source_text": "Wikipedia",
                "source_lc": "en",
                "source_language": "English"
              },
              "image_element": {
                "url": "string",
                "width": 0,
                "height": 0,
                "alt_text": "string"
              },
              "action_element": {
                "title": "string",
                "actions": [
                  "edit_product"
                ]
              },
              "panel_element": {
                "panel_id": "string"
              },
              "panel_group_element": {
                "title": "string",
                "panel_ids": [
                  "string"
                ],
                "image": {}
              },
              "table_element": {
                "id": "string",
                "table_type": "string",
                "title": "string",
                "columns": [
                  {
                    "text": "string",
                    "type": "string",
                    "text_for_small_screens": "string",
                    "style": "string",
                    "column_group_id": "string",
                    "shown_by_default": false
                  }
                ],
                "rows": [
                  {
                    "id": "string",
                    "style": "string",
                    "values": [
                      {
                        "text": "string",
                        "icon_url": "string",
                        "percent": 0,
                        "evaluation": "string",
                        "level": 0,
                        "style": "string"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "level": "info",
          "size": "small",
          "topics": [
            "health"
          ]
        },
        "property2": {
          "type": "string",
          "expanded": false,
          "expand_for": "string",
          "evaluation": "bad",
          "half_width_on_mobile": true,
          "title_element": {
            "name": "string",
            "title": "string",
            "subtitle": "string",
            "type": "grade",
            "grade": "a+",
            "value": 0,
            "value_string": "string",
            "icon_url": "string",
            "icon_color_from_evaluation": "string",
            "icon_size": "string"
          },
          "elements": [
            {
              "element_type": "text",
              "text_element": {
                "type": "summary",
                "html": "string",
                "language": "string",
                "lc": "string",
                "edit_field_id": "string",
                "edit_field_type": "string",
                "edit_field_value": "string",
                "source_url": "https://en.wikipedia.org/wiki/Sodium acetate",
                "source_text": "Wikipedia",
                "source_lc": "en",
                "source_language": "English"
              },
              "image_element": {
                "url": "string",
                "width": 0,
                "height": 0,
                "alt_text": "string"
              },
              "action_element": {
                "title": "string",
                "actions": [
                  "edit_product"
                ]
              },
              "panel_element": {
                "panel_id": "string"
              },
              "panel_group_element": {
                "title": "string",
                "panel_ids": [
                  "string"
                ],
                "image": {}
              },
              "table_element": {
                "id": "string",
                "table_type": "string",
                "title": "string",
                "columns": [
                  {
                    "text": "string",
                    "type": "string",
                    "text_for_small_screens": "string",
                    "style": "string",
                    "column_group_id": "string",
                    "shown_by_default": false
                  }
                ],
                "rows": [
                  {
                    "id": "string",
                    "style": "string",
                    "values": [
                      {
                        "text": "string",
                        "icon_url": "string",
                        "percent": 0,
                        "evaluation": "string",
                        "level": 0,
                        "style": "string"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "level": "info",
          "size": "small",
          "topics": [
            "health"
          ]
        }
      },
      "attribute_groups": [
        {
          "id": "string",
          "status": "known",
          "title": "Does not contain: Molluscs",
          "match": 0,
          "grade": "unknown",
          "name": "string",
          "icon_url": "string",
          "description": "string",
          "description_short": "string"
        }
      ]
    }
  ],
  "skip": 0
}
