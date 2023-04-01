import iconCs from "../assets/icon-cs.png";
import iconTools from "../assets/icon-tools.png";
import iconPractice from "../assets/icon-practice.png";
import iconFront from "../assets/icon-front.png";
import iconMobile from "../assets/icon-mobile.png";
import iconBack from "../assets/icon-back.png";
import iconDevops from "../assets/icon-devops.png";

const skillItems = [
	{
		img: iconCs,
		name: "Computer Science",
		textJp: ["コンピュータサイエンスの学位（学士、修士）があります。"],
		textEn: ["I have bachelor/master degree of computer science."]
	},
	{
		img: iconTools,
		name: "Standard tools for software development",
		textJp: [
			"Git, Docker, Linux(Native/WSL), Shell Script, Vim, Google Workspaceの理解と経験があります。WSL, Linux, Dockerの知見を活かし、開発者のためのローカル環境構築と共用サーバ運用保守を担当しています。人並みの面倒くさがり屋なので、プログラム業務改善することもしばしば。"
		],
		textEn: [
			"Understanding and experience with tools such as Git, Docker, Linux(Native/WSL), Shell Script, Vim, and Google Workspace.Utilizing my knowledge of WSL, Linux, and Docker, I am in charge of local environment construction and shared server operation and maintenance for developers. I often improve my work by scripts because of my laziness."
		]
	},
	{
		img: iconPractice,
		name: "Knowledge of development methods",
		textJp: [
			"BDD(振る舞い駆動開発)やTDD(テスト駆動開発)などの基本的な理解があります。それらの知見を踏まえ、品質の高いプログラムを作成します。",
			"Robot Framework, Jest, react-testing-library, Pytestなどのフレームワークの経験があります。"
		],
		textEn: [
			"Basic understanding of BDD and TDD. Based on those findings, I create a high-quality programs.",
			"I have experience with frameworks such as Robot Framework, Jest, react-testing-library, Pytest."
		]
	},
	{
		img: iconFront,
		name: "Frontend Engineering",
		textJp: [
			"HTML/CSS, JavaScript/TypeScript, React.js, Next.js, npm/yarn, Webpack/Parcelなどの理解と経験があります。",
			"モジュールバンドラーは、その拡張だけでなく何もない状態から所望の状態に構築可能です。"
		],
		textEn: [
			"Understanding and experience with HTML/CSS, JavaScript/TypeScript, React.js, Next.js, npm/yarn, Webpack/Parcel, etc.",
			"I can design module bundler desired settings from scratch as well as its extensions."
		]
	},
	{
		img: iconMobile,
		name: "Mobile Engineering",
		textJp: [
			"Swift, Kotlin, Dart(flutter)の3つの技術を用いて、iOS/Androidアプリ開発を経験しています。",
			"特にiOSは5年以上の学習経験と2年程度の実務経験があるため、モノ作りに貢献できる自信があります。"
		],
		textEn: [
			"I have experience in iOS/Android application development using three technologies: Swift, Kotlin, and Dart(flutter).",
			"In particular, I have more than 5 years of learning experience and about 2 years of practical experience with iOS, so I am confident that I can contribute to manufacturing with it."
		]
	},
	{
		img: iconBack,
		name: "Backend Engineering",
		textJp: [
			"ApacheやNginxを活用してWebサーバを、MySQLやMongoDBを活用しRDBMS/NoSQLのDBサーバを立ち上げることができます。コンテンツキャッシュやロードバランシング、リバースプロキシ、DB最適化等の基本的な理解はあります。"
		],
		textEn: [
			"I can set up a web server using Apache and Nginx, and an RDBMS/NoSQL DB server using MySQL and MongoDB. Basic understanding of content caching, load balancing, reverse proxies, DB optimization, etc."
		]
	},
	{
		img: iconDevops,
		name: "DevOps Engineering",
		textJp: [
			"Jenkinsを活用し、CI/CDパイプラインの構築ができます。",
			"初歩的ですが、AWSとGCPでVMインスタンスを立ち上げる、Webサーバやミドルウェアのログ監視を行う程度の経験があります。"
		],
		textEn: [
			"I can setup Jenkins to build a CI/CD pipeline.",
			"Rudimentary though, I have experience in launching VM instances on AWS and GCP, and monitoring the logs of web servers and middleware."
		]
	}
];

export default skillItems;
