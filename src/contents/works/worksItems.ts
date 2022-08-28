import signboardPreparing from '../../assets/signboard_preparing.png'
import doubleRoulette from '../../assets/double-roulette.png'
import warican from '../../assets/warican.png'
import ams from '../../assets/asset-management-simulator.png'
import { URL_GITHUB, URL_HATENA, URL_QIITA } from '../../config/env'

const worksItems = [
  {
    ref: '/ams/index.html',
    img: ams,
    name: 'Asset Management Simulator',
    info: 'Instant simulator of asset management for web.'
  },
  {
    ref: `${URL_GITHUB}/DoubleRoulette/blob/master/README.md`,
    img: doubleRoulette,
    name: 'Double Roulette - decide two at the same time!',
    info: 'Roulette app for iOS.'
  },
  {
    ref: `${URL_GITHUB}/AndroidDoubleRoulette/blob/main/README.md`,
    img: doubleRoulette,
    name: 'Double Roulette - decide two at the same time!',
    info: 'Roulette app for Android.'
  },
  {
    ref: URL_HATENA,
    img: warican,
    name: 'WariCan¥',
    info: 'Splitting bill app for iOS.'
  },
  {
    ref: URL_QIITA,
    img: signboardPreparing,
    name: 'preparing...',
    info: 'preparing...'
  },
  {
    ref: URL_QIITA,
    img: signboardPreparing,
    name: '...',
    info: '...'
  },
]

export default worksItems