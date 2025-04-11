import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ICONS from "./icons";
import IconImage from "../components/image/IconImage";
import {
  faBookAtlas,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faBluesky,
  faDiscord,
  faGithub,
  faGoogle,
  faSpotify,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const HOMEPAGE_LINKS: Link[] = [
  {
    url: "https://mynoise.net",
    note: "Noise BGM",
    image: "https://mynoise.net/Pix/logo_256.png",
    tags: ["bgm", "tool"],
    weight: 10,
  },
  {
    url: "https://tenki.jp/lite/forecast/3/17/4610/14131/",
    note: "川崎天気",
    image: "https://static.tenki.jp/images/ogp/ogp-top.jpg",
    tags: ["weather"],
    weight: 10,
  },
  {
    url: "https://seocompanyjapan.com/#KantoDelivery",
    note: "House Shifting and Mini Moving",
  },
  {
    url: "https://app.clockify.me/tracker",
    note: "Clockify",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://clockify.me/assets/images/clockify-logo.png"
      />
    ),
    tags: ["tool", "home"],
    weight: 10,
  },
  {
    url: "https://www.gcores.com/",
    note: "机核 Gcores",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://static.gcores.com/assets/01546e353924919c541d.png"
      />
    ),
    tags: ["media", "home"],
  },
  {
    url: "https://mail.google.com",
    note: "Gmail",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
      />
    ),
    tags: ["home"],
  },
  {
    url: "https://jp.mercari.com/",
    note: "メルカリ",
    image: ICONS.mercari,
    tags: ["home"],
  },
  {
    url: "https://learning.edx.org/course/course-v1:HarvardX+CS50+X/block-v1:HarvardX+CS50+X+type@sequential+block@41335074798c4a65ac8d3fbdd31f5a49/block-v1:HarvardX+CS50+X+type@vertical+block@7ec2936f501e4943b62ba8be835bdc67",
    note: "CS50 edx",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://miro.medium.com/v2/resize:fit:700/1*IYCifTCCR2ah-79u94Z3wg.png"
      />
    ),
    tags: ["home"],
  },
  {
    url: "https://chat.bilipili.eu/",
    note: "Open WebUI",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://docs.openwebui.com/images/logo.png"
      />
    ),
    tags: ["home"],
  },
  {
    url: "https://www.amazon.co.jp/",
    note: "Amazon",
    image: <FontAwesomeIcon className="text-yellow-500" icon={faAmazon} />,
    tags: ["home"],
  },
  {
    url: "https://open.spotify.com",
    tags: ["media", "home"],
    image: <FontAwesomeIcon className="text-green-500" icon={faSpotify} />,
  },
  {
    url: "https://www.netflix.com/browse",
    note: "Netflix",
    tags: ["home"],
    image: (
      <IconImage
        iconStyle="contained"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
      />
    ),
  },
  {
    url: "https://1003blocks.substack.com/p/web3-367",
    note: "ONGAESHI",
    tags: ["web3", "blockchain", "japan", "job"],
  },
  {
    url: "https://www.careermap.jp",
    note: "Career Map",
    tags: ["job"],
  },
  {
    url: "https://github.com/kjk/edna",
    note: "Note taking for developers and power users",
    tags: ["tool"],
  },
  {
    url: "https://www.janpara.co.jp/",
    note: "PC・スマートフォン・デジカメ・オーディオの販売・買取なら全国51店舗の「じゃんぱら」へ",
  },
  {
    url: "https://moov.ooo/",
    note: "モノ選びに、もっと納得を。",
  },
  {
    url: "https://keepa.com/#!",
    note: "amazon price",
  },
  {
    url: "https://my-best.com/",
    note: "compare products before buying",
  },
  {
    url: "https://tokyo.craigslist.org/search/hhh?sort=priceasc#search=1~gallery~0~100",
    note: "住宅",
  },
  {
    url: "https://chatgpt.com/",
    note: "ChatGPT",
    tags: ["tool", "home"],
    image: ICONS.chatgpt,
  },
  {
    url: "https://weather.yahoo.co.jp/weather/zoomradar/",
    note: "天気図",
    tags: ["weather"],
  },
  {
    url: "https://weathernews.jp/onebox/radar/",
    note: "雨雲レーダー",
    image: "https://weathernews.jp/onebox/img/og_img.jpg",
    tags: ["weather"],
  },
  {
    url: "https://typhoon.yahoo.co.jp/weather/jp/earthquake/kyoshin/",
    note: "リアルタイム　震度 yahoo",
    image: "https://s.yimg.jp/images/weather/social/img_ogp_kyoshin.png",
    tags: ["alert"],
  },
  {
    url: "https://typhoon.yahoo.co.jp/weather/jp/earthquake/",
    note: "地震速報",
    image: "https://s.yimg.jp/images/weather/social/weather_ogp.png",
    tags: ["alert"],
  },
  {
    url: "https://www.coursera.org/learn/computer-networking/home/module/1",
    note: "The Bits and Bytes of Computer Networking - Coursera",
    tags: ["coursera", "study", "network"],
    weight: 10,
    image: ICONS.coursera,
  },
  {
    url: "https://www.coursera.org/learn/machine-learning/home/week/1",
    note: "Supervised Machine Learning: Regression and Classification",
    tags: ["study", "coursera", "network"],
    weight: 10,
    image: ICONS.coursera,
  },
  {
    url: "https://speed.cloudflare.com/",
    note: "Cloudflare Speed Test",
    tags: ["tool"],
  },
  {
    url: "https://search.nixos.org/packages",
    note: "NixOS Packages",
    tags: ["nix"],
  },
  {
    url: "https://vercel.com",
    tags: ["tool"],
    image:
      "https://vercel.com/mktng/_next/static/media/vercel-logotype-dark.e8c0a742.svg",
  },
  {
    url: "https://suno.com",
    note: "Suno AI music",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://suno.com/logos/Logo-7.svg"
        className="bg-black"
      />
    ),
    tags: ["bgm", "home"],
  },
  {
    url: "https://youtu.be/BRZ_Jr3r9qE",
    note: "Oriental ,Ethnic Disorders Session by Special K for Massar LA // Organic House Music",
    tags: ["bgm"],
    image: <FontAwesomeIcon className="text-rose-600" icon={faYoutube} />,
  },
  {
    url: "https://curriculum-rust-one.vercel.app/",
    note: "curriculum",
    tags: ["school", "home"],
    weight: 10,
    image: <FontAwesomeIcon className="" icon={faChalkboardUser} />,
  },
  {
    url: "https://www.collinsdictionary.com",
    note: "Collins Dictionary",
    tags: ["english"],
    image: <FontAwesomeIcon className="" icon={faBookAtlas} />,
  },
  {
    url: "https://github.com",
    tags: ["programming", "home"],
    image: <FontAwesomeIcon className="" icon={faGithub} />,
  },
  {
    url: "https://bsky.app",
    tags: ["sns", "home"],
    image: <FontAwesomeIcon className="text-sky-400" icon={faBluesky} />,
  },
  {
    url: "https://discord.com/channels/@me",
    tags: ["sns", "home"],
    image: <FontAwesomeIcon className="text-sky-400" icon={faDiscord} />,
  },
  {
    url: "https://web.telegram.org/k/",
    tags: ["sns", "home"],
    weight: 10,
    image: <FontAwesomeIcon className="text-sky-500" icon={faTelegram} />,
  },
  {
    url: "https://app.fastmail.com",
    note: "Fastmail",
    image: (
      <IconImage
        iconStyle="contained"
        src="https://app.fastmail.com/static/images/og-header-image.png"
      />
    ),
    tags: ["sns", "home"],
    weight: 10,
  },
  {
    url: "https://www.abaxlms.com",
    note: "ABAX LMS",
    image: "https://www.abaxlms.com/images/icons/apple-touch-icon.png",
    tags: ["school"],
  },
  {
    url: "https://soundcloud.com/abax-lms/sets/toeic-skills-3-full-audio/s-wHBQrVlV441",
    note: "TOEIC Skills 3 Full Audio",
    image: "https://www.abaxlms.com/images/icons/apple-touch-icon.png",
    tags: ["school"],
  },
  {
    url: "https://classroom.google.com/u/1/h",
    note: "Google Classroom",
    tags: ["school"],
    image: <FontAwesomeIcon className="text-blue-600" icon={faGoogle} />,
  },
  {
    url: "https://www.youtube.com",
    tags: ["media", "home"],
    image: <FontAwesomeIcon className="text-rose-600" icon={faYoutube} />,
  },
  {
    url: "https://transit.yahoo.co.jp/diainfo/area/4",
    note: "電車路線情報",
    tags: ["alert"],
  },
  {
    url: "http://www.kmoni.bosai.go.jp",
    note: "リアルタイム　震度",
    tags: ["alert"],
  },
  {
    url: "https://www.jma.go.jp/bosai/map.html#6/39.551/153.347/&elem=root&typhoon=all&contents=typhoon",
    note: "台風経路図",
    tags: ["alert"],
  },
  {
    url: "https://sc.city.kawasaki.jp/saigai/index.htm",
    note: "川崎災害情報",
    tags: ["alert"],
  },
  {
    url: "https://www.youtube.com/@kurzgesagt",
    note: "Kurzgesagt - In a Nutshell@youtube",
    image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
    tags: ["study"],
  },
  {
    url: "https://www.youtube.com/@3blue1brown",
    note: "3Blue1Brown@youtube",
    image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
    tags: ["study"],
  },
  {
    url: "https://youtube.com/playlist?list=PLhfrWIlLOoKPc2RecyiM_A9nf3fUU3e6g",
    note: "Free Cisco CCNA 200-301 Course@youtube",
    image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
    tags: ["study"],
  },
  {
    url: "https://youtu.be/JTNBJHba_sE",
    note: "Full Stack with Next.js 14, Prisma, NextAuth, Pusher & Cloudinary – Build & Deploy a Dating App",
    image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
    tags: ["study", "programming"],
  },
  {
    url: "https://www.youtube.com/@%E3%81%8B%E3%81%8F%E9%AB%98%E6%A0%A1%E7%94%9Fasmr",
    note: "かく高校生asmr",
    image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
    tags: ["study"],
    description: "書く練習",
  },
  {
    url: "https://dash.cloudflare.com/",
    note: "Cloudflare Dashboard",
    tags: ["info"],
  },
];