import React, {useState, useEffect} from 'react'

const ApiRequest = () => {

  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const playlistId = 'RDCLAK5uy_lFuA--WIEukXUJ93HkgnVOv0Bs02c_O4g';

    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`)
      .then(response => response.json())
      .then(data => {
        setPlaylistData(data);

        // Bir sonraki sayfa için
        if (data.nextPageToken) {
          fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50&pageToken=${data.nextPageToken}`)
            .then(response => response.json())
            .then(nextData => {
              setPlaylistData(prevData => ({
                ...prevData,
                items: [...prevData.items, ...nextData.items]
              }));
              console.log(data)
            })
            .catch(error => console.error('Error:', error));
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);

    
    
  return (
    <div></div>
  )
}

export default ApiRequest