import bombCastSpotifyJson from './json/bombcastFromSpotify_COMPLETE.json';

export function searchGiantBombCastByDate(year: string, month: string){
    for (const key in bombCastSpotifyJson.feed.episodes) {
        if(key.toString().includes(`${year}-${month}`)){
            console.log(key);
            // @ts-ignore
            console.log(bombCastSpotifyJson.feed.episodes[key].name);
            // @ts-ignore
            console.log(bombCastSpotifyJson.feed.episodes[key].description);
            // @ts-ignore
            console.log(bombCastSpotifyJson.feed.episodes[key].external_urls.spotify);
            console.log("");
        }
    }
}

function searchGiantBombCastDescription(searchParam: string){
    for (const key in bombCastSpotifyJson.feed.episodes) {
            // @ts-ignore
            if(bombCastSpotifyJson.feed.episodes[key].description.toString().includes(searchParam)){
                console.log(key);
                // @ts-ignore
                console.log(bombCastSpotifyJson.feed.episodes[key].name);
                // @ts-ignore
                console.log(bombCastSpotifyJson.feed.episodes[key].description);
                // @ts-ignore
                console.log(bombCastSpotifyJson.feed.episodes[key].external_urls.spotify);
                console.log("");
            }
    }
}

export function quickSearch(){
    for (const key in bombCastSpotifyJson.feed.episodes) {
        // @ts-ignore
        if(bombCastSpotifyJson.feed.episodes[key].description.toString().includes("New Yawk")){
            // @ts-ignore
            return bombCastSpotifyJson.feed.episodes[key].description
        }
    }
}

// searchGiantBombCastByDate("2017","03");

// searchGiantBombCastByDate("2014","07");

// searchGiantBombCastByDate("2016","01");

// searchGiantBombCastDescription("New Yawk");

// searchGiantBombCastDescription("Gears of War 4");

// searchGiantBombCastDescription("Gears 4");
