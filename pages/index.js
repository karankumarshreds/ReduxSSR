import { useSelector } from 'react-redux';
// import Events from '../components/Events';
import Router from 'next/router';

const Index = () => {
  const { tick } = useSelector((state) => state);
  return (
    <div>
      <h1>Index page</h1>
      <button onClick={() => Router.push('/events')}>Events</button>
    </div>
  );
};

Index.getInitialProps = async ({ store }) => {
  store.dispatch({ type: 'TICK', payload: 'FROM GET INITIAL PROPS' });
};

export default Index;
