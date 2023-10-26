import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        pageID: '',
        pageType: 'movie', // 'movie', 'tv', 'person',
        activePage: 'movie', // 'movie', 'tv', 'person', 'search'
        hoverEffect: false,
        apiKey: '0b6d2ddf9c5e096294fa3534fb357915',
        // displayComponent: 'main',
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
        youtubePopOut: false, // true = display: none; || false = display: block;
        dynamicPageDataID: '',
        dynamicPageData: '', //'watch-now'
        dynamicPageDataType: 'movie', // 'tv'
        viewAllDataName: '', // 'trending', 'popular', 'similar, '',
        serverButtonID: 'server01', // server01, server02, server03, server04
        hamburgerIcon: false, // true = display: none; || false = display: block;
        searchButton: false, // true = display: none; || false = display: block;
        searchResult: true, // true = display: flex; || false = display: none;
        userInput: '',
        dropDownMenu: 'movie', // 'movie', 'tv', 'people',
        tvSeason: '', // 0, 1, 2, 3, ...
        tvEpisode: '', // 0, 1, 2, 3, ...
        seriesPlayer: false,
        filterMenu: 'movie', // 'movie', 'tv', 'person', 'collection', 'company',
        filteredMovies: 0,
        filteredtv: 0,
        filteredPerson: 0,
        filteredCollection: 0,
        customButton: 'Custom Button Action',
        customCardHorizontal: 'Custom Card Horizontal',
    }

    showItemFilterMenu = (e) => {
        this.setState({ filterMenu: e });
    }

    headingNavigationButton = (a, b, c, d) => {
        this.setState({
            filteredMovies: a,
            filteredtv: b,
            filteredPerson: c,
            filteredCollection: d,
        });
        // console.log(this.state.filteredMovies);
        // console.log(this.state.filteredtv);
        // console.log(this.state.filteredPerson);
        // console.log(this.state.filteredCollection);
    }

    handleOnBlurEvent = () => { // close the quick search results
        if (this.state.searchResult === true) {
            this.setState({ searchResult: false });
        }
    }

    handleSearchMenu = (e) => {
        this.setState({ filterMenu: e.target.name });
    }

    handleNavbarMenu = (e) => {
        this.setState({ activePage: e.target.name });
    }

    setDynamicPageData = () => {
        this.setState({ dynamicPageData: 'watchNow' });
    }

    handleShowEpisode = (seasonIndex, episodeIndex) => {
        this.setState({
            tvSeason: seasonIndex,
            tvEpisode: episodeIndex,
            seriesPlayer: true,
        });
        console.log(seasonIndex, episodeIndex);
    }

    handleDropDownMenu = (e) => {
        this.setState({ dropDownMenu: e.target.value });
    }

    handleUserInput = (e) => {
        this.setState({
            userInput: e.target.value,
            searchResult: true
        });
    }

    handleSearchButton = () => {
        this.setState({ searchButton: !this.state.searchButton });
        // console.log(this.state.searchButton);
    }

    handleHamburgerIcon = () => {
        const hamburgerIcon = this.state.hamburgerIcon;
        this.setState({ hamburgerIcon: !hamburgerIcon, });
    }

    handleNavbarMenuButtons = (e) => {
        this.handleHamburgerIcon();
        this.setState({ activePage: e.target.name });
    }

    handleServerButton = (e) => {
        this.setState({ serverButtonID: e.target.id });
    }

    handleFakeLinks = (e) => {
        e.preventDefault();
        alert('Kalma lang, hindi pa tapos yung Website!');
    }

    handleTVDynamicButton = (e) => {
        // console.log(e);
    }

    handleDynamicContentButton = (e) => {
        if (e.target.name === 'trailer') {
            this.setState({ youtubePopOut: true });
        }
        this.setState({
            dynamicPageData: e.target.name,
            youtubeComponentID: e.target.id,
        });
        // console.log(this.state.youtubeComponentID)
    }

    handlePopOutTrailerButton = (e) => {
        // console.log(
        //     'onCLick',
        //     e.target.name,
        //     this.state.pageType
        // );
        this.setState({
            dynamicPageDataID: e.target.id,
            dynamicPageData: 'trailer',
            popOutWindow: 'notActive',
            searchResult: false,
            pageID: e.target.id,
            pageType: e.target.name,
        });
    }

    handlePopOutWatchNowButton = (e) => {
        // console.log('Watch Now Button', e.target.name);
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
        // console.log(this.state.searchResult, 'close button');
        this.setState({
            popOutWindow: 'notActive',
            youtubePopOut: false,
            searchResult: false,
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

        const { pageID, bgSrc, apiData, apiKey } = this.state;

        const
            {
                state,
                handleMouseEnter, handleMouseLeave, handleButtonSelector, handleClosePopOutWindow,
                handlePopOutWindow, handleDisplayComponent, handleYoutubeComponent,
                handlePopOutTrailerButton, handlePopOutWatchNowButton, handleDynamicContentButton,
                handleFakeLinks, handleServerButton, handleHamburgerIcon, handleSearchButton,
                handleUserInput, handleDropDownMenu, handleShowEpisode, handleNavbarMenu,
                handleSearchMenu, handleOnBlurEvent, setDynamicPageData, headingNavigationButton,
                showItemFilterMenu, handleNavbarMenuButtons,
            } = this;

        return (
            <MyContext.Provider
                value={{
                    state, pageID, bgSrc, apiData, apiKey,
                    handleMouseEnter, handleMouseLeave, handleButtonSelector, handleClosePopOutWindow,
                    handlePopOutWindow, handleDisplayComponent, handleYoutubeComponent,
                    handlePopOutTrailerButton, handlePopOutWatchNowButton, handleDynamicContentButton,
                    handleFakeLinks, handleServerButton, handleHamburgerIcon, handleSearchButton,
                    handleUserInput, handleDropDownMenu, handleShowEpisode, handleNavbarMenu,
                    handleSearchMenu, handleOnBlurEvent, setDynamicPageData, headingNavigationButton,
                    showItemFilterMenu, handleNavbarMenuButtons,
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };