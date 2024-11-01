import { ReactNode } from "react";
import { getOssUrl } from "../scripts/utils";

export const WORD_DATA = [
  {
    ruby: "よごす",
    content: "汚す",
  },
  {
    ruby: "きたない",
    content: "汚い",
  },
  {
    ruby: "ちょう",
    content: "腸",
  },
  {
    ruby: "ちょうかく",
    content: "聴覚",
  },
  {
    ruby: "ちょうこう",
    content: "聴講",
  },
  {
    ruby: "きく",
    content: "聴く",
  },
  {
    ruby: "どう",
    content: "胴",
  },
  {
    ruby: "にょう",
    content: "尿",
  },
  {
    ruby: "しにょう",
    content: "し尿",
  },
  {
    ruby: "にんしん",
    content: "妊娠",
  },
  {
    ruby: "はい",
    content: "肺",
  },
  {
    ruby: "ほっさ",
    content: "発作",
  },
  {
    ruby: "ほっそく、はっそく",
    content: "発足",
  },
  {
    ruby: "ひろう",
    content: "疲労",
  },
  {
    ruby: "つかれる",
    content: "疲れる",
  },
  {
    ruby: "かいぼう",
    content: "解剖",
  },
  {
    ruby: "ますい",
    content: "麻酔",
  },
  {
    ruby: "あさ",
    content: "麻",
  },
  {
    ruby: "よう",
    content: "酔う",
  },
  {
    ruby: "しょうもう",
    content: "消耗",
  },
  {
    ruby: "げり",
    content: "下痢",
  },

  { ruby: "おしむ", content: "惜しむ" },
  { ruby: "つつしむ", content: "謹む" },
  { ruby: "はばむ", content: "阻む" },
  { ruby: "はずむ", content: "弾む" },
  { ruby: "はげむ", content: "励む" },
  { ruby: "うみにのぞむいえ", content: "海に臨む家" },
  { ruby: "いどむ", content: "挑む" },
  { ruby: "つまむ", content: "摘む" },
  { ruby: "おどす", content: "脅す" },
  { ruby: "おどかす", content: "脅かす" },
  { ruby: "つくす", content: "尽くす" },
  { ruby: "くつがえす", content: "覆す" },
  { ruby: "もよおす", content: "催す" },
  { ruby: "ほどこす", content: "施す" },
  { ruby: "うながす", content: "促す" },
  { ruby: "ひたす", content: "浸す" },
  { ruby: "しりぞく", content: "退く" },
  { ruby: "あおぐ", content: "仰ぐ" },
  { ruby: "つぐ", content: "継ぐ" },
  { ruby: "あざむく", content: "欺く" },
  { ruby: "なつく", content: "懐く" },
  { ruby: "おもむく", content: "赴く" },
  { ruby: "つらぬく", content: "貫く" },
  { ruby: "すいみんしょうがい", content: "睡眠障害" },
  { ruby: "そうとう", content: "相当" },
  { ruby: "けいこう", content: "傾向" },
  { ruby: "ちょうしょをみがき", content: "長所を磨き" },
  { ruby: "はっき", content: "発揮" },
  { ruby: "しごとにつける", content: "仕事に就ける" },
  { ruby: "たいおんをちょうせつ", content: "体温を調節" },
  { ruby: "きしょう", content: "起床" },
  { ruby: "ねっちゅう", content: "熱中" },
  { ruby: "ゆずらない", content: "譲らない" },
  { ruby: "ごうとう", content: "強盗" },
  { ruby: "しょうとつ", content: "衝突" },
  { ruby: "つくす", content: "尽くす" },
  { ruby: "けいい", content: "敬意" },
  { ruby: "あらためる", content: "改める" },
  { ruby: "かがくぶっしつ", content: "化学物質" },
  { ruby: "ゆうこうきかん", content: "有効期間" },
  { ruby: "たいりょくをしょうもう", content: "体力を消耗" },
  { ruby: "しめている", content: "占めている" },
  { ruby: "ようりょうをえない", content: "要領を得ない" },
  { ruby: "ちゅうもくど", content: "注目度" },
  { ruby: "こうせいのう", content: "高性能" },
  { ruby: "けいかくあん", content: "計画案" },
  { ruby: "べつこうどう", content: "別行動" },
  { ruby: "しょうかき", content: "消火器" },
  { ruby: "そうじんこう", content: "総人口" },
  { ruby: "さいしゅっぱつ", content: "再出発" },
  { ruby: "きんむさき", content: "勤務先" },
  { ruby: "なまほうそう", content: "生放送" },
  { ruby: "おおくろう", content: "大苦労" },
  { ruby: "ぜんぽうのしんごう", content: "前方の信号" },
  { ruby: "せいしきなふくそう", content: "正式な服装" },
  { ruby: "ひにく", content: "皮肉" },
  { ruby: "", content: "くれぐれも" },
  { ruby: "しつぼう", content: "失望" },
  { ruby: "めぐりあう", content: "巡り会う" },
  { ruby: "", content: "いわゆる" },
  { ruby: "かんで", content: "噛んで" },
  { ruby: "かつじばなれ", content: "活字離れ" },
  { ruby: "ほしょう", content: "保証" },
  { ruby: "ふり", content: "不利" },
  { ruby: "みりょくをかんじる", content: "魅力を感じる" },
  { ruby: "", content: "" },
  { ruby: "ひょうじゅん", content: "標準" },
  { ruby: "こうぼう", content: "攻防" },
  { ruby: "くわしい", content: "詳しい" },
  { ruby: "けっかん", content: "欠陥" },
  { ruby: "たてかんばん", content: "立て看板" },
  { ruby: "にゅうか", content: "入荷" },
  { ruby: "うむ", content: "有無" },
  { ruby: "なつかしく", content: "懐かしく" },
  { ruby: "なぐさめて", content: "慰めて" },
  { ruby: "そうぞく", content: "相続" },
  { ruby: "ゆらぐ", content: "揺らぐ" },
  { ruby: "よき", content: "予期" },
  { ruby: "こくて", content: "濃くて" },
  { ruby: "ねらい", content: "狙い" },
  { ruby: "とちゅう", content: "途中" },
  { ruby: "たいしょう", content: "対照" },
  { ruby: "おぼえて", content: "覚えて" },
  { ruby: "かいとう", content: "解答" },
  { ruby: "かんぱい", content: "乾杯" },
  { ruby: "さからえず", content: "逆らえず" },
  { ruby: "じこりゅう", content: "自己流" },
  { ruby: "うんどうりょう", content: "運動量" },
  { ruby: "ちほうし", content: "地方紙" },
  { ruby: "よそうがい", content: "予想外" },
  { ruby: "いらいしん", content: "依頼心" },
  { ruby: "ぜんじだい", content: "前時代" },
  { ruby: "むかんしん", content: "無関心" },
  { ruby: "こうたいせい", content: "交代制" },
  { ruby: "あいてがわ", content: "相手側" },
  { ruby: "", content: "そそっかしく" },
  { ruby: "くるって", content: "狂って" },
  { ruby: "みぎかたあがり", content: "右肩上がり" },
  { ruby: "", content: "わざと" },
  { ruby: "いじょう", content: "異常" },
  { ruby: "いどう", content: "移動" },
  { ruby: "せいこうをおさめた", content: "成功を収めた" },
  { ruby: "", content: "たちまち" },
  { ruby: "かかくきょうそう", content: "価格競争" },
  { ruby: "きょうつう", content: "共通" },
];

