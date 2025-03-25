import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Box, Paper, Typography, Tabs, Tab } from '@mui/material';
import AppAppBar from './components/appAppBar';

// // 会館の動画をインポート
// import ceremoniaKawasaki from './movie/ceremonia_kawasaki0225.mp4';
// import ceremoniaMiyamaedaira from './movie/ceremonia_miyamaedaira0225.mp4';
// import ceremoniaMiyauchi from './movie/ceremonia_miyauchi0225.mp4';
// import ceremoniaMizonokuchi from './movie/ceremonia_mizonokuchi20250314.mp4';
// import mokuren from './movie/ceremonia_mokuren0225.mp4';
// import saiwai from './movie/ceremonia_saiwai0225.mp4';
// import aquileShiohama from './movie/ceremonia_shiohama0225.mp4';
// import tama from './movie/ceremonia_tama0225.mp4';
// import watarida from './movie/ceremonia_watarida20250314.mp4';

// // その他の動画をインポート
// import rekishi from './movie/歴史.mp4';
// import ryouri from './movie/料理.mp4';
// import ojuzu from './movie/お数珠.mp4';
// import oshoukou from './movie/お焼香.mp4';
// import tamagushi from './movie/玉串奉奠.mp4';
// import yukankan from './movie/湯灌.mp4';

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const hallVideos = [
    { name: 'かわさき', src: process.env.PUBLIC_URL + '/movie/ceremonia_kawasaki0225.mp4' },
    { name: 'みやまえだいら', src: process.env.PUBLIC_URL + '/movie/ceremonia_miyamaedaira0225.mp4' },
    { name: 'みやうち', src: process.env.PUBLIC_URL + '/movie/ceremonia_miyauchi0225.mp4' },
    { name: 'みぞのくち', src: process.env.PUBLIC_URL + '/movie/ceremonia_mizonokuchi20250314.mp4' },
    { name: 'もくれん', src: process.env.PUBLIC_URL + '/movie/ceremonia_mokuren0225.mp4' },
    { name: 'さいわい', src: process.env.PUBLIC_URL + '/movie/ceremonia_saiwai0225.mp4' },
    { name: 'アクイール塩浜', src: process.env.PUBLIC_URL + '/movie/ceremonia_shiohama0225.mp4' },
    { name: 'たま', src: process.env.PUBLIC_URL + '/movie/ceremonia_tama0225.mp4' },
    { name: 'わたりだ', src: process.env.PUBLIC_URL + '/movie/ceremonia_watarida20250314.mp4' },
  ];

  const otherVideos = [
    { name: '歴史', src: process.env.PUBLIC_URL + '/movie/歴史.mp4' },
    { name: '料理', src: process.env.PUBLIC_URL + '/movie/料理.mp4' },
    { name: 'お数珠', src: process.env.PUBLIC_URL + '/movie/お数珠.mp4' },
    { name: 'お焼香', src: process.env.PUBLIC_URL + '/movie/お焼香.mp4' },
    { name: '玉串奉奠', src: process.env.PUBLIC_URL + '/movie/玉串奉奠.mp4' },
    { name: '湯灌', src: 'https://drive.google.com/uc?id=1_WjcxXdI8WZ6TwV1U8C6CINilolBRu5t&export=download' },
  ];


  return (
    <Router basename={process.env.NODE_ENV === "production" ? "/ceremonia" : "/"}>
      <div className="App">
        <AppAppBar />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            backgroundColor: '#f5f5f5',
            height: '100vh',
            overflowY: 'auto',
            padding: 2,
          }}
        >
          {/* 会館の動画 */}
          <Paper elevation={3} sx={{ width: '80%', padding: 2 }}>
            <Typography variant="h5" gutterBottom>
              会館
            </Typography>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="会館の動画タブ"
            >
              {hallVideos.map((video, index) => (
                <Tab key={index} label={video.name} />
              ))}
            </Tabs>
            <video key={hallVideos[selectedTab].src} width="100%" controls preload="auto">
              <source src={hallVideos[selectedTab].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Paper>

          {/* その他の動画 */}
          {otherVideos.map((video, index) => (
            <Paper key={index} elevation={3} sx={{ width: '80%', padding: 2 }}>
              <Typography variant="h5" gutterBottom>
                {video.name}
              </Typography>
              <video width="100%" controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Paper>
          ))}
        </Box>
      </div>
    </Router>
  );
}

export default App;