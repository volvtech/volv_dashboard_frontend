import {
    all, takeLatest, put, call,
} from 'redux-saga/effects';
import { articlesActions, articlesConstant } from './creator';

import { articleAPI } from '../fetcher/constants';
import { fetcherAction } from '../fetcher/creator';


function* getArticlesListDashboardData() {
    yield put(articlesActions.getArticlesListData({isLoading: true}));
    return yield put(
        fetcherAction({
            ...articleAPI.getArticleListAPI(),
            label: articlesConstant.GET_ARTICLES_LIST_DATA
        })
    )
}


export default function* sagas() {
    yield all([
        takeLatest(articlesConstant.GET_ARTICLES_LIST_DATA,
            getArticlesListDashboardData),
    ])
}