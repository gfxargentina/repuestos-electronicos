import Layout from '../components/Layout';
import { useStore } from '../store';
import '../styles/globals.css';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
