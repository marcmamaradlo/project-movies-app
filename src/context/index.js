import React, { Component } from 'react';
// import axios from 'axios';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        value: 0,
        hoverEffect: false,
        apiKey: '0b6d2ddf9c5e096294fa3534fb357915',
        navbarSearchFocus: false,
        displayComponent: 'main',
        bgSrc: 'https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        apiData: [],
        trendingData: 'day',
        recentTrailer: 'day',
        // comingSoon: 'movie',
        // popular: 'movie',
        popOutWindow: 'notActive',
        popOutChannel: 'movie',
        popOutWindowId: '',
        carouselData: 'movie',
        videoID: '', // movie ID in dynamic-page[Dynamic-Banner] '614479'
        youtubeComponentID: '',
        youtubePopOut: false,
        dynamicPageDataID: '',
        dynamicPageData: '', //'watch-now'
        dynamicPageDataType: 'movie', // 'tv'
        viewAllDataName: '', // 'trending', 'popular', 'similar, '',
        serverButtonID: 'server01', // server01, server02, server03, server04
    }

    handleServerButton = (e) => {
        this.setState({ serverButtonID: e.target.id });
    }

    handleFakeLinks = (e) => {
        e.preventDefault();
        alert('Kalma lang, hindi pa tapos yung Website!');
    }

    handleNavbarSearchBlur = () => {
        this.setState({ navbarSearchFocus: false });
    }

    handleNavbarSearchFocus = () => {
        this.setState({ navbarSearchFocus: true });
    }

    handleDynamicContentButton = (e) => {
        if (e.target.name === 'trailer') {
            this.setState({ youtubePopOut: true });
        }
        this.setState({
            dynamicPageData: e.target.name,
            youtubeComponentID: e.target.id,
        });
        console.log(this.state.youtubeComponentID)
    }

    handlePopOutTrailerButton = (e) => {
        // console.log('TMDB Movie ID', e.target.name);
        this.setState({
            dynamicPageDataID: e.target.id,
            dynamicPageData: 'trailer',
            popOutWindow: 'notActive',
            linkName: e.target.name,
        });
    }

    handlePopOutWatchNowButton = (e) => {
        console.log('Watch Now Button', e.target.name);
        this.setState({
            dynamicPageDataID: e.target.name,
            dynamicPageData: 'watch-now',
            popOutWindow: 'notActive',
        });
    }

    handleYoutubeComponent = (e) => {
        this.setState({
            youtubeComponentID: e.target.id,
            youtubePopOut: true
        });
    }

    handleDisplayComponent = (e) => {
        this.setState({ displayComponent: e.target.id })
    }

    handlePopOutWindow = (e) => {
        this.setState({
            popOutWindow: 'active',
            popOutWindowId: e.target.id,
            popOutChannel: e.target.name,
        });
    }

    handleClosePopOutWindow = () => {
        this.setState({
            popOutWindow: 'notActive',
            youtubePopOut: false
        });
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
                handlePopOutWindow, handleDisplayComponent, handleYoutubeComponent,
                handlePopOutTrailerButton, handlePopOutWatchNowButton, handleDynamicContentButton,
                handleNavbarSearchFocus, handleNavbarSearchBlur, handleFakeLinks, handleServerButton,
            } = this;

        return (
            <MyContext.Provider
                value={{
                    state, value, bgSrc, apiData, apiKey,
                    handleMouseEnter, handleMouseLeave, handleButtonSelector, handleClosePopOutWindow,
                    handlePopOutWindow, handleDisplayComponent, handleYoutubeComponent,
                    handlePopOutTrailerButton, handlePopOutWatchNowButton, handleDynamicContentButton,
                    handleNavbarSearchFocus, handleNavbarSearchBlur, handleFakeLinks, handleServerButton,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };