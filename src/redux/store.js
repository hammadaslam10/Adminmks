import { configureStore } from '@reduxjs/toolkit';
import getAdsSlice from './getReducer/getAdsSlice';
import getHorseSlice from './getReducer/getHorseSlice';
import getNewsSlice from './getReducer/getNewsSlice';
import getSponsorSlice from './getReducer/getSponsorSlice';
import getTrainerSlice from './getReducer/getTrainerSlice';
import PostAds from './postReducer/PostAds';
import PostNewsSlice from './postReducer/PostNewsSlice';
import PostSponsor from './postReducer/PostSponsor';
import PostTrainer from './postReducer/PostTrainer';

const store = configureStore({
    reducer: {
        news: getNewsSlice,
        ads: getAdsSlice,
        sponsor: getSponsorSlice,
        PostNews: PostNewsSlice,
        PostSponsor: PostSponsor,
        PostAds: PostAds,
        horse: getHorseSlice,
        trainer: getTrainerSlice,
        postTrainer: PostTrainer
    },
});

export default store;
