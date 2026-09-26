/* 蔬序 · 时令蔬肉志 */
(function () {
  "use strict";

  const ITEMS = [
    {
      id: "spinach",
      name: "菠菜",
      en: "Spinach",
      emoji: "🥬",
      type: "veg",
      brief: "叶酸与铁的好来源，快炒或做汤都出彩。",
      benefits: ["补铁", "叶酸", "膳食纤维", "护眼"],
      seasons: ["spring", "autumn", "winter"],
      months: [3, 4, 5, 9, 10, 11, 12, 1, 2],
      seasonText: "春菠与秋菠最嫩，冬天大棚菠菜也很稳。",
      pairing: "蒜蓉快炒、上汤、凉拌（焯水）。搭配富含维 C 的彩椒或番茄，铁吸收更好。",
      tips: "选叶片挺括、根部鲜红的。冷藏 1–2 天内吃完，别久泡。",
      kcal: 28,
      protein: 2.6,
      fat: 0.3,
      fiber: 2.2,
      calLevel: "low",
      scene: ["elder-soft", "younger-iron", "student-budget", "younger-light"],
      tags: ["叶菜", "高铁", "快炒"]
    },
    {
      id: "broccoli",
      name: "西兰花",
      en: "Broccoli",
      emoji: "🥦",
      type: "veg",
      brief: "十字花科代表，纤维扎实，减脂餐常客。",
      benefits: ["膳食纤维", "维C", "护眼", "控卡友好"],
      seasons: ["spring", "autumn", "winter"],
      months: [3, 4, 10, 11, 12, 1],
      seasonText: "秋冬季花球更紧实，风味更足。",
      pairing: "蒜蓉清炒、白灼蘸汁、烤箱少油烤。与虾仁、鸡胸同炒蛋白更完整。",
      tips: "花球紧实、颜色深绿、无黄花。冷藏可放 3–5 天，吃前再洗。",
      kcal: 36,
      protein: 3.7,
      fat: 0.4,
      fiber: 3.3,
      calLevel: "low",
      scene: ["younger-light", "younger-gym", "student-exam", "elder-soft"],
      tags: ["十字花", "高纤", "减脂"]
    },
    {
      id: "tomato",
      name: "番茄",
      en: "Tomato",
      emoji: "🍅",
      type: "veg",
      brief: "酸甜开胃，番茄红素加热后更好吸收。",
      benefits: ["维C", "抗氧化", "控卡友好", "开胃"],
      seasons: ["summer", "autumn"],
      months: [6, 7, 8, 9, 10],
      seasonText: "夏末秋初自然成熟番茄风味最浓。",
      pairing: "番茄炒蛋、番茄牛腩、凉拌。少油加热能提升番茄红素利用率。",
      tips: "颜色均匀、有清香、略软有弹性。冷藏会降低风味，室温阴凉处更佳。",
      kcal: 22,
      protein: 0.9,
      fat: 0.2,
      fiber: 1.2,
      calLevel: "low",
      scene: ["younger-light", "student-budget", "elder-soft", "younger-office"],
      tags: ["家常", "低卡", "酸甜"]
    },
    {
      id: "carrot",
      name: "胡萝卜",
      en: "Carrot",
      emoji: "🥕",
      type: "veg",
      brief: "β-胡萝卜素丰富，护眼又耐放。",
      benefits: ["护眼", "膳食纤维", "耐储"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12, 1, 2],
      seasonText: "秋冬根茎最甜，炖煮后更软糯。",
      pairing: "炖肉、炒丝、榨汁不推荐当主食。与肉类同炖，脂溶性维生素更好吸收。",
      tips: "表面光滑、颜色橙红、无裂口。去缨后冷藏可放很久。",
      kcal: 39,
      protein: 0.9,
      fat: 0.2,
      fiber: 2.8,
      calLevel: "low",
      scene: ["elder-soft", "student-budget", "younger-office"],
      tags: ["根茎", "护眼", "耐放"]
    },
    {
      id: "cucumber",
      name: "黄瓜",
      en: "Cucumber",
      emoji: "🥒",
      type: "veg",
      brief: "清脆解腻，凉拌快炒都省事。",
      benefits: ["控卡友好", "补水", "清爽"],
      seasons: ["summer"],
      months: [5, 6, 7, 8, 9],
      seasonText: "夏季最脆爽，秋后风味略减。",
      pairing: "拍黄瓜、凉拌、快炒、当零食条。减脂期替代高热量零食很合适。",
      tips: "刺密、挺直、颜色深绿。冷藏 3–5 天。",
      kcal: 15,
      protein: 0.8,
      fat: 0.1,
      fiber: 0.7,
      calLevel: "low",
      scene: ["younger-light", "student-budget", "younger-office", "elder-soft"],
      tags: ["清爽", "低卡", "即食"]
    },
    {
      id: "eggplant",
      name: "茄子",
      en: "Eggplant",
      emoji: "🍆",
      type: "veg",
      brief: "吸味能力强，少油做法也能很好吃。",
      benefits: ["膳食纤维", "抗氧化"],
      seasons: ["summer", "autumn"],
      months: [6, 7, 8, 9, 10],
      seasonText: "夏秋茄子最嫩，籽少肉厚。",
      pairing: "蒸茄子、少油烧、烤茄子。避免过油炸，否则热量翻倍。",
      tips: "表皮光亮紧绷、蒂部新鲜。不耐久放，2–3 天内吃。",
      kcal: 25,
      protein: 1.1,
      fat: 0.2,
      fiber: 2.5,
      calLevel: "low",
      scene: ["elder-soft", "younger-light", "student-budget"],
      tags: ["家常", "吸味", "软糯"]
    },
    {
      id: "cabbage",
      name: "大白菜",
      en: "Napa Cabbage",
      emoji: "🥬",
      type: "veg",
      brief: "冬季当家菜，炖煮火锅都少不了。",
      benefits: ["膳食纤维", "维C", "耐储", "性价比"],
      seasons: ["autumn", "winter"],
      months: [10, 11, 12, 1, 2],
      seasonText: "霜后白菜最甜，冬天餐桌主力。",
      pairing: "醋溜、炖豆腐、涮火锅、做馅。帮叶分开下锅口感更好。",
      tips: "包心紧实、无黑点腐烂。阴凉通风可放较久。",
      kcal: 17,
      protein: 1.5,
      fat: 0.1,
      fiber: 1.1,
      calLevel: "low",
      scene: ["student-budget", "elder-soft", "younger-light"],
      tags: ["冬储", "便宜", "百搭"]
    },
    {
      id: "potato",
      name: "土豆",
      en: "Potato",
      emoji: "🥔",
      type: "veg",
      brief: "既是菜也可当主食，饱腹感强。",
      benefits: ["饱腹", "维C", "性价比", "耐储"],
      seasons: ["autumn", "winter", "spring"],
      months: [9, 10, 11, 12, 1, 2, 3, 4],
      seasonText: "秋收土豆淀粉足，炖煮更绵软。",
      pairing: "炖牛肉、醋溜丝、蒸土豆替代部分主食。发芽变绿的不要吃。",
      tips: "表皮完整无芽眼。避光存放，发芽变绿含龙葵素不可食用。",
      kcal: 81,
      protein: 2.0,
      fat: 0.1,
      fiber: 1.6,
      calLevel: "mid",
      scene: ["student-budget", "elder-soft", "younger-gym"],
      tags: ["主食化", "耐放", "饱腹"]
    },
    {
      id: "pumpkin",
      name: "南瓜",
      en: "Pumpkin",
      emoji: "🎃",
      type: "veg",
      brief: "软糯香甜，长辈牙口友好。",
      benefits: ["护眼", "膳食纤维", "软烂易嚼", "饱腹"],
      seasons: ["autumn"],
      months: [9, 10, 11],
      seasonText: "秋南瓜最粉糯，甜度高。",
      pairing: "蒸南瓜、南瓜粥、炖汤。可替代部分主食，控糖者注意量。",
      tips: "外皮坚硬、蒂部干燥、掂起来沉。完整南瓜耐放，切开后冷藏。",
      kcal: 26,
      protein: 1.0,
      fat: 0.1,
      fiber: 1.4,
      calLevel: "low",
      scene: ["elder-soft", "elder-digest", "student-budget"],
      tags: ["软糯", "护眼", "秋令"]
    },
    {
      id: "mushroom",
      name: "香菇",
      en: "Shiitake",
      emoji: "🍄",
      type: "veg",
      brief: "提鲜能手，干货泡发后更香。",
      benefits: ["膳食纤维", "提鲜", "耐储", "低脂"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12, 1, 2],
      seasonText: "秋香菇肉厚香气足。",
      pairing: "炖鸡、烧菜、煲汤。干香菇泡发水可留用提鲜。",
      tips: "鲜菇选伞厚、无黏液。干货密封干燥保存更耐放。",
      kcal: 22,
      protein: 2.2,
      fat: 0.3,
      fiber: 3.3,
      calLevel: "low",
      scene: ["student-budget", "younger-light", "elder-soft"],
      tags: ["提鲜", "菌菇", "干货"]
    },
    {
      id: "pepper",
      name: "彩椒",
      en: "Bell Pepper",
      emoji: "🫑",
      type: "veg",
      brief: "维 C 亮眼，颜色好看也好吃。",
      benefits: ["维C", "护眼", "控卡友好", "抗氧化"],
      seasons: ["summer", "autumn"],
      months: [6, 7, 8, 9, 10],
      seasonText: "夏秋彩椒最脆甜。",
      pairing: "快炒、沙拉、烤肉搭档。与红肉同餐，促进铁吸收。",
      tips: "表皮光亮、肉厚、有分量。冷藏约一周。",
      kcal: 31,
      protein: 1.0,
      fat: 0.3,
      fiber: 2.1,
      calLevel: "low",
      scene: ["younger-iron", "younger-light", "student-exam", "younger-office"],
      tags: ["高维C", "脆甜", "配色"]
    },
    {
      id: "celery",
      name: "芹菜",
      en: "Celery",
      emoji: "🥬",
      type: "veg",
      brief: "高纤清爽，咀嚼感强帮助少吃多嚼。",
      benefits: ["膳食纤维", "控卡友好", "清爽"],
      seasons: ["autumn", "winter", "spring"],
      months: [10, 11, 12, 1, 2, 3, 4],
      seasonText: "春秋芹菜纤维细，口感更好。",
      pairing: "快炒、凉拌、做馅。叶子别扔，可做蒸菜或汤。",
      tips: "茎直挺、颜色浅绿鲜亮。冷藏可放一周。",
      kcal: 14,
      protein: 0.7,
      fat: 0.1,
      fiber: 1.6,
      calLevel: "low",
      scene: ["younger-light", "elder-digest", "younger-office"],
      tags: ["高纤", "低卡", "清口"]
    },
    {
      id: "lettuce",
      name: "生菜",
      en: "Lettuce",
      emoji: "🥗",
      type: "veg",
      brief: "包肉解腻，生食凉拌最方便。",
      benefits: ["控卡友好", "补水", "清爽"],
      seasons: ["spring", "summer"],
      months: [3, 4, 5, 6, 7, 8],
      seasonText: "春夏生菜更嫩，夏季生菜容易苦。",
      pairing: "生菜包肉、沙拉、蒜蓉炒。减脂期当「碳水缓冲垫」很好。",
      tips: "叶片挺括无褐边。吃前再洗，冷藏 2–3 天。",
      kcal: 15,
      protein: 1.4,
      fat: 0.2,
      fiber: 1.3,
      calLevel: "low",
      scene: ["younger-light", "younger-office", "student-budget"],
      tags: ["生食", "低卡", "解腻"]
    },
    {
      id: "green-bean",
      name: "豆角",
      en: "Green Bean",
      emoji: "🫘",
      type: "veg",
      brief: "必须彻底炒熟，家常下饭好手。",
      benefits: ["膳食纤维", "植物蛋白", "饱腹"],
      seasons: ["summer", "autumn"],
      months: [6, 7, 8, 9],
      seasonText: "夏秋豆角最嫩，籽少。",
      pairing: "干煸、炖排骨、凉拌（务必焯熟）。未熟豆角含皂素，必须熟透。",
      tips: "鲜绿、掰断脆响、无锈斑。冷藏 2–4 天。",
      kcal: 34,
      protein: 2.0,
      fat: 0.2,
      fiber: 2.7,
      calLevel: "low",
      scene: ["student-budget", "younger-light", "elder-soft"],
      tags: ["家常", "须熟透", "高纤"]
    },
    {
      id: "onion",
      name: "洋葱",
      en: "Onion",
      emoji: "🧅",
      type: "veg",
      brief: "提香耐放，炒肉炖菜常备。",
      benefits: ["膳食纤维", "耐储", "提香"],
      seasons: ["autumn", "winter", "spring"],
      months: [9, 10, 11, 12, 1, 2, 3, 4],
      seasonText: "秋冬洋葱更甜、更耐放。",
      pairing: "炒肉、炖汤、烤肉配菜。生吃辛辣，胃肠敏感可熟吃。",
      tips: "外皮干燥、球茎坚实。通风干燥处可久存。",
      kcal: 42,
      protein: 1.1,
      fat: 0.1,
      fiber: 1.7,
      calLevel: "low",
      scene: ["student-budget", "younger-office", "elder-digest"],
      tags: ["耐放", "提香", "家常"]
    },
    {
      id: "yam",
      name: "山药",
      en: "Chinese Yam",
      emoji: "🍠",
      type: "veg",
      brief: "绵软好消化，长辈养胃常选。",
      benefits: ["软烂易嚼", "饱腹", "养胃友好"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12, 1],
      seasonText: "霜后山药更粉糯。",
      pairing: "蒸食、炖汤、炒木耳。可替代部分主食。削皮时可戴手套防痒。",
      tips: "表皮无斑点、须根少、手感沉。完整冷藏可放数日。",
      kcal: 57,
      protein: 1.9,
      fat: 0.2,
      fiber: 1.4,
      calLevel: "mid",
      scene: ["elder-soft", "elder-digest", "student-budget"],
      tags: ["软糯", "养胃", "主食化"]
    },
    {
      id: "lotus",
      name: "莲藕",
      en: "Lotus Root",
      emoji: "🪷",
      type: "veg",
      brief: "脆藕生吃，粉藕煲汤，各有各好。",
      benefits: ["膳食纤维", "补水", "家常"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12],
      seasonText: "秋藕最当令，脆甜或粉糯随品种。",
      pairing: "排骨藕汤、清炒、凉拌。脆藕快炒，粉藕炖汤。",
      tips: "节间短、无破口、无异味。切开易氧化，可泡淡盐水。",
      kcal: 73,
      protein: 1.9,
      fat: 0.2,
      fiber: 1.8,
      calLevel: "mid",
      scene: ["elder-soft", "student-budget", "younger-office"],
      tags: ["秋令", "煲汤", "脆/粉"]
    },
    {
      id: "winter-melon",
      name: "冬瓜",
      en: "Winter Melon",
      emoji: "🍈",
      type: "veg",
      brief: "含水量高，清淡解腻控卡友好。",
      benefits: ["控卡友好", "补水", "清淡"],
      seasons: ["summer", "autumn"],
      months: [7, 8, 9, 10],
      seasonText: "夏末冬瓜最厚实。",
      pairing: "冬瓜排骨汤、清炒、火锅配菜。几乎不抢味，百搭。",
      tips: "外皮有白霜、手感沉。切开后冷藏并尽快吃完。",
      kcal: 12,
      protein: 0.4,
      fat: 0.2,
      fiber: 0.9,
      calLevel: "low",
      scene: ["younger-light", "elder-soft", "younger-office"],
      tags: ["低卡", "煲汤", "清淡"]
    },
    {
      id: "chicken-breast",
      name: "鸡胸肉",
      en: "Chicken Breast",
      emoji: "🍗",
      type: "meat",
      brief: "高蛋白低脂，减脂增肌经典之选。",
      benefits: ["优质蛋白", "低脂", "控卡友好", "增肌"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，没有明显时令限制。",
      pairing: "水煮、煎烤、撕丝拌沙拉。提前腌制更嫩；别煮到干柴。",
      tips: "选颜色粉嫩、无异味、弹性好的。冷冻分装，避免反复化冻。",
      kcal: 133,
      protein: 24.6,
      fat: 5.0,
      fiber: 0,
      calLevel: "mid",
      scene: ["younger-gym", "younger-light", "student-exam", "younger-office"],
      tags: ["高蛋白", "低脂", "健身"]
    },
    {
      id: "chicken-leg",
      name: "鸡腿肉",
      en: "Chicken Thigh",
      emoji: "🍗",
      type: "meat",
      brief: "更嫩更多汁，比鸡胸更好入口。",
      benefits: ["优质蛋白", "软烂易嚼", "风味足"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，炖烤皆宜。",
      pairing: "红烧、炖汤、烤制。去皮可降低脂肪；给长辈吃炖烂更好。",
      tips: "皮色正常、无异味。冷藏 1–2 天，冷冻更稳。",
      kcal: 181,
      protein: 16.0,
      fat: 13.0,
      fiber: 0,
      calLevel: "mid",
      scene: ["elder-soft", "student-budget", "younger-gym"],
      tags: ["嫩滑", "炖烤", "家常"]
    },
    {
      id: "pork-tenderloin",
      name: "猪里脊",
      en: "Pork Tenderloin",
      emoji: "🥩",
      type: "meat",
      brief: "猪肉里的瘦肉担当，快炒很嫩。",
      benefits: ["优质蛋白", "补铁", "B族维生素"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，是常见红肉补铁之选。",
      pairing: "滑炒、酱爆、炖汤。切薄上浆更嫩，大火快炒不过火。",
      tips: "色泽红润、无异味、弹性好。按餐分装冷冻。",
      kcal: 143,
      protein: 20.3,
      fat: 6.2,
      fiber: 0,
      calLevel: "mid",
      scene: ["younger-iron", "elder-soft", "student-budget", "younger-gym"],
      tags: ["瘦肉", "补铁", "快炒"]
    },
    {
      id: "pork-belly",
      name: "五花肉",
      en: "Pork Belly",
      emoji: "🥓",
      type: "meat",
      brief: "香，但要控量；解馋不必天天吃。",
      benefits: ["风味足", "能量高"],
      seasons: ["autumn", "winter"],
      months: [10, 11, 12, 1, 2],
      seasonText: "秋冬炖菜更香，但更适合偶尔吃。",
      pairing: "红烧肉、回锅肉、炖菜。搭配大量蔬菜与主食平衡，注意频次。",
      tips: "层次分明、色泽正常。可冷冻切片，按次取用。",
      kcal: 518,
      protein: 9.5,
      fat: 53.0,
      fiber: 0,
      calLevel: "high",
      scene: ["student-budget"],
      tags: ["香浓", "限量", "炖煮"]
    },
    {
      id: "beef-shank",
      name: "牛腱",
      en: "Beef Shank",
      emoji: "🥩",
      type: "meat",
      brief: "卤制切片绝了，蛋白足、风味浓。",
      benefits: ["优质蛋白", "补铁", "锌", "增肌"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12, 1, 2],
      seasonText: "秋冬卤牛腱、酱牛肉更受欢迎。",
      pairing: "卤制切片、炖汤、凉拌。冷藏后切片更整齐。",
      tips: "选色泽深红、筋络清晰、无异味。冷藏 1–2 天，冷冻更久。",
      kcal: 153,
      protein: 26.0,
      fat: 5.5,
      fiber: 0,
      calLevel: "mid",
      scene: ["younger-gym", "younger-iron", "younger-office", "student-exam"],
      tags: ["卤味", "高铁", "高蛋白"]
    },
    {
      id: "beef-brisket",
      name: "牛腩",
      en: "Beef Brisket",
      emoji: "🥩",
      type: "meat",
      brief: "炖到软烂，番茄牛腩的灵魂。",
      benefits: ["优质蛋白", "补铁", "软烂易嚼"],
      seasons: ["autumn", "winter"],
      months: [9, 10, 11, 12, 1, 2],
      seasonText: "秋冬炖菜最佳搭档。",
      pairing: "番茄牛腩、清炖、咖喱。带筋膜的部位更香，炖足时间。",
      tips: "颜色鲜红、脂肪分布自然。炖前可焯水去腥。",
      kcal: 332,
      protein: 14.0,
      fat: 30.0,
      fiber: 0,
      calLevel: "high",
      scene: ["elder-soft", "younger-iron", "student-budget"],
      tags: ["炖菜", "软烂", "香浓"]
    },
    {
      id: "lamb-leg",
      name: "羊腿肉",
      en: "Lamb Leg",
      emoji: "🍖",
      type: "meat",
      brief: "秋冬暖身，涮烤炖都出彩。",
      benefits: ["优质蛋白", "补铁", "锌"],
      seasons: ["autumn", "winter"],
      months: [10, 11, 12, 1, 2],
      seasonText: "秋冬进补常选，夏季较少吃。",
      pairing: "手抓、炖萝卜、涮锅、烤串。可搭配萝卜、当归类香料去膻。",
      tips: "选色泽红润、脂肪洁白、无膻臭味。分装冷冻。",
      kcal: 203,
      protein: 17.0,
      fat: 15.0,
      fiber: 0,
      calLevel: "mid",
      scene: ["elder-soft", "younger-iron", "younger-gym"],
      tags: ["暖身", "秋冬", "涮烤"]
    },
    {
      id: "pork-liver",
      name: "猪肝",
      en: "Pork Liver",
      emoji: "🩸",
      type: "meat",
      brief: "补铁要角，但不必频繁大量吃。",
      benefits: ["补铁", "维A", "B族维生素"],
      seasons: ["spring", "autumn", "winter"],
      months: [1, 2, 3, 9, 10, 11, 12],
      seasonText: "并无严格时令，按需补充即可。",
      pairing: "爆炒、煮汤、卤制。彻底做熟。胆固醇与维 A 较高，控频次。",
      tips: "色泽均匀、无异味、有弹性。要彻底清洗并做熟。",
      kcal: 129,
      protein: 20.2,
      fat: 4.7,
      fiber: 0,
      calLevel: "mid",
      scene: ["younger-iron", "elder-soft"],
      tags: ["补铁", "内脏", "适量"]
    },
    {
      id: "duck",
      name: "鸭肉",
      en: "Duck",
      emoji: "🦆",
      type: "meat",
      brief: "皮脂偏多，炖汤盐水鸭各有风味。",
      benefits: ["优质蛋白", "B族维生素", "风味足"],
      seasons: ["autumn"],
      months: [8, 9, 10],
      seasonText: "民间有「秋鸭」说法，夏末秋初更常吃。",
      pairing: "老鸭汤、盐水鸭、烧鸭。去皮可降低脂肪摄入。",
      tips: "表皮完整、无异味。整只或分装冷冻均可。",
      kcal: 240,
      protein: 16.0,
      fat: 20.0,
      fiber: 0,
      calLevel: "high",
      scene: ["elder-soft", "student-budget"],
      tags: ["炖汤", "秋令", "去皮更轻"]
    },
    {
      id: "egg",
      name: "鸡蛋",
      en: "Egg",
      emoji: "🥚",
      type: "meat",
      brief: "性价比之王，几乎人人需要。",
      benefits: ["优质蛋白", "卵磷脂", "性价比", "软烂易嚼"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，日常必备。",
      pairing: "水煮、蒸蛋、炒蛋、做汤。全蛋营养更完整，不必只吃蛋白。",
      tips: "蛋壳完整无裂纹。冷藏可放数周，钝头朝上存放更稳。",
      kcal: 144,
      protein: 13.3,
      fat: 9.5,
      fiber: 0,
      calLevel: "mid",
      scene: ["student-budget", "elder-soft", "younger-gym", "student-exam", "younger-office"],
      tags: ["百搭", "性价比", "全营养"]
    },
    {
      id: "salmon",
      name: "三文鱼",
      en: "Salmon",
      emoji: "🐟",
      type: "meat",
      brief: "富含优质蛋白与不饱和脂肪酸。",
      benefits: ["优质蛋白", "不饱和脂肪酸", "护心友好", "增肌"],
      seasons: ["summer", "autumn"],
      months: [6, 7, 8, 9, 10],
      seasonText: "并无本地时令，看产地与保鲜更重要。",
      pairing: "煎、烤、蒸、做刺身（需可靠来源）。别过度油炸。",
      tips: "选色泽橙红、纹理清晰、无异味的。冷藏尽快食用，冷冻更稳。",
      kcal: 208,
      protein: 20.4,
      fat: 13.4,
      fiber: 0,
      calLevel: "mid",
      scene: ["younger-gym", "younger-light", "elder-soft", "younger-office"],
      tags: ["深海鱼", "高蛋白", "好脂肪"]
    },
    {
      id: "shrimp",
      name: "虾",
      en: "Shrimp",
      emoji: "🦐",
      type: "meat",
      brief: "高蛋白低脂，清甜好熟。",
      benefits: ["优质蛋白", "低脂", "控卡友好", "硒"],
      seasons: ["summer", "autumn"],
      months: [5, 6, 7, 8, 9, 10],
      seasonText: "夏季到初秋虾肉更紧实。",
      pairing: "白灼、蒜蓉、蒸蛋、炒蔬菜。彻底加热至变色熟透。",
      tips: "虾身完整、头体紧连、无黑头异味。冷冻保存更常见。",
      kcal: 93,
      protein: 18.6,
      fat: 1.3,
      fiber: 0,
      calLevel: "low",
      scene: ["younger-light", "younger-gym", "elder-soft", "student-exam"],
      tags: ["低脂", "高蛋白", "快手"]
    },
    {
      id: "tofu",
      name: "豆腐",
      en: "Tofu",
      emoji: "🧈",
      type: "soy",
      brief: "植物蛋白代表，便宜百搭好消化。",
      benefits: ["植物蛋白", "补钙", "性价比", "软烂易嚼"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，日常基础食材。",
      pairing: "麻婆、炖鱼、煮汤、凉拌。北豆腐更适合炖，南豆腐更嫩。",
      tips: "选无异味、有弹性、包装完好的。开封后冷藏并尽快食用。",
      kcal: 73,
      protein: 8.1,
      fat: 3.7,
      fiber: 0.4,
      calLevel: "low",
      scene: ["student-budget", "elder-soft", "elder-digest", "younger-light", "younger-office"],
      tags: ["植物蛋白", "补钙", "百搭"]
    },
    {
      id: "dried-beancurd",
      name: "豆干",
      en: "Dried Tofu",
      emoji: "🟫",
      type: "soy",
      brief: "便携耐放，加餐和下饭都可以。",
      benefits: ["植物蛋白", "耐储", "性价比", "便携"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，囤货友好。",
      pairing: "卤制、炒芹菜、凉拌、当加餐。注意选少油少盐版本。",
      tips: "选气味正常、包装完好、保质期内。开封后冷藏。",
      kcal: 142,
      protein: 14.8,
      fat: 6.7,
      fiber: 0.8,
      calLevel: "mid",
      scene: ["student-budget", "younger-office", "younger-gym"],
      tags: ["便携", "植物蛋白", "耐放"]
    },
    {
      id: "soy-milk",
      name: "无糖豆浆",
      en: "Soy Milk",
      emoji: "🥛",
      type: "soy",
      brief: "液态植物蛋白，早餐或加餐都合适。",
      benefits: ["植物蛋白", "补钙友好", "清爽"],
      seasons: ["spring", "summer", "autumn", "winter"],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      seasonText: "四季皆可，热饮冷饮都行。",
      pairing: "早餐搭配鸡蛋全麦，或训练后加餐。选无糖更轻负担。",
      tips: "选配料简单、无添加糖的产品。开封后冷藏尽快喝完。",
      kcal: 31,
      protein: 3.0,
      fat: 1.6,
      fiber: 1.1,
      calLevel: "low",
      scene: ["student-budget", "younger-office", "elder-soft", "younger-light"],
      tags: ["无糖", "饮品", "植物蛋白"]
    }
  ];

  const BENEFITS = [
    "优质蛋白",
    "植物蛋白",
    "补铁",
    "补钙",
    "膳食纤维",
    "维C",
    "护眼",
    "抗氧化",
    "低脂",
    "控卡友好",
    "软烂易嚼",
    "性价比",
    "耐储"
  ];

  const SCENES = {
    elder: [
      { id: "elder-soft", label: "牙口不好" },
      { id: "elder-digest", label: "胃弱消化" },
      { id: "elder-iron", label: "需要补铁" },
      { id: "elder-light", label: "清淡少油" }
    ],
    younger: [
      { id: "younger-gym", label: "健身增肌" },
      { id: "younger-light", label: "减脂控卡" },
      { id: "younger-iron", label: "想补铁气色" },
      { id: "younger-office", label: "上班快手" }
    ],
    student: [
      { id: "student-budget", label: "预算有限" },
      { id: "student-exam", label: "考试周补给" },
      { id: "student-dorm", label: "宿舍没厨房" },
      { id: "student-share", label: "好分好放" }
    ]
  };

  const SEASON_META = {
    spring: {
      name: "春",
      title: "春日鲜嫩 · 清补起步",
      intro: "春菜多嫩叶与芽苗，清淡少油、快炒短时，能吃到最新鲜的那股清气。"
    },
    summer: {
      name: "夏",
      title: "夏日清爽 · 补水开胃",
      intro: "黄瓜、番茄、豆角、冬瓜大量上市，适合凉拌、快做、少油腻，注意生熟分开与冷藏。"
    },
    autumn: {
      name: "秋",
      title: "秋日丰足 · 根茎当道",
      intro: "南瓜、山药、莲藕、根茎类风味转甜，炖煮煲汤正当季；也是卤味和炖肉的好时节。"
    },
    winter: {
      name: "冬",
      title: "冬日暖炖 · 白菜土豆",
      intro: "冬储菜与炖菜扛大梁，白菜、土豆、萝卜、根茎配合牛腩羊腿，软烂入味更暖身。"
    }
  };

  const SEASON_MONTHS = {
    spring: [3, 4, 5],
    summer: [6, 7, 8],
    autumn: [9, 10, 11],
    winter: [12, 1, 2]
  };

  // ---------- helpers ----------
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function seasonOfMonth(m) {
    if (m >= 3 && m <= 5) return "spring";
    if (m >= 6 && m <= 8) return "summer";
    if (m >= 9 && m <= 11) return "autumn";
    return "winter";
  }

  function typeName(type) {
    return type === "veg" ? "蔬菜" : type === "meat" ? "肉蛋水产" : "豆制品";
  }

  function calLabel(level) {
    return level === "low" ? "热量偏低" : level === "mid" ? "热量中等" : "热量偏高";
  }

  function itemsForMonth(m) {
    return ITEMS.filter((it) => it.months.includes(m));
  }

  function getItem(id) {
    return ITEMS.find((it) => it.id === id);
  }

  // ---------- favorites ----------
  const FAV_KEY = "shuxu-favorites";
  let favorites = loadFavorites();

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(FAV_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    const el = $("#fav-count");
    if (el) el.textContent = String(favorites.length);
  }

  function isFav(id) {
    return favorites.includes(id);
  }

  function toggleFav(id) {
    if (isFav(id)) favorites = favorites.filter((x) => x !== id);
    else favorites.push(id);
    saveFavorites();
    refreshFavButtons();
    renderFavorites();
  }

  function refreshFavButtons() {
    $$("[data-fav-id]").forEach((btn) => {
      const id = btn.getAttribute("data-fav-id");
      btn.classList.toggle("is-active", isFav(id));
      btn.textContent = isFav(id) ? "♥" : "♡";
    });
    const modalFav = $("#modal-fav");
    if (modalFav && modalFav.dataset.id) {
      const on = isFav(modalFav.dataset.id);
      modalFav.classList.toggle("is-active", on);
      modalFav.textContent = on ? "♥" : "♡";
    }
  }

  // ---------- card rendering ----------
  function imgSrc(it) {
    return "assets/img/" + it.id + ".png";
  }

  function itemImg(it, className) {
    return `<img class="${className || "item-photo"}" src="${imgSrc(it)}" alt="${it.name}" loading="lazy" width="96" height="96" />`;
  }

  function cardHTML(it) {
    const tags = (it.tags || []).slice(0, 3);
    return `
      <article class="item-card" data-id="${it.id}" tabindex="0" role="button" aria-label="查看${it.name}详情">
        <div class="item-card-top">
          <div class="item-emoji">${itemImg(it, "item-photo")}</div>
          <button class="fav-btn ${isFav(it.id) ? "is-active" : ""}" type="button" data-fav-id="${it.id}" aria-label="收藏${it.name}">${isFav(it.id) ? "♥" : "♡"}</button>
        </div>
        <h3>${it.name}</h3>
        <p class="item-en">${it.en} · ${typeName(it.type)}</p>
        <p class="item-brief">${it.brief}</p>
        <div class="item-tags">
          ${tags.map((t) => `<span class="tag ${it.type === "meat" ? "meat-tag" : it.type === "soy" ? "sky-tag" : ""}">${t}</span>`).join("")}
          <span class="tag amber-tag">${calLabel(it.calLevel)}</span>
        </div>
      </article>
    `;
  }

  function renderCards(container, list) {
    if (!container) return;
    if (!list.length) {
      container.innerHTML = "";
      return;
    }
    container.innerHTML = list.map(cardHTML).join("");
  }

  function bindCardClicks(root) {
    if (!root) return;
    root.onclick = (e) => {
      const favBtn = e.target.closest("[data-fav-id]");
      if (favBtn) {
        e.stopPropagation();
        toggleFav(favBtn.getAttribute("data-fav-id"));
        return;
      }
      const card = e.target.closest(".item-card, .item-chip, .orbit-item");
      if (!card) return;
      const id = card.getAttribute("data-id");
      if (id) openModal(id);
    };
    root.onkeydown = (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".item-card");
      if (!card) return;
      e.preventDefault();
      openModal(card.getAttribute("data-id"));
    };
  }

  // ---------- modal ----------
  let modalOpenId = null;

  function openModal(id) {
    const it = getItem(id);
    if (!it) return;
    modalOpenId = id;
    const modal = $("#item-modal");
    const emojiEl = $("#modal-emoji");
    if (emojiEl) {
      emojiEl.innerHTML = itemImg(it, "modal-photo");
    }
    $("#modal-title").textContent = it.name;
    $("#modal-en").textContent = it.en;
    $("#modal-seasons").textContent = typeName(it.type) + " · " + (it.seasons || []).map((s) => SEASON_META[s].name).join(" / ");
    $("#modal-season-text").textContent = it.seasonText;
    $("#modal-pairing").textContent = it.pairing;
    $("#modal-tips").textContent = it.tips;
    $("#modal-benefits").innerHTML = it.benefits.map((b) => `<li>${b}</li>`).join("");
    $("#modal-meta").innerHTML = `
      <div class="meta-pill"><span>热量</span><strong>${it.kcal} kcal / 100g</strong></div>
      <div class="meta-pill"><span>蛋白质</span><strong>${it.protein} g</strong></div>
      <div class="meta-pill"><span>脂肪</span><strong>${it.fat} g</strong></div>
      <div class="meta-pill"><span>膳食纤维</span><strong>${it.fiber} g</strong></div>
    `;
    $("#modal-tags").innerHTML = (it.tags || []).map((t) => `<span class="tag">${t}</span>`).join("");
    const favBtn = $("#modal-fav");
    favBtn.dataset.id = id;
    const on = isFav(id);
    favBtn.classList.toggle("is-active", on);
    favBtn.textContent = on ? "♥" : "♡";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("#item-modal");
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    modalOpenId = null;
  }

  // ---------- today / orbit ----------
  let currentMonth = new Date().getMonth() + 1;
  let currentSeason = seasonOfMonth(currentMonth);
  let selectedSeason = currentSeason;

  function renderMonthPicker() {
    const box = $("#month-picker");
    if (!box) return;
    box.innerHTML = Array.from({ length: 12 }, (_, i) => i + 1)
      .map((m) => `<button type="button" class="month-btn ${m === currentMonth ? "is-active" : ""}" data-month="${m}">${m}月</button>`)
      .join("");
    box.onclick = (e) => {
      const btn = e.target.closest("[data-month]");
      if (!btn) return;
      currentMonth = Number(btn.getAttribute("data-month"));
      currentSeason = seasonOfMonth(currentMonth);
      renderMonthPicker();
      renderToday();
      renderOrbit();
      renderYearMap();
      const coreMonth = $("#core-month");
      if (coreMonth) coreMonth.textContent = currentMonth + "月";
    };
  }

  function renderToday() {
    const list = itemsForMonth(currentMonth).slice(0, 8);
    renderCards($("#today-grid"), list);
    bindCardClicks($("#today-grid"));
  }

  function renderOrbit() {
    const list = itemsForMonth(currentMonth).slice(0, 8);
    const box = $("#orbit-items");
    if (!box) return;
    const n = list.length;
    box.innerHTML = list
      .map((it, i) => {
        const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
        const r = 38;
        const x = 50 + r * Math.cos(angle);
        const y = 50 + r * Math.sin(angle);
        return `<button type="button" class="orbit-item" data-id="${it.id}" style="left:${x}%;top:${y}%" title="${it.name}"><img src="${imgSrc(it)}" alt="${it.name}" loading="lazy" /></button>`;
      })
      .join("");
  }

  function renderDaily() {
    const list = itemsForMonth(currentMonth);
    const it = list[new Date().getDate() % Math.max(list.length, 1)] || ITEMS[0];
    const emojiEl = $("#daily-emoji");
    if (emojiEl) emojiEl.innerHTML = itemImg(it, "daily-photo");
    $("#daily-name").textContent = it.name;
    $("#daily-brief").textContent = it.brief;
    const btn = $("#btn-daily");
    if (btn) btn.onclick = () => openModal(it.id);
    const coreMonth = $("#core-month");
    if (coreMonth) coreMonth.textContent = currentMonth + "月";
  }

  // ---------- seasons ----------
  function renderSeasonPanel(season) {
    const meta = SEASON_META[season];
    const intro = $("#season-intro");
    const chips = $("#season-items");
    if (intro) {
      intro.innerHTML = `<h3>${meta.title}</h3><p>${meta.intro}</p>`;
    }
    const months = SEASON_MONTHS[season];
    const list = ITEMS.filter((it) => it.months.some((m) => months.includes(m))).slice(0, 16);
    if (chips) {
      chips.innerHTML = list
        .map((it) => `<button type="button" class="item-chip" data-id="${it.id}"><img class="chip-photo" src="${imgSrc(it)}" alt="" loading="lazy" />${it.name}</button>`)
        .join("");
    }
    document.body.dataset.season = season;
  }

  function bindSeasonTabs() {
    const tabs = $$(".season-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        selectedSeason = tab.getAttribute("data-season");
        renderSeasonPanel(selectedSeason);
      });
    });
    renderSeasonPanel(selectedSeason);
  }

  function renderYearMap() {
    const box = $("#year-grid");
    if (!box) return;
    box.innerHTML = Array.from({ length: 12 }, (_, i) => i + 1)
      .map((m) => {
        const count = itemsForMonth(m).length;
        const season = seasonOfMonth(m);
        const alpha = Math.min(0.22 + count * 0.025, 0.55);
        const color =
          season === "spring"
            ? `rgba(111, 173, 92, ${alpha})`
            : season === "summer"
              ? `rgba(212, 90, 50, ${alpha})`
              : season === "autumn"
                ? `rgba(196, 132, 46, ${alpha})`
                : `rgba(74, 124, 155, ${alpha})`;
        return `<button type="button" class="year-cell ${m === currentMonth ? "is-active" : ""}" data-month="${m}" style="background:${color}">
          <span>${m}月</span>
          <span class="year-count">${count}</span>
        </button>`;
      })
      .join("");
    box.onclick = (e) => {
      const cell = e.target.closest("[data-month]");
      if (!cell) return;
      currentMonth = Number(cell.getAttribute("data-month"));
      currentSeason = seasonOfMonth(currentMonth);
      renderMonthPicker();
      renderToday();
      renderOrbit();
      renderYearMap();
      renderDaily();
      const today = $("#today");
      if (today) today.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  // ---------- benefits ----------
  let activeBenefit = null;

  function renderBenefitFilter() {
    const box = $("#benefit-filter");
    if (!box) return;
    box.innerHTML = BENEFITS.map(
      (b) => `<button type="button" class="benefit-chip ${b === activeBenefit ? "is-active" : ""}" data-benefit="${b}">${b}</button>`
    ).join("");
    box.onclick = (e) => {
      const chip = e.target.closest("[data-benefit]");
      if (!chip) return;
      const val = chip.getAttribute("data-benefit");
      activeBenefit = activeBenefit === val ? null : val;
      renderBenefitFilter();
      renderBenefitGrid();
    };
  }

  function renderBenefitGrid() {
    const list = activeBenefit ? ITEMS.filter((it) => it.benefits.includes(activeBenefit)) : ITEMS;
    const text = $("#benefit-result-text");
    if (text) {
      text.textContent = activeBenefit
        ? `筛选「${activeBenefit}」：共 ${list.length} 样。`
        : "选择上方标签，查看对应蔬肉。";
    }
    renderCards($("#benefit-grid"), list.slice(0, 12));
    bindCardClicks($("#benefit-grid"));
    const clear = $("#btn-clear-benefit");
    if (clear) {
      clear.onclick = () => {
        activeBenefit = null;
        renderBenefitFilter();
        renderBenefitGrid();
      };
    }
  }

  // ---------- atlas ----------
  let atlasType = "all";
  let atlasQuery = "";

  function renderTypeFilter() {
    const box = $("#type-filter");
    if (!box) return;
    box.onclick = (e) => {
      const chip = e.target.closest("[data-type]");
      if (!chip) return;
      atlasType = chip.getAttribute("data-type");
      $$(".type-chip", box).forEach((c) => c.classList.toggle("is-active", c === chip));
      renderAtlas();
    };
  }

  function renderAtlas() {
    let list = ITEMS.slice();
    if (atlasType !== "all") list = list.filter((it) => it.type === atlasType);
    if (atlasQuery) {
      const q = atlasQuery.trim().toLowerCase();
      list = list.filter(
        (it) =>
          it.name.includes(q) ||
          it.en.toLowerCase().includes(q) ||
          it.brief.includes(q) ||
          it.benefits.some((b) => b.includes(q)) ||
          (it.tags || []).some((t) => t.includes(q))
      );
    }
    const empty = $("#atlas-empty");
    if (empty) empty.hidden = list.length > 0;
    renderCards($("#atlas-grid"), list);
    bindCardClicks($("#atlas-grid"));
  }

  function bindSearch() {
    const input = $("#search-input");
    if (!input) return;
    input.addEventListener("input", () => {
      atlasQuery = input.value;
      renderAtlas();
    });
  }

  function renderFavorites() {
    const panel = $("#favorites-panel");
    const grid = $("#favorites-grid");
    if (!panel || !grid) return;
    const list = favorites.map(getItem).filter(Boolean);
    if (!list.length) {
      panel.hidden = true;
      return;
    }
    panel.hidden = false;
    renderCards(grid, list);
    bindCardClicks(grid);
  }

  // ---------- diet ----------
  let activeCal = "all";

  function renderDietFilter() {
    const box = $("#diet-filter");
    if (!box) return;
    const options = [
      { id: "all", label: "全部" },
      { id: "low", label: "热量偏低" },
      { id: "mid", label: "热量中等" },
      { id: "high", label: "热量偏高" }
    ];
    box.innerHTML = options
      .map((o) => `<button type="button" class="diet-chip ${o.id === activeCal ? "is-active" : ""}" data-cal="${o.id}">${o.label}</button>`)
      .join("");
    box.onclick = (e) => {
      const chip = e.target.closest("[data-cal]");
      if (!chip) return;
      activeCal = chip.getAttribute("data-cal");
      renderDietFilter();
      renderDietGrid();
    };
  }

  function renderDietGrid() {
    const list = activeCal === "all" ? ITEMS.slice(0, 12) : ITEMS.filter((it) => it.calLevel === activeCal);
    const text = $("#diet-result");
    if (text) {
      text.textContent =
        activeCal === "all"
          ? "选择热量档位，快速筛出更适合当前目标的食材。"
          : `当前「${calLabel(activeCal)}」共 ${list.length} 样。`;
    }
    renderCards($("#diet-grid"), list.slice(0, 12));
    bindCardClicks($("#diet-grid"));
  }

  // ---------- compare ----------
  function renderCompareOptions() {
    const a = $("#compare-a");
    const b = $("#compare-b");
    if (!a || !b) return;
    const opts = ITEMS.map((it) => `<option value="${it.id}">${it.name}（${typeName(it.type)}）</option>`).join("");
    a.innerHTML = opts;
    b.innerHTML = opts;
    a.value = "broccoli";
    b.value = "chicken-breast";
    a.onchange = renderCompare;
    b.onchange = renderCompare;
    const swap = $("#compare-swap");
    if (swap) {
      swap.onclick = () => {
        const tmp = a.value;
        a.value = b.value;
        b.value = tmp;
        renderCompare();
      };
    }
    const rnd = $("#compare-random");
    if (rnd) {
      rnd.onclick = () => {
        const i = Math.floor(Math.random() * ITEMS.length);
        let j = Math.floor(Math.random() * ITEMS.length);
        if (j === i) j = (j + 1) % ITEMS.length;
        a.value = ITEMS[i].id;
        b.value = ITEMS[j].id;
        renderCompare();
      };
    }
    renderCompare();
  }

  function renderCompare() {
    const a = getItem($("#compare-a").value);
    const b = getItem($("#compare-b").value);
    if (!a || !b) return;
    $("#compare-a-title").textContent = a.name;
    $("#compare-b-title").textContent = b.name;
    const rows = [
      ["类别", typeName(a.type), typeName(b.type)],
      ["热量", `${a.kcal} kcal`, `${b.kcal} kcal`],
      ["蛋白质", `${a.protein} g`, `${b.protein} g`],
      ["脂肪", `${a.fat} g`, `${b.fat} g`],
      ["膳食纤维", `${a.fiber} g`, `${b.fiber} g`],
      ["热量档", calLabel(a.calLevel), calLabel(b.calLevel)],
      ["主要季节", (a.seasons || []).map((s) => SEASON_META[s].name).join(" / "), (b.seasons || []).map((s) => SEASON_META[s].name).join(" / ")],
      ["主要营养", a.benefits.slice(0, 3).join("、"), b.benefits.slice(0, 3).join("、")],
      ["适合场景", (a.tags || []).slice(0, 3).join("、"), (b.tags || []).slice(0, 3).join("、")]
    ];
    $("#compare-body").innerHTML = rows
      .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`)
      .join("");

    let verdict = "";
    if (a.id === b.id) {
      verdict = "左右选了同一份食材。换个搭配会更有参考价值。";
    } else {
      const winnerLow = a.kcal <= b.kcal ? a : b;
      const winnerProtein = a.protein >= b.protein ? a : b;
      verdict = `如果更在意<strong>热量更低</strong>，可优先 ${winnerLow.name}；更在意<strong>蛋白更高</strong>，可优先 ${winnerProtein.name}。实际还要看烹调方式与总摄入。`;
    }
    $("#compare-verdict").innerHTML = verdict;
  }

  // ---------- scenario zones ----------
  function renderScenarioBar(containerId, resultId, gridId, sceneList, keywordMap) {
    const bar = $(containerId);
    const result = $(resultId);
    const grid = $(gridId);
    if (!bar || !grid) return;
    let active = sceneList[0].id;
    bar.innerHTML = sceneList
      .map((s, i) => `<button type="button" class="scenario-chip ${i === 0 ? "is-active" : ""}" data-scene="${s.id}">${s.label}</button>`)
      .join("");

    function apply() {
      const label = sceneList.find((s) => s.id === active).label;
      const keys = keywordMap[active] || [active];
      let list = ITEMS.filter((it) => (it.scene || []).some((s) => keys.includes(s)));
      if (!list.length) {
        list = ITEMS.filter((it) => keys.some((k) => (it.tags || []).includes(k) || it.benefits.includes(k)));
      }
      if (result) result.textContent = `场景「${label}」：推荐 ${Math.min(list.length, 8)} 样，点卡片看详情。`;
      renderCards(grid, list.slice(0, 8));
      bindCardClicks(grid);
    }

    bar.onclick = (e) => {
      const chip = e.target.closest("[data-scene]");
      if (!chip) return;
      active = chip.getAttribute("data-scene");
      $$(".scenario-chip", bar).forEach((c) => c.classList.toggle("is-active", c === chip));
      apply();
    };
    apply();
  }

  function renderAllScenarios() {
    const map = {
      "elder-soft": ["elder-soft"],
      "elder-digest": ["elder-digest"],
      "elder-iron": ["elder-iron", "younger-iron"],
      "elder-light": ["younger-light", "elder-light", "elder-digest"],
      "younger-gym": ["younger-gym"],
      "younger-light": ["younger-light"],
      "younger-iron": ["younger-iron"],
      "younger-office": ["younger-office"],
      "student-budget": ["student-budget"],
      "student-exam": ["student-exam"],
      "student-dorm": ["student-budget", "student-exam", "younger-office"],
      "student-share": ["student-budget", "younger-office", "student-share"]
    };

    renderScenarioBar("#elder-bar", "#elder-result", "#elder-grid", SCENES.elder, map);
    renderScenarioBar("#younger-bar", "#younger-result", "#younger-grid", SCENES.younger, map);
    renderScenarioBar("#scenario-bar", "#scenario-result", "#student-grid", SCENES.student, map);
  }

  // ---------- meal plan / basket ----------
  function renderMealPlan() {
    const panel = $("#basket-panel");
    const grid = $("#basket-grid");
    const tip = $("#basket-tip");
    if (!panel || !grid) return;

    const vegs = ITEMS.filter((it) => it.type === "veg");
    const proteins = ITEMS.filter((it) => it.type === "meat" || it.type === "soy");
    const pick = (arr, n, offset) => {
      const out = [];
      for (let i = 0; i < n; i++) out.push(arr[(offset + i) % arr.length]);
      return out;
    };
    const day = new Date().getDate();
    const chosen = [...pick(vegs, 3, day), ...pick(proteins, 2, day + 2), ...pick(vegs, 1, day + 5)];
    grid.innerHTML = chosen
      .map(
        (it) => `
        <div class="basket-item">
          <div class="bi-emoji"><img class="chip-photo" src="${imgSrc(it)}" alt="" loading="lazy" /></div>
          <div>
            <strong>${it.name}</strong>
            <span>${typeName(it.type)} · ${calLabel(it.calLevel)}</span>
          </div>
        </div>`
      )
      .join("");
    if (tip) {
      tip.textContent = "菜篮思路：3 样蔬菜打底 + 2 样蛋白 + 1 样耐放根茎。按宿舍人数等比增减，叶菜先吃。";
    }
    panel.hidden = false;
  }

  // ---------- cooking methods / kitchen map ----------
  const METHOD_HINTS = {
    快手: ["快炒", "快手", "即食", "凉拌", "生食", "便携"],
    清炒: ["快炒", "清口", "家常", "脆甜"],
    炖煮: ["炖煮", "煲汤", "软糯", "软烂", "炖菜", "卤味", "香浓"],
    蒸烤: ["软糯", "软烂", "养胃", "清口", "低卡"],
    凉拌: ["清爽", "生食", "低卡", "清口", "解腻"],
    煲汤: ["煲汤", "清淡", "养胃", "补水", "炖菜"],
    卤味: ["卤味", "卤制", "便携", "切片", "风味"],
    便当: ["便携", "耐放", "好分", "即食", "性价比"]
  };

  let activeMethod = null;

  function renderMethodShelf() {
    const box = $("#method-shelf");
    if (!box) return;
    box.onclick = (e) => {
      const btn = e.target.closest("[data-method]");
      if (!btn) return;
      const method = btn.getAttribute("data-method");
      activeMethod = activeMethod === method ? null : method;
      $$(".method-link", box).forEach((b) => b.classList.toggle("is-active", b.getAttribute("data-method") === activeMethod));
      if (activeMethod) {
        const hints = METHOD_HINTS[activeMethod] || [];
        const list = ITEMS.filter((it) =>
          hints.some((h) => (it.tags || []).some((t) => t.includes(h)) || it.brief.includes(h) || it.pairing.includes(h))
        );
        renderCards($("#benefit-grid"), (list.length ? list : ITEMS).slice(0, 12));
        bindCardClicks($("#benefit-grid"));
        const text = $("#benefit-result-text");
        if (text) text.textContent = activeMethod ? `按做法「${activeMethod}」：推荐 ${Math.min(list.length, 12)} 样。` : "选择上方标签，查看对应蔬肉。";
        const benefits = $("#benefits");
        if (benefits) benefits.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        renderBenefitGrid();
      }
    };
  }

  // ---------- fridge (开冰箱) ----------
  const fridgeSelected = new Set();

  function renderFridge() {
    const box = $("#fridge-chips");
    if (!box) return;
    box.innerHTML = ITEMS.map(
      (it) =>
        `<button type="button" class="fridge-chip ${fridgeSelected.has(it.id) ? "is-on" : ""}" data-fridge="${it.id}"><img class="chip-photo" src="${imgSrc(it)}" alt="" loading="lazy" />${it.name}</button>`
    ).join("");

    box.onclick = (e) => {
      const chip = e.target.closest("[data-fridge]");
      if (!chip) return;
      const id = chip.getAttribute("data-fridge");
      if (fridgeSelected.has(id)) fridgeSelected.delete(id);
      else fridgeSelected.add(id);
      chip.classList.toggle("is-on", fridgeSelected.has(id));
    };

    const matchBtn = $("#fridge-match");
    const clearBtn = $("#fridge-clear");
    const fillBtn = $("#fridge-fill");

    if (matchBtn) {
      matchBtn.onclick = () => {
        const picked = [...fridgeSelected].map(getItem).filter(Boolean);
        const result = $("#fridge-result");
        const grid = $("#fridge-grid");
        if (!picked.length) {
          if (result) result.textContent = "先勾选已有食材，再点「反查搭配」。";
          if (grid) grid.innerHTML = "";
          return;
        }

        const pickedIds = new Set(picked.map((p) => p.id));
        const typeSet = new Set(picked.map((p) => p.type));
        const benefitSet = new Set(picked.flatMap((p) => p.benefits));
        const hasProtein = picked.some((p) => p.type === "meat" || p.type === "soy");
        const hasVeg = picked.some((p) => p.type === "veg");

        const scored = ITEMS.filter((it) => !pickedIds.has(it.id)).map((it) => {
          let score = 0;
          if (typeSet.has(it.type)) score += 1;
          score += it.benefits.filter((b) => benefitSet.has(b)).length;
          if (hasVeg && (it.type === "meat" || it.type === "soy")) score += 2;
          if (hasProtein && it.type === "veg") score += 2;
          if (it.benefits.includes("优质蛋白") || it.benefits.includes("植物蛋白")) score += 1;
          return { it, score };
        });

        scored.sort((a, b) => b.score - a.score);
        const list = scored.slice(0, 8).map((s) => s.it);

        let tip = `已选 ${picked.map((p) => p.name).join("、")}。`;
        if (!hasProtein) tip += " 建议补一份蛋白（肉蛋鱼豆）。";
        else if (!hasVeg) tip += " 建议再搭一两样蔬菜，营养更完整。";
        else tip += " 荤素都有了，再补一样主食或耐放根茎就稳了。";

        if (result) result.textContent = tip;
        renderCards(grid, list);
        bindCardClicks(grid);
      };
    }

    if (clearBtn) {
      clearBtn.onclick = () => {
        fridgeSelected.clear();
        renderFridge();
        const result = $("#fridge-result");
        const grid = $("#fridge-grid");
        if (result) result.textContent = "先勾选已有食材，再点「反查搭配」。";
        if (grid) grid.innerHTML = "";
      };
    }

    if (fillBtn) {
      fillBtn.onclick = () => {
        fridgeSelected.clear();
        for (let i = 0; i < 3; i++) {
          fridgeSelected.add(ITEMS[Math.floor(Math.random() * ITEMS.length)].id);
        }
        renderFridge();
      };
    }
  }

  // ---------- spin (转一转) ----------
  let spinFilter = "all";

  function renderSpin() {
    const filters = $("#spin-filters");
    const wheel = $("#spin-wheel");
    const face = $("#spin-face");
    const go = $("#spin-go");
    const resultBox = $("#spin-result");
    const grid = $("#spin-grid");
    if (!go) return;

    if (filters) {
      filters.onclick = (e) => {
        const chip = e.target.closest("[data-spin]");
        if (!chip) return;
        spinFilter = chip.getAttribute("data-spin");
        $$(".spin-filter", filters).forEach((c) => c.classList.toggle("is-active", c === chip));
      };
    }

    go.onclick = () => {
      let pool = ITEMS.slice();
      if (spinFilter === "low") pool = pool.filter((it) => it.calLevel === "low");
      else if (spinFilter !== "all") pool = pool.filter((it) => it.type === spinFilter);
      if (!pool.length) pool = ITEMS.slice();

      const pick = pool[Math.floor(Math.random() * pool.length)];
      if (wheel) {
        wheel.classList.remove("is-spinning");
        void wheel.offsetWidth;
        wheel.classList.add("is-spinning");
      }
      if (face) face.innerHTML = itemImg(pick, "spin-photo");
      if (resultBox) resultBox.hidden = false;
      renderCards(grid, [pick]);
      bindCardClicks(grid);
    };
  }

  // ---------- weekly meal plan ----------
  const DAYS = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
  const MEAL_KEY = "shuxu-meal-plan";
  let mealPlan = loadMealPlan();
  let mealActiveDay = null;

  function loadMealPlan() {
    try {
      const raw = localStorage.getItem(MEAL_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveMealPlan() {
    localStorage.setItem(MEAL_KEY, JSON.stringify(mealPlan));
  }

  function todayIndex() {
    const d = new Date().getDay();
    return d === 0 ? 6 : d - 1;
  }

  function renderMealPlan() {
    const grid = $("#meal-grid");
    const countEl = $("#meal-count");
    if (!grid) return;

    const today = todayIndex();
    grid.innerHTML = DAYS.map((day, i) => {
      const ids = mealPlan[i] || [];
      const items = ids.map(getItem).filter(Boolean);
      return `
        <div class="meal-slot ${i === today ? "is-today" : ""}" data-day="${i}">
          <div class="meal-slot-top">
            <strong>${day}</strong>
            ${items.length ? `<button type="button" class="meal-clear-day" data-clear-day="${i}" aria-label="清空${day}">×</button>` : ""}
          </div>
          <div class="meal-items">
            ${
              items.length
                ? items.map((it) => `<div class="meal-item"><img class="chip-photo" src="${imgSrc(it)}" alt="" loading="lazy" /><span>${it.name}</span></div>`).join("")
                : `<div class="meal-item" style="opacity:.55">未安排</div>`
            }
          </div>
          <button type="button" class="meal-add" data-add-day="${i}">+ 选菜</button>
        </div>
      `;
    }).join("");

    const filled = Object.values(mealPlan).filter((arr) => arr && arr.length).length;
    if (countEl) countEl.textContent = String(filled);

    grid.onclick = (e) => {
      const clearBtn = e.target.closest("[data-clear-day]");
      if (clearBtn) {
        const day = clearBtn.getAttribute("data-clear-day");
        delete mealPlan[day];
        saveMealPlan();
        renderMealPlan();
        return;
      }
      const addBtn = e.target.closest("[data-add-day]");
      if (addBtn) {
        mealActiveDay = addBtn.getAttribute("data-add-day");
        openMealPicker();
      }
    };
  }

  function openMealPicker() {
    let panel = $("#meal-picker");
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "meal-picker";
      panel.className = "meal-picker-wrap";
      const host = $("#meal");
      const container = host && host.querySelector(".container");
      if (container) container.appendChild(panel);
      else return;
    }

    const today = todayIndex();
    const dayLabel = DAYS[Number(mealActiveDay)];
    panel.innerHTML = `
      <h3 class="meal-picker-title">给${dayLabel}选 2–4 样（点选，可多选后关闭）</h3>
      <div class="meal-picker">
        ${ITEMS.map(
          (it) => `<button type="button" class="meal-pick" data-meal-pick="${it.id}"><img class="chip-photo" src="${imgSrc(it)}" alt="" loading="lazy" />${it.name}</button>`
        ).join("")}
      </div>
      <div class="fridge-actions" style="margin-top:1rem">
        <button type="button" class="btn-primary sm" id="meal-picker-done">好了</button>
        <button type="button" class="btn-ghost sm" id="meal-picker-cancel">取消</button>
      </div>
    `;
    panel.hidden = false;

    const done = $("#meal-picker-done");
    const cancel = $("#meal-picker-cancel");
    if (done) done.onclick = () => {
      panel.hidden = true;
      renderMealPlan();
    };
    if (cancel) cancel.onclick = () => {
      panel.hidden = true;
    };

    panel.onclick = (e) => {
      const pick = e.target.closest("[data-meal-pick]");
      if (!pick) return;
      const id = pick.getAttribute("data-meal-pick");
      const day = String(mealActiveDay);
      if (!mealPlan[day]) mealPlan[day] = [];
      const arr = mealPlan[day];
      const idx = arr.indexOf(id);
      if (idx >= 0) arr.splice(idx, 1);
      else if (arr.length < 4) arr.push(id);
      saveMealPlan();
      pick.classList.toggle("is-on", arr.includes(id));
    };

    // mark already selected
    const selected = new Set(mealPlan[String(mealActiveDay)] || []);
    panel.querySelectorAll("[data-meal-pick]").forEach((btn) => {
      btn.classList.toggle("is-on", selected.has(btn.getAttribute("data-meal-pick")));
    });
  }

  function bindMealActions() {
    const fill = $("#meal-fill");
    const clear = $("#meal-clear");
    if (fill) {
      fill.onclick = () => {
        for (let i = 0; i < 7; i++) {
          if (mealPlan[i] && mealPlan[i].length) continue;
          const vegs = ITEMS.filter((it) => it.type === "veg");
          const proteins = ITEMS.filter((it) => it.type === "meat" || it.type === "soy");
          const soyOrLight = ITEMS.filter((it) => it.type === "soy" || it.calLevel === "low");
          mealPlan[i] = [
            vegs[Math.floor(Math.random() * vegs.length)].id,
            proteins[Math.floor(Math.random() * proteins.length)].id,
            soyOrLight[Math.floor(Math.random() * soyOrLight.length)].id
          ];
        }
        saveMealPlan();
        renderMealPlan();
      };
    }
    if (clear) {
      clear.onclick = () => {
        mealPlan = {};
        saveMealPlan();
        renderMealPlan();
      };
    }
  }

  function bindPlayTabs() {
    const tabs = $$(".kitchen-tab");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        const which = tab.getAttribute("data-play");
        const fridge = $("#fridge-panel");
        const spin = $("#spin-panel");
        if (fridge) fridge.hidden = which !== "fridge";
        if (spin) spin.hidden = which !== "spin";
      });
    });
  }

  // ---------- nutritionist ----------
  const NUTRI_RULES = {
    role: {
      elder: {
        title: "给长辈的温和饮食",
        focus: [
          "每餐都要有蛋白：鸡蛋、鱼、豆腐、去皮禽肉，帮助维持肌肉和体力。",
          "烹调以蒸、炖、快炒为主，软烂好入口，少油炸和干硬大块肉。",
          "蔬菜尽量占盘子一半，深色叶菜补叶酸和矿物质。",
          "少量多餐更舒服，剩菜充分加热再吃。"
        ],
        prefer: ["egg", "tofu", "salmon", "chicken-leg", "pumpkin", "yam", "spinach", "winter-melon"],
        avoid: ["pork-belly", "pork-liver"],
        warn: [
          "服药期间注意：深绿叶菜保持摄入稳定（如华法林），补铁补钙与药物错开。",
          "少腌制、少咸菜，血压偏高时更要控盐。",
          "补蛋白别只喝粥，走路没劲往往是蛋白不够。"
        ],
        meals: ["早餐：蒸蛋 + 软粥 + 焯菠菜", "午餐：清蒸鱼 + 软米饭 + 炖冬瓜", "加餐：无糖豆浆", "晚餐：山药炖鸡腿 + 烂白菜"]
      },
      office: {
        title: "给上班族的稳态饮食",
        focus: [
          "每餐一掌心蛋白 + 一拳主食 + 两拳蔬菜，结构稳比节食更持久。",
          "外卖选「少油少盐、多蔬菜」，主食换杂粮更好。",
          "工位备即食鸡胸、卤蛋、小番茄、无糖酸奶，减少奶茶炸鸡。",
          "先吃菜再吃肉最后主食，血糖更稳，下午不容易犯困。"
        ],
        prefer: ["chicken-breast", "broccoli", "tomato", "egg", "tofu", "cucumber", "shrimp", "soy-milk"],
        avoid: ["pork-belly"],
        warn: [
          "警惕隐形油糖：沙拉酱、糖醋汁、干锅油泡都会让「清淡」变重口。",
          "熬夜夜宵选水煮蛋、黄瓜，别用辣条泡面顶正餐。",
          "久坐更要保证蛋白，否则掉的是肌肉不是脂肪。"
        ],
        meals: ["早餐：无糖豆浆 + 鸡蛋 + 全麦面包", "午餐：鸡胸沙拉 / 番茄炒蛋 + 杂粮饭", "加餐：小番茄或黄瓜", "晚餐：清炒西兰花 + 蒸鱼或豆腐"]
      },
      gym: {
        title: "给健身党的高蛋白饮食",
        focus: [
          "每公斤体重约 1.2–2.0 克蛋白，分到三餐更利于吸收。",
          "练后 30–60 分钟补蛋白 + 少量碳水：鸡胸/鱼/蛋 + 米饭红薯。",
          "增肌别怕吃够；减脂优先高蛋白低油烹调，少油炸红烧。",
          "蔬菜补纤维和微量营养，训练日也不能省。"
        ],
        prefer: ["chicken-breast", "egg", "beef-shank", "shrimp", "salmon", "tofu", "broccoli", "potato"],
        avoid: ["pork-belly"],
        warn: [
          "蛋白粉是补充不是替代，正餐吃不够再补。",
          "只水煮鸡胸很难坚持，用香料、蒸烤、凉拌换口味。",
          "减脂期也别完全断碳，训练表现和恢复都需要能量。"
        ],
        meals: ["早餐：鸡蛋 2 个 + 燕麦 + 无糖豆浆", "午餐：鸡胸/牛腱 + 米饭 + 西兰花", "练后：鸡蛋或鸡胸 + 香蕉/红薯", "晚餐：烤三文鱼 + 大量蔬菜"]
      },
      student: {
        title: "给学生的性价比饮食",
        focus: [
          "食堂点「一荤一素一豆」，比零食代餐更划算也更扛饿。",
          "鸡蛋、豆腐、冻鸡胸、当季根茎菜是性价比之王。",
          "考试周要稳补能：鸡蛋、全麦、深绿叶菜，少辣条泡面。",
          "宿舍没厨房：茶叶蛋、即食鸡胸、盒装豆腐、小番茄是好朋友。"
        ],
        prefer: ["egg", "tofu", "potato", "cabbage", "tomato", "chicken-breast", "dried-beancurd", "soy-milk"],
        avoid: ["pork-belly"],
        warn: [
          "叶菜按 2–3 天买，肉类分装冷冻，别反复化冻。",
          "拼单耐放食材：鸡蛋、土豆洋葱、豆腐；娇气菜自己买小份。",
          "蛋白不够会掉肌肉、没精神，别只吃泡面凑合。"
        ],
        meals: ["早餐：茶叶蛋 + 无糖豆浆", "午餐：食堂一荤一素一豆 + 米饭", "加餐：小番茄 / 黄瓜", "晚餐：番茄鸡蛋面 + 焯青菜"]
      },
      family: {
        title: "给家庭主厨的一桌搭配",
        focus: [
          "一桌菜尽量覆盖：深色蔬菜 + 优质蛋白 + 豆制品 + 主食。",
          "清蒸、炖、快炒轮换，比顿顿红烧更轻负担。",
          "叶菜先吃先买，根茎耐放可以排后半周。",
          "给孩子和老人单独留软烂一份，大人的口味更灵活。"
        ],
        prefer: ["tomato", "broccoli", "carrot", "egg", "tofu", "chicken-leg", "salmon", "cabbage"],
        avoid: [],
        warn: [
          "生熟砧板分开，肉要彻底做熟。",
          "少给孩子喝汤泡饭，蛋白和菜要真正吃进去。",
          "剩菜尽快冷藏，下一顿充分加热。"
        ],
        meals: ["早餐：鸡蛋饼 + 豆浆 + 番茄", "午餐：番茄牛腩 + 清炒时蔬 + 米饭", "加餐：水果或无糖酸奶", "晚餐：清蒸鱼 + 豆腐煲 + 两样青菜"]
      }
    },
    goal: {
      balance: {
        label: "日常均衡",
        focus: ["每天蔬菜 300–500 克，深色占一半。", "蛋白食物约 120–200 克生重，分散到三餐。", "主食粗细搭配，别为了减肥完全不吃碳水。"],
        bias: ["egg", "tofu", "broccoli", "tomato", "chicken-breast", "carrot", "salmon", "cabbage"],
        warn: ["均衡比「完美食谱」更重要，长期吃得下才能坚持。"]
      },
      fatloss: {
        label: "减脂控卡",
        focus: ["用蒸煮炖代替油炸红烧，总热量立省一截。", "蔬菜放大、主食减半换杂粮、肥肉去掉。", "先菜后肉再主食，饱腹感更强。"],
        bias: ["cucumber", "winter-melon", "lettuce", "chicken-breast", "shrimp", "tofu", "broccoli", "celery"],
        warn: ["别把「吃得少」当成唯一标准，蛋白不够会掉肌肉。", "沙拉酱、果汁、奶茶是隐形热量大户。"]
      },
      muscle: {
        label: "增肌补蛋白",
        focus: ["每餐都要有优质蛋白，练后尤其关键。", "增肌期热量要有盈余，别只吃草。", "睡眠和训练强度同样决定增长。"],
        bias: ["chicken-breast", "egg", "beef-shank", "salmon", "shrimp", "tofu", "potato", "soy-milk"],
        warn: ["蛋白粉补充，不是主食替代品。"]
      },
      iron: {
        label: "补铁气色",
        focus: ["红肉、动物血、肝脏是好铁源，适量安排。", "搭配维 C（彩椒、番茄、西兰花）促进铁吸收。", "素食者更需要豆制品 + 深绿叶菜的组合。"],
        bias: ["pork-tenderloin", "beef-shank", "pork-liver", "spinach", "pepper", "tomato", "broccoli", "lamb-leg"],
        warn: ["猪肝不必频繁大量吃，每周 1–2 次即可。", "补铁同时避免大量浓茶咖啡同餐。"]
      },
      sugar: {
        label: "控糖稳态",
        focus: ["主食减量换杂粮，蔬菜和蛋白打底。", "避免糖醋、勾芡、果汁、甜酱。", "进餐顺序：菜 → 肉 → 主食，血糖更平稳。"],
        bias: ["broccoli", "cucumber", "celery", "tofu", "chicken-breast", "egg", "spinach", "soy-milk"],
        warn: ["具体方案遵医嘱，尤其是正在用药的糖友。", "「无糖」食品也可能有脂肪和碳水，要看配料表。"]
      },
      soft: {
        label: "软烂好消化",
        focus: ["蒸软、炖烂、切细，减少咀嚼和胃负担。", "从少量开始，避开过油过辣过冷过热。", "豆类胀气可先选豆腐豆干而非整粒黄豆。"],
        bias: ["pumpkin", "yam", "tofu", "egg", "chicken-leg", "winter-melon", "lotus", "soy-milk"],
        warn: ["胃炎、反酸、术后饮食请遵医嘱调整。"]
      }
    },
    extra: {
      hypertension: {
        label: "血压偏高",
        tips: ["少盐少腌制，用香料葱姜蒜提味。", "多吃钾丰富的蔬菜，少吃咸菜酱料。"]
      },
      cholesterol: {
        label: "血脂偏高",
        tips: ["少肥肉、动物皮、油炸；好脂肪来自鱼和坚果。", "烹调少油，多蒸煮炖。"]
      },
      teeth: {
        label: "牙口不好",
        tips: ["优先软烂：蒸蛋、鱼片、肉末、炖到脱骨的鸡腿。", "避免干硬大块肉和生冷脆硬生食。"]
      },
      digest: {
        label: "胃肠敏感",
        tips: ["少量多餐，肉类切细炖烂。", "避免空腹太酸太辣、过量豆类胀气。"]
      },
      veg: {
        label: "偏好素食",
        tips: ["蛋白靠豆腐、豆干、无糖豆浆、鸡蛋（若可）。", "注意铁、B12、钙的搭配，必要时咨询营养师。"]
      },
      time: {
        label: "时间紧张",
        tips: ["备好即食鸡胸、卤蛋、盒装豆腐、可生食蔬菜。", "周末一次炖好分装冷冻，工作日复热。"]
      }
    },
    pref: {
      none: { label: "不限" },
      light: {
        label: "少油清淡",
        tips: ["清蒸、白灼、快炒、砂锅优先。"]
      },
      quick: {
        label: "快手省事",
        tips: ["10 分钟方案：鸡蛋、即食鸡胸、豆腐、凉拌黄瓜、快炒叶菜。"]
      },
      share: {
        label: "好分好带",
        tips: ["卤牛腱切片、茶叶蛋、分装炖菜、耐放根茎。"]
      }
    }
  };

  function renderNutritionist() {
    const form = $("#nutri-form");
    if (!form) return;

    form.onsubmit = (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const role = data.get("role") || "office";
      const goal = data.get("goal") || "balance";
      const extras = data.getAll("extra");
      const pref = data.get("pref") || "none";

      const roleRule = NUTRI_RULES.role[role] || NUTRI_RULES.role.office;
      const goalRule = NUTRI_RULES.goal[goal] || NUTRI_RULES.goal.balance;
      const prefRule = NUTRI_RULES.pref[pref] || NUTRI_RULES.pref.none;

      const title = roleRule.title + " · " + goalRule.label;
      const summary =
        "结合「" +
        (roleRule.title.replace("给", "").replace("的", "")) +
        "」和「" +
        goalRule.label +
        "」，下面是可直接落地的重点、优先食材与一日示例。";

      const focus = [...roleRule.focus, ...goalRule.focus];
      if (prefRule.tips) focus.push(...prefRule.tips);
      extras.forEach((ex) => {
        const rule = NUTRI_RULES.extra[ex];
        if (rule && rule.tips) focus.push(...rule.tips);
      });

      const preferIds = [...new Set([...(roleRule.prefer || []), ...(goalRule.bias || [])])];
      let items = preferIds.map(getItem).filter(Boolean);
      if (role === "student" || extras.includes("veg")) {
        items = items.filter((it) => extras.includes("veg") ? it.type !== "meat" || it.id === "egg" : true);
      }
      if (goal === "fatloss") {
        items.sort((a, b) => a.kcal - b.kcal);
      } else if (goal === "muscle") {
        items.sort((a, b) => b.protein - a.protein);
      }
      items = items.slice(0, 6);

      const warn = [...(roleRule.warn || []), ...(goalRule.warn || [])];
      extras.forEach((ex) => {
        const rule = NUTRI_RULES.extra[ex];
        if (rule && rule.tips) warn.push(...rule.tips);
      });

      const meals = roleRule.meals || [];

      $("#nutri-empty").hidden = true;
      const out = $("#nutri-output");
      out.hidden = false;
      $("#nutri-title").textContent = title;
      $("#nutri-summary").textContent = summary;
      $("#nutri-focus").innerHTML = focus.map((f) => `<li>${f}</li>`).join("");
      renderCards($("#nutri-items"), items);
      bindCardClicks($("#nutri-items"));
      $("#nutri-meals").innerHTML = meals
        .map((m) => {
          const [k, v] = m.split("：");
          return `<div class="nutri-meal-row"><strong>${k}</strong><span>${v}</span></div>`;
        })
        .join("");
      $("#nutri-warn").innerHTML = warn.map((w) => `<li>${w}</li>`).join("");

      out.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const reset = $("#nutri-reset");
    if (reset) {
      reset.onclick = () => {
        form.reset();
        $("#nutri-output").hidden = true;
        $("#nutri-empty").hidden = false;
      };
    }
  }

  // ---------- scientific wheel ----------
  const WHEEL_KEY = "shuxu-wheel-history";
  let wheelSpinning = false;

  function loadWheelHistory() {
    try {
      const raw = localStorage.getItem(WHEEL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveWheelHistory(list) {
    // keep last 21 picks (3 days worth of combos) for diversity weighting
    localStorage.setItem(WHEEL_KEY, JSON.stringify(list.slice(-40)));
  }

  function proteinFamily(it) {
    if (!it) return "other";
    if (it.type === "soy") return "soy";
    if (it.type === "veg") return "veg";
    const t = it.tags || [];
    if (t.includes("深海鱼") || it.id === "salmon" || it.id === "shrimp") return "seafood";
    if (t.includes("嫩滑") || it.id === "chicken-breast" || it.id === "chicken-leg" || it.id === "duck" || it.id === "egg") return "poultry-egg";
    if (it.id === "pork-liver") return "organ";
    return "red-meat";
  }

  function wheelWeights() {
    const month = new Date().getMonth() + 1;
    const history = loadWheelHistory();
    const recent = new Set(history.slice(-12));
    const familyCount = { seafood: 0, "poultry-egg": 0, "red-meat": 0, soy: 0, organ: 0, veg: 0, other: 0 };
    history.slice(-12).forEach((id) => {
      const f = proteinFamily(getItem(id));
      familyCount[f] = (familyCount[f] || 0) + 1;
    });

    return ITEMS.map((it) => {
      let w = 1;
      // seasonality
      if (it.months.includes(month)) w *= 2.2;
      // diversity: recently used gets down-weighted
      if (recent.has(it.id)) w *= 0.35;
      // protein family rotation
      const fam = proteinFamily(it);
      if (fam !== "veg" && familyCount[fam] >= 3) w *= 0.55;
      // prefer lower-cal for balance slightly
      if (it.calLevel === "high") w *= 0.75;
      if (it.calLevel === "low") w *= 1.15;
      return { it, w: Math.max(w, 0.08) };
    });
  }

  function weightedPick(pool, n, filterFn) {
    let candidates = pool.filter((x) => (!filterFn || filterFn(x.it)) && x.w > 0);
    const picked = [];
    for (let k = 0; k < n && candidates.length; k++) {
      const total = candidates.reduce((s, x) => s + x.w, 0);
      let r = Math.random() * total;
      let idx = 0;
      for (let i = 0; i < candidates.length; i++) {
        r -= candidates[i].w;
        if (r <= 0) {
          idx = i;
          break;
        }
      }
      const chosen = candidates[idx];
      picked.push(chosen.it);
      candidates = candidates.filter((x) => x.it.id !== chosen.it.id);
    }
    return picked;
  }

  function buildSciencePlate() {
    const pool = wheelWeights();
    const month = new Date().getMonth() + 1;
    const history = loadWheelHistory();
    const recentIds = history.slice(-8);

    const vegs = weightedPick(pool, 2, (it) => it.type === "veg");
    const proteins = weightedPick(pool, 1, (it) => it.type === "meat");
    const soyOrStaple = weightedPick(pool, 1, (it) => it.type === "soy" || it.benefits.includes("饱腹") || it.benefits.includes("性价比"));

    // extra: one more colorful veg or second protein depending on calorie bias
    let extra = weightedPick(pool, 1, (it) => it.type === "veg" && !vegs.includes(it));
    if (!extra.length) extra = weightedPick(pool, 1, (it) => it.type === "meat" && !proteins.includes(it));

    const plate = [...vegs, ...proteins, ...soyOrStaple, ...extra].filter(Boolean);

    const reasons = [];
    reasons.push("餐盘结构：蔬菜约占一半，蛋白质与豆/主食各约四分之一，符合常见「平衡餐盘」思路。");

    const seasonHits = plate.filter((it) => it.months.includes(month));
    if (seasonHits.length) {
      reasons.push(
        "时令加权：本月应季的「" +
          seasonHits.map((i) => i.name).join("、") +
          "」权重更高，风味与性价比通常更好。"
      );
    }

    const families = [...new Set(plate.map(proteinFamily).filter((f) => f !== "veg"))];
    if (families.length >= 2) {
      reasons.push(
        "蛋白轮换：组合覆盖「" +
          families
            .map((f) =>
              f === "seafood"
                ? "鱼虾水产"
                : f === "poultry-egg"
                  ? "禽蛋"
                  : f === "red-meat"
                    ? "红肉"
                    : f === "soy"
                      ? "豆制品"
                      : "其他"
            )
            .join("、") +
          "」，氨基酸与脂肪酸来源更丰富。"
      );
    }

    const avoided = plate.filter((it) => recentIds.includes(it.id));
    reasons.push(
      avoided.length
        ? "多样性：尽量避开你近几天已选过的食材，推动每周品种数（指南建议每周 25 种以上）。"
        : "多样性：本次组合避开了近期重复项，帮助接近「每天 12 种、每周 25 种」的膳食目标。"
    );

    const lowCal = plate.filter((it) => it.calLevel === "low").length;
    if (lowCal >= 2) {
      reasons.push("热量友好：多数为热量偏低食材，减脂期也相对好安排。");
    }

    reasons.push("提示：这是科普向搭配参考，具体份量、疾病饮食请遵医嘱或注册营养师方案。");

    return { plate, reasons };
  }

  function drawScienceWheel(items) {
    const canvas = $("#science-wheel");
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const size = 420;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 8;
    const seg = items.length ? items.length : 8;
    const colors = ["#6fad5c", "#c45c26", "#d4842e", "#4a7c9b", "#b84a3a", "#5a8f4e", "#9a4318", "#7aa86a"];

    ctx.clearRect(0, 0, size, size);

    for (let i = 0; i < seg; i++) {
      const start = (i / seg) * Math.PI * 2 - Math.PI / 2;
      const end = ((i + 1) / seg) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, start, end);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.strokeStyle = "rgba(255,253,248,0.55)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // label
      const mid = (start + end) / 2;
      const lr = radius * 0.72;
      ctx.save();
      ctx.translate(cx + Math.cos(mid) * lr, cy + Math.sin(mid) * lr);
      ctx.rotate(mid + Math.PI / 2);
      ctx.fillStyle = "#fffaf3";
      ctx.font = "bold 13px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(items[i] ? items[i].name : "蔬肉", 0, 0);
      ctx.restore();
    }

    // rim
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(30,53,40,0.18)";
    ctx.lineWidth = 4;
    ctx.stroke();
  }

  function renderScienceWheel() {
    const canvas = $("#science-wheel");
    const spinBtn = $("#wheel-spin");
    const againBtn = $("#wheel-again");
    const toMealBtn = $("#wheel-to-meal");
    if (!canvas || !spinBtn) return;

    // draw decorative segments first
    const seedItems = ITEMS.filter((it) => it.months.includes(new Date().getMonth() + 1)).slice(0, 8);
    drawScienceWheel(seedItems.length ? seedItems : ITEMS.slice(0, 8));

    function spin() {
      if (wheelSpinning) return;
      wheelSpinning = true;
      spinBtn.disabled = true;
      if (againBtn) againBtn.disabled = true;

      const result = buildSciencePlate();
      // spin animation
      const deg = 1440 + Math.floor(Math.random() * 360);
      canvas.style.setProperty("--wheel-deg", deg + "deg");
      canvas.classList.remove("is-spinning");
      void canvas.offsetWidth;
      canvas.classList.add("is-spinning");

      window.setTimeout(() => {
        drawScienceWheel(result.plate.concat(ITEMS.filter((it) => !result.plate.includes(it)).slice(0, Math.max(0, 8 - result.plate.length))));

        // save history
        const history = loadWheelHistory();
        result.plate.forEach((it) => history.push(it.id));
        saveWheelHistory(history);

        // render result
        $("#wheel-empty").hidden = true;
        const out = $("#wheel-output");
        out.hidden = false;
        $("#wheel-title").textContent = "今日推荐 · " + result.plate.length + " 样";
        $("#wheel-why").textContent =
          "这组搭配按时令、餐盘比例与多样性加权抽出，可直接当作今天买菜清单的参考。点图片看详情。";

        const picked = $("#wheel-picked");
        picked.innerHTML = result.plate
          .map(
            (it) => `
            <button type="button" class="wheel-pick" data-id="${it.id}">
              <img src="${imgSrc(it)}" alt="${it.name}" loading="lazy" />
              <strong>${it.name}</strong>
              <span>${typeName(it.type)} · ${calLabel(it.calLevel)}</span>
            </button>`
          )
          .join("");
        picked.onclick = (e) => {
          const btn = e.target.closest("[data-id]");
          if (btn) openModal(btn.getAttribute("data-id"));
        };

        $("#wheel-reasons").innerHTML = result.reasons.map((r) => `<li>${r}</li>`).join("");

        wheelSpinning = false;
        spinBtn.disabled = false;
        if (againBtn) againBtn.disabled = false;
        spinBtn.textContent = "再转";
      }, 2850);
    }

    spinBtn.onclick = spin;
    if (againBtn) againBtn.onclick = spin;

    if (toMealBtn) {
      toMealBtn.onclick = () => {
        const picks = $$("#wheel-picked [data-id]").map((b) => b.getAttribute("data-id"));
        if (!picks.length) return;
        const day = String(todayIndex());
        if (!mealPlan[day]) mealPlan[day] = [];
        picks.slice(0, 4).forEach((id) => {
          if (!mealPlan[day].includes(id) && mealPlan[day].length < 4) mealPlan[day].push(id);
        });
        saveMealPlan();
        renderMealPlan();
        const meal = $("#meal");
        if (meal) meal.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    }
  }

  // ---------- random / font / nav / to-top ----------
  function randomItem() {
    const it = ITEMS[Math.floor(Math.random() * ITEMS.length)];
    openModal(it.id);
  }

  function bindFontSwitch() {
    const group = $$(".font-switch [data-font]");
    const saved = localStorage.getItem("shuxu-font") || "md";
    document.documentElement.setAttribute("data-font", saved);
    group.forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-font") === saved);
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-font");
        document.documentElement.setAttribute("data-font", val);
        localStorage.setItem("shuxu-font", val);
        group.forEach((b) => b.classList.toggle("is-active", b === btn));
      });
    });
  }

  function bindNav() {
    const toggle = $("#nav-toggle");
    const nav = $("#site-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      nav.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    const toTop = $("#to-top");
    if (toTop) {
      window.addEventListener("scroll", () => {
        toTop.classList.toggle("is-visible", window.scrollY > 480);
      });
      toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    }
  }

  function bindModal() {
    $$("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
    const favBtn = $("#modal-fav");
    if (favBtn) {
      favBtn.addEventListener("click", () => {
        if (favBtn.dataset.id) toggleFav(favBtn.dataset.id);
      });
    }
  }

  function updateHeroStats() {
    const seasonList = itemsForMonth(currentMonth);
    const benefitCount = new Set(ITEMS.flatMap((it) => it.benefits)).size;
    const el1 = $("#stat-items");
    const el2 = $("#stat-benefits");
    const el3 = $("#stat-peak");
    if (el1) el1.textContent = String(ITEMS.length);
    if (el2) el2.textContent = String(benefitCount);
    if (el3) el3.textContent = String(seasonList.length);
  }

  // ---------- init ----------
  function init() {
    bindFontSwitch();
    bindNav();
    bindModal();
    bindCardClicks(document);

    renderMonthPicker();
    renderToday();
    renderOrbit();
    renderDaily();
    renderYearMap();
    bindSeasonTabs();

    renderBenefitFilter();
    renderBenefitGrid();

    renderTypeFilter();
    bindSearch();
    renderAtlas();
    renderFavorites();

    renderDietFilter();
    renderDietGrid();

    renderCompareOptions();
    renderAllScenarios();

    renderMethodShelf();
    renderFridge();
    renderSpin();
    bindPlayTabs();
    renderMealPlan();
    bindMealActions();
    renderNutritionist();
    renderScienceWheel();

    updateHeroStats();
    saveFavorites();

    const dailyCard = $("#daily-card");
    if (dailyCard) {
      dailyCard.addEventListener("click", (e) => {
        if (e.target.closest("button")) return;
      });
    }

    const randomBtns = [$("#btn-random"), $("#btn-random-2")];
    randomBtns.forEach((btn) => {
      if (btn) btn.addEventListener("click", randomItem);
    });

    const favBtn = $("#btn-favorites");
    if (favBtn) {
      favBtn.addEventListener("click", () => {
        renderFavorites();
        const panel = $("#favorites-panel");
        const atlas = $("#atlas");
        if (panel && atlas) {
          if (favorites.length) {
            panel.hidden = false;
            atlas.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            panel.hidden = false;
            panel.querySelector("h3").textContent = "我的收藏（还是空的，点卡片小红心）";
            atlas.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    }

    const mealBtn = $("#btn-meal-plan");
    if (mealBtn) mealBtn.addEventListener("click", renderMealPlan);
    const basketClose = $("#basket-close");
    if (basketClose) {
      basketClose.addEventListener("click", () => {
        const panel = $("#basket-panel");
        if (panel) panel.hidden = true;
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
