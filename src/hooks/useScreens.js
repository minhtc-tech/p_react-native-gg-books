import HomeContainer from '../containers/Home';
import HistoryContainer from '../containers/History';
import FavoriteContainer from '../containers/Favorite';
import BookDetailsContainer from '../containers/BookDetails';
import GoogleViewScreen from '../screens/GoogleView';

const Screens = {
  Home: HomeContainer,
  History: HistoryContainer,
  Favorite: FavoriteContainer,
  BookDetails: BookDetailsContainer,
  GoogleView: GoogleViewScreen,
};

export default Screens;