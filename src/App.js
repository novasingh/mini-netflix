import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
import { showSnack, resetSnack } from './redux/actions/alertActions';
import MasterLayout from './layouts/MasterLayout';
import Loader from './components/Loader';
import './assets/scss/style.scss';
import Home from './containers/Home';

function App({ showSnack, hideSnack }) {
  const { closeSnackbar } = useSnackbar();
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const [offlineSnackId, setOfflineSnackId] = useState(new Date().valueOf());

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('offline', updateNetwork);
    window.addEventListener('online', updateNetwork);
    return () => {
      window.removeEventListener('offline', updateNetwork);
      window.removeEventListener('online', updateNetwork);
    };
  });


  const checkNetwork = useCallback(() => {
    if (!isOnline) {
      const key = new Date().valueOf();
      setOfflineSnackId(key);
      showSnack({
        message: 'No connection!',
        options: {
          persist: true,
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
          key: key,
        },
      });
    }
    if (isOnline) {
      closeSnackbar(offlineSnackId);
      hideSnack();
    }
  }, [isOnline, setOfflineSnackId, offlineSnackId, showSnack, hideSnack, closeSnackbar]);

  useEffect(() => {
    checkNetwork();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  return (
    <Router>
      <MasterLayout>
        <Suspense fallback={<Loader />}>
          <Route path="/" children={<Home />} />
        </Suspense>
      </MasterLayout>
    </Router>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  hideSnack: () => dispatch(resetSnack()),
  showSnack: (payload) => dispatch(showSnack(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
