import React from 'react';
import axios from 'axios';
import renderer from 'react-test-renderer';
import zomato from '../../api/zomato';

import resultDetails from "../../hooks/resultDetails";

jest.mock('../../api/zomato');

// const [getResult, result, errorMessage] = renderer.create(<resultDetails />);

const getResult = async (id) => {
    try {
        return await zomato.get(`/restaurant?res_id=${id}`);
        // setResult(response.data);
    }
    catch (e) {
        console.log(e);
        // setErrorMessage('Something went wrong');
    }
}

describe('getResult', () => {
    test('fetches successfully result details from api', async () => {
        const data = {
            "R": {
                "has_menu_status": {
                    "delivery": -1,
                    "takeaway": -1,
                },
                "is_grocery_store": false,
                "res_id": 51822,
            },
            "all_reviews": {
                "reviews": [
                    {
                        "review": [],
                    },
                    {
                        "review": [],
                    },
                    {
                        "review": [],
                    },
                    {
                        "review": [],
                    },
                    {
                        "review": [],
                    },
                ],
            },
            "all_reviews_count": 1129,
            "apikey": "053bed8c64dfcd802466d74b38611f0c",
            "average_cost_for_two": 700,
            "book_again_url": "",
            "book_form_web_view_url": "",
            "cuisines": "South Indian, North Indian, Chinese, Beverages",
            "currency": "Rs.",
            "deeplink": "zomato://restaurant/51822",
            "establishment": [
                "Casual Dining",
            ],
            "events_url": "https://www.zomato.com/bangalore/koshys-st-marks-road/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "featured_image": "https://b.zmtcdn.com/data/res_imagery/51822_RESTAURANT_5f7649f3852a0e3a890e4de6fb89107a.jpg?output-format=webp",
            "has_online_delivery": 0,
            "has_table_booking": 0,
            "highlights": [
                "Debit Card",
                "Dinner",
                "Credit Card",
                "Lunch",
                "Cash",
                "Takeaway Available",
                "Breakfast",
                "Indoor Seating",
                "Air Conditioned",
                "Wheelchair Accessible",
                "Beer",
                "Table booking recommended",
            ],
            "id": "51822",
            "include_bogo_offers": true,
            "is_book_form_web_view": 0,
            "is_delivering_now": 0,
            "is_table_reservation_supported": 0,
            "is_zomato_book_res": 0,
            "location": {
                "address": "39, St. Marks Road, Bangalore",
                "city": "Bangalore",
                "city_id": 4,
                "country_id": 1,
                "latitude": "12.9756490662",
                "locality": "St. Marks Road",
                "locality_verbose": "St. Marks Road, Bangalore",
                "longitude": "77.6016219333",
                "zipcode": "0",
            },
            "menu_url": "https://www.zomato.com/bangalore/koshys-st-marks-road/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
            "mezzo_provider": "OTHER",
            "name": "Koshy's",
            "offers": [],
            "opentable_support": 0,
            "phone_numbers": "080 22915840, 080 22213793",
            "photo_count": 1069,
            "photos_url": "https://www.zomato.com/bangalore/koshys-st-marks-road/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
            "price_range": 2,
            "store_type": "",
            "switch_to_order_menu": 0,
            "thumb": "https://b.zmtcdn.com/data/res_imagery/51822_RESTAURANT_5f7649f3852a0e3a890e4de6fb89107a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "timings": "9 AM to 11:30 PM",
            "url": "https://www.zomato.com/bangalore/koshys-st-marks-road?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
            "user_rating": {
                "aggregate_rating": "3.9",
                "rating_color": "9ACD32",
                "rating_obj": {
                    "bg_color": {
                        "tint": "600",
                        "type": "lime",
                    },
                    "title": {
                        "text": "3.9",
                    },
                },
                "rating_text": "Good",
                "votes": "2486",
            },
        }


        // const zomatoMock = jest.genMockFromModule('../../api/zomato').default;
        // axios.get.mockImplementationOnce(() => Promise.resolve(data));
        // zomatoMock.get.mockImplementationOnce(() => Promise.resolve(data));
        zomato.get.mockImplementationOnce(() => Promise.resolve(data));

        await expect(getResult('51822')).resolves.toEqual(data);

        expect(zomato.get).toHaveBeenCalledWith(
            `/restaurant?res_id=51822`,
        );
    });
});
