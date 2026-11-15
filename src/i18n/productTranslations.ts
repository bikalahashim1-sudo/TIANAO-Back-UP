import { Product } from '../data/products';

export type Language = 'en' | 'zh' | 'ar';

export interface ProductLocaleCopy {
  name: string;
  categoryLabel: string;
  tagline?: string;
  description: string;
  materials?: string[];
  colors?: string[];
  features?: string[];
  matchingItems?: string;
  frameSpec?: string;
  breakdown?: string;
}

export const SERIES_TRANSLATIONS: Record<Language, Record<Product['series'], string>> = {
  en: {
    'Modern Luxury Series': 'Modern Luxury Series',
    'High-End Minimalist Series': 'High-End Minimalist Series',
    'High-End Simple Luxury Series': 'High-End Simple Luxury Series',
  },
  zh: {
    'Modern Luxury Series': '现代豪华系列',
    'High-End Minimalist Series': '高端极简系列',
    'High-End Simple Luxury Series': '高端简奢系列',
  },
  ar: {
    'Modern Luxury Series': 'سلسلة الفخامة الحديثة',
    'High-End Minimalist Series': 'سلسلة البساطة الراقية',
    'High-End Simple Luxury Series': 'سلسلة الفخامة البسيطة الراقية',
  },
};

