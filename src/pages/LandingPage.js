import { Component } from 'react';

import Header from 'parts/Header'
import Hero from 'parts/Hero'

import Data from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={Data.hero} />
            </>
        )
    }
}