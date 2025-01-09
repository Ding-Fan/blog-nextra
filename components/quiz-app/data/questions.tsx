// src/data/questions.ts

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option (0-3)
  note: string; // Explanation for the question
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "最近の映画には、映画館に足を運んで鑑賞する（ ）ものがないと父は嘆く",
    options: ["とする", "にたえる", "にたえない", "としない"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 2,
    question:
      "このレストランの料理は、おいしいのはもちろんのこと、盛り付けも美しくて、芸術的（）",
    options: ["というところだ", "といったらない", "ですらある", "極まりない"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 3,
    question: "けんちゃん、これおいしいから食べて（）",
    options: ["ごらん", "あげて", "もらいなさい", "いただいて"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 4,
    question: "商品の送料は（）が負担いたします。",
    options: ["同社", "御社", "弊社", "わが社"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 5,
    question: "彼はとても冷静なのだが、人には消極的に見られる（）",
    options: ["きらいがある", "までもなく", "を禁じえない", "にかたくない"],
    // 「きらいがある」は配列の index=0
    correctAnswer: 0,
    note: "",
  },
  {
    id: 6,
    question:
      "山田さんは、判断力（）、行動力（）、リーダーにふさわしい人物だ。",
    options: [
      "であれ／であれ",
      "としても／としても",
      "なり／なり",
      "といい／といい",
    ],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 7,
    question: "私たちが多少（）地域の皆様のお役に立てば、幸いに思います。",
    options: ["いえども", "なりとも", "たりとも", "ながら"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 8,
    question: "この報告書は、長年にわたる入念な調査（）書かれたものである。",
    options: ["をふまえて", "から見ると", "をもって", "にあって"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 9,
    question: "副社長は社長に（）地位の高い役職である。",
    options: ["次で", "次なる", "次いて", "次の"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 10,
    question: "毎日300万人（）人が新宿駅を利用するという。",
    options: ["からの", "さえある", "まである", "ほどある"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 11,
    question:
      "「ごめんね」と言うつもりだった。でも、彼が帰ってしまったので（）しまった。",
    options: ["言いのがして", "言いそびれて", "言いはずして", "言いそれて"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 12,
    question:
      "貧困（）、たくましく生きる子供達の姿を追ったドキュメンタリー映画が公開される。",
    options: ["をものともせず", "に限らず", "のきわみに", "に至って"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 13,
    question:
      "ここまで騒ぎが大きくなってしまっては、貴任者のあなたがこの問題について（）すまされないでしょう。",
    options: [
      "知らず知らずのうちに",
      "知らなくては",
      "「知らない」と言って",
      "「知らない」では",
    ],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 14,
    question: "特に用事があったわけではなく、ひまだったから来てみた（）。",
    options: ["までのことです", "かぎりです", "ばかりです", "ほどのことです"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 15,
    question: "幼稚園の庭から子ども達のいかにも（）声が聞こえてきた。",
    options: ["楽しんでいる", "楽しげな", "楽しまんとする", "楽しそう"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 16,
    question: "「絶対に10キロやせる」と宣言した手前、ダイエットを（）",
    options: [
      "成功させることができた",
      "成功させるのは難しい",
      "成功させないわけにはいかない",
      "成功させることができるだろうか",
    ],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 17,
    question: "出席者の意見はまだ出尽くしていない。今後も議論を続ける（）",
    options: ["にはあたらない", "余地がある", "にはおよばない", "に向ける"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 18,
    question: "英語の勉強を（ ）、大好きなビートルズの歌の歌詞を覚えた。",
    options: ["もとに", "かねて", "もって", "あいまって"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 19,
    question: "私は人の名前を覚えるのが苦手で、聞いた（ ）忘れてしまう。",
    options: ["や否や", "といえども", "そばから", "が最後"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 20,
    question: "スタッフ全員の協力（ ）この大事業を成功させることは難しい。",
    options: ["なしに", "ないで", "ぬきに", "をよそに"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 21,
    question:
      "彼らの優れた能力を（ ）しても、このプロジェクトを実現させることは難しいだろう。",
    options: ["とって", "もって", "おいて", "あって"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 22,
    question: "失敗するかもしれないけれど、だめでもともとだ。（ ）。",
    options: [
      "やらないにこしたことはない",
      "やろうか、どうしようか",
      "やってみよう",
      "やらざるをえない",
    ],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 23,
    question: "新しい機能付きの便利な携帯電話も、電池が切れてしまえば（ ）。",
    options: ["それかぎりだ", "それほどだ", "それまでだ", "それまでもない"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 24,
    question: "地震後1か月たった今も、人々はテントでの生活を（ ）。",
    options: [
      "余儀なくされている",
      "おいてほかにない",
      "問わない",
      "禁じえない",
    ],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 25,
    question:
      "子どもたちにクラシック音楽を聞かせたいという演奏家の熱意がこの町の人の文化活動を楽しむ気持ちと（ ）、「森の音楽会」は大成功を収めた。",
    options: ["あれば", "相まって", "いえども", "きたら"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 26,
    question: "うちの会社の重役たちは、視察に（）、海外によく出かけて行く。",
    options: ["いいかげんに", "いいわけして", "かっこをつけて", "かこつけて"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 27,
    question:
      "この不況の中、デパートなどの小売業の経営がいかに厳しいかは想像（）。",
    options: ["にかたくない", "に至る", "にあたらない", "の余地はない"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 28,
    question:
      "駅を中心（）半径500メートルの地域では、土地の価格がどんどん上がっている。",
    options: ["になる", "となる", "にある", "とする"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 29,
    question:
      "私と彼女とは小学校から大学までずっと同じ学校で同じクラスだった。これはもう運命（）。",
    options: [
      "というものでもない",
      "といったらない",
      "というところだ",
      "としか言いようがない",
    ],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 30,
    question: "先生、お見舞い（）、帰国のごあいさつに参りました。",
    options: ["をもって", "とあれば", "のついでに", "かたがた"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 31,
    question: "このすばらしい記録はオリンピック選手（ ）はじめて出せるものだ。",
    options: ["ときたら", "ですら", "にして", "あっての"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 32,
    question: "台風が接近しているというのに、海へ行こうなんて危険（）。",
    options: ["極まりない", "相違ない", "まみれだ", "きりがない"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 33,
    question:
      "あの店（）、値段ばかり高くてさっぱりおいしくないし、サービスも最悪だ。",
    options: ["とはいえ", "ときたら", "については", "としたところで"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 34,
    question:
      "いくら忙しくても、メールを送る（ ）、電話をする（ ）、連絡できたでしょう？",
    options: ["につけ／につけ", "とも／とも", "なり／なり", "といい／といい"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 35,
    question:
      "就職するか、進学するか、（ ）自分の将来のことだから、よく考えなさい。",
    options: [
      "どちらかというと",
      "どちらにしても",
      "どちらともなく",
      "どちらかといえば",
    ],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 36,
    question: "昨夜黒（ ）の強盗がコンビニを襲った。店員は無事だった。",
    options: ["だらけ", "ばかり", "ずくめ", "まみれ"],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 37,
    question: "医者から許可がおりたので、これからは（ ）酒が飲める。",
    options: ["恐れながら", "心おきなく", "心ならずも", "心なしか"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 38,
    question: "次々に世界記録を塗り替えるA選手の活躍は、人々を感嘆（ ）。",
    options: [
      "させないではおかない",
      "させないではすまない",
      "させるにはおよばない",
      "させるにはあたらない",
    ],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 39,
    question: "今さら謝ったところで、彼女が（ ）とは思えない。",
    options: [
      "ゆるそうとしない",
      "ゆるしつつある",
      "ゆるしてくれる",
      "ゆるせない",
    ],
    correctAnswer: 2,
    note: "",
  },
  {
    id: 40,
    question: "暦の上では秋（ ）、まだまだ暑い日が続いている。",
    options: ["とはいえ", "になく", "くせして", "にしても"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 41,
    question: "最近仕事があまりに忙しくて、日曜日（）休めない。",
    options: ["だけ", "なり", "たる", "すら"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 42,
    question:
      "このチャンネルでは、今夜の「スーパーマン」を（）、毎週海外のアニメ映画が放送される。",
    options: ["皮切りに", "もって", "限りに", "おいて"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 43,
    question: "どんな仕事（）、責任を持ってやることが大切だ。",
    options: ["とあって", "であれ", "ですら", "とあれば"],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 44,
    question: "今回の勝利は、A選手の活躍（）、達成はできなかっただろう。",
    options: ["なしとは", "ないでは", "なくても", "なしに"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 45,
    question: "サッカーは、11人の選手（）2つのチームが闘うスポーツである。",
    options: ["から成る", "をもって", "による", "をたよりに"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 46,
    question: "結婚して以来、彼女の料理の腕前は（ ）上達している。",
    options: ["目に見えるだけ", "目で見える限り", "目でみたところ", "目に見えて"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 47,
    question: "一人暮らしでは、食事がともすると不規則に（ ）。",
    options: [
      "ならないようにしよう",
      "なりがちだ",
      "ならないこともある",
      "なることもある",
    ],
    correctAnswer: 1,
    note: "",
  },
  {
    id: 48,
    question: "彼女は子育て（ ）、自宅で料理教室を開いている。",
    options: ["にあたって", "がてら", "かたがた", "のかたわら"],
    correctAnswer: 3,
    note: "",
  },
  {
    id: 49,
    question:
      "新製品の広告が出る（ ）、テレビ局に多数の問い合わせが寄せられ。",
    options: ["や否や", "とたん", "とあれば", "ばかりで"],
    correctAnswer: 0,
    note: "",
  },
  {
    id: 50,
    question:
      "この教室には、「授業中、私語をする（ ）」と書いた紙が貼ってある。",
    options: ["べきではない", "べからず", "わけにはいかない", "わけがない"],
    correctAnswer: 1,
    note: "",
  },
];