export const PRODUCT_AR_TRANSLATIONS: Record<string, ProductLocaleCopy> = {
  'ta-minimalist-walnut-boucle-sofa': {
    name: 'أريكة 3 مقاعد من خشب الجوز المنحوت وبوكليه عاجي',
    categoryLabel: 'أريكة معيشة بسيطة',
    tagline: 'إنشاء بيئة منزلية مثالية لا يعني بالضرورة التكلف والتعقيد.',
    description: 'أريكة بثلاثة مقاعد بذراعين منحنيتين بخطوط عضوية أنيقة، منجدة بقماش بوكليه عاجي مسامي ومثبتة بأرجل زاوية منحوتة من خشب الجوز الصلب.',
    matchingItems: 'تنسجم مع كرسي الصالة المنفرد (TA-M02)',
  },
  'ta-executive-reception-suite': {
    name: 'طقم أريكة تنفيذية ومنزلية 1+1+3 جلد إسبريسو',
    categoryLabel: 'طقم تنفيذي ومعيشة (1+1+3)',
    tagline: 'ريادة واستكشاف قمة الصناعة — مصممة للمنازل وصالات الاستقبال التنفيذية.',
    description: 'طقم جلوس جلدي متكامل 1+1+3 بلون إسبريسو داكن مع مساند ذراعين عريضة مبطنة ووسائد دعم قطني مصممة بعناية.',
    matchingItems: 'يتوافق مع طقم طاولتي قهوة من الحجر الملبد',
  },
  'ta-minimalist-walnut-boucle-chair': {
    name: 'كرسي صالة بذراعين من خشب الجوز وبوكليه عاجي',
    categoryLabel: 'كرسي صالة مصمم',
    tagline: 'بسيط، أنيق، منعش وطبيعي — ملاذ هادئ للراحة وتجديد النشاط.',
    description: 'كرسي استرخاء مفرد عميق يجمع بين التنجيد الدائري بقماش البوكليه ودعامات زاوية من خشب الجوز الصلب مع وسادة ظهر مريحة.',
    matchingItems: 'تتوفر أريكة 3 مقاعد مطابقة (TA-M04)',
  },
  'taq106-sugar-cube-sofa': {
    name: 'أريكة وصالة مكعب السكر المعيارية',
    categoryLabel: 'أريكة زاوية وخطية',
    tagline: 'خطوط هندسية نقية متوازنة مع وسائد عميقة مرحبة.',
    description: 'مجموعة جلوس راقية بتصميم مكعب مكسوة بجلد السرج الإيطالي بلون الكراميل الكونياكي مع مساند ذراعين مربعة مميزة.',
  },
  'taq070-olive-modular-sofa': {
    name: 'أريكة أوليف البسيطة منخفضة الارتفاع',
    categoryLabel: 'أريكة معيارية منخفضة',
    tagline: 'الالتزام بفلسفة تصميم بسيطة وأنيقة ومنعشة وطبيعية.',
    description: 'أريكة عصرية واسعة من وحدتين مكسوة بجلد أخضر زيتوني فاخر مع قاعدة محيطية معدنية سوداء ووسائد ظهر مرنة.',
  },
  'taq103-piano-key-sofa': {
    name: 'أريكة مفاتيح البيانو المعيارية',
    categoryLabel: 'أريكة معمارية مقسمة',
    tagline: 'اجعل المنزل ملاذاً دافئاً، وزيّن كل زاوية بالحب.',
    description: 'أريكة مميزة بتطريزها العمودي الإيقاعي المستوحى من مفاتيح البيانو، مزودة بوحدة تخزين جانبية مدمجة ومساند قطنية مريحة.',
  },
  'taq078-big-black-bull-sofa': {
    name: 'أريكة الاسترخاء العميقة الفاخرة (TA9078)',
    categoryLabel: 'أريكة تنفيذية كبيرة',
    tagline: 'ليست مجرد قطع أثاث، بل أعمال فنية تنسجم مع أسلوب حياتك.',
    description: 'أريكة جلدية فاخرة بطول 3.88 متر بتصميم منخفض ومريح مع وسائد جانبية عريضة ومقاعد أفقية عميقة.',
  },
  'taq080-earth-tone-modular-sofa': {
    name: 'أريكة معيارية بألوان ترابية ومقعد قدم',
    categoryLabel: 'أريكة معيارية متعددة الألوان',
    tagline: 'توليفة لونية دافئة تجمع بين الأناقة ومرونة التشكيل.',
    description: 'أريكة معيارية قابلة لإعادة الترتيب بتدرجات ترابية طبيعية مع مقعد قدم متناسق لتصميم غرفة المعيشة حسب المساحة.',
  },
  'taq082-blazer-sofa': {
    name: 'أريكة بليزر من جلد السرج الفاخر',
    categoryLabel: 'أريكة جلدية مصممة',
    tagline: 'تفاصيل خياطة دقيقة تعكس الفخامة الهادئة.',
    description: 'أريكة جلدية مصممة بأذرع مائلة مريحة وخياطة مزدوجة مع قاعدة متينة تمنح ثباتاً وراحة تدوم طويلاً.',
  },
  'taq086-adjustable-headrest-sofa': {
    name: 'أريكة عصرية بمساند رأس قابلة للتعديل',
    categoryLabel: 'أريكة جلدية مريحة',
    tagline: 'دعم مخصص للرأس والرقبة في كل وضعية جلوس.',
    description: 'أريكة جلدية حديثة مزودة بمساند رأس مفصلية متعددة الزوايا وإسفنج عالي الارتداد لراحة يومية متكاملة.',
  },
  'taq090-petrol-blue-sofa': {
    name: 'أريكة بترولية بأذرع منحنية أنيقة',
    categoryLabel: 'أريكة عصرية منحوتة',
    tagline: 'انحناءات ناعمة ولون بترولي عصري يضفي شخصية متفردة.',
    description: 'أريكة بلون أزرق بترولي أردوازي مع أذرع منحنية بانسيابية وتنجيد فائق النعومة لغرف المعيشة الراقية.',
  },
  'taq100-espresso-leather-sofa': {
    name: 'أريكة إسبريسو جلدية بخطوط مستقيمة',
    categoryLabel: 'أريكة فاخرة خطية',
    tagline: 'بساطة معمارية وأناقة خالدة للمجالس والصالونات.',
    description: 'أريكة مستقيمة بجلد إسبريسو فاخر، مقاعد واسعة متوازنة التبطين وظهر مريح يتناسب مع المساحات السكنية والتجارية.',
  },
  'taq111-vitality-leather-sofa': {
    name: 'أريكة توباكو العصرية بوسائد مزدوجة',
    categoryLabel: 'أريكة جلدية مصممة',
    tagline: 'دفء لوني وراحة مضاعفة في قلب غرفة المعيشة.',
    description: 'أريكة بلون التبغ الدافئ مع وسائد جلوس مزدوجة الكثافة وخياطة متقنة تعزز الدعم والمتانة.',
  },
  'ta9801-corner-chaise-sectional': {
    name: 'طقم أريكة زاوية تشيزلونغ بسيطة مع كرسي',
    categoryLabel: 'طقم زاوية تشيزلونغ',
    tagline: 'استرخاء واسع للعائلة مع استغلال أمثل لزوايا الغرفة.',
    description: 'أريكة زاوية تشيزلونغ بتصميم بسيط وأنيق مع كرسي مفرد متناغم ومساند مريحة لاجتماعات العائلة.',
  },
  'taq102-power-motion-sofa': {
    name: 'أريكة جلدية كهربائية قابلة للإمالة',
    categoryLabel: 'أريكة استرخاء كهربائية',
    tagline: 'حركة كهربائية سلسة وصامتة بلمسة زر واحدة.',
    description: 'أريكة استرخاء كهربائية مكسوة بالجلد الطبيعي مع آلية إمالة هادئة لمسند الظهر والقدمين لراحة السينما المنزلية.',
  },
  'taq810-dual-recliner-console-sofa': {
    name: 'أريكة استرخاء كهربائية مزدوجة مع كونسول',
    categoryLabel: 'أريكة كونسول ذكية',
    tagline: 'تجربة سينما منزلية فاخرة مع وحدة تحكم وحاملات أكواب.',
    description: 'أريكة كهربائية مزدوجة بلون رمادي أردوازي مزودة بكونسول وسطي للتخزين وحاملات أكواب ومحركات صامتة عالية الاعتمادية.',
  },
  'chair-9808-swivel': {
    name: 'كرسي صالة دوّار بلون أخضر طحلبي',
    categoryLabel: 'كرسي دوّار مميز',
    tagline: 'دوران سلس 360 درجة واحتضان مريح للاستجمام.',
    description: 'كرسي صالة دوّار بظهر دائرى مبطن وقاعدة معدنية ثابتة بلون أخضر طحلبي هادئ.',
  },
  'chair-9806-ergonomic': {
    name: 'كرسي بذراعين مريح ومصمم هندسياً',
    categoryLabel: 'كرسي مصمم مميز',
    tagline: 'انحناءة مدروسة تدعم الظهر والكتفين برشاقة.',
    description: 'كرسي مفرد أنيق بهيكل داعم وتنجيد جلدي فاخر يناسب زوايا القراءة وغرف النوم والمكاتب.',
  },
  'chair-9807-lounge': {
    name: 'كرسي بذراعين منحني بطراز حديث',
    categoryLabel: 'كرسي صالة بذراعين',
    tagline: 'خطوط منحوتة تجمع بين الخفة البصرية والراحة العميقة.',
    description: 'كرسي صالة بتصميم حديث بمسند ظهر منحني يحيط بالجسم مع قاعدة أنيقة متينة.',
  },
  'chair-9809-highback': {
    name: 'كرسي استرخاء بظهر مرتفع بلون مريمية',
    categoryLabel: 'كرسي استرخاء مريح',
    tagline: 'دعم كامل للظهر والرأس لأوقات الراحة الطويلة.',
    description: 'كرسي استرخاء بظهر مرتفع وإمالة مريحة بلون المريمية الهادئ مثالي لغرف المعيشة والنوم.',
  },
  'chair-x15-sled': {
    name: 'كرسي صالة معماري بقاعدة زلاجة',
    categoryLabel: 'كرسي صالة مميز',
    tagline: 'خفة معدنية مع تبطين جلدي متين.',
    description: 'كرسي معماري بقاعدة فولاذية منحوتة ومقعد مريح بزاوية جلوس مائلة لراحة فورية.',
  },
  'cabinet-01-no3-sage': {
    name: 'طاولة جانبية بدرجين بلون مريمية وسطح حجر ملبد',
    categoryLabel: 'طاولة سرير مصممة',
    tagline: 'لون هادئ مع سطح حجر ملبد مقاوم للخدش والبقع.',
    description: 'خزانة سرير بلون أخضر مريمية مطفي بدرجين بإغلاق هادئ، وسطح من الحجر الملبد الأبيض وأرجل فولاذية نحيفة.',
  },
  'cabinet-02-s56-walnut': {
    name: 'طاولة سرير بدرجين من خشب الجوز والنحاس',
    categoryLabel: 'طاولة سرير مصممة',
    tagline: 'دفء عروق الجوز الطبيعي مع لمسات معدنية نحاسية.',
    description: 'طاولة سرير مكسوة بقشرة الجوز الطبيعي مع درجين واسعين ومقابض نحاسية مصقولة وقاعدة معدنية سوداء.',
  },
  'cabinet-03-no4-taupe': {
    name: 'طاولة سرير بدرجين مكسوة بجلد توب ناعم',
    categoryLabel: 'طاولة سرير مصممة',
    tagline: 'ملمس جلدي ناعم مع مقابض نحاسية خطية أنيقة.',
    description: 'خزانة سرير منجدة بالكامل بالجلد الصناعي الفاخر بلون رمادي توب مع درجين بسحب ناعم ومقابض نحاسية.',
  },
  'dining-01-marble-suite': {
    name: 'طقم طاولة طعام حجر ملبد فاخرة مع 6 كراسي',
    categoryLabel: 'طقم غرفة طعام',
    tagline: 'حيث تتحول التجمعات اليومية إلى لحظات احتفالية.',
    description: 'طاولة طعام حديثة بسطح حجر ملبد فاخر وقاعدة فولاذية معمارية مع ستة كراسي مريحة منجدة بجلد السرج.',
  },
  'dining-02-pedestal-suite': {
    name: 'طقم طعام بقاعدة مركزية معمارية',
    categoryLabel: 'طقم غرفة طعام',
    tagline: 'توازن بصري متقن ومساحة رحبة للأرجل.',
    description: 'طاولة طعام بقاعدة ركيزة مركزية مصقولة وسطح حجر ملبد مقاوم للحرارة والخدش مع كراسي منجدة متناسقة.',
  },
  'dining-03-walnut-suite': {
    name: 'طقم طعام معاصر من خشب الجوز وجلد السرج',
    categoryLabel: 'طقم غرفة طعام',
    tagline: 'تناغم الخشب الطبيعي مع دفء الجلد الفاخر.',
    description: 'مجموعة طعام عصرية تجمع بين هيكل الجوز الدافئ وكراسي مريحة مكسوة بجلد السرج لاستضافة مريحة.',
  },
  'dining-04-round-suite': {
    name: 'طاولة طعام دائرية مع قرص دوّار للضيافة',
    categoryLabel: 'طقم غرفة طعام',
    tagline: 'حوار دافئ حول مائدة دائرية مصممة للمشاركة.',
    description: 'طاولة طعام دائرية بسطح حجر ملبد مزودة بقرص تقديم دوّار وسطي وكراسي منحنية متناغمة.',
  },
  'dining-05-executive-suite': {
    name: 'طقم طعام تنفيذي مستطيل مع 8 كراسي',
    categoryLabel: 'طقم غرفة طعام',
    tagline: 'حجم رحب للولائم العائلية وقاعات الاجتماعات الراقية.',
    description: 'طاولة طعام تنفيذية واسعة تستوعب 8 ضيوف بأريحية مع سطح حجر ملبد متين وكراسي جلدية فاخرة.',
  },
  'bed-01-architectural-soft': {
    name: 'سرير رئيسي ناعم بتصميم معماري منجد',
    categoryLabel: 'سرير ناعم مصمم',
    tagline: 'هدوء بصري وراحة فندقية فائقة في غرفة النوم الرئيسية.',
    description: 'سرير رئيسي منجد بالكامل بخطوط معمارية نظيفة ومسند رأس مبطن مع هيكل شرائح خشبية مقوّى.',
  },
  'ta2397-terracotta-wing-bed': {
    name: 'سرير مجنّح فاخر بلون تيراكوتا دافئ',
    categoryLabel: 'سرير فاخر مجنّح',
    tagline: 'أجنحة جانبية محيطة تمنح شعوراً بالدفء والخصوصية.',
    description: 'سرير أنيق بلون تيراكوتا من الجلد الفاخر مع مسند رأس مجنّح يلتف برفق حول المرتبة وهيكل مقوّى.',
  },
  'ta2573-curved-wing-bed': {
    name: 'سرير جلدي كوين بأجنحة منحنية',
    categoryLabel: 'سرير منجد مجنّح',
    tagline: 'انحناءات ناعمة وإحساس احتضاني مريح.',
    description: 'سرير جلدي بتصميم مسند رأس منحني وأطراف جانبية متصلة مع قاعدة شرائح خشبية معززة.',
  },
  'ta2576-luxury-upholstered-bed': {
    name: 'سرير منصة ثنائي اللون من جلد السرج والكتان',
    categoryLabel: 'سرير منجد فاخر',
    tagline: 'تزاوج راقٍ بين جلد السرج الطبيعي والكتان الكريمي.',
    description: 'سرير منصة فاخر بتنجيد ثنائي اللون مع هيكل شرائح من خشب الزان المقوّى وإطار فولاذي صلب.',
  },
  'taa2186-fashionable-soft-bed': {
    name: 'سرير ناعم عصري من جلد السرج الإيطالي',
    categoryLabel: 'سرير منجد ناعم',
    tagline: 'السرير الناعم العصري يأخذك إلى نوم هانئ وعميق.',
    description: 'سرير بوسائد رأس مزدوجة من الجلد الطبيعي باللون الكونياكي مع هيكل شرائح خشبية مقوّى.',
  },
  'taa2188-tufted-wingback-bed': {
    name: 'سرير جلدي مطرّز بأجنحة عالية كبيرة',
    categoryLabel: 'سرير مجنّح فخم',
    tagline: 'حضور ملكي في الجناح الرئيسي مع تطريز شبكي متقن.',
    description: 'سرير كبير بمسند رأس مجنّح بعرض 238 سم وتطريز شبكي أنيق مع طاولات جانبية K21 متناسقة.',
  },
  'taq003-pistachio-sage-bed': {
    name: 'سرير منحنٍ ناعم بلون فستقي هادئ',
    categoryLabel: 'سرير منجد ناعم',
    tagline: 'فلسفة تصميم منعشة وطبيعية تواكب أحدث الصيحات العالمية.',
    description: 'سرير بلون فستقي هادئ مع قمة رأس منحنية وخياطة مزدوجة أنيقة وهيكل شرائح خشبية مقوّى.',
  },
  'taq004-memory-foam-two-tone-bed': {
    name: 'سرير مبطن ثنائي اللون بإسفنج الذاكرة عديم الضغط',
    categoryLabel: 'سرير مبطن مريح',
    tagline: 'دفء المنزل — إسفنج الذاكرة يتكيّف تماماً مع منحنيات جسمك.',
    description: 'سرير ثنائي اللون بلون مريمية وكريمي مع وسائد دعم قطني مزدوجة وطبقات إسفنج ذاكرة مريحة.',
  },
  'taq007-burnt-orange-leather-bed': {
    name: 'سرير جلدي برتقالي محروق بتطريز معينات هندسي',
    categoryLabel: 'سرير جلدي بارز',
    tagline: 'حيوية اللون الدافئ تمنح غرفة النوم شخصية متألقة.',
    description: 'سرير جلد نابا بلون برتقالي محروق مع مسند رأس عالٍ مزين بتطريز هندسي معيني وأرجل معدنية رشيقة.',
  },
  'taq008-olive-floating-platform-bed': {
    name: 'سرير منصة عائم بلون أخضر زيتوني',
    categoryLabel: 'سرير منصة حديث',
    tagline: 'ريادة واستكشاف قمة الجودة في صناعة غرف النوم.',
    description: 'سرير جلدي بلون أخضر زيتوني طبيعي مع مسند رأس بارتفاع 124 سم وقاعدة شرائح خشبية معززة.',
  },
  'taq9001-slate-geometric-bed': {
    name: 'سرير أردوازي بسيط بخطوط هندسية',
    categoryLabel: 'سرير منصة حديث',
    tagline: 'السرير الناعم العصري يأخذك إلى نوم مريح.',
    description: 'سرير جلدي رمادي أردوازي بخطوط مستقيمة أنيقة ومسند رأس هندسي نظيف مع طاولة جانبية متناسقة.',
  },
};

