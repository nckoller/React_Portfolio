import React from 'react';
import './App.css';
import { projects } from './projects';
import { Route, Switch } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Portfolio } from './components/Portfolio';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectArr: projects,
      filteredProjectArr: [...projects],
      filterBy: '',
    };
    console.log('projects', props);
  }

  handleSortSelection = (event) => {
    const filter = event.target.value;
    this.setState({ filterBy: filter }, () => {
      this.filterBy();
    });
  };

  filterBy = () => {
    const filteredArr = this.state.projectArr.filter((project) => {
      const projectType = project.type;
      return projectType.includes(this.state.filterBy);
    });

    this.setState({ filteredProjectArr: filteredArr });
  };

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
        <Route
          path="/portfolio"
          render={(props) => (
            <Portfolio
              {...props}
              projectArr={this.state.filteredProjectArr}
              handleSortSelection={this.handleSortSelection}
            />
          )}
        />
        <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
