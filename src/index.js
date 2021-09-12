import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeatureSections from "./components/FeatureSections";
import Quotes from "./components/Quotes";
import Avatar from "./components/Avatar";
import Gambar from "./assets/images/image.jpeg";
const quotes = "Menyerahlah saat sudah waktunya";

const data = [{
  name: "Indira Ananda Putra Utama", nim: "21120118130091", kelompok: "34", email: "tamajaya4@gmail.com", ttl: "Pati, 15 Februari 2001",
},
{name: "Nabil Hanan", nim: "21120118130076", kelompok: "34", email: "milifox@gmail.com", ttl: "-",
}];
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Avatar image = {Gambar} avatarname="Indira Ananda Putra Utama" avatarnim="21120118130091" />
    <FeatureSections data={data} isNameBold catatan="Marilah menggacha ria kawan-kawanku" />
    <Quotes author="~~RATHAKIRY~~" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

