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
];
