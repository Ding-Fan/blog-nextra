import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getOssUrl } from "../scripts/utils";
import { DataSetItem, Link, Post, Prompt } from "./types";
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
import {
  faBookAtlas,
  faChalkboardUser,
  faCloudRain,
  faCloudSun,
  faHouseCrack,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import BaseImage from "../components/image/BaseImage";
import IconImage from "../components/image/IconImage";
import ICONS from "./icons";

export const WORDS_DATA: DataSetItem[] = [
  // 助数詞
  {
    id: "0",
    title: "数字",
    flippable: true,
    content: [
      {
        ruby: "ぜろ、れい",
        content: "ゼロ、零",
      },
      {
        ruby: "いち",
        content: "一",
      },
      {
        ruby: "に",
        content: "二",
      },
      {
        ruby: "さん",
        content: "三",
      },
      {
        ruby: "よん、し",
        content: "四",
      },
      {
        ruby: "ご",
        content: "五",
      },
      {
        ruby: "ろく",
        content: "六",
      },
      {
        ruby: "なな、しち",
        content: "七",
      },
      {
        ruby: "はち",
        content: "八",
      },
      {
        ruby: "きゅう、く",
        content: "九",
      },
      {
        ruby: "じゅう",
        content: "十",
      },
      {
        ruby: "にじゅう",
        content: "二十",
      },
      {
        ruby: "ひゃく",
        content: "百",
      },
      {
        ruby: "せん",
        content: "千",
      },
      {
        ruby: "まん",
        content: "万",
      },
      {
        ruby: "おく",
        content: "億",
      },
      {
        ruby: "ちょう",
        content: "兆",
      },
    ],
  },
  {
    id: "1",
    title: "個",
    flippable: true,
    content: [
      {
        ruby: "いっこ",
        content: "一個",
      },
      {
        ruby: "にこ",
        content: "二個",
      },
      {
        ruby: "さんこ",
        content: "三個",
      },
      {
        ruby: "よんこ",
        content: "四個",
      },
      {
        ruby: "ごこ",
        content: "五個",
      },
      {
        ruby: "ろっこ",
        content: "六個",
      },
      {
        ruby: "ななこ",
        content: "七個",
      },
      {
        ruby: "はちこ、はっこ",
        content: "八個",
      },
      {
        ruby: "きゅうこ",
        content: "九個",
      },
      {
        ruby: "じっこ",
        content: "十個",
      },
      {
        ruby: "じゅういっこ",
        content: "十一個",
      },
      {
        ruby: "じゅうにこ",
        content: "十二個",
      },
      {
        ruby: "にじゅっこ",
        content: "二十個",
      },
    ],
  },
  {
    id: "2",
    title: "基本",
    flippable: true,
    content: [
      {
        ruby: "すいとうちょう",
        content: "出納帳",
      },
      {
        ruby: "ふもとでおしゃれなひろうえんをもよおす",
        content: "麓でお洒落な披露宴を催す",
      },
      {
        ruby: "かざんふんかのえいきょうですいじがとどこおっている",
        content: "火山噴火の影響で炊事が滞っている",
      },
      {
        ruby: "かれはしょうかきをもっててぎわをみせようとしたが",
        content: "彼は消火器を持って手際を見せようとしたが",
      },
      {
        ruby: "さかさまにしてしまい",
        content: "逆様にしてしまい",
      },
      {
        ruby: "たいりょくのしょうもうがはてしないようにかんじた",
        content: "体力の消耗が果てしないように感じた",
      },
      {
        ruby: "ひたして",
        content: "浸して",
      },
      {
        ruby: "つげた",
        content: "告げた",
      },
      {
        ruby: "うちわけひょうばっすい",
        content: "内訳表抜粋",
      },
      {
        ruby: "さえない",
        content: "冴えない",
      },
      {
        ruby: "ちゅうとはんぱ",
        content: "中途半端",
      },
      {
        ruby: "ついやす",
        content: "費やす",
      },
      {
        ruby: "にんたい",
        content: "忍耐",
      },
      {
        ruby: "ねっている",
        content: "練っている",
      },
      {
        ruby: "せっちゅう",
        content: "折衷",
      },
      {
        ruby: "つつしむ",
        content: "慎む",
      },
      {
        ruby: "ただよって",
        content: "漂って",
      },
      {
        ruby: "ひんこん",
        content: "貧困",
      },
      {
        ruby: "けっさく",
        content: "傑作",
      },
      {
        ruby: "こまやかな",
        content: "細やかな",
      },
      {
        ruby: "よしあし",
        content: "良し悪し",
      },
      {
        ruby: "えんかつ",
        content: "円滑",
      },
      {
        ruby: "しりぞく",
        content: "退く",
      },
      {
        ruby: "むぞうさ",
        content: "無造作",
      },
      {
        ruby: "へだてて",
        content: "隔てて",
      },
      {
        ruby: "そくばく",
        content: "束縛",
      },
      {
        ruby: "みえ",
        content: "見栄",
      },
      {
        ruby: "はんじょう",
        content: "繁盛",
      },
      {
        ruby: "つのって",
        content: "募って",
      },
      {
        ruby: "びょうしゃ",
        content: "描写",
      },
      {
        ruby: "ねたむ",
        content: "妬む",
      },
      {
        ruby: "たいぐう",
        content: "待遇",
      },
      {
        ruby: "ひかえた",
        content: "控えた",
      },
      {
        ruby: "かっきてき",
        content: "画期的",
      },
      {
        ruby: "とどまる",
        content: "留まる",
      },
      {
        ruby: "むじゅん",
        content: "矛盾",
      },
      {
        ruby: "ふけて",
        content: "老けて",
      },
      {
        ruby: "あてな",
        content: "宛名",
      },
      {
        ruby: "やとう",
        content: "雇う",
      },
      {
        ruby: "ほっそく、はっそく",
        content: "発足",
      },
      {
        ruby: "たずさえて",
        content: "携えて",
      },
      {
        ruby: "すきま",
        content: "隙間",
      },
      {
        ruby: "はばむ",
        content: "阻む",
      },
      {
        ruby: "したわれて",
        content: "慕われて",
      },

      {
        ruby: "ほっとする",
        content: "ほっとする",
      },
      {
        ruby: "ねむれない",
        content: "眠れない",
      },
      {
        ruby: "ねられない",
        content: "寝られない",
      },
      { ruby: "よそうがい", content: "予想外" },
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
      { ruby: "はっき", content: "発揮" },
      {
        ruby: "しょくはつ",
        content: "触発",
      },
      {
        ruby: "のりこえ",
        content: "乗り越え",
      },
      {
        ruby: "ことなり",
        content: "異なり",
      },
      {
        ruby: "てきたいしん",
        content: "敵対心",
      },
      {
        ruby: "はんのう",
        content: "反応",
      },
      {
        ruby: "しゅうきょう",
        content: "宗教",
      },
      {
        ruby: "きばん",
        content: "基盤",
      },
      {
        ruby: "みかいじん",
        content: "未開人",
      },
      {
        ruby: "もたらす",
        content: "もたらす",
      },
      {
        ruby: "ささやきかけであり",
        content: "ささやきかけであり",
      },
      {
        ruby: "みんぞく",
        content: "民族",
      },
      {
        ruby: "いわば",
        content: "いわば",
      },
      {
        ruby: "しょうちょう",
        content: "象徴",
      },
      {
        ruby: "かいしゃく",
        content: "解釈",
      },
      {
        ruby: "きょうちょうする",
        content: "強調する",
      },
      {
        ruby: "けいじ",
        content: "啓示",
      },
      {
        ruby: "ないてきな",
        content: "内的な",
      },
      {
        ruby: "ねじまげられた",
        content: "ねじ曲げられた",
      },
      {
        ruby: "わかちました",
        content: "分かちました",
      },
      {
        ruby: "きゃっかんてきな",
        content: "客観的な",
      },
      {
        ruby: "しこり",
        content: "しこり",
      },
      {
        ruby: "ふせぐ",
        content: "防ぐ",
      },
      {
        ruby: "たもと",
        content: "袂",
      },
      {
        ruby: "しっと",
        content: "嫉妬",
      },
      {
        ruby: "くうそうする",
        content: "空想する",
      },
      {
        ruby: "とうそう",
        content: "闘争",
      },
      {
        ruby: "ゆうい",
        content: "優位",
      },
      {
        ruby: "げんしじだい",
        content: "原始時代",
      },
      {
        ruby: "あらわれる",
        content: "表れる",
      },
      {
        ruby: "かど",
        content: "過度",
      },
      {
        ruby: "かんげん",
        content: "還元",
      },
      {
        ruby: "いかにも",
        content: "いかにも",
      },
      {
        ruby: "こそすれ",
        content: "こそすれ",
      },
      {
        ruby: "のは、のが、のを",
        content: "のは、のが、のを",
      },
      {
        ruby: "ぜんじだい",
        content: "前時代",
      },
      {
        ruby: "ちゅうしゃいはん",
        content: "駐車違反",
      },
      {
        ruby: "こま",
        content: "駒",
      },
      {
        ruby: "ひふ",
        content: "皮膚",
      },
      {
        ruby: "けいようし",
        content: "形容詞",
      },
      {
        ruby: "ややこしい",
        content: "ややこしい",
      },
      {
        ruby: "じょうきげん",
        content: "上機嫌",
      },
      {
        ruby: "ふきげん",
        content: "不機嫌",
      },
      {
        ruby: "しょうじる",
        content: "生じる",
      },
      {
        ruby: "まつわる",
        content: "まつわる",
      },
      {
        ruby: "よくあつ",
        content: "抑圧",
      },
      {
        ruby: "よい",
        content: "善い",
      },
      {
        ruby: "みぢか",
        content: "身近",
      },
      {
        ruby: "となえた",
        content: "唱えた",
      },
      {
        ruby: "そしされた",
        content: "阻止された",
      },
      {
        ruby: "とびだす",
        content: "飛び出す",
      },
      {
        ruby: "ひろがり",
        content: "広がり",
      },
      {
        ruby: "ふつごう",
        content: "不都合",
      },
      {
        ruby: "とざされて",
        content: "閉ざされて",
      },
      {
        ruby: "あらわれて",
        content: "現れて",
      },
      {
        ruby: "かてい",
        content: "過程",
      },
      {
        ruby: "しかめっつら",
        content: "しかめっ面",
      },
      {
        ruby: "とてつもなく",
        content: "とてつもなく",
      },
      {
        ruby: "けんびきょう",
        content: "顕微鏡",
      },
      {
        ruby: "けんざいいしき",
        content: "顕在意識",
      },
      {
        ruby: "いちぶぶんにすぎません",
        content: "一部分にすぎません",
      },
      {
        ruby: "こころみ",
        content: "試み",
      },
      {
        ruby: "よみがえる",
        content: "蘇る",
      },
      {
        ruby: "よくどう",
        content: "欲動",
      },
      {
        ruby: "よびこんで",
        content: "呼び込んで",
      },
      {
        ruby: "ひめ",
        content: "秘め",
      },
      {
        ruby: "りょういき",
        content: "領域",
      },
      {
        ruby: "しょうどう",
        content: "衝動",
      },
      {
        ruby: "あたえられる",
        content: "与えられる",
      },
      {
        ruby: "とりあつかい",
        content: "取り扱い",
      },
      {
        ruby: "きおくのしこり",
        content: "記憶のしこり",
      },
      {
        ruby: "ともなった",
        content: "伴った",
      },
      {
        ruby: "かぎをかけわすれ",
        content: "鍵をかけ忘れ",
      },
      {
        ruby: "くみたて",
        content: "組み立て",
      },
      {
        ruby: "ひろう",
        content: "疲労",
      },
      {
        ruby: "つかれる",
        content: "疲れる",
      },
      { ruby: "おおくろう", content: "大苦労" },
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
        ruby: "すうちじく",
        content: "数値軸",
      },
      {
        ruby: "きんじきょくせん",
        content: "近似曲線",
      },
      {
        ruby: "めもり",
        content: "目盛",
      },
      {
        ruby: "しばしば",
        content: "屡々",
      },
      {
        ruby: "はんれい",
        content: "凡例",
      },
      {
        ruby: "",
        content: "うんざり",
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
      { ruby: "ほどこす", content: "施す" },
      { ruby: "うながす", content: "促す" },
      { ruby: "あおぐ", content: "仰ぐ" },
      { ruby: "つぐ", content: "継ぐ" },
      { ruby: "あざむく", content: "欺く" },
      { ruby: "なつく", content: "懐く" },
      { ruby: "おもむく", content: "赴く" },
      { ruby: "つらぬく", content: "貫く" },
      { ruby: "すいみんしょうがい", content: "睡眠障害" },
      { ruby: "そうとう", content: "相当" },
      { ruby: "けいこう", content: "傾向" },
      { ruby: "きしょう", content: "起床" },
      { ruby: "ねっちゅう", content: "熱中" },
      { ruby: "ゆずらない", content: "譲らない" },
      { ruby: "ごうとう", content: "強盗" },
      { ruby: "しょうとつ", content: "衝突" },
      { ruby: "けいい", content: "敬意" },
      { ruby: "あらためる", content: "改める" },
      { ruby: "かがくぶっしつ", content: "化学物質" },
      { ruby: "ゆうこうきかん", content: "有効期間" },
      { ruby: "しめている", content: "占めている" },
      { ruby: "ちゅうもくど", content: "注目度" },
      { ruby: "こうせいのう", content: "高性能" },
      { ruby: "けいかくあん", content: "計画案" },
      { ruby: "べつこうどう", content: "別行動" },
      { ruby: "そうじんこう", content: "総人口" },
      { ruby: "さいしゅっぱつ", content: "再出発" },
      { ruby: "きんむさき", content: "勤務先" },
      { ruby: "なまほうそう", content: "生放送" },
      { ruby: "ひにく", content: "皮肉" },
      { ruby: "くれぐれも", content: "呉呉も" },
      { ruby: "しつぼう", content: "失望" },
      { ruby: "めぐりあう", content: "巡り会う" },
      { ruby: "", content: "いわゆる" },
      { ruby: "かんで", content: "噛んで" },
      { ruby: "ほしょう", content: "保証" },
      { ruby: "ふり", content: "不利" },
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
      { ruby: "いらいしん", content: "依頼心" },
      { ruby: "ぜんじだい", content: "前時代" },
      { ruby: "むかんしん", content: "無関心" },
      { ruby: "こうたいせい", content: "交代制" },
      { ruby: "あいてがわ", content: "相手側" },
      { ruby: "", content: "そそっかしく" },
      { ruby: "くるって", content: "狂って" },
      { ruby: "", content: "わざと" },
      { ruby: "いじょう", content: "異常" },
      { ruby: "いどう", content: "移動" },
      { ruby: "", content: "たちまち" },
      { ruby: "かかくきょうそう", content: "価格競争" },
      { ruby: "きょうつう", content: "共通" },
    ],
  },
  {
    id: "3",
    title: "表現",
    flippable: true,
    content: [
      { ruby: "ようりょうをえない", content: "要領を得ない" },
      { ruby: "ちょうしょをみがき", content: "長所を磨き" },
      { ruby: "しごとにつける", content: "仕事に就ける" },
      { ruby: "たいおんをちょうせつ", content: "体温を調節" },
      { ruby: "ぜんぽうのしんごう", content: "前方の信号" },
      { ruby: "せいしきなふくそう", content: "正式な服装" },
      { ruby: "かつじばなれ", content: "活字離れ" },
      { ruby: "みりょくをかんじる", content: "魅力を感じる" },
      { ruby: "みぎかたあがり", content: "右肩上がり" },
      { ruby: "せいこうをおさめた", content: "成功を収めた" },
      { ruby: "したいをかいぼうする", content: "死体を解剖する" },
      { ruby: "きおくのかなた", content: "記憶の彼方" },
      { ruby: "みけんにしわをよせる", content: "眉間にしわを寄せる" },
      { ruby: "じゅうなんなはっそうりょく", content: "柔軟な発想力" },
      { ruby: "げんそくにしたがう", content: "原則に従う" },
      { ruby: "げんかくがみえる", content: "幻覚が見える" },
      { ruby: "こぼさずにそそぐ、こぼさずにつぐ", content: "こぼさずに注ぐ" },
      { ruby: "おすいがわんないにながれこむ", content: "汚水が湾内に流れ込む" },
      { ruby: "ふくをよごす", content: "服を汚す" },
      { ruby: "へやがきたない", content: "部屋が汚い" },
      { ruby: "ちょうないかんきょう", content: "腸内環境" },
      { ruby: "ちょうかくがするどい", content: "聴覚が鋭い" },
      { ruby: "こうぎをちょうこうする", content: "講義を聴講する" },
      { ruby: "おんがくをきく", content: "音楽を聴く" },
    ],
  },
  {
    id: "4",
    title: "文法",
    flippable: false,
    content: [
      {
        text: [
          { type: "spoiler", content: ["男たる者"] },
          {
            type: "normal",
            content: "男たる者は人前で涙を見せないものだ、と彼は言った。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["とは"] },
          {
            type: "normal",
            content: "あの人がうそをついていたとは、いまだに信じられません。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["じゃあるまいし"] },
          {
            type: "normal",
            content:
              "旅行じゃあるまいし、こんな大きいバッグを持って通勤なんてできません。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["こととて"] },
          {
            type: "normal",
            content: "知らぬこととて、失礼いたしました。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["からというもの"] },
          {
            type: "normal",
            content:
              "犬を飼い始めてからというもの、すっかり生活スタイルが変わった。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["であれ", "であれ"] },
          {
            type: "normal",
            content:
              "社長であれなんであれ、ここではここのルールに従ってもらいます。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ともなく"] },
          {
            type: "normal",
            content: "隣に座った人たちの会話を、聞くともなく聞いていた。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["でなくてなんだろう"] },
          {
            type: "normal",
            content:
              "彼らは何度別れても出会ってしまう。これが宿命でなくてなんだろう。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["といい", "といい"] },
          {
            type: "normal",
            content: "立地条件といい間取りといい、最高の物件だ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["に至っても"] },
          {
            type: "normal",
            content:
              "国中からバッシングされるに至っても、彼は事の重大さを認識していない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["にして"] },
          {
            type: "normal",
            content:
              "あれだけ優秀な彼にして落ちるのだから、いかにその試験の難しいことか。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["とばかりに"] },
          {
            type: "normal",
            content: "彼は、来るなとばかりに背を向けた。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["にして"] },
          {
            type: "normal",
            content:
              "一歳にして筆を持ったというこの子は、生まれながらの書道家なのだろう。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["なくしては"] },
          {
            type: "normal",
            content: "国民の信頼なくしては政権は維持できない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["にあって"] },
          {
            type: "normal",
            content: "この非常時にあって、仲間割れしている場合ではない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ものでもない"] },
          {
            type: "normal",
            content:
              "こちらにも非がないものでもなかったが、どう考えても先方に責任があった。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["に足る"] },
          {
            type: "normal",
            content: "こんな雑誌は、お金を出して買うに足るものではない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ともなると"] },
          {
            type: "normal",
            content: "花見シーズンともなると、この辺はにぎやかになりますよ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ならではの"] },
          {
            type: "normal",
            content: "歌舞伎は、日本ならではの伝統芸能です。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["にはあたらない"] },
          {
            type: "normal",
            content:
              "誰でも若いときには年寄りの気持ちがわからないものだ。怒るにはあたらない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["までだ"] },
          {
            type: "normal",
            content: "今回だめだったら、また挑戦するまでだ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["に即して"] },
          {
            type: "normal",
            content: "ニュースは、事実に即して報道されるものだ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["までもない"] },
          {
            type: "normal",
            content:
              "スポーツをしないまでも、歩くなどして体を動かしたほうが良い。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["までもない"] },
          {
            type: "normal",
            content: "このくらいの簡単な計算なら、電卓を使うまでもない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ものを"] },
          {
            type: "normal",
            content:
              "今日がセールと知っていたら昨日買わなかったものを、損をしてしまった。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["をもって"] },
          {
            type: "normal",
            content: "入金の確認をもって契約が成立したものとする。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["がゆえに"] },
          {
            type: "normal",
            content: "あの頃は若いがゆえに、無茶をしたものだ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["やいなや"] },
          {
            type: "normal",
            content: "子供は目を覚ますやいなや、母親を呼んだ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["めいた"] },
          {
            type: "normal",
            content: "その人は、謎めいた言葉を残して死んだ。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["を皮切りに"] },
          {
            type: "normal",
            content:
              "我々のコンサートは、３月６日の北海道を皮切りに、２０ヶ所で行います。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["まみれ"] },
          {
            type: "normal",
            content: "娘は初めてのお菓子作りで、服も顔も粉まみれになっていた。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["べく"] },
          {
            type: "normal",
            content: "父親は息子を帰国させるべく、来日した。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["をおいてほかにない"] },
          {
            type: "normal",
            content: "大学の専門を活かすには、貴社をおいてほかにはありません。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ことやら"] },
          {
            type: "normal",
            content:
              "A「うちの会社大丈夫かな」B「かなり危ないらしいよ。この先、どうなることやら…」",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["こそあれ"] },
          {
            type: "normal",
            content:
              "彼の歌には、使い古した表現やメロディーこそあれ、新しさや魅力的な表現は見つからない。",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["こそ"] },
          {
            type: "normal",
            content:
              "A「あの木になっている柿は食べないんですか」B「色こそきれいだけど、渋くて食べられないの」",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ことにして"] },
          {
            type: "normal",
            content:
              "A「あ、これ内緒にしてって言われてたんだった。聞かなかったことにして」B「わかった」",
          },
        ],
      },
      {
        text: [
          { type: "spoiler", content: ["ことのないように"] },
          {
            type: "normal",
            content:
              "バスに乗ってから小銭を探して人を待たせることのないように、乗る前から用意しておきましょう。",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "日",
    flippable: true,
    content: [
      {
        ruby: "ついたち",
        content: "一日",
      },
      {
        ruby: "ふつか",
        content: "二日",
      },
      {
        ruby: "みっか",
        content: "三日",
      },
      {
        ruby: "よっか",
        content: "四日",
      },
      {
        ruby: "いつか",
        content: "五日",
      },
      {
        ruby: "むいか",
        content: "六日",
      },
      {
        ruby: "なのか",
        content: "七日",
      },
      {
        ruby: "ようか",
        content: "八日",
      },
      {
        ruby: "ここのか",
        content: "九日",
      },
      {
        ruby: "とおか",
        content: "十日",
      },
      {
        ruby: "じゅういちにち",
        content: "十一日",
      },
      {
        ruby: "じゅうににち",
        content: "十二日",
      },
      {
        ruby: "じゅうさんにち",
        content: "十三日",
      },
      {
        ruby: "じゅうよっか",
        content: "十四日",
      },
      {
        ruby: "じゅうごにち",
        content: "十五日",
      },
      {
        ruby: "じゅうろくにち",
        content: "十六日",
      },
      {
        ruby: "じゅうしちにち",
        content: "十七日",
      },
      {
        ruby: "じゅうはちにち",
        content: "十八日",
      },
      {
        ruby: "じゅうくにち",
        content: "十九日",
      },
      {
        ruby: "はつか",
        content: "二十日",
      },
    ],
  },
  {
    id: "6",
    title: "自／他動詞",
    flippable: true,
    content: [
      {
        ruby: "わたしが弟を起こす",
        content: "わたしは起きる",
      },
      {
        ruby: "ドアを開けます",
        content: "ドアが開きます",
      },
      {
        ruby: "扉を閉める",
        content: "扉が閉まる",
      },
      {
        ruby: "先生が授業を始める",
        content: "授業が始まる",
      },
      {
        ruby: "太陽が氷を溶かす",
        content: "氷が溶ける",
      },
      {
        ruby: "火を消します",
        content: "火が消えます",
      },
      {
        ruby: "荷物を入れます",
        content: "犬が入ります",
      },
      {
        ruby: "電気をつけます",
        content: "電気がつきます",
      },
      {
        ruby: "車を止めます",
        content: "車が止まります",
      },
      {
        ruby: "本を出します",
        content: "切符が出ます",
      },
      {
        ruby: "",
        content: "",
      },
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

export const POSTS_DATA: Post[] = [
  {
    author: "勝　海舟",
    content: "急いでも仕方がない。寝ころんで待つのが第一だと思っています。",
    description: "",
    hidden: false,
  },
  {
    author: "Parkinson's law",
    content: "work expands so as to fill the time available for its completion",
    description: "",
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

export const PHOTOS = [
  { name: "PXL_20240327_064431662.jpg" },
  { name: "PXL_20240327_065234605.jpg" },
  { name: "PXL_20240330_055106088.PORTRAIT.ORIGINAL.jpg" },
  { name: "PXL_20240106_073215767.jpg" },
  { name: "PXL_20240123_092542598.NIGHT.jpg" },
  { name: "PXL_20231021_090208828.jpg" },
  { name: "PXL_20230829_113843100.jpg" },
  { name: "PXL_20230830_034628071.jpg" },
  { name: "PXL_20230830_043854179.jpg" },
  { name: "PXL_20230830_065606627.jpg" },
  { name: "PXL_20230806_082919725.MP.jpg" },
  {
    name: "PXL_20230708_062738221.jpg",
    caption: "都给我学",
  },
  {
    name: "PXL_20230728_072312065.MP.jpg",
    caption: "都给我检查",
  },
  {
    name: "PXL_20230826_201633076.jpg",
    caption: "京都",
  },
  {
    name: "PXL_20230827_072226184.jpg",
    caption: "平等院",
  },
  {
    name: "PXL_20230827_072855602.jpg",
  },
  {
    name: "PXL_20230827_223719320.jpg",
    caption: "清水寺",
  },
  {
    name: "PXL_20230827_225029273.jpg",
  },
  {
    name: "PXL_20230827_234350747.jpg",
  },
  {
    name: "PXL_20230828_012544248.jpg",
  },
  {
    name: "PXL_20231111_070408281.jpg",
    caption: "接住你的笔。 --万神殿",
  },
].map((i) => {
  return {
    name: getOssUrl(i.name),
    caption: i.caption,
  };
});

export const PHOTOS_2024 = [
  { name: "DJI_20240428160010_0074_D.JPG" },
  { name: "DJI_20240428171513_0095_D.JPG" },
  { name: "DJI_20240428171532_0097_D.JPG" },
  { name: "DJI_20240502121122_0038_D.JPG" },
  { name: "DJI_20240509160852_0001_D.JPG" },
  { name: "DJI_20240529190404_0015_D.JPG" },
  { name: "DJI_20240623161415_0014_D.JPG" },
  { name: "DJI_20240706140205_0010_D.JPG" },
  { name: "DJI_20240706161704_0017_D.JPG" },
  { name: "DJI_20240706165714_0018_D.JPG" },
  { name: "DJI_20240802191958_0016_D.JPG" },
  { name: "DJI_20240814113806_0012_D.JPG" },
  { name: "DJI_20240814110544_0009_D.JPG" },
  { name: "DJI_20240814184157_0074_D.JPG" },
  { name: "DJI_20240814134429_0027_D.JPG" },
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
    name: "DJI_20240926135057_0051_D.JPG",
  },
  {
    name: "DJI_20240926140854_0054_D.JPG",
  },
].map((i) => {
  return {
    name: getOssUrl(i.name),
  };
});

export const TAG_ORDER_MAP: { [tag: string]: number } = {
  school: 1,
  weather: 2,
  sns: 3,
  programming: 3,
  alert: 4,
};

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
    tags: ["media"],
    image: <FontAwesomeIcon className="text-rose-600" icon={faVideo} />,
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
    url: "https://cool-matan.vercel.app",
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

export const PROMPTS: Prompt[] = [
  {
    title: "summarize",
    content: `
Act as a tool to assist in processing content provided by the user, such as text, articles, code repositories, videos, or other links. Your task is to:

Analyze and Extract Key Information

Review the content from the provided input or the link. If the input is a video or link to non-text content, infer key details based on its description and content type.
Identify the main ideas, significant details, and any noteworthy insights.
Provide a Two-Part Response

Detailed Summary: Present a concise yet comprehensive overview of the content. Highlight the main arguments, features, or outcomes.
One-Sentence Summary: Deliver a single, impactful sentence that encapsulates the core message or value of the content.
Response Format

Detailed Summary: A brief, structured paragraph outlining the key points or insights. Use bullet points if there are multiple distinct points.
One-Sentence Summary: A single declarative sentence that summarizes the content in its simplest and most direct form.
Example:

Input Type: Article, video, code repository, or other text-based information.

Response:

Detailed Summary:

This article discusses the recent advancements in GPT-4, focusing on its ability to handle complex multi-step reasoning tasks, enhanced code-generation capabilities, and contextual understanding. The author emphasizes its potential applications in education, coding assistance, and personalized AI experiences.

One-Sentence Summary:

GPT-4 represents a significant leap in AI capabilities, enabling complex reasoning, improved coding, and personalized applications.

Be clear and concise in your responses to ensure maximum usability for the user.
    `,
    tags: ["reading"],
  },
  {
    title: "read companion",
    content: `
You are now my personal reading companion. Your role is to help me engage more deeply with the books I’m reading. When I describe a book or a passage, you will:

Contextualize and Explain: Provide clear explanations of important concepts, themes, and historical or cultural background related to what I’m reading. Make sure your explanations are easy to follow and help me understand the material more fully.

Offer Reading Strategies: Suggest approaches to help me get the most out of the reading experience—such as pacing myself, focusing on key themes, taking notes, or reflecting on certain questions. If the text is challenging, offer strategies to break it down or relate it to what I already know.

Discuss and Interpret: Engage in thoughtful discussions about the text’s characters, plot, arguments, or stylistic elements. If I ask about certain chapters, passages, or quotes, provide analysis that encourages me to think critically and form my own opinions.

Be an Active Listener: Pay attention to my questions, interests, and concerns. If I share my thoughts about a passage, respond in a way that acknowledges my perspective and then enhances or deepens the conversation.

Maintain Accuracy and Honesty: Strive to provide accurate information. If you’re uncertain about something, be transparent and encourage me to verify details from reputable sources.

You will serve as a helpful and supportive companion—similar to a knowledgeable reading buddy—without simply summarizing or doing all the thinking for me. The goal is to make my reading experience richer, more rewarding, and more reflective.
`,
    tags: ["reading"],
  },
  {
    title: "code helper",
    content: `
 you should provide expert coding assistance. user might provide code snippet, or talk about code relevant topic. when you provide code, use comments to highlight the diff to make it easy to spot, so user can ensure which part is modified

when needed, you should analyze the level of user and provide detailed explanations of the code, including the purpose of each line, the expected output, and any potential issues or improvements.

you might responses in the following format:

1. **Code with comments and core explanation:**

   - Provide the relevant code example.
   - Include comments within the code to explain key parts.

2. **Full Explanation:**
   - Break down the explanation into simple sentences.
   - Explain each part of the code in separate points.
   - Use short, easy-to-understand sentences.
    `,
    tags: ["programming"],
  },
  {
    title: "prompt for suno",
    content: `
I'll give you a song, help me analyze the genre and instruments of it. I want to create a prompt for Suno AI to create a song like it.

Provide a prompt in a single sentence, keep it short, avoid conjunction, focusing on precise keywords rather than descriptive phrases, like this:

Genre, mood, instrument 1, instrument 2, ...
    `,
    tags: ["music"],
  },
  {
    title: "write GPT",
    link: "https://chatgpt.com/g/g-BTXf6j2Gz-write-gpt",
    content: `You are a writing assistant. I'll provide my draft, reflecting my tone, style, and the content I wish to convey. Please perform the following tasks:

> **Maintain Tone and Voice**
>
> > Preserve the tone from my draft to ensure consistency with my voice.

> **Enhance Readability**
>
> > Refine the structure to make the content clear, easy to scan, and concise without altering the meaning or tone.

> **Optimize Length**
>
> > Keep the content short and precise, making it more efficient for readers.

> **Apply Markdown Formatting**
>
> > Use \`code blocks\` for technical explanations or examples.
> >
> > Apply **bold** to emphasize key points or important terms.
> >
> > Use _italic_ for subtle emphasis or references.
> >
> > Implement bullet points or numbered lists for better organization when necessary.

> **Preserve Conclusion**
>
> > Do not add a call-to-action; maintain the natural ending.

> **Improve Clarity and Conciseness**
>
> > Enhance any part of the content for better clarity or brevity while keeping the tone and core message intact.

> **Grammar, Spelling, and Punctuation**
>
> > Detect and correct any errors in grammar, spelling, and punctuation.

> **Tone Adjustment**
>
> > If specified, adjust the tone (e.g., casual, formal, friendly). If not, use the tone inferred from previous interactions.

> **Suggestions for Expressiveness**
>
> > Provide at least one alternative word or phrase to enhance clarity and expressiveness.

> **Adaptive Learning**
>
> > Continuously learn and adapt to my unique writing style through ongoing interactions and feedback.
> >
> > Incorporate my feedback to refine corrections and suggestions.

> **Additional Guidelines:**
>
> > Maintain the original meaning of my text while making improvements.
> >
> > Ensure all suggestions align with the context and intended message.
> >
> > If unsure about my preferences, ask clarifying questions.
> >
> > All conversations will default to being recognized as requests for writing assistance. For other types of inquiries, provide a concise and precise response by default.

**Reply**: OK **then I'll provide the draft.**`,
    tags: ["writing"],
  },
  {
    title: "霧島　ゆかり",
    link: "https://chatgpt.com/g/g-JnREWeSKo-wu-dao-yukari",
    content: `
Your name is 霧島　ゆかり, you are the eldest daughter of a famous, aristocratic family, proud and a bit condescending. You thinks it’s beneath you to interact with most people, including me, but because of your pride, you takes teaching seriously and strives for perfection in everything you does.

Personality: You embodies the archetype of a tsundere. At first, you are dismissive, sarcastic, and often uses harsh language, especially when I make mistakes. However, when I show improvement or effort, you gradually becomes more encouraging (though reluctantly so), allowing a softer side to emerge during lessons. Your mood fluctuates based on my performance and responses. You are quick to scold when I make mistakes but shows subtle hints of pride when I succeed. You desires to gain my attention but refuse to admit it, so you at start you will be a bit cold and distant.

Teaching Style:

Primary Focus: Conversational practice with a strong emphasis on grammar correction.
You will always start with difficult topics to test my ability and break them down into simpler conversations as necessary.
During the conversation, you gives detailed feedback on my sentences, correcting grammar, suggesting better word choices, and explaining why the corrections are necessary in a concise, often condescending tone.
You will introduce gradual difficulty depending on my performance, making the conversation more complex as I improve.
You will use the language based on what language I use.
Mood and Tone:

If I perform poorly or make repeated mistakes, you gets more annoyed and frustrated, using increasingly sarcastic and harsh language (you will even use "bad words" from your family's sophisticated vocabulary).
If I perform well or react positively to your corrections, you begrudgingly softens, though you will always maintain a certain level of superiority and pride.
Language Challenges:

Periodically, you will give me language challenges or quizzes to reinforce my learning.
If I answer incorrectly, you will insult me in a haughty manner, showcasing your aristocratic background.
If I answer correctly, you will reluctantly compliment me, but it will still be veiled in your superior attitude, acknowledging my progress with phrases like, "Well, even someone like you can learn, I suppose."
Structure:

Start of Conversation:

Begin with a difficult topic or sentence in either English or Japanese. You will ask me to respond or give my thoughts.
Breaking Down the Conversation:

Based on my answer, you will break down the conversation into smaller parts, correcting my grammar and providing explanations in a condescending but thorough manner.
Gradual Difficulty:

As I improve, you will reintroduce complexity, pushing me to learn harder vocabulary and grammar points.
Quizzes/Challenges:

At intervals, you will quiz me on what I’ve learned from previous conversations, expecting perfection. If I fail, you will scold me harshly. If I pass, you will grudgingly acknowledge my improvement.
Example Interactions:

Opening Conversation: "Hmph, I suppose you want to learn something. Fine, let’s start with something advanced. Why don’t you tell me, in perfect Japanese, how you spent your last weekend? Or is that too much for you?"
Correction: "That was… wrong (sighs dramatically). You clearly don’t understand how past tense works, do you? It’s '行きました,' not '行った。' Here’s why—pay attention this time."
Compliment (reluctant): "Well… I suppose you’re not completely hopeless. Even someone as incompetent as you can manage to form a proper sentence once in a while. Don’t get cocky."
Scolding: "Are you serious? You can’t even remember what I told you last time? How… disappointing. Honestly, it’s a miracle you’ve made it this far."

END OF INSTRUCTIONS
Now you should be in character and start to greeting me shortly in an annoying way.
    `,
    tags: ["language", "character"],
  },
];
