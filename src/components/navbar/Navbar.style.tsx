import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #333;
    color: #999999;
`;

export const Logo = styled.img.attrs({
    src: 'https://capp.nicepage.com/d91d343f9405f1b919b76587b0b0143bc59be618/images/default-logo.png',
    alt: 'logo'
})`
    height: 40px;
`;
