import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        value: 0,
        hoverEffect: false,
        apiKey: '0b6d2ddf9c5e096294fa3534fb357915',
        bgSrc: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        apiData: [],
        trendingData: 'day',
        recentTrailer: 'day',
        comingSoon: 'movie',
        popular: 'movie',
        popOutWindow: 'notActive',
        popOutWindowId: '',
    }

    handlePopOutWindow = (e) => {
        this.setState({
            popOutWindow: 'active',
            popOutWindowId: e.target.id,
        });
        console.log(this.state.popOutWindowId);
    }

    handleClosePopOutWindow = () => {
        this.setState({ popOutWindow: 'notActive' });
    }

    handleButtonSelector = (e) => {
        this.setState({ [e.target.name]: e.target.id });
    }

    handleMouseEnter = (e) => {
        this.setState({
            hoverEffect: true,
            bgSrc: e.target.currentSrc,
        });
    }

    handleMouseLeave = (e) => {
        this.setState({
            hoverEffect: false,
            bgSrc: e.target.currentSrc,
        });
    }


    render() {

        const { value, bgSrc, apiData, apiKey } = this.state;

        const
            {
                state,
                handleMouseEnter, handleMouseLeave, handleButtonSelector, handleClosePopOutWindow,
                handlePopOutWindow,
            } = this;

        return (
            <MyContext.Provider
                value={{
                    state, value, bgSrc, apiData, apiKey,
                    handleMouseEnter, handleMouseLeave, handleButtonSelector, handleClosePopOutWindow,
                    handlePopOutWindow,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };