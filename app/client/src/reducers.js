import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import homePageContainer from './containers/HomePageContainer/reducer';
import categoriesContainer from './containers/CategoriesContainer/reducer';
import postsByCategoryContainer
  from './containers/PostsByCategoryContainer/reducer';
import singlePostContainer from './containers/SinglePostContainer/reducer';
import newPostContainer from './containers/NewPostContainer/reducer';

const rootReducer = combineReducers({
  // combine all your reducers here
  routing: routerReducer,
  homePageContainer,
  categoriesContainer,
  postsByCategoryContainer,
  singlePostContainer,
  newPostContainer,
  form: formReducer,
});

export default rootReducer;
