import { getOssUrl } from "../scripts/utils";

export const WORD_DATA = [
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
  { ruby: '', content: 'そそっかしく' },
  { ruby: "くるって", content: "狂って" },
  { ruby: "みぎかたあがり", content: "右肩上がり" },
  { ruby: "", content: "わざと" },
  { ruby: "いじょう", content: "異常" },
  { ruby: "いどう", content: "移動" },
  { ruby: "せいこうをおさめた", content: "成功を収めた" },
  { ruby: "", content: "たちまち" },
  { ruby: "かかくきょうそう", content: "価格競争" },
  { ruby: "きょうつう", content: "共通" },
]

export const SYNONYM_DATA = [
  { content: [{ ruby: "いちだんと", content: "一段と", }, { ruby: "", content: "ますます" }] },
  { content: [{ ruby: "おちた", content: "落ちた", }, { ruby: "", content: "ふるわない" }] },
  { content: [{ ruby: "きじゅん", content: "基準", }, { ruby: "", content: "ものさし" }] },
  { content: [{ ruby: "あつかましい", content: "厚かましい", }, { ruby: "むえんりょな", content: "無遠慮な" }] },
  { content: [{ ruby: "こうこくぬし", content: "広告主", }, { ruby: "", content: "スポンサー" }] },
  { content: [{ ruby: "みせをたたむ", content: "店を畳む", }, { ruby: "みせをとじる", content: "店を閉じる" }] },
  { content: [{ ruby: "しずかに", content: "静かに", }, { ruby: "", content: "しいん" }] },
  { content: [{ ruby: "つくりなおして", content: "作り直して", }, { ruby: "かいぞうして", content: "改造して" }] },
  { content: [{ ruby: "えん", content: "縁", }, { ruby: "かんけい", content: "関係" }] },
  { content: [{ ruby: "ストレートなはつげん", content: "ストレートな発言", }, { ruby: "えんりょないはつげん", content: "遠慮ない発言" }] },
  { content: [{ ruby: "あわただしく", content: "慌ただしく", }, { ruby: "", content: "さっさと" }] },
  { content: [{ ruby: "ちゃくちゃくと", content: "着々と", }, { ruby: "じゅんちょうに", content: "順調に" }] },
  { content: [{ ruby: "あまくみて", content: "甘く見て", }, { ruby: "ゆだんして", content: "油断して" }] },
  { content: [{ ruby: "マンネリかしている", content: "マンネリ化している", }, { ruby: "しんせんみがない", content: "新鮮味がない" }] },
  { content: [{ ruby: "とぴっく", content: "トピック", }, { ruby: "わだい", content: "話題" }] },
  { content: [{ ruby: "あいにく", content: "あいにく", }, { ruby: "うんわるく", content: "運悪く" }] },
  { content: [{ ruby: "かつがれた", content: "担がれた", }, { ruby: "だまされた", content: "騙された" }] },
  { content: [{ ruby: "ね", content: "根", }, { ruby: "せいしつ", content: "性質" }] },
  { content: [{ ruby: "けっこうな", content: "結構な", }, { ruby: "すばらしい", content: "素晴らしい" }] }
]

export const COLLECTION_DATA = [
  { content: [{ ruby: "さかさまに", content: "逆さまに", }, { ruby: "ぎゃくに", content: "逆に", }, { ruby: "ぎゃっこうか", content: "逆効果" },] },
]

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
    name: getOssUrl(i.name)
  }
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
    url: "https://classroom.google.com/u/1/h",
    note: "Google Classroom",
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
    note: "Kurzgesagt – In a Nutshell@youtube",
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
    note: "Cloudflare Dashboard"
  }
];
