import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js'
// import { robots } from './robots.js'
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// const state = {
//     robots: robots,
//     searchfield: '', 
// }

class App extends React.Component {
    constructor() {
        super()
        // here we can declare the state
        // in order to use (this), we need to call super, which calls the constructor of component 
        this.state = {
            // this state describes our app, these are the things that can change 
            // state is something that can change and affect our app and they usually live in the parent component, 
            // the component that is parent that just passes state to different components. 
            // robots: robots,
            robots: [],
            searchfield: '',
        }
        // console.log('constructor')
    }

componentDidMount() {
    //this is called automatically
    // as this is a part of react we are not using arrows => here 
    // console.log('check')         // check in Console - ctrl + shift + I
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())        // converting the response into json 
        .then(users => this.setState({ robots: users}))
    // this.setState({ robots: robots })
    // console.log('componentDidUpdate')
}


// onSearchChange(event) {
onSearchChange = (event) => {
    // to update state use setState method that comes with react  
    this.setState({ searchfield: event.target.value })  // changing the state, so that search field always get updated
    // everytime the input changes, we get an event and within this event 
    // console.log(event.target.value);    // event.target.value - this will give the value of what we have search - check it in Console
    
    // I have the value of search input, I can directly communicate that search in put to the robots list
    // const filteredRobots = this.state.robots.filter(robots => {
        // return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
        // if the name of the robot in lower case, includes (it does the comparison), if anything 
        // in the string includes lowercase, then only return robots that is true to this  
    // })
    // console.log(filteredRobots);
}
// Because now App owns state, that includes robots, its allowed to change it 
    render () {
        // we can use const to remove this.state as we have to use it again and again
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())  
        })
        // console.log('render')
        // if there are tons of users and the fetch() takes some time to respond then it will show loading till then , else it will display the response
        // if (robots.length === 0) {
        if (!robots.length) {    
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    {/* created a function and I want anytime this input in searchbox changes, it will trigger
                    onSearchChange() */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* <CardList robots={robots}/> */}
                    {/* our state robots is now passed down as props, so cardList accepts robots as props */}
                    {/* <CardList robots={this.state.robots}/> */}
                    <Scroll>
                        <ErrorBoundry>
                            {/* in this errorboundary, if anything in the cardlist fails, its going to catch it and display our error message */}
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

// const App = () => {
//     return (
//         <div className='tc'>
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>
//         </div>
//     );
// }

export default App;