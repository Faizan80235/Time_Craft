import { createSlice } from "@reduxjs/toolkit";
import download31 from '../../Assest/Extra_utils/download31.jpg';
import download32 from '../../Assest/Extra_utils/download32.jpg';
import download33 from '../../Assest/Extra_utils/download33.jpg';
import download34 from '../../Assest/Extra_utils/download34.jpg';
import download35 from '../../Assest/Extra_utils/download35.jpg';
import download36 from '../../Assest/Extra_utils/download36.jpg';
import download37 from '../../Assest/Extra_utils/download37.jpg';
import download38 from '../../Assest/Extra_utils/download38.jpg';
import download39 from '../../Assest/Extra_utils/download39.jpg';
import download40 from '../../Assest/Extra_utils/download40.jpg';
import download41 from '../../Assest/Extra_utils/download41.jpg';
import download42 from '../../Assest/Extra_utils/download42.jpg';
import download43 from '../../Assest/Extra_utils/download43.jpg';
import download44 from '../../Assest/Extra_utils/download44.jpg';
import download45 from '../../Assest/Extra_utils/download45.jpg';
import download46 from '../../Assest/Extra_utils/download46.jpg';
import download47 from '../../Assest/Extra_utils/download47.jpg';
import download48 from '../../Assest/Extra_utils/download48.jpg';
import download49 from '../../Assest/Extra_utils/download49.jpg';
import download50 from '../../Assest/Extra_utils/download50.jpg';
import download51 from '../../Assest/Extra_utils/download51.jpg';
import download52 from '../../Assest/Extra_utils/download52.jpg';
import download53 from '../../Assest/Extra_utils/download53.jpg';
import download54 from '../../Assest/Extra_utils/download54.jpg';
import download55 from '../../Assest/Extra_utils/download55.jpg';
import download56 from '../../Assest/Extra_utils/download56.jpg';
import download57 from '../../Assest/Extra_utils/download57.jpg';
import download58 from '../../Assest/Extra_utils/download58.jpg';
import download59 from '../../Assest/Extra_utils/download59.jpg';
import download60 from '../../Assest/Extra_utils/download60.jpg';
import download61 from '../../Assest/Extra_utils/download61.jpg';
import download62 from '../../Assest/Extra_utils/download62.jpg';
import download63 from '../../Assest/Extra_utils/download63.jpg';
import download64 from '../../Assest/Extra_utils/download64.jpg';
import download65 from '../../Assest/Extra_utils/download65.jpg';
import download66 from '../../Assest/Extra_utils/download66.jpg';
import download67 from '../../Assest/Extra_utils/download67.jpg';
import download68 from '../../Assest/Extra_utils/download68.jpg';
import download69 from '../../Assest/Extra_utils/download69.jpg';
import download70 from '../../Assest/Extra_utils/download70.jpg';
import download71 from '../../Assest/Extra_utils/download71.jpg';
import download72 from '../../Assest/Extra_utils/download72.jpg';
import download73 from '../../Assest/Extra_utils/download73.jpg';
import download74 from '../../Assest/Extra_utils/download74.jpg';
import download75 from '../../Assest/Extra_utils/download75.jpg';
import download76 from '../../Assest/Extra_utils/download76.jpg';
import download77 from '../../Assest/Extra_utils/download77.jpg';
import download78 from '../../Assest/Extra_utils/download78.jpg';
import download79 from '../../Assest/Extra_utils/download79.jpg';
import download80 from '../../Assest/Extra_utils/download80.jpg';
import download81 from '../../Assest/Extra_utils/download81.jpg';
import download82 from '../../Assest/Extra_utils/download82.jpg';
import download83 from '../../Assest/Extra_utils/download83.jpg';
import download84 from '../../Assest/Extra_utils/download84.jpg';
import download85 from '../../Assest/Extra_utils/download85.jpg';
import download86 from '../../Assest/Extra_utils/download86.jpg';
import download87 from '../../Assest/Extra_utils/download87.jpg';
import download88 from '../../Assest/Extra_utils/download88.jpg';
import download89 from '../../Assest/Extra_utils/download89.jpg';
import download90 from '../../Assest/Extra_utils/download90.jpg';
import download91 from '../../Assest/Extra_utils/download91.jpg';
import download92 from '../../Assest/Extra_utils/download92.jpg';
import download93 from '../../Assest/Extra_utils/download93.jpg';
import download94 from '../../Assest/Extra_utils/download94.jpg';
import download95 from '../../Assest/Extra_utils/download95.jpg';
import download96 from '../../Assest/Extra_utils/download96.jpg';
import download97 from '../../Assest/Extra_utils/download97.jpg';
import download98 from '../../Assest/Extra_utils/download98.jpg';
import download99 from '../../Assest/Extra_utils/download99.jpg';
import download100 from '../../Assest/Extra_utils/download100.jpg';
import download101 from '../../Assest/Extra_utils/download101.jpg';
import download102 from '../../Assest/Extra_utils/download102.jpg';
import download103 from '../../Assest/Extra_utils/download103.jpg';
import download104 from '../../Assest/Extra_utils/download104.jpg';
import download105 from '../../Assest/Extra_utils/download105.jpg';
import download106 from '../../Assest/Extra_utils/download106.jpg';
import download107 from '../../Assest/Extra_utils/download107.jpg';
import download108 from '../../Assest/Extra_utils/download108.jpg';
import download109 from '../../Assest/Extra_utils/download109.jpg';
import download110 from '../../Assest/Extra_utils/download110.jpg';
import download111 from '../../Assest/Extra_utils/download111.jpg';
import download112 from '../../Assest/Extra_utils/download112.jpg';
import download113 from '../../Assest/Extra_utils/download113.jpg';
import download114 from '../../Assest/Extra_utils/download114.jpg';
import download115 from '../../Assest/Extra_utils/download115.jpg';
import download116 from '../../Assest/Extra_utils/download116.jpg';
import download117 from '../../Assest/Extra_utils/download117.jpg';
import download118 from '../../Assest/Extra_utils/download118.jpg';
import download119 from '../../Assest/Extra_utils/download119.jpg';
import download120 from '../../Assest/Extra_utils/download120.jpg';

