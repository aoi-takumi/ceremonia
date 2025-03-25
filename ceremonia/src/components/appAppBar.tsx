import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import logo from '../image/logo.png'; // src/image に戻した場合

const Logo = styled('img')({
    width: 40, // 正方形のサイズ
    height: 40,
    marginRight: 16, // テキストとの間隔
});

const AppAppBar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {/* 左側のアイコン画像 */}
                <IconButton edge="start" color="inherit" aria-label="logo" sx={{ padding: 0 }}>
                    <Logo src={logo} alt="Logo" />
                </IconButton>

                {/* ヘッダーのタイトル */}
                <Typography variant="h6" component="div" sx={{ marginLeft: 1 }}>
                    セレモニア平安会館のご紹介
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default AppAppBar;