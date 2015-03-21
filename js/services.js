angular.module('starter.services', [])

.factory('Cards', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cards = [
{
"number"        : "0001",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "中隊長 ケイトー シカリウス",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "兵士. ウルトラマリーン.",
"text"          : "<strong>リアクション</strong>: このプラネットの敵ユニット１体が破壊されたとき、1[RESOURCE]を得る",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Diego Gisbert Llorens",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_1",
"imgback"       : ""

},{
"number"        : "0002",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ストラーケン大佐",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "兵士. カタチアン.",
"text"          : "あなたがコントロールするこのプラネットの<strong><em>兵士</em></strong>と<strong><em>戦士</em></strong>ユニットは +1 ATK を得る",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_2",
"imgback"       : ""

},{
"number"        : "0003",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ナズドレッグ",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "戦士. ウォーボス.",
"text"          : "あなたのコントロールするこのプラネットの他のユニットは ブルータル を得る <em>(ブルータル を持つユニットはダメージトークン１つにつき +1 ATK を得る)</em>",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alberto Bontempi",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_3",
"imgback"       : ""

},{
"number"        : "0004",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "高位ソーサラー ザラサー",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "サイカー. ティーンチ.",
"text"          : "<strong>インタラプト</strong>: このプラネットの敵ユニット１体にダメージが割り当てられるとき、そのダメージを１つ増やす",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_4",
"imgback"       : ""

},{
"number"        : "0005",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "パックマスター キス",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "戦士. サキュバス. ウィッチ.",
"text"          : "<strong>リアクション</strong>: このウォーロードがプラネットにコミットしたとき、カイメラトークン１体をこのプラネットの戦場に出す",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "none",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Diego Gisbert Llorens",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_5",
"imgback"       : ""

},{
"number"        : "0006",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "エルドラス スターベイン",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "サイカー. アライトック.",
"text"          : "<strong>リアクション</strong>: このウォーロードがプラネットにコミットしたとき、対象のウォーロードでないこのプラネットのユニット１体をエグゾーストする",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_6",
"imgback"       : ""

},{
"number"        : "0007",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "コマンダー シャドウサン",
"type"          : "ウォーロード ユニット",
"unique"        : "Yes",
"traits"        : "兵士. シャス=ウォ.",
"text"          : "<strong>リアクション</strong>: このウォーロードがプラネットにコミットしたとき, 印字されたコストが２以下の [TAU] アタッチメント または\"シャドウサンのステルス部隊\"を手札か捨て山からこのプラネットの適格なユニットに装備して戦場に出す",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_7",
"imgback"       : ""

},{
"number"        : "0008",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "シカリウスの精鋭",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ウルトラマリーン.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、対象の敵アーミー ユニット１体を隣接するプラネットに移動させそれに１ダメージを与える",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_8",
"imgback"       : ""

},{
"number"        : "0009",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "ケイトーの要塞",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>リアクション</strong>: 敵ユニット１体が破壊されたとき、このサポートをエグゾーストして同じプラネットにある対象の [SPACE MARINE] ユニット１体をレディにする",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Justin Adams",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_9",
"imgback"       : ""

},{
"number"        : "0010",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "シカリウスの憤怒",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>リアクション</strong>: [SPACE MARINE] ユニット１体がウォーロードでない敵ユニット１体に対し攻撃によってダメージを与えたとき、攻撃を受けたユニットを破壊する",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_10",
"imgback"       : ""

},{
"number"        : "0011",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "タラサールの嵐の剣",
"type"          : "アタッチメント",
"unique"        : "Yes",
"traits"        : "レリック. ウェポン.",
"text"          : "<strong><em>レリック</em></strong>はプレイヤー１枚制限\nユニーク ユニットに装備可能\n装備しているユニットは +1 ATK と アーマーベイン を得る<em>(このユニットが攻撃するとき相手はシールドカードを使用できない)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Sullivan",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_11",
"imgback"       : ""

},{
"number"        : "0012",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "第十中隊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. ウルトラマリーン.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Cave",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_12",
"imgback"       : ""

},{
"number"        : "0013",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "タクティカル スカッド カーディニス",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ウルトラマリーン.",
"text"          : "エリアエフェクト (1). <em>(このユニットが攻撃するとき、攻撃ダメージを与える代わりにエリアエフェクトダメージをこのプラネットにいる全ての敵ユニットに与えてもよい)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_13",
"imgback"       : ""

},{
"number"        : "0014",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "名誉司書官",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "サイカー. ウルトラマリーン.",
"text"          : "このプラネットに\"名誉司書官\"という名前ではないユニットをあなたがコントロールしている限り、敵ユニットはこのユニットを攻撃できない",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolaus Ingeneri",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_14",
"imgback"       : ""

},{
"number"        : "0015",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "ブラッドエンジェルの古参",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ブラッドエンジェル.",
"text"          : "このユニットがレディである間、「<strong>インタラプト</strong>: このユニットにダメージが割り当てられるとき、そのダメージを１点軽減する」を得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_15",
"imgback"       : ""

},{
"number"        : "0016",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "大胆な強襲部隊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ブラッドエンジェル.",
"text"          : "エリアエフェクト (2). <em>(このユニットが攻撃するとき、攻撃ダメージを与える代わりにエリアエフェクトダメージをこのプラネットにいる全ての敵ユニットに与えてもよい)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_16",
"imgback"       : ""

},{
"number"        : "0017",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "機動要塞ランドレイダー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 戦車. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nあなたがコントロールするこのプラネットの<strong><em>乗り物</em></strong>でないユニットは敵のカード能力の対象にならない",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "3",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_17",
"imgback"       : ""

},{
"number"        : "0018",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "ウルトラマリーン ドレッドノート",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. ウルトラマリーン. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "",

"attack"        : "8",
"hp"            : "8",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_18",
"imgback"       : ""

},{
"number"        : "0019",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "古参の同胞 マクソス",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "兵士. ウルトラマリーン.",
"text"          : "<strong>コンバットアクション</strong>: 手札にある [SPACE MARINE] ユニット１体の印字されたコストを支払い、このプラネットの戦場に出す",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_19",
"imgback"       : ""

},{
"number"        : "0020",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "熱心な新兵",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ウルトラマリーン. スカウト.",
"text"          : "<strong>アンブッシュ</strong><em>(あなたはこのカードをコンバットフェーズ中にデプロイしてもよい)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Gregory",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_20",
"imgback"       : ""

},{
"number"        : "0021",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "アイアンハンド テックマリーン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. アイアンハンド.",
"text"          : "このユニットはこのプラネットにいる敵ユニット１体につき１コマンドアイコンを得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_21",
"imgback"       : ""

},{
"number"        : "0022",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "レイヴンガード Speeder",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. レイヴンガード.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n飛行<em>(飛行を持たないユニットからのダメージを半減する)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_22",
"imgback"       : ""

},{
"number"        : "0023",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "Deathwing Guard",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ダークエンジェル. エリート.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "4",

"attack"        : "2",
"hp"            : "9",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Aidan Wilson",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_23",
"imgback"       : ""

},{
"number"        : "0024",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "ドロップポッドアサルト",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>コンバットアクション</strong>: 戦闘が起きているプラネットを１つ対象にとる。あなたのデッキの上から６枚を見て印字されたコストが３以下の [Space Marine] ユニット１体を探す。そのユニットを対象のプラネットの戦場に出し、残ったカードを好きな順番であなたのデッキの下に置く",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_24",
"imgback"       : ""

},{
"number"        : "0025",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "不屈の精神",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>リアクション</strong>: [SPACE MARINE] ユニット１体が攻撃によってダメージを割り当てられるとき、その全てのダメージを軽減する",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_25",
"imgback"       : ""

},{
"number"        : "0026",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "エクスターミナス",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>デプロイアクション</strong>: 指定したファーストプラネットでないプラネットにいるユニークでない全てのユニットを破壊する",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_26",
"imgback"       : ""

},{
"number"        : "0027",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "ゴドウィン製ボルター",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. ウェポン.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +1 ATK と +1 HP を得、攻撃するとき敵ユニットの飛行キーワードを無視する",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolaus Ingeneri",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_27",
"imgback"       : ""

},{
"number"        : "0028",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "アイアンヘイロー",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "レリック. ウォーギア.",
"text"          : "<strong><em>レリック</em></strong>はプレイヤー１枚制限\nユニーク ユニットに装備可能\n<strong>インタラプト</strong>: 装備しているユニット１体が攻撃によってダメージを割り当てられるとき、このアタッチメントをエグゾーストしてそのダメージを全て軽減する",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "2",
"commandicons"  : "",

"attack"        : " ",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Taylor Ingvarsson",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_28",
"imgback"       : ""

},{
"number"        : "0029",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "修道院要塞",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\n<strong>インタラプト</strong>: あなたが [SPACE MARINE] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Drummond",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_29",
"imgback"       : ""

},{
"number"        : "0030",
"setname"       : "Core Set",
"faction"       : "スペース マリーン",
"name"          : "聖なる墓所",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>リアクション</strong>: [SPACE MARINE] ユニット１体が戦場から捨て山に入ったとき, このサポートをエグゾーストしてそのユニットをあなたの手札に戻す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_30",
"imgback"       : ""

},{
"number"        : "0031",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ストラーケンのコマンドスカッド",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. カタチアン.",
"text"          : "<strong>インタラプト</strong>: このユニットが戦場から離れるとき、防衛軍兵トークン１体を同じプラネットの戦場に出す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_31",
"imgback"       : ""

},{
"number"        : "0032",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "オメガ=ゼロ展望台",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>リアクション</strong>: あなたがコマンドストラグルに勝利したとき、防衛軍兵トークン１体を同じプラネットの戦場に出す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Zachary Graves",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_32",
"imgback"       : ""

},{
"number"        : "0033",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "栄誉干渉",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>リアクション</strong>: ユニット１体が攻撃によってダメージを割り当てられるとき、同じプラネットの<strong><em>兵士</em></strong>または<strong><em>戦士</em></strong>ユニット１体を犠牲にしてそのダメージ全てを軽減する。それからX点のダメージを攻撃したユニットに与える。Xは犠牲にしたユニットの印字されたATKの値に等しい",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Taylor Ingvarsson",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_33",
"imgback"       : ""

},{
"number"        : "0034",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ストラーケンの狡猾",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "スキル.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +1 ATK を得る\n<strong>インタラプト</strong>: 装備しているユニットが戦場を離れたとき、３枚カードを引く",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_34",
"imgback"       : ""

},{
"number"        : "0035",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ラットリング デッドアイ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. 亜人.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_35",
"imgback"       : ""

},{
"number"        : "0036",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ケイディアの追撃砲部隊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. ケイディア.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>\n<strong>リアクション</strong>: このプラネットにいるあなたのコントロールするアーミー ユニット１体が戦場を離れたとき、このユニットをレディにする",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dan Scott",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_36",
"imgback"       : ""

},{
"number"        : "0037",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "認定異能者",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "サイカー.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "0",
"hp"            : "4",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_37",
"imgback"       : ""

},{
"number"        : "0038",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "レマン=ラス重戦車",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 戦車. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "4",

"attack"        : "4",
"hp"            : "6",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "David Nash",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_38",
"imgback"       : ""

},{
"number"        : "0039",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "モルディアン ヘルハウンド",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 戦車. モルディアン.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nエリアエフェクト (1). <em>(このユニットが攻撃するとき、攻撃ダメージを与える代わりにエリアエフェクトダメージをこのプラネットにいる全ての敵ユニットに与えてもよい)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_39",
"imgback"       : ""

},{
"number"        : "0040",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ヴァルキリー輸送攻撃機",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 輸送機.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n飛行<em>(飛行を持たないユニットからのダメージを半減する)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_40",
"imgback"       : ""

},{
"number"        : "0041",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "忠誠するオグリン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士.亜人.",
"text"          : "敵のイベントへの免疫",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_41",
"imgback"       : ""

},{
"number"        : "0042",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "マーキス大尉",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "兵士. 士官. ヴォストロヤ.",
"text"          : "<strong>アクション</strong>: このプラネットにいる [ASTRA MILITARUM] ユニット１体を犠牲にして対象のこのプラネットにいるウォーロードでないユニット１体をエグゾーストする(フェーズにつき１回しか使用できない)",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_42",
"imgback"       : ""

},{
"number"        : "0043",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "機動予見者の前兆",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "学者. テックプリースト.",
"text"          : "<strong>インタラプト</strong>: このユニットが戦場から離れるとき、 あなたのデッキの上から６枚を見て印字されたコストが２以下の [ASTRA MILITARUM] サポートカード１枚を探す。 そのカードをあなたのHQに出し、残ったカードを好きな順番であなたのデッキの下に置く",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_43",
"imgback"       : ""

},{
"number"        : "0044",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "懲罰部隊兵",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "徴収兵. 同盟.",
"text"          : "",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_44",
"imgback"       : ""

},{
"number"        : "0045",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "徴収歩兵",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "徴収兵.",
"text"          : "このユニットはあなたがコントロールするサポートカード１枚につき +2 ATK を得る",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "",

"attack"        : "0",
"hp"            : "5",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Andrius Anezin",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_45",
"imgback"       : ""

},{
"number"        : "0046",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "エリシアの強襲チーム",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. エリシア.",
"text"          : "<strong>インタラプト</strong>: あなたのコントロールする<strong><em>兵士</em></strong>または<strong><em>戦士</em></strong>ユニット１体が任意のプラネットの戦場から離れるとき、手札からこのユニットを同じプラネットの戦場に出す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_46",
"imgback"       : ""

},{
"number"        : "0047",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "先制弾幕",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>コンバットアクション</strong>: あなたがコントロールする同じプラネットの [ASTRA MILITARUM] ユニット３体までを対象にとる。フェーズ終了まで対象のユニットはレンジを得る<em>(レンジを持つユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "MichaÅ MiÅkowski",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_47",
"imgback"       : ""

},{
"number"        : "0048",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "抑圧射撃",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>コンバットアクション</strong>: あなたがコントロールするユニット１体をエグゾーストして対象の同じプラネットのウォーロードでないユニット１体をエグゾーストする",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_48",
"imgback"       : ""

},{
"number"        : "0049",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "敵対環境装備",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. アーマー.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +3 HP を得る",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_49",
"imgback"       : ""

},{
"number"        : "0050",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ボディガード",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "コンディション.",
"text"          : "あなたがコントロールするアーミー ユニットに装備可能\n<strong>強制リアクション</strong>: あなたがコントロールするこのプラネットのユニット１体が攻撃によってダメージを割り当てられるとき、装備しているユニットにそのダメージから１ダメージを再割り当てする",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_50",
"imgback"       : ""

},{
"number"        : "0051",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "インペリアル バンカー",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)\n</em><strong>インタラプト</strong>: あなたが [ASTRA MILITARUM] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_51",
"imgback"       : ""

},{
"number"        : "0052",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "ロッククリート バンカー",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "アップグレード.",
"text"          : "このカードが４以上のダメージを持つとき犠牲にする\n<strong>インタラプト</strong>: あなたがコントロールするユニット１体にダメージが割り当てられるとき、このサポートをエグゾーストしてこのサポートにそのダメージから１ダメージを再割り当てする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Zweifel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_52",
"imgback"       : ""

},{
"number"        : "0053",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "カタチアンの前哨",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>コンバットアクション</strong>: このサポートをエグゾーストして対象のユニット１体は、このフェーズの次の攻撃時に +2 ATK を得る",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_53",
"imgback"       : ""

},{
"number"        : "0054",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ナズドレッグのフラッシュギット達",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ノブ.",
"text"          : "<strong>コンバットアクション</strong>: このユニットに１ダメージを与えてレディにする (フェーズにつき１回しか使用できない)",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_54",
"imgback"       : ""

},{
"number"        : "0055",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "クラークトゥーフ集会場",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>コンバットアクション</strong>: このサポートをエグゾーストして対象のあなたがコントロールするユニット１体から１ダメージを同じプラネットにいる他の対象のユニットに移す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_55",
"imgback"       : ""

},{
"number"        : "0056",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "デカイがエライ",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>インタラプト</strong>: あなたが [ORK] ユニット１体をデプロイするとき、そのコストを２減らす。そのユニットが戦場に出たとき１ダメージをそれに与える",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_56",
"imgback"       : ""

},{
"number"        : "0057",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "サイボオルクボディ",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. バイオニック.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットのHPを倍にする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alberto Bontempi",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_57",
"imgback"       : ""

},{
"number"        : "0058",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "はなったれのグロット",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ラント. 同盟.",
"text"          : "",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_58",
"imgback"       : ""

},{
"number"        : "0059",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ゴフの頭目",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ノブ. エリート.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "",

"attack"        : "6",
"hp"            : "6",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camarena Bernabeu",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_59",
"imgback"       : ""

},{
"number"        : "0060",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "狂気のウィアードボゥイ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "サイカー. オッドボゥイ.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、このプラネットにいる他の全てのユニットに１ダメージを与える",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_60",
"imgback"       : ""

},{
"number"        : "0061",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "タンクバッスタボマーズ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ.",
"text"          : "このユニットは<strong><em>乗り物</em></strong>を持つ敵ユニットに倍のダメージを与える",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_61",
"imgback"       : ""

},{
"number"        : "0062",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "いかついキラーカン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. ウォーカー.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nブルータル(このユニットはダメージトークン１つにつき +1 ATK を得る)",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_62",
"imgback"       : ""

},{
"number"        : "0063",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "激怒したオルク",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ.",
"text"          : "ブルータル<em>(このユニットはダメージトークン１つにつき +1 ATK を得る)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_63",
"imgback"       : ""

},{
"number"        : "0064",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "クラッシュフェイス",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "戦士. ノブ.",
"text"          : "<strong>インタラプト</strong>: あなたがこのプラネットに他の [ORK] ユニットをデプロイするとき、そのコストを１減らす",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_64",
"imgback"       : ""

},{
"number"        : "0065",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "バッドドク",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "オッドボゥイ. ノブ.",
"text"          : "ダメージトークンがある限り、このユニットは３コマンドアイコンを得る",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_65",
"imgback"       : ""

},{
"number"        : "0066",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ロキットボゥイ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ.",
"text"          : "このプラネットにいる全ての敵ユニットは飛行キーワードを失う",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_66",
"imgback"       : ""

},{
"number"        : "0067",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ゴフボゥイ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ. 同盟.",
"text"          : "ファーストプラネットにいる限り、このユニットは +3 ATK を得る",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "0",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Himmelman",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_67",
"imgback"       : ""

},{
"number"        : "0068",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "シュータモブ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_68",
"imgback"       : ""

},{
"number"        : "0069",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "バーナボゥイ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ボゥイ.",
"text"          : "<strong>リアクション</strong>: このユニットが敵ユニット１体に攻撃を宣言したとき、同じプラネットにいる異なる敵ユニット１体に１ダメージを与える",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "5",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_69",
"imgback"       : ""

},{
"number"        : "0070",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "戦場の雄叫び",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "戦闘の間にのみプレイできる\n<strong>コンバットアクション</strong>: 戦闘終了まであなたのコントロールする全ての [ORK] ユニットは +2 ATK を得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camarena Bernabeu",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_70",
"imgback"       : ""

},{
"number"        : "0071",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "スノットリングの攻撃",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>デプロイアクション</strong>: スノットリングトークン４つを任意の数のプラネットに分けて戦場に出す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_71",
"imgback"       : ""

},{
"number"        : "0072",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "スクイッグ爆弾",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>アクション</strong>: 対象のサポートカード１枚を破壊する",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Guillaume Ducos",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_72",
"imgback"       : ""

},{
"number"        : "0073",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "ロキットランチャ",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. ウェポン.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは レンジ を得る<em> (レンジを持つユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Konstad",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_73",
"imgback"       : ""

},{
"number"        : "0074",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "オルクカノン",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ウェポン. アーティラリー.",
"text"          : "<strong>コンバットアクション</strong>: このサポートをエグゾーストしてプラネットを１つ対象にする。お互いのプレイヤーはそのプラネットにいる自身がコントロールするユニットに１間接ダメージを割り与える",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Toni Justamante Jacobs",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_74",
"imgback"       : ""

},{
"number"        : "0075",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "バンナのビッグトゥーフ",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "アップグレード.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)\n</em><strong>インタラプト</strong>: あなたが [ORK] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Konstad",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_75",
"imgback"       : ""

},{
"number"        : "0076",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "テリーポータ装置",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>コンバットアクション</strong>: このサポートをエグゾーストしてあなたがコントロールする [ORK] ユニット１体をファーストプラネットに移す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_76",
"imgback"       : ""

},{
"number"        : "0077",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ザラサーのフレイマー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. ティーンチ.",
"text"          : "<strong>アクション</strong>: このユニットを犠牲にして同じプラネットにいる対象のウォーロードでないユニット１体に２ダメージを与える",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mathias Kollros",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_77",
"imgback"       : ""

},{
"number"        : "0078",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ワープフレイムの礼拝堂",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>リアクション</strong>: 敵ユニット１体が破壊されたとき, このサポートをエグゾーストしてあなたの捨て山の一番上の<strong><em>ティーンチ</em></strong>カード１枚を手札に戻す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_78",
"imgback"       : ""

},{
"number"        : "0079",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "地獄の門",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー. ティーンチ.",
"text"          : "<strong>Combat Action:</strong> 印字されたコストが３以下の [CHAOS] ユニット１体を手札から任意の戦場に出す。そのユニットがフェーズ終了時に戦場に残っているならば、それを犠牲にする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Zweifel",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_79",
"imgback"       : ""

},{
"number"        : "0080",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ケイオスの印",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "呪い.",
"text"          : "アーミー ユニットに装備可能\n<strong>インタラプト</strong>: 装備しているユニットが戦場を離れるとき、このプラネットにいる全ての敵ユニットに１ダメージを与える",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_80",
"imgback"       : ""

},{
"number"        : "0081",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "アルファレギオンの潜入者",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. アルファレギオン.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_81",
"imgback"       : ""

},{
"number"        : "0082",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ポゼッスド",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. エリート.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "9",
"hp"            : "4",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_82",
"imgback"       : ""

},{
"number"        : "0083",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "Splintered Path Acolyte",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "カルティスト. ティーンチ.",
"text"          : "<strong>インタラプト</strong>: あなたが<strong><em>ディーモン</em></strong>ユニット１体をデプロイするとき、このユニットを犠牲にしてそのコストを２減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_83",
"imgback"       : ""

},{
"number"        : "0084",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "コーンバーサーカー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. コーン. ワールドイーター.",
"text"          : "ブルータル<em>(このユニットはダメージトークン１つにつき +1 ATK を得る)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Hector Ortiz",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_84",
"imgback"       : ""

},{
"number"        : "0085",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "危険なブラッドレター",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. コーン. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nエリアエフェクト (3)<em>(このユニットが攻撃するとき、攻撃ダメージを与える代わりにエリアエフェクトダメージをこのプラネットにいる全ての敵ユニットに与えてもよい)</em>",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "",

"attack"        : "4",
"hp"            : "4",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Pascal Quidault",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_85",
"imgback"       : ""

},{
"number"        : "0086",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "闇のプリーチャー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "カルティスト. プリースト.",
"text"          : "このプラネットにいる全てのアーミー ユニットは戦闘から撤退できない",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_86",
"imgback"       : ""

},{
"number"        : "0087",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ブラックレギオン ヘルドレイク",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. ブラックレギオン. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n飛行<em>(飛行を持たないユニットからのダメージを半減する)</em>",

"cost"          : 8,
"textcost"      : "8",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "8",
"hp"            : "8",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_87",
"imgback"       : ""

},{
"number"        : "0088",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "貪欲なフレッシュハウンド",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. コーン. エリート.",
"text"          : "装備できない\n<strong>アクション</strong>: <strong><em>カルティスト</em></strong>ユニット１体を犠牲にしてこのユニットから全てのダメージを取り除く",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_88",
"imgback"       : ""

},{
"number"        : "0089",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "猛毒のプレーグスカッド",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. デスガード. ナーグル.",
"text"          : "このユニットは対戦相手の捨て山のユニット１枚につき +1 ATK を得る",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_89",
"imgback"       : ""

},{
"number"        : "0090",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ケイオスの狂信者",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "カルティスト.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_90",
"imgback"       : ""

},{
"number"        : "0091",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ソウルグラインダー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ディーモン. ウォーエンジン. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n<strong>リアクション</strong>: あなたがこのプラネットのコマンドストラグルに勝利したとき、対戦相手は同じプラネットにいるウォーロードでないユニット１体を可能なら犠牲にしなければならない",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "4",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_91",
"imgback"       : ""

},{
"number"        : "0092",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ザバース スプリットタン",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "戦士. スラーネッシュ.",
"text"          : "<strong>リアクション</strong>: このプラネットにいる敵ユニット１体が破壊されたとき、カルティストトークン１体をあなたのHQに出す",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Flegal",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_92",
"imgback"       : ""

},{
"number"        : "0093",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ワープストーム",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>コンバットアクション</strong>: 対象のプラネットかHQ１つにいる全ての装備していないユニットに２ダメージを与える",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alexandr Elichev",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_93",
"imgback"       : ""

},{
"number"        : "0094",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ティーンチのファイアストーム",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー. ティーンチ.",
"text"          : "<strong>アクション</strong>: 対象のウォーロードでないユニット１体にXダメージを与える",

"cost"          : 0,
"textcost"      : "X",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_94",
"imgback"       : ""

},{
"number"        : "0095",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "約束された栄光",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>デプロイアクション</strong>: カルティストトークン２体をあなたのHQに出す",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Dotegowski",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_95",
"imgback"       : ""

},{
"number"        : "0096",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "ルーン強化アーマー",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. アーマー.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +2 ATK と +2 HP を得る",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_96",
"imgback"       : ""

},{
"number"        : "0097",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "悲惨な変異",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "呪い. ティーンチ.",
"text"          : "<strong>アンブッシュ</strong><em>(あなたはこのカードをコンバットフェーズ中にデプロイしてもよい)\n</em>アーミー ユニットに装備可能\n<strong>強制インタラプト</strong>: 装備しているユニットがエグゾーストするとき、それに１ダメージを与える",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Scott Purdy",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_97",
"imgback"       : ""

},{
"number"        : "0098",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "狂気の要塞",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)\n</em><strong>インタラプト</strong>: あなたが [CHAOS] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_98",
"imgback"       : ""

},{
"number"        : "0099",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "殺人審問所",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "アップグレード.",
"text"          : "<strong>リアクション</strong>: あなたがコントロールする<strong><em>カルティスト</em></strong>または<strong><em>ディーモン</em></strong>ユニット１体が戦場を離れたとき、このサポートをエグゾーストしてあなたのデッキの１番上のカードを公開する。そのカードが [CHAOS] ユニットであるなら、それを手札に加える",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_99",
"imgback"       : ""

},{
"number"        : "0100",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "キスのカイメラマスター",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ビーストマスター. ウィッチ.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、カイメラトークン１体をこのプラネットの戦場に出す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_100",
"imgback"       : ""

},{
"number"        : "0101",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "カイメラの隠れ家",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>アクション</strong>: このサポートをエグゾーストしてあなたのコントロールする任意の数のカイメラトークンを対象のプラネット１つに移す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_101",
"imgback"       : ""

},{
"number"        : "0102",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ハモンキュラスの契約",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>デプロイアクション</strong>: ユニット１体を犠牲にして対戦相手は手札を１枚ランダムに捨てる。その後あなたは２枚カードを引く",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolay Stoyanov",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_102",
"imgback"       : ""

},{
"number"        : "0103",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ブレンのアゴナイザー",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. ウェポン.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットはあなたのコントロールするカイメラトークン１体につき +1 ATK を得る",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_103",
"imgback"       : ""

},{
"number"        : "0104",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "サイバライトの狙撃手",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. カバライト.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Marius Gandzel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_104",
"imgback"       : ""

},{
"number"        : "0105",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "インキュバスの戦士",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Kay",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_105",
"imgback"       : ""

},{
"number"        : "0106",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ハモンキュラスの拷問人",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "学者. ハモンキュラス.",
"text"          : "<strong>アクション</strong>: 1[RESOURCE] を支払ってフェーズ終了時までこのユニットに +2 ATK を与える",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_106",
"imgback"       : ""

},{
"number"        : "0107",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ヘリオンギャング",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. レイダー.",
"text"          : "飛行<em>(飛行を持たないユニットからのダメージを半減する)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Adrian Smith",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_107",
"imgback"       : ""

},{
"number"        : "0108",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ビーストハンターウィッチ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ウィッチ.",
"text"          : "<strong>リアクション</strong>: あなたが [DARK ELDAR] イベントカード１枚をプレイしたとき、1[RESOURCE] を支払ってカイメラトークン１体をあなたのHQに出す",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michael Phillippi",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_108",
"imgback"       : ""

},{
"number"        : "0109",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "不吉なマンドレイク",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_109",
"imgback"       : ""

},{
"number"        : "0110",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "下級レイダー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 輸送機.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nモービル<em>(コンバットフェーズの開始時に、このユニットを隣接するプラネットに移してもよい)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_110",
"imgback"       : ""

},{
"number"        : "0111",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ブラックハートラヴェイジャー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 戦車. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n飛行<em>(飛行を持たないユニットからのダメージを半減する)</em>\n<strong>リアクション</strong>: このユニットがウォーロードでないユニット１体にダメージを与えたとき、そのユニットを敗走させる",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_111",
"imgback"       : ""

},{
"number"        : "0112",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "殺人レイザーウィング",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "Creature. 同盟.",
"text"          : "装備できない\n<strong>リアクション</strong>: あなたがこのユニットをデプロイしたとき、対戦相手は手札を１枚ランダムに捨てる",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Abrar Ajmalt",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_112",
"imgback"       : ""

},{
"number"        : "0113",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "コロシアムファイター",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ウィッチ.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、あなたの捨て山の一番上のイベントカード１枚を手札に戻す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Peck",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_113",
"imgback"       : ""

},{
"number"        : "0114",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "カバライトの攻撃部隊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. カバライト.",
"text"          : "エリアエフェクト (1)<em>(このユニットが攻撃するとき、攻撃ダメージを与える代わりにエリアエフェクトダメージをこのプラネットにいる全ての敵ユニットに与えてもよい)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_114",
"imgback"       : ""

},{
"number"        : "0115",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "シレンザイレックス",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "戦士. ウィッチ.",
"text"          : "<strong>リアクション</strong>: 敵ユニット１体がこのプラネットにデプロイしたとき、それをエグゾーストする",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Adrian Dadich",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_115",
"imgback"       : ""

},{
"number"        : "0116",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "苦痛からの力",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー. 拷問.",
"text"          : "<strong>コンバットアクション</strong>: 対戦相手はアーミー ユニット１体を可能なら犠牲にしなければならない",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_116",
"imgback"       : ""

},{
"number"        : "0117",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "アーコンの恐怖",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>コンバットアクション</strong>: 対象のユニークでないユニット１体を敗走させる",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Victor P Corbella",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_117",
"imgback"       : ""

},{
"number"        : "0118",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "奇襲",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\n<strong>アクション</strong>: 対戦相手があなたよりリソースが多いなら 1[RESOURCE] を対戦相手から取る",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_118",
"imgback"       : ""

},{
"number"        : "0119",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "苦痛",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "コンディション.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは -2 ATK を得る",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Victor Corbella",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_119",
"imgback"       : ""

},{
"number"        : "0120",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ハイペックス注射器",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア.",
"text"          : "アーミー ユニットに装備可能\n<strong>リアクション</strong>: あなたが [DARK ELDAR] イベントカード１枚をプレイしたとき、装備しているユニットをレディにする",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "JB Casacop",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_120",
"imgback"       : ""

},{
"number"        : "0121",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "苦悩の祭壇",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\n<strong>インタラプト</strong>: あなたが [DARK ELDAR] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_121",
"imgback"       : ""

},{
"number"        : "0122",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "ゆがんだ実験室",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>アクション</strong>: このサポートをエグゾーストしてフェーズ終了時まで対象のアーミー ユニット１体のテキスト欄を(<strong><em>トレイツ</em></strong>を除き)空白であるかのように扱う",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_122",
"imgback"       : ""

},{
"number"        : "0123",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "スターベインの協議会",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "サイカー. アライトック.",
"text"          : "エグゾーストしているユニットを攻撃する間、このユニットは +2 ATK を得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Gravato",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_123",
"imgback"       : ""

},{
"number"        : "0124",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "アレイトックの礼拝堂",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "<strong>リアクション</strong>: [ELDAR] ユニット１体が任意のプラネットへ移ったとき、このサポートをエグゾーストしてそのユニットをレディにする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_124",
"imgback"       : ""

},{
"number"        : "0125",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "予知",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>リアクション</strong>: あなたのウォーロードがプラネットにコミットしたとき、ウォーロードを異なるプラネットへコミットする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_125",
"imgback"       : ""

},{
"number"        : "0126",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "機動性",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "スキル.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは モービル を得る<em>(コンバットフェーズの開始時に、このユニットを隣接するプラネットに移してもよい)</em>",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_126",
"imgback"       : ""

},{
"number"        : "0127",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "ビエル=タンの守護者",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ビエル=タン. 同盟.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_127",
"imgback"       : ""

},{
"number"        : "0128",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "アルタンザール レンジャー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. アルタンザール.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_128",
"imgback"       : ""

},{
"number"        : "0129",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "エルダー サバイバリスト",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. 同盟.",
"text"          : "[CARD BONUS +1]\n[RESOURCE BONUS +1]",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camaren",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_129",
"imgback"       : ""

},{
"number"        : "0130",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "ワイルドライダー スカッドロン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. セイム=ハン.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n<strong>コンバットアクション</strong>: このユニットを隣接するプラネットに移す(フェーズにつき１回しか使用できない)",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_130",
"imgback"       : ""

},{
"number"        : "0131",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "舞い上がるファルコン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\nモービル<em>(コンバットフェーズの開始時に、このユニットを隣接するプラネットに移してもよい)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_131",
"imgback"       : ""

},{
"number"        : "0132",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "嘆きのレイスファイター",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. スピリット. エリート.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n飛行<em>(飛行を持たないユニットからのダメージを半減する)\n</em><strong>リアクション</strong>: このユニットが攻撃を宣言したとき、対戦相手は可能なら手札から１枚カードを選び捨てる",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_132",
"imgback"       : ""

},{
"number"        : "0133",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "イアンデンのレイスガード",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ドローン. スピリット. イアンデン.",
"text"          : "アーマーベイン<em>(このユニットが攻撃するとき相手はシールドカードを使用できない)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_133",
"imgback"       : ""

},{
"number"        : "0134",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "包み隠すハーレクィン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ハーレクィン.",
"text"          : "<strong>インタラプト</strong>: このユニットが破壊されるとき、任意のプラネットにいる対象の敵ユニット１体をエグゾーストする",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_134",
"imgback"       : ""

},{
"number"        : "0135",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "剣の風ファーシーア",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "サイカー. ビエル=タン.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、あなたのデッキの上から６枚を見てカード１枚を探す。それを手札に加えて、残ったカードを好きな順番であなたのデッキの下に置く",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_135",
"imgback"       : ""

},{
"number"        : "0136",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "シルバーブレイド アベンジャーズ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士.",
"text"          : "<strong>リアクション</strong>: このユニットがウォーロードでないユニットに対して攻撃を宣言したとき、そのユニットをエグゾーストする",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_136",
"imgback"       : ""

},{
"number"        : "0137",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "ビエル=タン ワープスパイダー",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ビエル=タン.",
"text"          : "<strong>リアクション</strong>: このユニットが攻撃を宣言したとき、任意のプレイヤーのデッキの上から２枚を見る。あなたはそのカードの中の１枚を捨ててもよい",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_137",
"imgback"       : ""

},{
"number"        : "0138",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "スピリットシーア イラーサル",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "サイカー. セイム=ハン.",
"text"          : "<strong>リアクション</strong>: このユニットが攻撃を宣言したとき、このプラネットにいる他の対象のユニット１体から１ダメージを取り除く",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_138",
"imgback"       : ""

},{
"number"        : "0139",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "優勢",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>インタラプト</strong>: プラネットでコマンドストラグルが始まるとき、そのコマンドストラグル終了時までそのプラネットにいる対象のユニット１体は全てのコマンドアイコンを失う",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolay Stoyanov",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_139",
"imgback"       : ""

},{
"number"        : "0140",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "無効",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>インタラプト</strong>: 対戦相手がイベントカード１枚をプレイするとき、ユニークである [ELDAR] ユニーク１体をエグゾーストしてその効果をキャンセルする",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Gravato",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_140",
"imgback"       : ""

},{
"number"        : "0141",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "破滅",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー.",
"text"          : "<strong>デプロイアクション</strong>: お互いのHQにいる全てのユニークでないユニットを破壊する",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_141",
"imgback"       : ""

},{
"number"        : "0142",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "アイシャの力",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "パワー. 天啓.",
"text"          : "<strong>アクション</strong>: あなたの捨て山の一番上の [ELDAR] ユニット１体を任意のプラネットの戦場に出す。フェーズ終了時にそのユニットが戦場にいるなら、捨て山に置く",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "JB Casacop",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_142",
"imgback"       : ""

},{
"number"        : "0143",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "バンシー パワーソード",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. ウェポン.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +1 ATK を得る<strong>インタラプト</strong>: 装備しているユニットがウォーロードでないユニットに対して攻撃を宣言するとき、あなたの手札からX枚のカードを捨ててその攻撃に対して装備しているユニットに +X ATK を与える",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_143",
"imgback"       : ""

},{
"number"        : "0144",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "海賊貿易港",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\n<strong>インタラプト</strong>: あなたが [ELDAR] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_144",
"imgback"       : ""

},{
"number"        : "0145",
"setname"       : "Core Set",
"faction"       : "エルダー",
"name"          : "クラフトワールドの門",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "アップグレード.",
"text"          : "<strong>アクション</strong>: このサポートをエグゾーストしてあなたがコントロールする対象のアーミー ユニット１体をあなたの手札に戻す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alexandr Elichev",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_145",
"imgback"       : ""

},{
"number"        : "0146",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "シャドウサンのステルス部隊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. パイロット.",
"text"          : "このカードは「<strong><em>乗り物</em></strong>でないアーミー ユニットに装備可能。装備しているユニットは +2 ATK と +2 HP を得る」のテキストを持つアタッチメントとしてプレイしてもよい",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_146",
"imgback"       : ""

},{
"number"        : "0147",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "コミュニケーションリレー",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "アップグレード.",
"text"          : "<strong>インタラプト</strong>: 対戦相手があなたがコントロールするアタッチメントを１つ以上持つユニット１体を対象とする能力を起動するとき、このサポートをエグゾーストしてその効果をキャンセルする",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_147",
"imgback"       : ""

},{
"number"        : "0148",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "スカッドロン リデプロイメント",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>アクション</strong>: １枚以上のアタッチメントを持つアーミー ユニット１体をエグゾーストしてそれをあなたの望むプラネットに移す",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_148",
"imgback"       : ""

},{
"number"        : "0149",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "コマンドリンク ドローン",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ドローン.",
"text"          : "ユニット装備可能\n装備しているユニットは +1 ATK を得る<strong>アクション</strong>: 1[RESOURCE] を支払って異なるユニット１体にこのカードを装備する",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_149",
"imgback"       : ""

},{
"number"        : "0150",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "偵察ドローン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ドローン. 同盟.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "0",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_150",
"imgback"       : ""

},{
"number"        : "0151",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ヴィオルラの狙撃手",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. シャス=ラ.",
"text"          : "レンジ<em>(このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_151",
"imgback"       : ""

},{
"number"        : "0152",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "カーニヴォアの群れ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. クルート.",
"text"          : "<strong>インタラプト</strong>: このユニットが破壊されるとき、3[RESOURCE]を得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Bosco",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_152",
"imgback"       : ""

},{
"number"        : "0153",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ヴァシュイアの追跡機",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "スカウト. パイロット.",
"text"          : "モービル<em>(コンバットフェーズの開始時に、このユニットを隣接するプラネットに移してもよい)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_153",
"imgback"       : ""

},{
"number"        : "0154",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ファイアウォーリアーエリート",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. シャス=ラ.",
"text"          : "<strong>インタラプト</strong>: 敵ユニット１体がこのプラネットにいるあなたがコントロールするユニット１体に攻撃を宣言しようとするとき、代わりにこのユニットを攻撃するようにする",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Damien Mammoliti",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_154",
"imgback"       : ""

},{
"number"        : "0155",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ファイアウォーリア襲撃チーム",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. シャス=ラ.",
"text"          : "このユニットはこの上にあるアタッチメントカード１枚につき +1 ATK を得る",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_155",
"imgback"       : ""

},{
"number"        : "0156",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "クライシスバトルガード",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "兵士. パイロット. エリート.",
"text"          : "モービル<em>(コンバットフェーズの開始時に、このユニットを隣接するプラネットに移してもよい)</em>",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "3",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_156",
"imgback"       : ""

},{
"number"        : "0157",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "地のカーストの技術者",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "学者. 同盟.",
"text"          : "<strong>リアクション</strong>: このユニットが戦場に出たとき、あなたのデッキの上から６枚を見てアタッチメントまたは<strong><em>ドローン</em></strong>カード１枚を探す。それを公開しあなたの手札に加えて、残ったカードを好きな順番であなたのデッキの下に置く",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_157",
"imgback"       : ""

},{
"number"        : "0158",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ガンドローン",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "ドローン.",
"text"          : "あなたはこのカードを「<strong><em>乗り物</em></strong>でないアーミー ユニットに装備可能。装備しているユニットは エリアエフェクト (2) を得る 」のテキストを持つ<strong><em>ドローン</em></strong>アタッチメントカードとしてデプロイしてもよい",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_158",
"imgback"       : ""

},{
"number"        : "0159",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "スティングウィングの群れ",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "戦士. ヴェスピッド.",
"text"          : "レンジ<em> (このユニットは戦闘開始時のレンジ衝突の間に攻撃する)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michael Phillipi",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_159",
"imgback"       : ""

},{
"number"        : "0160",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "ファイアブレード カイス=ヴレ",
"type"          : "アーミー ユニット",
"unique"        : "Yes",
"traits"        : "兵士. 英雄.",
"text"          : "<strong>インタラプト</strong>: あなたがこのプラネットで [TAU] カード１枚をシールドとして使うとき、それは追加の１シールドアイコンを得る",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_160",
"imgback"       : ""

},{
"number"        : "0161",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "デビルフィッシュ試験機",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "乗り物. 輸送機.",
"text"          : "<strong><em>ウォーギア</em></strong>を装備できない\n<strong>リアクション</strong>: このユニットがプラネットにコミットしたとき、それをレディにする",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_161",
"imgback"       : ""

},{
"number"        : "0162",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "均等化",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>アクション</strong>: 対象のアタッチメント１枚を同じプレイヤーがコントロールする他の適格なユニットに移す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_162",
"imgback"       : ""

},{
"number"        : "0163",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "計算された一撃",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>アクション</strong>: 対象のリミテッドカード１枚を破壊する",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_163",
"imgback"       : ""

},{
"number"        : "0164",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "欺瞞",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>デプロイアクション</strong>: 対象の<strong><em>Elite</em></strong>でないアーミー ユニット１体をその所有者の手札に戻す",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_164",
"imgback"       : ""

},{
"number"        : "0165",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "衝撃反射フィールド",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア.",
"text"          : "アーミー ユニットに装備可能\nユニット１体につき１枚制限\n<strong>リアクション</strong>: 装備しているユニットが攻撃によってダメージを受けたとき、２ダメージを攻撃したユニットに与える",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_165",
"imgback"       : ""

},{
"number"        : "0166",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "イオンライフル",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "ウォーギア. ウェポン.",
"text"          : "アーミー ユニットに装備可能\n装備しているユニットは +3 ATK を得る",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_166",
"imgback"       : ""

},{
"number"        : "0167",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "前線出航湾",
"type"          : "サポート",
"unique"        : "Yes",
"traits"        : "ロケーション.",
"text"          : "リミテッド <em>(リミテッドは１ラウンド１枚制限)\n</em><strong>インタラプト</strong>: あなたが [TAU] ユニット１体をデプロイするとき、このサポートをエグゾーストしてそのユニットのコストを１減らす",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_167",
"imgback"       : ""

},{
"number"        : "0168",
"setname"       : "Core Set",
"faction"       : "タウ",
"name"          : "伏兵の発着場",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "アップグレード.",
"text"          : "<strong>インタラプト</strong>: あなたがアタッチメント１枚をデプロイするとき、そのコストを１減らす\n<strong>コンバットアクション</strong>: このサポートをエグゾーストしてあなたの手札からアタッチメント１枚をデプロイする",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Gregory",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_168",
"imgback"       : ""

},{
"number"        : "0169",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "無慈悲",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>インタラプト</strong>: 対戦相手がシールドカード１枚を使うとき、あなたがコントロールするユニーク ユニット１体をエグゾーストしてそのカードのシールド効果をキャンセルする",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_169",
"imgback"       : ""

},{
"number"        : "0170",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "宇宙海賊",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "同盟.",
"text"          : "[CARD BONUS +1]",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_170",
"imgback"       : ""

},{
"number"        : "0171",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "悪党商人",
"type"          : "アーミー ユニット",
"unique"        : "No",
"traits"        : "同盟.",
"text"          : "[RESOURCE BONUS +1]",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "None",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Andrea Uderzo",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_171",
"imgback"       : ""

},{
"number"        : "0172",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "撤退!",
"type"          : "イベント",
"unique"        : "No",
"traits"        : "戦術.",
"text"          : "<strong>リアクション</strong>: <strong><em>Elite</em></strong>ユニット１体が破壊されたとき、それをあなたの捨て山からあなたのHQへ出す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_172",
"imgback"       : ""

},{
"number"        : "0173",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "プロメシウム鉱山",
"type"          : "サポート",
"unique"        : "No",
"traits"        : "ロケーション.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\n<strong>強制リアクション</strong>: このカードがHQに出たとき、4[RESOURCE] をこの上に置く\n<strong>リアクション</strong>: デプロイフェーズが始まったとき、このカードから 1[RESOURCE] をあなたのリソースプールへ移す",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_173",
"imgback"       : ""

},{
"number"        : "0174",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "昇進",
"type"          : "アタッチメント",
"unique"        : "No",
"traits"        : "スキル.",
"text"          : "リミテッド<em>(リミテッドは１ラウンド１枚制限)</em>\nアーミー ユニットに装備可能\n装備しているユニットは ２コマンドアイコン を得る",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_174",
"imgback"       : ""

},{
"number"        : "0175",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Plannum",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: あなたがコントロールするウォーロードでないユニット１体をあなたが選んだプラネットに移す",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",tech,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Wibben",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_175",
"imgback"       : ""

},{
"number"        : "0176",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Atrox Prime",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 対象のHQまたは隣接するプラネットにいる全ての敵ユニットに１ダメージを与える",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_176",
"imgback"       : ""

},{
"number"        : "0177",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Barlus",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 対戦相手の手札をランダムに１枚捨てる",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",strongpoint,",
"resourcebonus" : "0",
"cardbonus"     : "2",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_177",
"imgback"       : ""

},{
"number"        : "0178",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Elouith",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: あなたのデッキの上から３枚を見てカード１枚を探す。それを手札に加えて残ったカードを好きな順番であなたのデッキの下に置く",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",tech,",
"resourcebonus" : "0",
"cardbonus"     : "2",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_178",
"imgback"       : ""

},{
"number"        : "0179",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Carnath",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 他の場にあるプラネットのバトル能力を起動する",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Sam Burley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_179",
"imgback"       : ""

},{
"number"        : "0180",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Tarrus",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: あなたが対戦相手より少ないユニットをコントロールするならば、 3[RESOURCE] 得る または ３枚カードを引く",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_180",
"imgback"       : ""

},{
"number"        : "0181",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Osus IV",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 対戦相手から 1[RESOURCE] を取る",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",strongpoint,",
"resourcebonus" : "2",
"cardbonus"     : "0",

"illustrator"   : "Julian Kok",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_181",
"imgback"       : ""

},{
"number"        : "0182",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Ferrin",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 太陽のウォーロードでないユニット１体を敗走させる",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,",
"resourcebonus" : "2",
"cardbonus"     : "0",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_182",
"imgback"       : ""

},{
"number"        : "0183",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Y’varn",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: お互いのプレイヤーは手札からユニット１体を自身のHQに出す",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "0",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_183",
"imgback"       : ""

},{
"number"        : "0184",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "Iridial",
"type"          : "プラネット",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>バトル</strong>: 対象のユニット１体から全てのダメージを取り除く",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,strongpoint,",
"resourcebonus" : "0",
"cardbonus"     : "1",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_184",
"imgback"       : ""

},{
"number"        : "0185",
"setname"       : "Core Set",
"faction"       : "オルク",
"name"          : "スノットリング",
"type"          : "トークン",
"unique"        : "No",
"traits"        : "ラント.",
"text"          : "",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_185",
"imgback"       : ""

},{
"number"        : "0186",
"setname"       : "Core Set",
"faction"       : "アストラ ミリタルム",
"name"          : "防衛軍兵",
"type"          : "トークン",
"unique"        : "No",
"traits"        : "兵士.",
"text"          : "",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_186",
"imgback"       : ""

},{
"number"        : "0187",
"setname"       : "Core Set",
"faction"       : "ケイオス",
"name"          : "カルティスト",
"type"          : "トークン",
"unique"        : "No",
"traits"        : "カルティスト.",
"text"          : "<strong>インタラプト</strong>: あなたが<strong><em>ディーモン</em></strong>ユニット１体をデプロイするとき、このユニットを犠牲にしてそのコストを１減らす",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_187",
"imgback"       : ""

},{
"number"        : "0188",
"setname"       : "Core Set",
"faction"       : "ダーク エルダー",
"name"          : "カイメラ",
"type"          : "トークン",
"unique"        : "No",
"traits"        : "Creature.",
"text"          : "装備できない",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Brynn Metheney",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_188",
"imgback"       : ""

}
]
    ;
    var cards_en = [
{
"number"        : "0001",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Captain Cato Sicarius",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Ultramarines.",
"text"          : "<strong>Reaction</strong>: After an enemy unit at this planet is destroyed, gain 1[RESOURCE].",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Diego Gisbert Llorens",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_1",
"imgback"       : ""

},{
"number"        : "0002",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Colonel Straken",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Catachan.",
"text"          : "Each other <strong><em>Soldier</em></strong> or <strong><em>Warrior</em></strong><em> </em>unit you control at this planet gets +1 ATK.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_2",
"imgback"       : ""

},{
"number"        : "0003",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Nazdreg",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Warrior. Warboss.",
"text"          : "Each other unit you control at this planet gains Brutal. <em>(Each unit with Brutal gets +1 ATK for each damage on it.)</em>",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alberto Bontempi",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_3",
"imgback"       : ""

},{
"number"        : "0004",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Zarathur, High Sorcerer",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Psyker. Tzeentch.",
"text"          : "<strong>Interrupt</strong>: When damage is assigned to an enemy unit at this planet, increase that damage by 1.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_4",
"imgback"       : ""

},{
"number"        : "0005",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Packmaster Kith",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Warrior. Succubus. Wych.",
"text"          : "<strong>Reaction</strong>: After this warlord commits to a planet, put a Khymera token into play at this planet.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "6",

"sigloyal"      : "none",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Diego Gisbert Llorens",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_5",
"imgback"       : ""

},{
"number"        : "0006",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Eldorath Starbane",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Psyker. Alaitoc.",
"text"          : "<strong>Reaction</strong>: After this warlord commits to a planet, exhaust a target non-warlord unit at that planet.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_6",
"imgback"       : ""

},{
"number"        : "0007",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Commander Shadowsun",
"type"          : "Warlord Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Shas’o.",
"text"          : "<strong>Reaction</strong>: After this warlord commits to a planet, put a [TAU] attachment with printed cost 2 or lower or &ldquo;Shadowsun&rsquo;s Stealth Cadre&rdquo; from your hand or discard pile into play attached to an eligible unit at this planet.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "7",
"shand"         : "7",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_7",
"imgback"       : ""

},{
"number"        : "0008",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Sicarius’s Chosen",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Ultramarines.",
"text"          : "<strong>Reaction</strong>: After this unit enters play, move a target enemy army unit at an adjacent planet to this planet and deal it 1 damage.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_8",
"imgback"       : ""

},{
"number"        : "0009",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Cato’s Stronghold",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Reaction</strong>: After an enemy unit is destroyed, exhaust this support to ready a target [SPACE MARINE] unit at the same planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Justin Adams",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_9",
"imgback"       : ""

},{
"number"        : "0010",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "The Fury of Sicarius",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Reaction</strong>: After a [SPACE MARINE] unit damages an enemy non-warlord unit by an attack, destroy the attacked unit.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_10",
"imgback"       : ""

},{
"number"        : "0011",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Tallassarian Tempest Blade",
"type"          : "Attachment",
"unique"        : "Yes",
"traits"        : "Relic. Weapon.",
"text"          : "Limit 1 <strong><em>Relic</em></strong> per player.<br />Attach to a unique unit.<br />Attached unit gets +1 ATK and gains Armorbane. <em>(Shield cards cannot be used while this unit is attacking.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "001",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Sullivan",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_11",
"imgback"       : ""

},{
"number"        : "0012",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "10th Company Scout",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Ultramarines.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Cave",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_12",
"imgback"       : ""

},{
"number"        : "0013",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Tactical Squad Cardinis",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Ultramarines.",
"text"          : "Area Effect (1). <em>(When this unit attacks it may instead deal its Area Effect damage to each enemy unit at this planet.)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_13",
"imgback"       : ""

},{
"number"        : "0014",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Honored Librarian",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Psyker. Ultramarines.",
"text"          : "Enemy units cannot attack this unit while you control a unit not named &ldquo;Honored Librarian&rdquo; at this planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolaus Ingeneri",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_14",
"imgback"       : ""

},{
"number"        : "0015",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Blood Angels Veterans",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Blood Angels.",
"text"          : "While this unit is ready, it gains, &ldquo;<strong>Interrupt</strong>: When this unit is assigned damage, prevent 1 of that damage.&rdquo;",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_15",
"imgback"       : ""

},{
"number"        : "0016",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Daring Assault Squad",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Blood Angels.",
"text"          : "Area Effect (2). <em>(When this unit attacks it may instead deal its Area Effect damage to each enemy unit at this planet.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_16",
"imgback"       : ""

},{
"number"        : "0017",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Land Raider",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Tank. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Non-<strong><em>Vehicle</em></strong> units you control at this planet cannot be targeted by enemy card abilities.",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "3",
"hp"            : "7",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_17",
"imgback"       : ""

},{
"number"        : "0018",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Ultramarines Dreadnought",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Ultramarines. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "",

"attack"        : "8",
"hp"            : "8",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_18",
"imgback"       : ""

},{
"number"        : "0019",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Veteran Brother Maxos",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Ultramarines.",
"text"          : "<strong>Combat Action</strong>: Pay the printed cost of a [SPACE MARINE] unit in your hand to put it into play at this planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_19",
"imgback"       : ""

},{
"number"        : "0020",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Eager Recruit",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Ultramarines. Scout.",
"text"          : "Ambush<strong>. </strong><em>(You may deploy this card during the combat phase.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Gregory",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_20",
"imgback"       : ""

},{
"number"        : "0021",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Iron Hands Techmarine",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Iron Hands.",
"text"          : "This unit gains 1 command icon for each enemy unit at this planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_21",
"imgback"       : ""

},{
"number"        : "0022",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Raven Guard Speeder",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle.  Raven Guard.",
"text"          : "No<strong><em> Wargear </em></strong>Attachments.<br />Flying.<strong> </strong><em>(This unit takes half damage from non-flying units.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_22",
"imgback"       : ""

},{
"number"        : "0023",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Deathwing Guard",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Dark Angels. Elite.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "4",

"attack"        : "2",
"hp"            : "9",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Aidan Wilson",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_23",
"imgback"       : ""

},{
"number"        : "0024",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Drop Pod Assault",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Combat Action</strong>: Target a planet where a battle is taking place. Search the top 6 cards of your deck for a [Space Marine] unit with printed cost 3 or lower. Put that unit into play at the targeted planet, and place the remaing cards on the bottom of your deck in any order.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_24",
"imgback"       : ""

},{
"number"        : "0025",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Indomitable",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Reaction</strong>: After a [SPACE MARINE] unit is assigned damage by an attack, prevent all of that damage.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_25",
"imgback"       : ""

},{
"number"        : "0026",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Exterminatus",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Deploy</strong> <strong>Action</strong>: Destroy all non-unique units at a target non-first planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_26",
"imgback"       : ""

},{
"number"        : "0027",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Godwyn Pattern Bolter",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Weapon.",
"text"          : "Attach to an army unit.<br />Attached unit gets +1 ATK, +1 HP and while it is attacking ignores the Flying keyword on enemy units.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolaus Ingeneri",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_27",
"imgback"       : ""

},{
"number"        : "0028",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Iron Halo",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Relic. Wargear.",
"text"          : "Limit 1 <strong><em>Relic</em></strong> per player. <br />Attach to a unique unit. <br /><strong>Interrupt:</strong> When attached unit is assigned damage by an attack, exhaust this attachment to prevent all of that damage.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "2",
"commandicons"  : "",

"attack"        : " ",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Taylor Ingvarsson",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_28",
"imgback"       : ""

},{
"number"        : "0029",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Fortress-Monastery",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.) <br /></em><strong>Interrupt</strong>: When you deploy a [SPACE MARINE] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Drummond",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_29",
"imgback"       : ""

},{
"number"        : "0030",
"setname"       : "Core Set",
"faction"       : "Space Marines",
"name"          : "Holy Sepulchre",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Reaction</strong>: After a [SPACE MARINE] unit enters your discard pile from play, exhaust this support to return that unit to your hand.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_30",
"imgback"       : ""

},{
"number"        : "0031",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Straken’s Command Squad",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Catachan.",
"text"          : "<strong>Interrupt</strong>: When this unit leaves play, put a Guardsman token into play at the same planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_31",
"imgback"       : ""

},{
"number"        : "0032",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Omega Zero Command",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Reaction</strong>: After you win a command struggle, put a Guardsman token into play at that planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Zachary Graves",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_32",
"imgback"       : ""

},{
"number"        : "0033",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Glorious Intervention",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Reaction</strong>: After a unit is assigned damage by an attack, sacrifice a <strong><em>Soldier </em></strong>or <strong><em>Warrior</em></strong> unit at the same planet to prevent all of that damage. Then, deal X damage to the attacker. X is the sacrificed unit&rsquo;s printed ATK value.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Taylor Ingvarsson",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_33",
"imgback"       : ""

},{
"number"        : "0034",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Straken’s Cunning",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Skill.",
"text"          : "Attach to an army unit.<br />Attached unit gets +1 ATK.<br /><strong>Interrupt</strong>: When attached unit leaves play, draw 3 cards.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "003",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_34",
"imgback"       : ""

},{
"number"        : "0035",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Ratling Deadeye",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Abhuman.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_35",
"imgback"       : ""

},{
"number"        : "0036",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Cadian Mortar Squad",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Cadia.",
"text"          : "Ranged. <em>(This unit attacks during the ranged skirmish at the beginning of a battle.)</em> <br /><strong>Reaction:</strong> After an army unit you control at this planet leaves play, ready this unit.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dan Scott",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_36",
"imgback"       : ""

},{
"number"        : "0037",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Sanctioned Psyker",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Psyker.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "0",
"hp"            : "4",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_37",
"imgback"       : ""

},{
"number"        : "0038",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Leman Russ Battle Tank",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Tank. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "4",

"attack"        : "4",
"hp"            : "6",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "David Nash",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_38",
"imgback"       : ""

},{
"number"        : "0039",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Mordian Hellhound",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Tank. Mordian.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Area Effect (1). <em>(When this unit attacks it may instead deal its Area Effect damage to each enemy unit at this planet.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_39",
"imgback"       : ""

},{
"number"        : "0040",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Assault Valkyrie",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Transport. ",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Flying.<strong> </strong><em>(This unit takes half damage from non-flying units.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_40",
"imgback"       : ""

},{
"number"        : "0041",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Stalwart Ogryn",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior.Abhuman.",
"text"          : "Immune to enemy events.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_41",
"imgback"       : ""

},{
"number"        : "0042",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Captain Markis",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Officer. Vostroya.",
"text"          : "<strong>Action</strong>: Sacrifice an [ASTRA MILITARUM] unit at this planet to exhaust a target non-warlord unit at this planet. (Limit once per phase.)",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_42",
"imgback"       : ""

},{
"number"        : "0043",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Enginseer Augur",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scholar. Tech-Priest.",
"text"          : "<strong>Interrupt</strong>: When this unit leaves play, search the top 6 cards of your deck for an [ASTRA MILITARUM] support card with printed cost 2 or lower. Put that card into play at your HQ, and place the remaining cards on the bottom of your deck in any order.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_43",
"imgback"       : ""

},{
"number"        : "0044",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Penal Legionnaire",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Conscript. Ally.",
"text"          : "",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_44",
"imgback"       : ""

},{
"number"        : "0045",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Infantry Conscripts",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Conscript.",
"text"          : "This unit gets +2 ATK for each support card you control.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "",

"attack"        : "0",
"hp"            : "5",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Andrius Anezin",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_45",
"imgback"       : ""

},{
"number"        : "0046",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Elysian Assault Team",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Elysia.",
"text"          : "<strong>Interrupt:</strong> When a <strong><em>Soldier</em></strong> or <strong><em>Warrior</em></strong> unit you control leaves play from a planet, put this unit into play from your hand at the same planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_46",
"imgback"       : ""

},{
"number"        : "0047",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Preemptive Barrage",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Combat Action</strong>: Target up to 3 [ASTRA MILITARUM] units you control at the same planet. Each targeted unit gains Ranged until the end of the phase. (<em>Units with Ranged attack during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "MichaÅ MiÅkowski",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_47",
"imgback"       : ""

},{
"number"        : "0048",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Suppressive Fire",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Combat Action</strong>: Exhaust a unit you control to exhaust a target non-warlord unit at the same planet.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_48",
"imgback"       : ""

},{
"number"        : "0049",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Hostile Environment Gear",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Armor.",
"text"          : "Attach to an army unit.<br />Attached unit gets <strong>+</strong>3 HP.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_49",
"imgback"       : ""

},{
"number"        : "0050",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Bodyguard",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Condition.",
"text"          : "Attach to an army unit you control.<br /><strong>Forced Reaction</strong>: After a unit you control is assigned damage by an attack at this planet, reassign 1 of that damage to attached unit.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_50",
"imgback"       : ""

},{
"number"        : "0051",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Imperial Bunker",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited.<em> (Limit one Limited card per round.)<br /></em><strong>Interrupt</strong>: When you deploy an [ASTRA MILITARUM] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_51",
"imgback"       : ""

},{
"number"        : "0052",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Rockcrete Bunker",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Upgrade.",
"text"          : "If this card has 4 or more damage on it, sacrifice it.<br /><strong>Interrupt</strong>: When damage is assigned to a unit you control, exhaust this support to reassign 1 of that damage to this support.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Zweifel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_52",
"imgback"       : ""

},{
"number"        : "0053",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Catachan Outpost",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Combat Action</strong>: Exhaust this support to give a target unit +2 ATK for its next attack this phase.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_53",
"imgback"       : ""

},{
"number"        : "0054",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Nazdreg’s Flash Gitz",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Nob.",
"text"          : "<strong>Combat Action</strong>: Deal this unit 1 damage to ready it. (Limit once per phase.)",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_54",
"imgback"       : ""

},{
"number"        : "0055",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Kraktoof Hall",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Combat Action</strong>: Exhaust this support to move 1  damage from a target unit you control to another target unit at the same planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_55",
"imgback"       : ""

},{
"number"        : "0056",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Bigga is Betta",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Interrupt</strong>: When you deploy an [ORK] unit, reduce its cost by 2. Deal 1 damage to that unit after it enters play.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Imaginary FS Pte Ltd",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_56",
"imgback"       : ""

},{
"number"        : "0057",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Cybork Body",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Bionics.",
"text"          : "Attach to an army unit.<br />Double attached unit&rsquo;s HP.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "002",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alberto Bontempi",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_57",
"imgback"       : ""

},{
"number"        : "0058",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Sniveling Grot",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Runt. Ally.",
"text"          : "",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_58",
"imgback"       : ""

},{
"number"        : "0059",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Goff Nob",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Nob. Elite.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "",

"attack"        : "6",
"hp"            : "6",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camarena Bernabeu",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_59",
"imgback"       : ""

},{
"number"        : "0060",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Weirdboy Maniak",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Psyker. Oddboy.",
"text"          : "<strong>Reaction</strong>: After this unit enters play, deal 1 damage to each other unit at this planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_60",
"imgback"       : ""

},{
"number"        : "0061",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Tankbusta Bommaz",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz.",
"text"          : "This unit deals double damage to enemy <strong><em>Vehicle</em></strong> units.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_61",
"imgback"       : ""

},{
"number"        : "0062",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Rugged Killa Kans",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Walker.",
"text"          : "<strong>No </strong><strong><em>Wargear</em></strong><strong> </strong>Attachments.<br />Brutal. (This unit gets +1 ATK for each damage on it.)",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_62",
"imgback"       : ""

},{
"number"        : "0063",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Enraged Ork",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz.",
"text"          : "Brutal. <em>(This unit gets +1 ATK for each damage on it.)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_63",
"imgback"       : ""

},{
"number"        : "0064",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Crushface",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Warrior. Nob.",
"text"          : "<strong>Interrupt</strong>: When you deploy another [ORK] unit at this planet, reduce its cost by 1.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_64",
"imgback"       : ""

},{
"number"        : "0065",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Bad Dok",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Oddboy. Nob.",
"text"          : "This unit gains 3 command icons while it is damaged.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_65",
"imgback"       : ""

},{
"number"        : "0066",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Rokkitboy",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz.",
"text"          : "Each enemy unit at this planet loses the Flying keyword.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_66",
"imgback"       : ""

},{
"number"        : "0067",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Goff Boyz",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz. Ally.",
"text"          : "This unit gets +3 ATK while it is at the first planet.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "0",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Himmelman",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_67",
"imgback"       : ""

},{
"number"        : "0068",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Shoota Mob",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_68",
"imgback"       : ""

},{
"number"        : "0069",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Burna Boyz",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Boyz.",
"text"          : "<strong>Reaction</strong>: After this unit declares an attack against an enemy unit, deal 1 damage to a different enemy unit at the same planet.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "5",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_69",
"imgback"       : ""

},{
"number"        : "0070",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Battle Cry",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "Play only during a battle.<br /><strong>Combat Action</strong>: Each [ORK] unit you control gets +2 ATK until the end of the battle.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camarena Bernabeu",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_70",
"imgback"       : ""

},{
"number"        : "0071",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Snotling Attack",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Deploy Action</strong>: Put 4 Snotlings tokens into play divided among any number of planets.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_71",
"imgback"       : ""

},{
"number"        : "0072",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Squig Bombin",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Action</strong>: Destroy a target support card.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Guillaume Ducos",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_72",
"imgback"       : ""

},{
"number"        : "0073",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Rokkit Launcha",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Weapon.",
"text"          : "Attach to an army unit.<br />Attached unit gains Ranged.<em> (Units with Ranged attack during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Konstad",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_73",
"imgback"       : ""

},{
"number"        : "0074",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Ork Kannon",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Weapon. Artillery.",
"text"          : "<strong>Combat Action</strong>: Exhaust this support to target a planet. Each player deals 1 indirect damage among the units he controls at that planet.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Toni Justamante Jacobs",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_74",
"imgback"       : ""

},{
"number"        : "0075",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Bigtoof Banna",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Upgrade.",
"text"          : "Limited. <em>(Limit one Limited card per round.)<br /></em><strong>Interrupt</strong>: When you deploy an [ORK] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alex Konstad",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_75",
"imgback"       : ""

},{
"number"        : "0076",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Tellyporta Pad",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Combat Action</strong>: Exhaust this support to move an [ORK] unit you control to the first planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_76",
"imgback"       : ""

},{
"number"        : "0077",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Zarathur’s Flamers",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon.Tzeentch.",
"text"          : "<strong>Action</strong>: Sacrifice this unit to deal 2 damage to a target non-warlord unit at the same planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mathias Kollros",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_77",
"imgback"       : ""

},{
"number"        : "0078",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Shrine of Warpflame",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Reaction</strong>: After an enemy unit is destroyed, exhaust this support to return the topmost <strong><em>Tzeentch</em></strong> card from your discard pile to your hand.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_78",
"imgback"       : ""

},{
"number"        : "0079",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Infernal Gateway",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power. Tzeentch.",
"text"          : "<strong>Combat Action:</strong> Put a [CHAOS] unit with printed cost 3 or lower into play from your hand at a planet. If that unit is still in play at the end of the phase, sacrifice it.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Zweifel",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_79",
"imgback"       : ""

},{
"number"        : "0080",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Mark of Chaos",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Curse.",
"text"          : "Attach to an army unit.<br /><strong>Interrupt</strong>: When attached unit leaves play, deal 1 damage to each enemy unit at this planet.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "004",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_80",
"imgback"       : ""

},{
"number"        : "0081",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Alpha Legion Infiltrator",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Alpha Legion.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_81",
"imgback"       : ""

},{
"number"        : "0082",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Possessed",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon. Elite.",
"text"          : "",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "9",
"hp"            : "4",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_82",
"imgback"       : ""

},{
"number"        : "0083",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Splintered Path Acolyte",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Cultist. Tzeentch.",
"text"          : "<strong>Interrupt</strong>: When you deploy a <strong><em>Daemon</em></strong><em> </em>unit, sacrifice this unit to reduce its cost by 2.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_83",
"imgback"       : ""

},{
"number"        : "0084",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Khorne Berzerker",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Khorne. World Eaters.",
"text"          : "Brutal. <em>(This unit gets +1 ATK for each damage on it.)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Hector Ortiz",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_84",
"imgback"       : ""

},{
"number"        : "0085",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Vicious Bloodletter",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon. Khorne. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Area Effect (3). <em>(When this unit attacks it may instead deal its Area Effect damage to each enemy unit at this planet.)</em>",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "",

"attack"        : "4",
"hp"            : "4",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Pascal Quidault",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_85",
"imgback"       : ""

},{
"number"        : "0086",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Umbral Preacher",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Cultist. Priest.",
"text"          : "Each army unit at this planet cannot retreat from battle.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_86",
"imgback"       : ""

},{
"number"        : "0087",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Black Legion Heldrake",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon. Black Legion. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Flying.<strong> </strong><em>(This unit takes half damage from non-flying units.)</em>",

"cost"          : 8,
"textcost"      : "8",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "8",
"hp"            : "8",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Lamont",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_87",
"imgback"       : ""

},{
"number"        : "0088",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Ravenous Flesh Hounds",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon. Khorne. Elite.",
"text"          : "No<strong> </strong>Attachments.<br /><strong>Action</strong>: Sacrifice a <strong><em>Cultist</em></strong> unit to remove all damage from this unit.",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_88",
"imgback"       : ""

},{
"number"        : "0089",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Virulent Plague Squad",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Death Guard. Nurgle.",
"text"          : "This unit gets +1 ATK for each unit in your opponent&rsquo;s discard pile.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_89",
"imgback"       : ""

},{
"number"        : "0090",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Chaos Fanatics",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Cultist.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_90",
"imgback"       : ""

},{
"number"        : "0091",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Soul Grinder",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Daemon. War Engine. Elite.",
"text"          : "<strong>No </strong><strong><em>Wargear</em></strong><strong> </strong>attachments.<br /><strong>Reaction</strong>: After you win a command struggle at this planet, your opponent must sacrifice a non-warlord unit at the same planet, if able.",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "4",
"hp"            : "6",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_91",
"imgback"       : ""

},{
"number"        : "0092",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Xavaes Split-Tongue",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Warrior. Slaneesh.",
"text"          : "<strong>Reaction</strong>: After an enemy unit at this planet is destroyed, put a Cultist token into play at your HQ.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sam Flegal",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_92",
"imgback"       : ""

},{
"number"        : "0093",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Warpstorm",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Combat Action</strong>: Deal 2 damage to each unit without any attachments at a target planet or HQ.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alexandr Elichev",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_93",
"imgback"       : ""

},{
"number"        : "0094",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Tzeentch’s Firestorm",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power. Tzeentch.",
"text"          : "<strong>Action</strong>: Deal X damage to a target non-warlord unit.",

"cost"          : 0,
"textcost"      : "X",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_94",
"imgback"       : ""

},{
"number"        : "0095",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Promise of Glory",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Deploy</strong> <strong>Action</strong>: Put 2 Cultist tokens into play at your HQ.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Dotegowski",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_95",
"imgback"       : ""

},{
"number"        : "0096",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Rune-Encrusted Armor",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Armor.",
"text"          : "Attach to an army unit.<br />Attached unit gets +2 ATK and +2 HP.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_96",
"imgback"       : ""

},{
"number"        : "0097",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Dire Mutation",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Curse. Tzeentch.",
"text"          : "Ambush<strong>. </strong><em>(You may deploy this card during the combat phase.)<br /></em>Attach to an army unit.<br /><strong>Forced Interrupt</strong>: When attached unit exhausts, deal it 1 damage.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Scott Purdy",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_97",
"imgback"       : ""

},{
"number"        : "0098",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Fortress of Madness",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.)<br /></em><strong>Interrupt</strong>: When you deploy a [CHAOS] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jacob Atienza",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_98",
"imgback"       : ""

},{
"number"        : "0099",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Murder Cogitator",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Upgrade.",
"text"          : "<strong>Reaction</strong>: After a <strong><em>Cultist</em></strong> or <strong><em>Daemon</em></strong> unit you control leaves play, exhaust this support to reveal the top card of your deck. If that card is a [CHAOS] unit, add it to your hand.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_99",
"imgback"       : ""

},{
"number"        : "0100",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Kith’s Khymeramasters",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Beastmaster. Wych.",
"text"          : "<strong>Reaction:</strong> After this unit enters play, put a Khymera token into play at this planet.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_100",
"imgback"       : ""

},{
"number"        : "0101",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Khymera Den",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Action</strong>: Exhaust this support to move any number of Khymera tokens you control to a target planet.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_101",
"imgback"       : ""

},{
"number"        : "0102",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Pact of the Haemonculi",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Deploy</strong> <strong>Action</strong>: Sacrifice a unit to discard 1 card at random from your opponent&rsquo;s hand. Then, draw 2 cards.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolay Stoyanov",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_102",
"imgback"       : ""

},{
"number"        : "0103",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Agonizer of Bren",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Weapon.",
"text"          : "Attach to an army unit.<br />Attached unit gets +1 ATK for each Khymera token you control.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "005",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_103",
"imgback"       : ""

},{
"number"        : "0104",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Sybarite Marksman",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Kabalite.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Marius Gandzel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_104",
"imgback"       : ""

},{
"number"        : "0105",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Incubus Warrior",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior.",
"text"          : "",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Kay",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_105",
"imgback"       : ""

},{
"number"        : "0106",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Haemonculus Tormentor",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scholar. Haemonculus.",
"text"          : "<strong>Action</strong>: Pay 1[RESOURCE] to give this unit +2 ATK until the end of the phase.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_106",
"imgback"       : ""

},{
"number"        : "0107",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Hellion Gang",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Raider.",
"text"          : "Flying. <em>(This unit takes half damage from non-Flying units.)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Adrian Smith",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_107",
"imgback"       : ""

},{
"number"        : "0108",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Beasthunter Wyches",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Wych.",
"text"          : "<strong>Reaction</strong>: After you play a [DARK ELDAR] event card, pay 1[RESOURCE] to put a Khymera token into play at your HQ.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michael Phillippi",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_108",
"imgback"       : ""

},{
"number"        : "0109",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Baleful Mandrake",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_109",
"imgback"       : ""

},{
"number"        : "0110",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Vile Raider",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Transport.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Mobile.<strong> </strong><em>(At the beginning of the combat phase, this unit may move to an adjacent planet.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_110",
"imgback"       : ""

},{
"number"        : "0111",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Black Heart Ravager",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Tank. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Flying. <em>(This unit takes half damage from non-Flying units.)</em><br /><strong>Reaction</strong>: After this unit damages a non-warlord unit, rout that unit.",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_111",
"imgback"       : ""

},{
"number"        : "0112",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Murder of Razorwings",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Creature. Ally.",
"text"          : "No Attachments.<br /><strong>Reaction</strong>: After you deploy this unit, discard 1 card at random from your opponent&rsquo;s hand.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Abrar Ajmalt",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_112",
"imgback"       : ""

},{
"number"        : "0113",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Coliseum Fighters",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Wych.",
"text"          : "<strong>Reaction</strong>: After this unit enters play, return the topmost event card from your discard pile to your hand.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ben Peck",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_113",
"imgback"       : ""

},{
"number"        : "0114",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Kabalite Strike Force",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Kabalite.",
"text"          : "Area Effect (1). <em>(When this unit attacks it may instead deal its Area Effect damage to each enemy unit at this planet.)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_114",
"imgback"       : ""

},{
"number"        : "0115",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Syren Zythlex",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Warrior. Wych.",
"text"          : "<strong>Reaction: </strong>After an enemy unit is deployed at this planet, exhaust it.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Adrian Dadich",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_115",
"imgback"       : ""

},{
"number"        : "0116",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Power from Pain",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power. Torture.",
"text"          : "<strong>Combat Action</strong>: Your opponent must sacrifice an army unit, if able.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_116",
"imgback"       : ""

},{
"number"        : "0117",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Archon’s Terror",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Combat Action</strong>: Rout a target non-unique unit.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Victor P Corbella",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_117",
"imgback"       : ""

},{
"number"        : "0118",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Raid",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "Limited. <em>(Limit one Limited card per round.)</em><br /><strong>Action</strong>: Take 1[RESOURCE] from your opponent if he has more resources than you.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_118",
"imgback"       : ""

},{
"number"        : "0119",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Suffering",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Condition.",
"text"          : "Attach to an army unit.<br />Attached unit gets &ndash;2 ATK.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Victor Corbella",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_119",
"imgback"       : ""

},{
"number"        : "0120",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Hypex Injector",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear.",
"text"          : "Attach to an army unit.<br /><strong>Reaction</strong>:<strong> </strong>After you play a [DARK ELDAR] event card, ready attached unit.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "JB Casacop",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_120",
"imgback"       : ""

},{
"number"        : "0121",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Altar of Torment",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.)</em><br /><strong>Interrupt</strong>: When you deploy a [DARK ELDAR] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_121",
"imgback"       : ""

},{
"number"        : "0122",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Twisted Laboratory",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Action</strong>: Exhaust this support to treat the printed text box of a target army unit as if it were blank (except for <strong><em>Traits</em></strong>) until the end of the phase.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_122",
"imgback"       : ""

},{
"number"        : "0123",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Starbane’s Council",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Psyker. Alaitoc.",
"text"          : "This unit gets +2 ATK while attacking an exhausted unit.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Gravato",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_123",
"imgback"       : ""

},{
"number"        : "0124",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Alaitoc Shrine",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "<strong>Reaction</strong>: After an [ELDAR] unit moves to a planet, exhaust this support to ready that unit.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_124",
"imgback"       : ""

},{
"number"        : "0125",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Foresight",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Reaction</strong>: After your warlord commits to a planet, commit it to a different planet.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_125",
"imgback"       : ""

},{
"number"        : "0126",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Mobility",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Skill.",
"text"          : "Attach to an army unit.<br />Attached unit gains Mobile.<strong> </strong><em>(At the beginning of the combat phase, this unit may move to an adjacent planet)</em>",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "006",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_126",
"imgback"       : ""

},{
"number"        : "0127",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Biel-Tan Guardians",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Biel-Tan. Ally.",
"text"          : "",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_127",
"imgback"       : ""

},{
"number"        : "0128",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Altansar Rangers",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Altansar.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_128",
"imgback"       : ""

},{
"number"        : "0129",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Eldar Survivalist",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Ally.",
"text"          : "[CARD BONUS +1]<br />[RESOURCE BONUS +1]",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Sergio Camaren",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_129",
"imgback"       : ""

},{
"number"        : "0130",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Wildrider Squadron",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Saim-Hann.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments. <br /><strong>Combat Action</strong>: Move this unit to an adjacent planet. (Limit once per phase.)",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_130",
"imgback"       : ""

},{
"number"        : "0131",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Soaring Falcon",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments.<br />Mobile. <em>(At the beginning of the combat phase, this unit may move to an adjacent planet.)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_131",
"imgback"       : ""

},{
"number"        : "0132",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Wailing Wraithfighter",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Spirit. Elite.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments. <br />Flying. <em>(This unit takes half damage from non-Flying units.) <br /></em><strong>Reaction</strong>: After this unit is declared as an attacker, your opponent must choose and discard 1 card from his hand, if able.",

"cost"          : 6,
"textcost"      : "6",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "3",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_132",
"imgback"       : ""

},{
"number"        : "0133",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Iyanden Wraithguard",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Drone. Spirit. Iyanden.",
"text"          : "Armorbane. <em>(Shield cards cannot be played while this unit is attacking.)</em>",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_133",
"imgback"       : ""

},{
"number"        : "0134",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Shrouded Harlequin",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior.",
"text"          : "<strong>Interrupt</strong>: When this unit is destroyed, exhaust a target enemy unit at a planet of your choice.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michal Ivan",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_134",
"imgback"       : ""

},{
"number"        : "0135",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Swordwind Farseer",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Psyker. Biel-Tan.",
"text"          : "<strong>Reaction</strong>: After this unit enters play, search the top 6 cards of your deck for a card. Add it to your hand, and place the remaining cards on the bottom of your deck in any order.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_135",
"imgback"       : ""

},{
"number"        : "0136",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Silvered Blade Avengers",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior.",
"text"          : "<strong>Reaction</strong>: After this unit is declared as an attacker against a non-warlord unit, exhaust that unit.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "4",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_136",
"imgback"       : ""

},{
"number"        : "0137",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Biel-Tan Warp Spiders",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Biel-Tan.",
"text"          : "<strong>Reaction</strong>: After this unit is declared as an attacker, look at the top 2 cards of any player&rsquo;s deck. You may discard 1 of those cards.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_137",
"imgback"       : ""

},{
"number"        : "0138",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Spiritseer Erathal",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Psyker. Saim-Hann.",
"text"          : "<strong>Reaction</strong>: After this unit is declared as an attacker, remove 1 damage from another target unit at this planet.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mariusz Gandzel",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_138",
"imgback"       : ""

},{
"number"        : "0139",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Superiority",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Interrupt</strong>: When a command struggle at a planet begins, a target army unit at that planet loses all command icons until the end of that command struggle.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nikolay Stoyanov",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_139",
"imgback"       : ""

},{
"number"        : "0140",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Nullify",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Interrupt</strong>: When your opponent plays an event card, exhaust a unique [ELDAR] unit to cancel its effects.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "John Gravato",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_140",
"imgback"       : ""

},{
"number"        : "0141",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Doom",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power.",
"text"          : "<strong>Deploy Action</strong>: Destroy each non-unique unit at each player&rsquo;s HQ.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Clint Langley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_141",
"imgback"       : ""

},{
"number"        : "0142",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Gift of Isha",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Power. Blessing.",
"text"          : "<strong>Action</strong>: Put the topmost [ELDAR] unit from your discard pile into play at a planet. If that unit is still in play at the end of the phase, discard it.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "JB Casacop",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_142",
"imgback"       : ""

},{
"number"        : "0143",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Banshee Power Sword",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Weapon.",
"text"          : "Attach to an army unit.<br />Attached unit gets +1 ATK. <strong>Interrupt</strong>: When attached unit declares an attack against a non-warlord unit, discard X cards from your hand to give attached unit +X ATK for that attack.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_143",
"imgback"       : ""

},{
"number"        : "0144",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Corsair Trading Port",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.) </em><br /><strong>Interrupt</strong>: When you deploy an [ELDAR] unit, exhaust this support to reduce that unit’s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_144",
"imgback"       : ""

},{
"number"        : "0145",
"setname"       : "Core Set",
"faction"       : "Eldar",
"name"          : "Craftworld Gate",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Upgrade.",
"text"          : "<strong>Action</strong>: Exhaust this support to return a target army unit you control to your hand.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Alexandr Elichev",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_145",
"imgback"       : ""

},{
"number"        : "0146",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Shadowsun’s Stealth Cadre",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Pilot.",
"text"          : "This card may enter play as an attachment with the text, &ldquo;Attach to a non-<strong><em>Vehicle</em></strong> army unit. Attached unit gets +2 ATK and +2 HP.&rdquo;",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "4",
"max"           : "4",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_146",
"imgback"       : ""

},{
"number"        : "0147",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Communications Relay",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Upgrade.",
"text"          : "<strong>Interrupt</strong>: When your opponent triggers an ability that targets a unit you control with 1 or more attachments, exhaust this support to cancel its effects.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_147",
"imgback"       : ""

},{
"number"        : "0148",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Squadron Redeployment",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Action</strong>: Exhaust an army unit with 1 or more attachments to move it to a planet of your choice.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "2",
"max"           : "2",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_148",
"imgback"       : ""

},{
"number"        : "0149",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Command-link Drone",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Drone.",
"text"          : "Attach to a unit.<br />Attached unit gets +1 ATK.<strong>Action</strong>: Pay 1[RESOURCE] to attach this card to a different unit.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "3",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Signature",
"squadnumber"   : "007",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "1",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_149",
"imgback"       : ""

},{
"number"        : "0150",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Recon Drone",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Drone. Ally.",
"text"          : "Limited. <em>(Limit one Limited card per round.)</em>",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "0",
"hp"            : "1",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_150",
"imgback"       : ""

},{
"number"        : "0151",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Vior’la Marksman",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Shas’la.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jason Juta",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_151",
"imgback"       : ""

},{
"number"        : "0152",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Carnivore Pack",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Kroot.",
"text"          : "<strong>Interrupt</strong>: When this unit is destroyed, gain 3[RESOURCE].",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jon Bosco",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_152",
"imgback"       : ""

},{
"number"        : "0153",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Vash’ya Trailblazer",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scout. Pilot.",
"text"          : "Mobile.<strong> </strong><em>(At the beginning of the combat phase, this unit may move to an adjacent planet.)</em>",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_153",
"imgback"       : ""

},{
"number"        : "0154",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Fire Warrior Elite",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Shas’la.",
"text"          : "<strong>Interrupt</strong>: When an enemy unit would declare an attack against a unit you control at this planet, declare this unit as the defender instead.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Damien Mammoliti",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_154",
"imgback"       : ""

},{
"number"        : "0155",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Fire Warrior Strike Team",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Shas’la.",
"text"          : "This unit gets +1 ATK for each attachment on it.",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "5",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_155",
"imgback"       : ""

},{
"number"        : "0156",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Crisis Battle Guard",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Soldier. Pilot. Elite.",
"text"          : "Mobile.<strong> </strong><em>(At the beginning of the combat phase, this unit may move to an adjacent planet.)</em>",

"cost"          : 5,
"textcost"      : "5",

"shields"       : "",
"commandicons"  : "3",

"attack"        : "3",
"hp"            : "5",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_156",
"imgback"       : ""

},{
"number"        : "0157",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Earth Caste Technician",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Scholar.. Ally.",
"text"          : "<strong>Reaction</strong>: After this unit enters play, search the top 6 cards of your deck for an attachment or <strong><em>Drone</em></strong> card. Reveal it, add it to your hand, and place the remaining cards on the bottom of your deck in any order.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_157",
"imgback"       : ""

},{
"number"        : "0158",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Gun Drones",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Drone.",
"text"          : "You may deploy this card as a <strong><em>Drone</em></strong> attachment with the text &ldquo;Attach to a non-<strong><em>Vehicle</em></strong> army unit. Attached unit gains Area Effect (2). &rdquo;",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "2",
"hp"            : "2",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_158",
"imgback"       : ""

},{
"number"        : "0159",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Stingwing Swarm",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Warrior. Vespid.",
"text"          : "Ranged.<em> (This unit attacks during the ranged skirmish at the beginning of a battle.)</em>",

"cost"          : 4,
"textcost"      : "4",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "3",
"hp"            : "3",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Michael Phillipi",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_159",
"imgback"       : ""

},{
"number"        : "0160",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Fireblade Kais’Vre",
"type"          : "Army Unit",
"unique"        : "Yes",
"traits"        : "Soldier. Hero.",
"text"          : "<strong>Interrupt</strong>: When you use a [TAU] card as a shield card at this planet, it gains 1 shield icon.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "2",

"attack"        : "2",
"hp"            : "3",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_160",
"imgback"       : ""

},{
"number"        : "0161",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Experimental Devilfish",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Vehicle. Transport.",
"text"          : "No <strong><em>Wargear</em></strong> Attachments. <br /><strong>Reaction</strong>: After this unit commits to a planet, ready it.",

"cost"          : 3,
"textcost"      : "3",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "4",
"hp"            : "2",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_161",
"imgback"       : ""

},{
"number"        : "0162",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Even the Odds",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Action</strong>: Move a target attachment to another eligible unit controlled by the same player.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ilich Henriquez",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_162",
"imgback"       : ""

},{
"number"        : "0163",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Calculated Strike",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Action</strong>: Destroy a target Limited card.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_163",
"imgback"       : ""

},{
"number"        : "0164",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Deception",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Deploy Action: </strong>Return a target non-<strong><em>Elite</em></strong> army unit to its owner&rsquo;s hand.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Bulahao",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_164",
"imgback"       : ""

},{
"number"        : "0165",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Repulsor Impact Field",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear.",
"text"          : "Attach to an army unit. Limit 1 per unit.<br /><strong>Reaction</strong>: After attached unit is damaged by an attack, deal 2 damage to the attacker.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "2",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "Loyal",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_165",
"imgback"       : ""

},{
"number"        : "0166",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Ion Rifle",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Wargear. Weapon.",
"text"          : "Attach to an army unit.<br />Attached unit gets +3 ATK.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_166",
"imgback"       : ""

},{
"number"        : "0167",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Frontline Launch Bay",
"type"          : "Support",
"unique"        : "Yes",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.)<br /></em><strong>Interrupt</strong>: When you deploy a [TAU] unit, exhaust this support to reduce that unit&rsquo;s cost by 1.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Erfian Asafat",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_167",
"imgback"       : ""

},{
"number"        : "0168",
"setname"       : "Core Set",
"faction"       : "Tau",
"name"          : "Ambush Platform",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Upgrade.",
"text"          : "<strong>Interrupt</strong>: When you deploy an attachment, reduce its cost by 1.<br /><strong>Combat Action</strong>: Exhaust this support to deploy an attachment from your hand.",

"cost"          : 2,
"textcost"      : "2",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Nicholas Gregory",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_168",
"imgback"       : ""

},{
"number"        : "0169",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "No Mercy",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Interrupt</strong>: When an opponent uses a shield card, exhaust a unique unit you control to cancel that card’s shielding effect.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Dimitri Bielak",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_169",
"imgback"       : ""

},{
"number"        : "0170",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "Void Pirate",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Ally.",
"text"          : "[CARD BONUS +1]",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "0",
"hp"            : "1",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_170",
"imgback"       : ""

},{
"number"        : "0171",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "Rogue Trader",
"type"          : "Army Unit",
"unique"        : "No",
"traits"        : "Ally.",
"text"          : "[RESOURCE BONUS +1]",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "1",

"attack"        : "None",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Andrea Uderzo",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_171",
"imgback"       : ""

},{
"number"        : "0172",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "Fall Back!",
"type"          : "Event",
"unique"        : "No",
"traits"        : "Tactic.",
"text"          : "<strong>Reaction</strong>: After an <strong><em>Elite</em></strong> unit is destroyed, put it into play from your discard pile at your HQ.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Ameen Naksewee",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_172",
"imgback"       : ""

},{
"number"        : "0173",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "Promethium Mine",
"type"          : "Support",
"unique"        : "No",
"traits"        : "Location.",
"text"          : "Limited. <em>(Limit one Limited card per round.)</em><br /><strong>Forced Reaction</strong>: After this card enters play, place 4[RESOURCE] on it.<br /><strong>Reaction</strong>: After the deploy phase begins, transfer 1[RESOURCE] from this card to your resource pool.",

"cost"          : 1,
"textcost"      : "1",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Mark Molnar",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_173",
"imgback"       : ""

},{
"number"        : "0174",
"setname"       : "Core Set",
"faction"       : "Neutral",
"name"          : "Promotion",
"type"          : "Attachment",
"unique"        : "No",
"traits"        : "Skill.",
"text"          : "Limited. <em>(Limit one Limited card per round.)</em><br />Attach to an army unit.<br />Attached unit gains 2 command icons.",

"cost"          : 0,
"textcost"      : "0",

"shields"       : "1",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "2",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_174",
"imgback"       : ""

},{
"number"        : "0175",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Plannum",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Move a non-warlord unit you control to a planet of your choice.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",tech,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Wibben",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_175",
"imgback"       : ""

},{
"number"        : "0176",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Atrox Prime",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Deal 1 damage to each enemy unit at a target HQ or adjacent planet.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_176",
"imgback"       : ""

},{
"number"        : "0177",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Barlus",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Discard 1 card at random from your opponent’s hand.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",strongpoint,",
"resourcebonus" : "0",
"cardbonus"     : "2",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_177",
"imgback"       : ""

},{
"number"        : "0178",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Elouith",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Search the top 3 cards of your deck for a card. Add it to your hand, and place the remaining cards on the bottom of your deck in any order.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",tech,",
"resourcebonus" : "0",
"cardbonus"     : "2",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_178",
"imgback"       : ""

},{
"number"        : "0179",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Carnath",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Trigger the Battle ability of another planet in play.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Sam Burley",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_179",
"imgback"       : ""

},{
"number"        : "0180",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Tarrus",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: If you control fewer units than your opponent, gain 3[RESOURCE] or draw 3 cards.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "1",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_180",
"imgback"       : ""

},{
"number"        : "0181",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Osus IV",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Take 1[RESOURCE] from your opponent.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",strongpoint,",
"resourcebonus" : "2",
"cardbonus"     : "0",

"illustrator"   : "Julian Kok",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_181",
"imgback"       : ""

},{
"number"        : "0182",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Ferrin",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Rout a target non-warlord unit.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,",
"resourcebonus" : "2",
"cardbonus"     : "0",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_182",
"imgback"       : ""

},{
"number"        : "0183",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Y’varn",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Each player puts a unit into play from his hand at his HQ.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,strongpoint,",
"resourcebonus" : "1",
"cardbonus"     : "0",

"illustrator"   : "Mauro Dal Bo",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_183",
"imgback"       : ""

},{
"number"        : "0184",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Iridial",
"type"          : "Planet",
"unique"        : "No",
"traits"        : "",
"text"          : "<strong>Battle</strong>: Remove all damage from a target unit.",

"cost"          : 0,
"textcost"      : "none",

"shields"       : "",
"commandicons"  : "",

"attack"        : "",
"hp"            : "",

"sigloyal"      : "none",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : ",material,tech,strongpoint,",
"resourcebonus" : "0",
"cardbonus"     : "1",

"illustrator"   : "Mark Molnar",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_184",
"imgback"       : ""

},{
"number"        : "0185",
"setname"       : "Core Set",
"faction"       : "Orks",
"name"          : "Snotlings",
"type"          : "Token",
"unique"        : "No",
"traits"        : "Runt.",
"text"          : "",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Jeff Porter",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_185",
"imgback"       : ""

},{
"number"        : "0186",
"setname"       : "Core Set",
"faction"       : "Astra Militarum",
"name"          : "Guardsman",
"type"          : "Token",
"unique"        : "No",
"traits"        : "Soldier.",
"text"          : "",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "2",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "GW Design Studio",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_186",
"imgback"       : ""

},{
"number"        : "0187",
"setname"       : "Core Set",
"faction"       : "Chaos",
"name"          : "Cultist",
"type"          : "Token",
"unique"        : "No",
"traits"        : "Cultist.",
"text"          : "<strong>Interrupt</strong>: When you deploy a <strong><em>Daemon</em></strong> unit, sacrifice this unit to reduce its cost by 1.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "1",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Matt Bradbury",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_187",
"imgback"       : ""

},{
"number"        : "0188",
"setname"       : "Core Set",
"faction"       : "Dark Eldar",
"name"          : "Khymera",
"type"          : "Token",
"unique"        : "No",
"traits"        : "Creature.",
"text"          : "No Attachments.",

"cost"          : 0,
"textcost"      : "",

"shields"       : "",
"commandicons"  : "",

"attack"        : "2",
"hp"            : "1",

"sigloyal"      : "",
"squadnumber"   : "",
"insquadnumber" : "",

"sresources"    : "",
"shand"         : "",

"planettype"    : "",
"resourcebonus" : "",
"cardbonus"     : "",

"illustrator"   : "Brynn Metheney",

"packquantity"  : "1",
"max"           : "3",
"restricted"    : "",
"banned"        : "",

"img"           : "WHK01_188",
"imgback"       : ""

}];
    var symbols = {
            'スペース マリーン': '<span class="icon-spacemarines"></span>',
            'オルク': '<span class="icon-ork"></span>',
            'ケイオス': '<span class="icon-chaos"></span>',
            'アストラ ミリタルム': '<span class="icon-astramilitarum"></span>',
            'ダーク エルダー': '<span class="icon-darkeldar"></span>',
            'エルダー': '<span class="icon-eldar"></span>',
            'タウ': '<span class="icon-tau"></span>'
    };
    for (var i = 0; i < cards.length; i++) {
        var en = cards_en[i];
        var t = cards[i];
        t.symbol = symbols[t.faction];
        t.name_en = en.name;
        t.text_en = en.text;
    }
  return {
    all: function() {
      return cards;
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].number === cardId) {
          var t = cards[i];
          t.text = t.text.replace('[RESOURCE]', '<span class="icon-resource"></span>');
          t.text = t.text.replace('[TAU]', '<span class="icon-tau"></span>');
          t.text = t.text.replace('[SPACE MARINE]', '<span class="icon-spacemarines"></span>');
          t.text = t.text.replace('[ASTRA MILITARUM]', '<span class="icon-astramilitarum"></span>');
          t.text = t.text.replace('[ORK]', '<span class="icon-ork"></span>');
          t.text = t.text.replace('[CHAOS]', '<span class="icon-chaos"></span>');
          t.text = t.text.replace('[DARK ELDAR]', '<span class="icon-darkeldar"></span>');
          t.text = t.text.replace('[ELDAR]', '<span class="icon-eldar"></span>');

          t.text_en = t.text_en.replace('[RESOURCE]', '<span class="icon-resource"></span>');
          t.text_en = t.text_en.replace('[TAU]', '<span class="icon-tau"></span>');
          t.text_en = t.text_en.replace('[SPACE MARINE]', '<span class="icon-spacemarines"></span>');
          t.text_en = t.text_en.replace('[ASTRA MILITARUM]', '<span class="icon-astramilitarum"></span>');
          t.text_en = t.text_en.replace('[ORK]', '<span class="icon-ork"></span>');
          t.text_en = t.text_en.replace('[CHAOS]', '<span class="icon-chaos"></span>');
          t.text_en = t.text_en.replace('[DARK ELDAR]', '<span class="icon-darkeldar"></span>');
          t.text_en = t.text_en.replace('[ELDAR]', '<span class="icon-eldar"></span>');
          return t;
        }
      }
      return null;
    }
  };
});
