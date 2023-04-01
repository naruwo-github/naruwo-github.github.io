import signboardPreparing from "../assets/signboard_preparing.png";
import doubleRoulette from "../assets/double-roulette.png";
import warican from "../assets/warican.png";
import ams from "../assets/asset-management-simulator.png";
import myHp from "../assets/my-hp.png";
import { URL_GITHUB, URL_HATENA, URL_QIITA } from "./env";

const worksItems = [
	{
		ref: "/",
		img: myHp,
		name: "My homepage",
		info: "This page is one of my portfolio!!!"
	},
	{
		ref: "/ams/index.html",
		img: ams,
		name: "Asset Management Simulator",
		info: "Instant simulator of asset management for web."
	},
	{
		ref: `${URL_GITHUB}/DoubleRoulette/blob/master/README.md`,
		img: doubleRoulette,
		name: "Double Roulette - decide two at the same time!",
		info: "Roulette app for iOS."
	},
	{
		ref: `${URL_GITHUB}/AndroidDoubleRoulette/blob/main/README.md`,
		img: doubleRoulette,
		name: "Double Roulette - decide two at the same time!",
		info: "Roulette app for Android."
	},
	{
		ref: `${URL_GITHUB}/WariCan/blob/main/README.md`,
		img: warican,
		name: "WariCan¥",
		info: "Splitting bill app for iOS."
	},
	{
		ref: URL_QIITA,
		img: signboardPreparing,
		name: "preparing...",
		info: "preparing..."
	}
];

export default worksItems;
