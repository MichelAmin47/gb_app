import profile1 from './air-jordan-logo.png'
import SingleComment from "./components/SingleComment";

const UdemyApp = () => {
    return(
        <div className='ui comments'>
            <div className='year'>
                <h1>
                    2016-03
                </h1>
                <h3>
                    <SingleComment
                        date={'2016-03-01'}
                        title={'Giant Bombcast 03/01/2016 (Premium)'}
                        img={'https://i.scdn.co/image/ab6765630000ba8a136434eaeacfa4160934bc90'}
                        description={'Another week, another super-pricey head-mounted doohickey. Also: thoughts on the Xbox Spring Showcase, Dota strife, the end of the PlayStation TV, Mass Effect rides, Mike Haggar&#39;s campaign platform, and nighttime bathroom habits.'}
                        external_url_spotify={'https://open.spotify.com/episode/68FpluBbvoeDwyFf4bKsQ3'}
                    />
                    <SingleComment
                        date={'2016-03-08'}
                        title={'Giant Bombcast 03/08/2016 (Premium)'}
                        img={'https://i.scdn.co/image/ab6765630000ba8af1cde663c10be49930d32a92'}
                        description={'This week&#39;s show is packed to the gills with No Man&#39;s Sky, The Division, Microsoft studio closures, the weird future of the Xbox, the strange saga of the Coleco Chameleon, some Street Fighter emails, the cleanliness of San Francisco sidewalks, and more!'}
                        external_url_spotify={'https://open.spotify.com/episode/5cRuJhvJeW1ZhH97u0nVJX'}
                    />
                    <SingleComment
                        date={'2016-03-15'}
                        title={'Giant Bombcast 03/15/2016 (Premium)'}
                        img={'https://i.scdn.co/image/ab6765630000ba8a5970f1b38af959a4edc70cdf'}
                        description={'Our podcasting compatriots from 8-4 join us for another GDC check-in that includes a Division deep dive, gushing over Stardew Valley, a lot of game industry movin&#39; and shakin&#39;, mobile clashes of various kinds, and more than a few trips down memory lane.'}
                        external_url_spotify={'https://open.spotify.com/episode/0mkznqj1iaQPjXdL6xKowQ'}
                    />
                    <SingleComment
                        date={'2016-03-22'}
                        title={'Giant Bombcast 03/22/2016 (Premium)'}
                        img={'https://i.scdn.co/image/ab6765630000ba8ac6f8de948a3f6781c918566a'}
                        description={'With our glorious and/or horrible VR future nearly upon us, it&#39;s time to take stock of all the headsets and games we tried at GDC, along with a bunch of regular old flat games, the strange future of the console business, the best in chips, a stack of your...'}
                        external_url_spotify={'https://open.spotify.com/episode/57nvhbeUrVOq7kYEscu7zg'}
                    />
                    <SingleComment
                        date={'2016-03-30'}
                        title={'Giant Bombcast 03/30/2016 (Premium)'}
                        img={'https://i.scdn.co/image/ab6765630000ba8ae501550273a017baabdc09df'}
                        description={'In between the launches of two VR headsets, we manage to... only talk about VR a little before delving into remastered adventure games, Street Fighter patches, early Dark Souls releases, some reminiscing about the good old days, and a whole bunch of Ninte..'}
                        external_url_spotify={'https://open.spotify.com/episode/5qL8fXtvDtWh3nTlD8t2G4'}
                    />
                </h3>
            </div>
        </div>
    )
}

export default UdemyApp;