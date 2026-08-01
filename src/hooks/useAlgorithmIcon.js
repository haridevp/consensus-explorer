import {
  GiMining as PickaxeIcon,
  GiStoneBlock as HardDriveFallback,
} from 'react-icons/gi';
import {
  FaCoins,
  FaUsers,
  FaShieldAlt,
  FaProjectDiagram,
  FaClock,
  FaHdd,
  FaFire,
  FaHourglassHalf,
  FaLayerGroup,
  FaMountain,
} from 'react-icons/fa';
import { BsHexagon } from 'react-icons/bs';

const ICON_MAP = {
  pickaxe: PickaxeIcon,
  coins: FaCoins,
  users: FaUsers,
  shield: FaShieldAlt,
  network: FaProjectDiagram,
  hexagon: BsHexagon,
  mountain: FaMountain,
  clock: FaClock,
  harddrive: FaHdd,
  flame: FaFire,
  hourglass: FaHourglassHalf,
  layers: FaLayerGroup,
};

export function useAlgorithmIcon(key) {
  return ICON_MAP[key] || HardDriveFallback;
}