export const SYNONYM_DATA = [
  {
    content: [
      { ruby: "いちだんと", content: "一段と" },
      { ruby: "", content: "ますます" },
    ],
  },
  {
    content: [
      { ruby: "おちた", content: "落ちた" },
      { ruby: "", content: "ふるわない" },
    ],
  },
  {
    content: [
      { ruby: "きじゅん", content: "基準" },
      { ruby: "", content: "ものさし" },
    ],
  },
  {
    content: [
      { ruby: "あつかましい", content: "厚かましい" },
      { ruby: "むえんりょな", content: "無遠慮な" },
    ],
  },
  {
    content: [
      { ruby: "こうこくぬし", content: "広告主" },
      { ruby: "", content: "スポンサー" },
    ],
  },
  {
    content: [
      { ruby: "みせをたたむ", content: "店を畳む" },
      { ruby: "みせをとじる", content: "店を閉じる" },
    ],
  },
  {
    content: [
      { ruby: "しずかに", content: "静かに" },
      { ruby: "", content: "しいん" },
    ],
  },
  {
    content: [
      { ruby: "つくりなおして", content: "作り直して" },
      { ruby: "かいぞうして", content: "改造して" },
    ],
  },
  {
    content: [
      { ruby: "えん", content: "縁" },
      { ruby: "かんけい", content: "関係" },
    ],
  },
  {
    content: [
      { ruby: "ストレートなはつげん", content: "ストレートな発言" },
      { ruby: "えんりょないはつげん", content: "遠慮ない発言" },
    ],
  },
  {
    content: [
      { ruby: "あわただしく", content: "慌ただしく" },
      { ruby: "", content: "さっさと" },
    ],
  },
  {
    content: [
      { ruby: "ちゃくちゃくと", content: "着々と" },
      { ruby: "じゅんちょうに", content: "順調に" },
    ],
  },
  {
    content: [
      { ruby: "あまくみて", content: "甘く見て" },
      { ruby: "ゆだんして", content: "油断して" },
    ],
  },
  {
    content: [
      { ruby: "マンネリかしている", content: "マンネリ化している" },
      { ruby: "しんせんみがない", content: "新鮮味がない" },
    ],
  },
  {
    content: [
      { ruby: "とぴっく", content: "トピック" },
      { ruby: "わだい", content: "話題" },
    ],
  },
  {
    content: [
      { ruby: "あいにく", content: "あいにく" },
      { ruby: "うんわるく", content: "運悪く" },
    ],
  },
  {
    content: [
      { ruby: "かつがれた", content: "担がれた" },
      { ruby: "だまされた", content: "騙された" },
    ],
  },
  {
    content: [
      { ruby: "ね", content: "根" },
      { ruby: "せいしつ", content: "性質" },
    ],
  },
  {
    content: [
      { ruby: "けっこうな", content: "結構な" },
      { ruby: "すばらしい", content: "素晴らしい" },
    ],
  },
];