const MATERIAL_ZH: Record<string, string> = {
  'Textured Ivory Bouclé Fabric': '肌理感象牙白羊羔绒面料',
  'Sculpted Solid Walnut Wood Legs': '精雕实木胡桃木支撑脚',
  'High-Density Rebound Sponge': '高密度高回弹海绵',
  'Top-Grain Espresso Leather': '头层意式深咖真皮',
  'Kiln-Dried Solid Hardwood Frame': '烘干实木内框架',
  'Solid Walnut Sculpted Base': '实木胡桃木雕刻底座',
  'High-Resilience Molded Sponge': '高回弹定型海绵',
  'Italian Saddle Leather': '意大利进口马鞍皮',
  'Top-Grain Leather': '头层天然牛皮',
  'Semi-Aniline Leather': '半苯胺头层牛皮',
  'Sintered Stone Top': '意式高硬度岩板台面',
  'Natural Walnut Veneer': '天然胡桃木饰面',
  'Zero-Pressure Memory Foam': '零压记忆舒压棉',
};

const MATERIAL_AR: Record<string, string> = {
  'Textured Ivory Bouclé Fabric': 'قماش بوكليه عاجي بارز الملمس',
  'Sculpted Solid Walnut Wood Legs': 'أرجل منحوتة من خشب الجوز الصلب',
  'High-Density Rebound Sponge': 'إسفنج عالي الكثافة والارتداد',
  'Top-Grain Espresso Leather': 'جلد إسبريسو طبيعي طبقة أولى',
  'Kiln-Dried Solid Hardwood Frame': 'هيكل خشب صلب مجفف بالفرن',
  'Solid Walnut Sculpted Base': 'قاعدة منحوتة من خشب الجوز الصلب',
  'High-Resilience Molded Sponge': 'إسفنج مقولب عالي المرونة',
  'Italian Saddle Leather': 'جلد السرج الإيطالي الفاخر',
  'Sintered Stone Top': 'سطح من الحجر الملبد المقاوم للخدش',
  'Natural Walnut Veneer': 'قشرة خشب الجوز الطبيعي',
  'Zero-Pressure Memory Foam': 'إسفنج الذاكرة عديم الضغط',
  'Reinforced Solid Pine Slats': 'شرائح خشب صنوبر صلب مقواة',
  'Soft-Close Hardware': 'مفصلات وسكك إغلاق هادئ',
};

