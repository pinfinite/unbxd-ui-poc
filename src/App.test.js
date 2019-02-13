import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import Home from './home/components/home';
import Login from './login/components/login';
import Register from './register/components/register';
import ProductDetail from './productDetail/components/productDetail';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';

/*****mocking the Browser Router Component */
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>
const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

/******** */

let wrapper;

function mountComponentForPath(path) {
  wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </Provider>
  );
}

describe('Test cases for app component', () => {
  it('should land home component when path is "/home"', () => {
    mountComponentForPath('/home');
    expect(wrapper.find(Home)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should land login component when path is "/login"', () => {
    mountComponentForPath('/login');
    expect(wrapper.find(Login)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should land productDetail component when path is "/productDetail"', () => {
    mountComponentForPath('/productDetail');
    expect(wrapper.find(ProductDetail)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should land register when path is "/register"', () => {
    mountComponentForPath('/register');
    expect(wrapper.find(Register)).toHaveLength(1);
    wrapper.unmount();
  });

  it('should land home component when path is random string', () => {
    mountComponentForPath('random');
    expect(wrapper.find(Home)).toHaveLength(1);
    wrapper.unmount();
  });
})

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

//route testing to be done here
