import React, { useState, useEffect } from 'react'

const ApiRequest = () => {

  const [playlistData, setPlaylistData] = useState(null);

  // Make a request to api
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const playlistId = 'RDCLAK5uy_lFuA--WIEukXUJ93HkgnVOv0Bs02c_O4g';

    const fetchData = async () => {
      try {
        // Playlist items (songs, song ids etc.)
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=200`);
        const data = await response.json();

        console.log('Playlist Items:', data);

        // Playlist info (playlist title, id etc.)
        const playlistInfoResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${apiKey}`);
        const playlistInfoData = await playlistInfoResponse.json();

        console.log('Playlist Info:', playlistInfoData);

        const formattedData = data.items.map(item => {
          return {
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            publishedAt: item.snippet.publishedAt,
            thumbnails: item.snippet.thumbnails
          };
        });

        const playlistInfo = playlistInfoData.items[0].snippet; // Oynatma listesi bilgileri

        setPlaylistData({ playlistInfo, playlistItems: formattedData });
        
        // First songs data
        console.log("Formatted Data:", formattedData?.[0])
      } 
      catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <></>
  )
}

export default ApiRequest