export const COLLECTION_DATA = [
  {
    content: [
      { ruby: "さかさまに", content: "逆さまに" },
      { ruby: "ぎゃくに", content: "逆に" },
      { ruby: "ぎゃっこうか", content: "逆効果" },
    ],
  },
];

export interface Quote {
  author?: ReactNode;
  content?: ReactNode;
  description?: ReactNode;
  hidden?: boolean;
}

export const POSTS_DATA: Quote[] = [
  {
    author: "勝　海舟",
    content: "急いでも仕方がない。寝ころんで待つのが第一だと思っています。",
    description: "",
    hidden: false,
  },
  {
    author: "",
    content: "work expands so as to fill the time available for its completion",
    description: "Parkinson's law",
    hidden: false,
  },
  {
    author: "Alan Perlis",
    content:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    description: "",
    hidden: false,
  },
  {
    author: "Albert Einstein",
    content:
      "The value of a college education is not the learning of many facts but the training of the mind to think",
    description: "",
    hidden: false,
  },
  {
    author: "Shakespeare",
    content: (
      <div>
        Time doth transfix the flourish set on youth
        <br />
        And delves the parallels in beauty’s brow,
        <br />
        Feeds on the rarities of nature’s truth,
        <br />
        And nothing stands but for his scythe to mow:
      </div>
    ),
    description: "Sonnet 60",
    hidden: false,
  },
  {
    author: "Warren Buffett",
    content:
      "Only when the tide goes out do you discover who's been swimming naked.",
    description: "",
    hidden: false,
  },
  {
    author: "Why The Lucky Stiff",
    content:
      "when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.",
    description: null,
    hidden: false,
  },
  {
    author: "Albert Einstein",
    content:
      "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution. It is, strictly speaking, a real factor in scientific research.",
    description: "",
    hidden: false,
  },
  {
    author: "Chuck Palahniuk, Fight Club",
    content: (
      <div>
        "Listen, now, you're going to die, Ray-mond K. K. K. Hessel, tonight.
        You might die in one second or in one hour, you decide. So lie to me.
        Tell me the first thing off the top of your head. Make something up. I
        don't give a shit. I have a gun.
        <br />
        <br />
        Finally, you were listening and coming out of the little tragedy in your
        head.
        <br />
        <br />
        Fill in the blank. What does Raymond Hessel want to be when he grows up?
        <br />
        <br />
        Go home, you said you just wanted to go home, please.
        <br />
        <br />
        No shit, I said. But after that, how did you want to spend your life? If
        you could do anything in the world.
        <br />
        <br />
        Make something up.
        <br />
        <br />
        You didn't know.
        <br />
        <br />
        Then you're dead right now, I said. I said, now turn your head.
        <br />
        <br />
        Death to commence in ten, in nine, in eight.
        <br />
        <br />
        A vet, you said. You want to be a vet, a veterinarian.
        <br />
        <br />
        You could be in school working your ass off, Raymond Hessel, or you
        could be dead. You choose. I stuffed your wallet into the back of your
        jeans. So you really wanted to be an animal doctor. I took the saltwater
        muzzle of the gun off one cheek and pressed it against another. Is that
        what you've always wanted to be, Dr. Raymond K. K. K. K. Hessel, a
        veterinarian?...
        <br />
        <br />
        So, I said, go back to school. If you wake up tomorrow morning, you find
        a way to get back into school.
        <br />
        <br />
        I have your license.
        <br />
        <br />
        I know who you are. I know where you live. I'm keeping your license, and
        I'm going to check on you, mister Raymond K. Hessel. In three months,
        and then six months, and then a year, and if you aren't back in school
        on your way to being a veterinarian, you will be dead...
        <br />
        <br />
        Raymond K. K. Hessel, your dinner is going to taste better than any meal
        you've ever eaten, and tomorrow will be the most beautiful day of your
        life."
      </div>
    ),
    description: null,
    hidden: true,
  },
  {
    author: "Alan Watts",
    content:
      "The reason you want to be better is the reason why you aren't. We aren't better because we want to be. Because the road to hell is paved with good intentions.",
    description: "The Road to Hell is Paved with Good Intentions",
    hidden: false,
  },
  {
    author: "来源网络",
    content: "自杀前请想一想，自杀是会下地狱的，而地狱里全是中国人。",
    description: null,
    hidden: true,
  },
];