const SERIES_CATEGORY_ZH: Record<Product['category'], string> = {
  sofas: '现代豪华与极简沙发',
  recliners: '电动功能与影院沙发',
  beds: '真皮与舒眠软床系列',
  'chairs-tables': '休闲单椅、餐桌椅与床头柜',
};

export function getLocalizedProduct(product: Product, lang: Language): {
  model: string;
  name: string;
  categoryLabel: string;
  series: string;
  tagline: string;
  description: string;
  matchingItems?: string;
  frameSpec?: string;
  materials: string[];
  breakdown?: string;
} {
  if (lang === 'zh') {
    return {
      model: product.model,
      name: product.nameCn || product.name,
      categoryLabel: SERIES_CATEGORY_ZH[product.category],
      series: product.seriesCn || SERIES_TRANSLATIONS.zh[product.series],
      tagline: product.taglineCn || product.tagline || '',
      description: product.description,
      matchingItems: product.matchingItems,
      frameSpec: product.frameSpec ? '加强型实木排骨架结构' : undefined,
      materials: product.materials.map((m) => MATERIAL_ZH[m] || m),
      breakdown: product.dimensions.breakdown,
    };
  }

  if (lang === 'ar') {
    const ar = PRODUCT_AR_TRANSLATIONS[product.id];
    return {
      model: product.model,
      name: ar?.name || product.name,
      categoryLabel: ar?.categoryLabel || product.categoryLabel,
      series: SERIES_TRANSLATIONS.ar[product.series],
      tagline: ar?.tagline || product.tagline || '',
      description: ar?.description || product.description,
      matchingItems: ar?.matchingItems || product.matchingItems,
      frameSpec: product.frameSpec ? 'هيكل شرائح خشبية مضلّعة مقوّى' : undefined,
      materials: product.materials.map((m) => MATERIAL_AR[m] || m),
      breakdown: ar?.breakdown || product.dimensions.breakdown,
    };
  }

  return {
    model: product.model,
    name: product.name,
    categoryLabel: product.categoryLabel,
    series: SERIES_TRANSLATIONS.en[product.series],
    tagline: product.tagline || '',
    description: product.description,
    matchingItems: product.matchingItems,
    frameSpec: product.frameSpec,
    materials: product.materials,
    breakdown: product.dimensions.breakdown,
  };
}
