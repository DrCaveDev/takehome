import Home from 'components/home/home';
import PropertyListings from 'components/property-listings/property-listings';
import StickyTitle from 'components/sticky-title/sticky-title';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Main file - Routing happens here
// If we wanted to add pages we could add them here
// Additionally we could generate the pages/links based off another source if desired
// I did not place any links here in the final version but if desired I would create a 
// layout component and have the links present there
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/property-listings">
          <StickyTitle title="Property Listings">
            <PropertyListings />
          </StickyTitle>
        </Route>
        <Route path="/">
          <StickyTitle title="Home">
            <Home />
          </StickyTitle>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