const initialState = [
  { id: 120, name: 'Garmin Fenix 7', price: 700, image: download31 },
  { id: 121, name: 'Suunto 9 Baro', price: 600, image: download32 },
  { id: 122, name: 'Casio G-Shock Mudmaster', price: 350, image: download33 },
  { id: 123, name: 'Citizen Promaster Diver', price: 550, image: download34 },
  { id: 124, name: 'Seiko Turtle', price: 450, image: download35 },
  { id: 125, name: 'Tissot Seastar 1000', price: 800, image: download36 },
  { id: 126, name: 'Fossil Gen 6 Smartwatch', price: 300, image: download37 },
  { id: 127, name: 'Timex Ironman R300', price: 140, image: download38 },
  { id: 128, name: 'Movado Connect 2.0', price: 400, image: download39 },
  { id: 129, name: 'Apple Watch Series 8', price: 450, image: download40 },
  { id: 130, name: 'Samsung Galaxy Watch 5', price: 430, image: download41 },
  { id: 131, name: 'Garmin Venu 2', price: 500, image: download42 },
  { id: 132, name: 'Suunto Core', price: 300, image: download43 },
  { id: 133, name: 'Casio Pro Trek PRW-3500', price: 350, image: download44 },
  { id: 134, name: 'Citizen Navihawk', price: 650, image: download45 },
  { id: 135, name: 'Seiko Prospex PADI', price: 600, image: download46 },
  { id: 136, name: 'Tissot PRC 200 Chronograph', price: 700, image: download47 },
  { id: 137, name: 'Fossil Hybrid HR', price: 250, image: download48 },
  { id: 138, name: 'Timex Marlin Automatic', price: 200, image: download49 },
  { id: 139, name: 'Movado Bold Motion', price: 350, image: download50 },
  { id: 140, name: 'Bulova Classic Automatic', price: 500, image: download51 },
  { id: 141, name: 'Longines Spirit', price: 2000, image: download52 },
  { id: 142, name: 'TAG Heuer Carrera Calibre 16', price: 4000, image: download53 },
  { id: 143, name: 'Maurice Lacroix Masterpiece', price: 2200, image: download54 },
  { id: 144, name: 'Oris Divers Sixty-Five', price: 1700, image: download55 },
  { id: 145, name: 'Rado DiaMaster', price: 1900, image: download56 },
  { id: 146, name: 'Victorinox Fieldforce', price: 650, image: download57 },
  { id: 147, name: 'Hamilton Khaki Navy', price: 800, image: download58 },
  { id: 148, name: 'Zenith Chronomaster Sport', price: 10000, image: download59 },
  { id: 149, name: 'Bell & Ross BR 03-92', price: 3900, image: download60 },
  { id: 150, name: 'Omega Seamaster Heritage', price: 1020, image: download61 },
  { id: 151, name: 'Rolex Datejust Gold', price: 1040, image: download62 },
  { id: 152, name: 'Hublot Classic Fusion', price: 1060, image: download63 },
  { id: 153, name: 'Montblanc TimeWalker', price: 1080, image: download64 },
  { id: 154, name: 'Piaget Polo S', price: 1100, image: download65 },
  { id: 155, name: 'Cartier Santos', price: 1120, image: download66 },
  { id: 156, name: 'Audemars Piguet Royal Oak', price: 1140, image: download67 },
  { id: 157, name: 'IWC Portofino Automatic', price: 1160, image: download68 },
  { id: 158, name: 'Ulysse Nardin Marine', price: 1180, image: download69 },
  { id: 159, name: 'Blancpain Fifty Fathoms', price: 1200, image: download70 },
  { id: 160, name: 'Chopard Mille Miglia', price: 1220, image: download71 },
  { id: 161, name: 'Vacheron Constantin Patrimony', price: 1240, image: download72 },
  { id: 162, name: 'Glashütte Original Senator', price: 1260, image: download73 },
  { id: 163, name: 'Jaeger-LeCoultre Reverso', price: 1280, image: download74 },
  { id: 164, name: 'Breguet Classique', price: 1300, image: download75 },
  { id: 165, name: 'Girard-Perregaux Laureato', price: 1320, image: download76 },
  { id: 166, name: 'Parmigiani Fleurier Tonda', price: 1340, image: download77 },
  { id: 167, name: 'Seiko Presage', price: 1360, image: download78 },
  { id: 168, name: 'Citizen Eco-Drive Satellite', price: 1380, image: download79 },
  { id: 169, name: 'Casio Edifice', price: 1400, image: download80 },
  { id: 170, name: 'Timex Weekender', price: 1420, image: download81 },
  { id: 171, name: 'Fossil Q Explorist HR', price: 1440, image: download82 },
  { id: 172, name: 'Garmin Forerunner 945', price: 1460, image: download83 },
  { id: 173, name: 'Suunto 7', price: 1480, image: download84 },
  { id: 174, name: 'Movado Museum Classic', price: 1500, image: download85 },
  { id: 175, name: 'Bulova Precisionist', price: 1520, image: download86 },
  { id: 176, name: 'Longines HydroConquest', price: 1540, image: download87 },
  { id: 177, name: 'TAG Heuer Aquaracer', price: 1560, image: download88 },
  { id: 178, name: 'Hamilton Jazzmaster', price: 1580, image: download89 },
  { id: 179, name: 'Zenith Elite', price: 1600, image: download90 },
  { id: 180, name: 'Bell & Ross Vintage', price: 1620, image: download91 },
  { id: 181, name: 'Omega Speedmaster', price: 1640, image: download92 },
  { id: 182, name: 'Rolex Submariner', price: 1660, image: download93 },
  { id: 183, name: 'Hublot Big Bang', price: 1680, image: download94 },
  { id: 184, name: 'Montblanc Meisterstück', price: 1700, image: download95 },
  { id: 185, name: 'Piaget Altiplano', price: 1720, image: download96 },
  { id: 186, name: 'Cartier Ballon Bleu', price: 1740, image: download97 },
  { id: 187, name: 'Audemars Piguet Millenary', price: 1760, image: download98 },
  { id: 188, name: 'IWC Big Pilot', price: 1780, image: download99 },
  { id: 189, name: 'Ulysse Nardin Executive', price: 1800, image: download100 },
  { id: 190, name: 'Blancpain Villeret', price: 1820, image: download101 },
  { id: 191, name: 'Chopard Happy Sport', price: 1840, image: download102 },
  { id: 192, name: 'Vacheron Constantin Overseas', price: 1860, image: download103 },
  { id: 193, name: 'Glashütte Original Pano', price: 1880, image: download104 },
  { id: 194, name: 'Jaeger-LeCoultre Master', price: 1900, image: download105 },
  { id: 195, name: 'Breguet Marine', price: 1920, image: download106 },
  { id: 196, name: 'Girard-Perregaux Vintage', price: 1940, image: download107 },
  { id: 197, name: 'Parmigiani Fleurier Kalpa', price: 1960, image: download108 },
  { id: 198, name: 'Seiko Astron', price: 1980, image: download109 },
  { id: 199, name: 'Citizen Promaster Navihawk', price: 2000, image: download110 },
  { id: 200, name: 'Casio G-Shock Rangeman', price: 2020, image: download111 },
  { id: 201, name: 'Timex Expedition', price: 2040, image: download112 },
  { id: 202, name: 'Fossil Q Marshal', price: 2060, image: download113 },
  { id: 203, name: 'Garmin Instinct', price: 2080, image: download114 },
  { id: 204, name: 'Suunto Spartan', price: 2100, image: download115 },
  { id: 205, name: 'Movado Series 800', price: 2120, image: download116 },
  { id: 206, name: 'Bulova Lunar Pilot', price: 2140, image: download117 },
  { id: 207, name: 'Longines Conquest', price: 2160, image: download118 },
  { id: 208, name: 'TAG Heuer Monaco', price: 2180, image: download119 },
  { id: 209, name: 'Hamilton Ventura', price: 2200, image: download120 },
];

const Luxrydata = createSlice({
  name: 'Luxrydata',
  initialState,
  reducers: {
    updateluxrydata: (state, action) => {
      return action.payload;
    }
  }
});

export const { updateluxrydata } = Luxrydata.actions;
export default Luxrydata.reducer;