export const PHOTOS_2024 = [
  {
    name: "DJI_20240926143510_0056_D.JPG",
  },
  {
    name: "DJI_20240926123030_0028_D.JPG",
  },
  {
    name: "DJI_20240926115136_0027_D.JPG",
  },
  {
    name: "DJI_20240926134504_0043_D.JPG",
  },
  {
    name: "DJI_20240926134212_0035_D.JPG",
  },
  {
    name: "DJI_20240926134352_0040_D.JPG",
  },
  {
    name: "DJI_20240926140854_0054_D.JPG",
  },
].map((i) => {
  return {
    name: getOssUrl(i.name),
  };
});

export const HOMEPAGE_LINKS = [
  {
    url: "https://tenki.jp/lite/forecast/3/17/4610/14131/",
    note: "川崎天気",
  },
  {
    url: "https://cool-matan.vercel.app",
    note: "curriculum",
  },
  {
    url: "https://www.collinsdictionary.com",
    note: "Collins Dictionary",
  },
  {
    url: "https://bsky.app",
    note: "Bluesky",
  },
  {
    url: "https://www.abaxlms.com",
    note: "ABAX LMS",
  },
  {
    url: "https://soundcloud.com/abax-lms/sets/toeic-skills-3-full-audio/s-wHBQrVlV441",
    note: "TOEIC Skills 3 Full Audio",
  },
  {
    url: "https://classroom.google.com/u/1/h",
    note: "Google Classroom",
  },
  {
    url: "/japanese",
    note: "Japanese",
  },
  {
    url: "/Archives/CCNA",
    note: "CCNA",
  },
  {
    url: "/Archives/input",
    note: "input",
  },
  {
    url: "/Archives/japan.link",
    note: "japan link",
  },
  {
    url: "/micro-blog",
    note: "micro blog",
  },
  {
    url: "/Archives/card-block",
    note: "card block",
  },
  {
    url: "/Archives/resource.information.idea.note",
    note: "idea note",
  },
  {
    url: "/Archives/dopamine-record",
    note: "dopamine record",
  },
  {
    url: "https://www.youtube.com",
    note: "youtube",
  },
  {
    url: "https://transit.yahoo.co.jp/diainfo/area/4",
    note: "電車路線情報",
  },
  {
    url: "https://www.jma.go.jp/bosai/map.html#6/39.551/153.347/&elem=root&typhoon=all&contents=typhoon",
    note: "台風経路図",
  },
  {
    url: "https://www.youtube.com/@kurzgesagt",
    note: "Kurzgesagt - In a Nutshell@youtube",
  },
  {
    url: "https://www.youtube.com/@3blue1brown",
    note: "3Blue1Brown@youtube",
  },
  {
    url: "https://youtube.com/playlist?list=PLhfrWIlLOoKPc2RecyiM_A9nf3fUU3e6g",
    note: "Free Cisco CCNA 200-301 Course@youtube",
  },
  {
    url: "https://dash.cloudflare.com/",
    note: "Cloudflare Dashboard",
  },
];
