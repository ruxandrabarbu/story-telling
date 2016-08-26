import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/homePage';
import About from './components/about/aboutPage';

class App extends React.Component {
   render() {
      let Child;

      console.log(this.props.route);
      switch (this.props.route) {
        case '/about':
          Child = About;
          break;
        default:
          Child = Home;
      }

      return (
         <div>
            <Child/>
         </div>
      );
   }
}

function render() {
  let route = window.location.hash.substr(1);
  ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashChange', render);
render();
