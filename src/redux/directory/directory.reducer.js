import { DirectoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
    sections: [
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/0nD60SS/mens-min.jpg",
            size: "large",
            id: 5,
            linkUrl: "shop/mens",
        },
        {
            title: "womens",
            imageUrl: "https://i.ibb.co/2Wmjn6n/womens-min.jpg",
            size: "large",
            id: 4,
            linkUrl: "shop/womens",
        },
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/0n2xwzB/hats-min.jpg",
            id: 1,
            linkUrl: "shop/hats",
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "shop/jackets",
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "shop/sneakers",
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DirectoryActionTypes.GET_DIRECTORY:
            return {
                ...state,
                sections: action.payload,
            };
        default:
            return state;
    }
};

export default directoryReducer;
