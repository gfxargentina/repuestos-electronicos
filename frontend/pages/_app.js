import Layout from '../components/Layout';
import { useStore } from '../store';
import '../styles/globals.css';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const store = useStore();

  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
