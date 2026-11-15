import { Language } from './productTranslations';

export function isValidLanguage(value: unknown): value is Language {
  return value === 'en' || value === 'zh' || value === 'ar';
}

export function getDirection(lang: Language): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}

export interface HeroSlideTranslation {
  kicker: string;
  title: string;
  subtitle: string;
  description: string;
  badgeLabel: string;
}

export interface AppTranslations {
  langName: string;
  langNativeLabel: string;
  languageSelectorLabel: string;
  brandTitle: string;
  brandSubtitle: string;
  topBarLocation: string;
  officialCatalogueBtn: string;
  nav: {
    home: string;
    collection: string;
    categories: string;
    about: string;
    contact: string;
  };
  cta: {
    requestQuote: string;
    requestQuotationCount: string;
    browsePdfCatalogue: string;
    exploreCollection: string;
    browseCompleteCatalogue: string;
    viewAllProducts: string;
    inspectModel: string;
    details: string;
    quote: string;
    inQuote: string;
    addToQuoteRequest: string;
    addedToQuoteList: string;
    submitQuoteRequest: string;
    submittingQuoteRequest: string;
    sendDirectMessage: string;
    downloadPdf: string;
    resetFilters: string;
    clear: string;
    previousPage: string;
    nextPage: string;
    viewFullSpecs: string;
    callShowroomDirect: string;
    returnToCatalogue: string;
    sendAnotherNote: string;
    scrollToTop: string;
  };
  hero: {
    autoOn: string;
    autoPaused: string;
    prevSlideAria: string;
    nextSlideAria: string;
    metrics: {
      factoryLabel: string;
      showroomLabel: string;
      staffLabel: string;
      fiveGoodTitle: string;
      fiveGoodLabel: string;
    };
    marquee: string;
    slides: HeroSlideTranslation[];
  };
  featured: {
    kicker: string;
    title: string;
    bannerKicker: string;
    bannerTitle: string;
    bannerDesc: string;
  };
  categoriesSection: {
    kicker: string;
    title: string;
    subtitle: string;
    modelsUnit: string;
    items: {
      sofas: { title: string; subtitle: string; desc: string };
      recliners: { title: string; subtitle: string; desc: string };
      beds: { title: string; subtitle: string; desc: string };
      'chairs-tables': { title: string; subtitle: string; desc: string };
    };
  };
  about: {
    kicker: string;
    companyName: string;
    companySubline: string;
    plantTitle: string;
    plantDate: string;
    factoryAreaLabel: string;
    showroomAreaLabel: string;
    staffLabel: string;
    jointVenture: string;
    profileTitle: string;
    profileBadge: string;
    profileBody: string;
    seriesHeading: string;
    seriesLine: string;
    pillarsKicker: string;
    pillarsTitle: string;
    pillarsSub: string;
    standardBadge: string;
    pillars: { title: string; tag: string; desc: string }[];
  };
  lookbook: {
    kicker: string;
    title: string;
    subtitle: string;
    quotePrimary: string;
    card1Meta: string;
    card1Title: string;
    card1Quote: string;
    card1Specs: string;
    card2Meta: string;
    card2Title: string;
    card2Quote: string;
    card2Specs: string;
    card3Meta: string;
    card3Title: string;
    card3Quote: string;
    card3Specs: string;
    inspectModel: string;
  };
  conversion: {
    kicker: string;
    title: string;
    subtitle: string;
    quote: string;
    description: string;
    browseAll: string;
    location: string;
    delivery: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    companyTitle: string;
    companySub: string;
    addressLabel: string;
    addressValue: string;
    phonesLabel: string;
    websiteLabel: string;
    scaleLabel: string;
    scaleValue: string;
    hoursTitle: string;
    hoursValue: string;
    hoursNote: string;
    hubKicker: string;
    hubTitle: string;
    hubDesc: string;
    formKicker: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    subjectLabel: string;
    subjectOptions: string[];
    messageLabel: string;
    messagePlaceholder: string;
    successTitle: string;
    successDesc: string;
  };
  footer: {
    brandTitle: string;
    brandSub: string;
    summary: string;
    strategy: string;
    navHeading: string;
    navHome: string;
    navCatalogue: string;
    navCategories: string;
    navAbout: string;
    navContact: string;
    seriesHeading: string;
    catalogueIndex: string;
    plantHeading: string;
    copyright: string;
    locationShort: string;
    foundersShort: string;
  };
  collection: {
    kickerBrand: string;
    kickerCatalog: string;
    kickerModels: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    sortBy: string;
    sortModel: string;
    sortPage: string;
    sortName: string;
    categoryLabel: string;
    allProducts: string;
    catSofas: string;
    catRecliners: string;
    catBeds: string;
    catChairs: string;
    seriesLabel: string;
    allSeries: string;
    materialLabel: string;
    allMaterials: string;
    matLeather: string;
    matBoucle: string;
    matMotorized: string;
    matStone: string;
    matWalnut: string;
    showingCount: string;
    clickHint: string;
    emptyState: string;
  };
  productModal: {
    cataloguePagePrefix: string;
    dimensions: string;
    frameStructure: string;
    frameDefault: string;
    framePlatform: string;
    cataloguePageLabel: string;
    pageWord: string;
    modelPrefix: string;
    finishesLabel: string;
    specsLabel: string;
    materialsLabel: string;
    directQuoteNote: string;
    parkLocation: string;
    relatedHeading: string;
    detailView: string;
    overview: string;
    blueprint: string;
    photo: string;
    pdfPageShort: string;
    heightShort: string;
  };
  quoteDrawer: {
    kicker: string;
    title: string;
    selectedItems: string;
    clearList: string;
    emptyTitle: string;
    emptyHint: string;
    customerHeading: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    locationPlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    projectTypeLabel: string;
    projectTypes: { value: string; label: string }[];
    notesLabel: string;
    notesPlaceholder: string;
    successTitle: string;
    successBodyPrefix: string;
    successBodySuffix: string;
    refSummaryTitle: string;
    refContact: string;
    refLocation: string;
    refItems: string;
    unitsWord: string;
    footerScale: string;
  };
  catalogueModal: {
    title: string;
    subtitle: string;
    pageWord: string;
    ofWord: string;
    productsOnPage: string;
    editorialSpreadTitle: string;
    editorialSpreadHint: string;
    jumpToPage: string;
    watermark: string;
    companyFull: string;
    addressLine: string;
    phoneLine: string;
    webLine: string;
    profileTitle: string;
    fiveGoodTitle: string;
    sections: {
      coverTitle: string;
      coverSection: string;
      profileTitle: string;
      profileSection: string;
      sofasTitle: string;
      sofasSection: string;
      reclinersTitle: string;
      reclinersSection: string;
      chairsTitle: string;
      chairsSection: string;
      bedsTitle: string;
      bedsSection: string;
    };
  };
}

export const TRANSLATIONS: Record<Language, AppTranslations> = {
  en: {
    langName: 'English',
    langNativeLabel: 'English',
    languageSelectorLabel: 'Language',
    brandTitle: 'TIANAO',
    brandSubtitle: '5GOOD · FURNITURE SHOWROOM',
    topBarLocation: 'Sino-Uganda Mbale Industrial Park, Uganda',
    officialCatalogueBtn: 'Official 36-Page Catalogue',
    nav: {
      home: 'Home',
      collection: 'Shop Collection',
      categories: 'Categories',
      about: 'About & Factory',
      contact: 'Contact',
    },
    cta: {
      requestQuote: 'Request a Quote',
      requestQuotationCount: 'Request a Quotation',
      browsePdfCatalogue: 'Browse PDF Catalogue (36 Pages)',
      exploreCollection: 'Explore Collection',
      browseCompleteCatalogue: 'Browse Complete Catalogue',
      viewAllProducts: 'View All Products',
      inspectModel: 'Inspect',
      details: 'Details',
      quote: 'Quote',
      inQuote: 'In Quote',
      addToQuoteRequest: 'Add to Quotation Request',
      addedToQuoteList: 'Added to Quotation List',
      submitQuoteRequest: 'Submit Official Quotation Request',
      submittingQuoteRequest: 'Submitting Quotation Request...',
      sendDirectMessage: 'Send Direct Message',
      downloadPdf: 'Download PDF',
      resetFilters: 'Reset Filters',
      clear: 'Clear',
      previousPage: 'Previous Page',
      nextPage: 'Next Page',
      viewFullSpecs: 'View Full Specifications',
      callShowroomDirect: 'Call Showroom Direct (+256 744 477 777)',
      returnToCatalogue: 'Return to Catalogue',
      sendAnotherNote: 'Send Another Note',
      scrollToTop: 'Scroll to top',
    },
    hero: {
      autoOn: 'Auto · On',
      autoPaused: 'Auto · Paused',
      prevSlideAria: 'Previous showcase slide',
      nextSlideAria: 'Next showcase slide',
      metrics: {
        factoryLabel: 'Manufacturing Facility',
        showroomLabel: 'Flagship Showroom',
        staffLabel: 'Skilled Staff & Engineers',
        fiveGoodTitle: '5GOOD',
        fiveGoodLabel: 'Health · Comfort · Design · Quality · Service',
      },
      marquee:
        'Design It Your Way! Choose your colours and fabrics. We customize and deliver your dream in the best quality.',
      slides: [
        {
          kicker: 'MODERN LUXURY SERIES · HOME & EXECUTIVE SUITES',
          title: 'Enterprising & Exploring the Peak of Modern Upholstered Craft.',
          subtitle: 'Bespoke living room seating and executive reception comfort crafted for lasting presence.',
          description:
            'Complete 1+1+3 top-grain leather suites crafted to your choice of colours and fabrics for grand residential living rooms and executive leadership spaces.',
          badgeLabel: 'Espresso 1+1+3 Executive Lounge Suite',
        },
        {
          kicker: 'HIGH-END MINIMALIST SERIES · BESPOKE UPHOLSTERY',
          title: 'Home is the Harbor of the Soul — Soft Comfort in Every Corner.',
          subtitle: 'Simple, breathable comfort designed for peaceful everyday family living.',
          description:
            'Sculpted solid walnut corner supports and breathable textured bouclé with high-density rebound sponge crafted to dissipate the exhaustion of your day.',
          badgeLabel: 'Sculpted Walnut & Bouclé Armchair (Angle)',
        },
        {
          kicker: 'FIVE EXCELLENCE STRATEGY · 5GOOD QUALITY STANDARD',
          title: 'Design It Your Way — Custom Colours, Fabrics & Architectural Precision.',
          subtitle: 'Fresh, natural geometry tailored to the dimensions and palette of your home.',
          description:
            'Tailored proportions and customizable finishes built at our 20,000 m² Sino-Uganda Mbale Industrial Park facility under the 5GOOD Quality Standard.',
          badgeLabel: 'Sculpted Walnut & Bouclé Armchair (Front)',
        },
        {
          kicker: '5GOOD TIANAO · HIGH-END MINIMALIST SERIES',
          title: 'Creating an Ideal Home Environment is the Best Homage to Life.',
          subtitle: 'Refined simplicity without unnecessary complexity — warmth in every detail.',
          description:
            'Adhering to a simple, fashionable, fresh, and natural design philosophy that follows global fashion trends while showcasing a unique cultural charm.',
          badgeLabel: 'Sculpted Walnut & Ivory Bouclé Sofa',
        },
      ],
    },
    featured: {
      kicker: 'CATALOGUE HIGHLIGHTS',
      title: 'Featured Collection',
      bannerKicker: 'OFFICIAL MANUFACTURING PARTNERSHIP',
      bannerTitle: 'Custom Architectural Dimensions & Contract Orders Available',
      bannerDesc:
        'Direct factory manufacturing for residential villas, hotels, executive offices, and luxury commercial projects.',
    },
    categoriesSection: {
      kicker: 'CURATED SECTIONS',
      title: 'Product Categories',
      subtitle:
        'Organized directly from the official TIANAO Furniture 36-page product catalogue, featuring verified dimensions, materials, and residential & commercial suites.',
      modelsUnit: 'Models',
      items: {
        sofas: {
          title: 'Modular, Living & Executive Sofas',
          subtitle: 'Sectionals, 1+1+3 Suites & Leather Lounges',
          desc: 'Sculpted walnut & bouclé sofas, 1+1+3 executive reception suites, sugar cube sectionals, and piano-key leather lounges.',
        },
        recliners: {
          title: 'Power Motion & Home Cinema',
          subtitle: 'Motorized Recliners & Smart Consoles',
          desc: 'Smart motorized recliners with integrated console cup holders, silent actuators, and ergonomic headrest support.',
        },
        beds: {
          title: 'Designer Upholstered Beds',
          subtitle: 'Master Suites & Platform Frames',
          desc: 'Reinforced ribbed platform slat foundations, Italian saddle leather headboards, and zero-pressure memory foam layers.',
        },
        'chairs-tables': {
          title: 'Chairs, Dining & Nightstands',
          subtitle: 'Swivel Armchairs, Sintered Stone & Chests',
          desc: 'Walnut & bouclé lounge armchairs, 360° swivel chairs, sintered stone dining suites, and soft-close nightstands.',
        },
      },
    },
    about: {
      kicker: 'COMPANY PROFILE · 5GOOD TIANAO',
      companyName: 'TIANAO Furniture Manufacturing Co., Ltd.',
      companySubline: 'SINO-UGANDA MBALE INDUSTRIAL PARK · ESTABLISHED JULY 2024',
      plantTitle: 'Sino-Uganda Mbale Production Base',
      plantDate: 'JULY 2024',
      factoryAreaLabel: 'Factory Area',
      showroomAreaLabel: 'Showroom Area',
      staffLabel: 'Staff & Artisans',
      jointVenture: 'Jointly established by Uganda Tiantang Group and Hangzhou Aumere Furniture',
      profileTitle: 'About TIANAO Enterprise',
      profileBadge: 'OFFICIAL PROFILE',
      profileBody:
        'TIANAO Furniture Co., Ltd. is a medium-to-large modern upholstered furniture manufacturing enterprise integrating R&D, design, production, and sales. Established in July 2024 through a partnership between Uganda Tiantang Group and Hangzhou Aumere Furniture, and located in Sino-Uganda Mbale Industrial Park, the facility spans a 20,000 square meter factory and a 1,000 square meter showroom with over 100 employees. Equipped with advanced production machinery and quality raw materials, TIANAO follows a simple, fashionable, fresh, and natural design philosophy guided by the Five Excellence Development Strategy: Good Health, Good Comfort, Good Design, Good Quality, and Good Service.',
      seriesHeading: 'Current Product Series',
      seriesLine: 'Modern Luxury Series · High-End Minimalist Series · High-End Simple Luxury Series',
      pillarsKicker: 'THE 5GOOD PILLARS',
      pillarsTitle: 'The Five Excellence Development Strategy',
      pillarsSub: 'Good Health · Good Comfort · Good Design · Good Quality · Good Service',
      standardBadge: 'TIANAO STANDARD',
      pillars: [
        { title: 'Good Health', tag: '01', desc: 'Non-toxic, eco-conscious raw materials, zero-pressure memory comfort, and natural breathability.' },
        { title: 'Good Comfort', tag: '02', desc: 'High-density rebound sponge and ergonomic contours tailored for restorative living.' },
        { title: 'Good Design', tag: '03', desc: 'Simple, fashionable, fresh, and natural aesthetics embracing global trends with unique cultural charm.' },
        { title: 'Good Quality', tag: '04', desc: 'Advanced production equipment and technology, reinforced platform frames, and precision upholstery.' },
        { title: 'Good Service', tag: '05', desc: 'Customer-first residential, hospitality, and executive project consultation, customization, and delivery.' },
      ],
    },
    lookbook: {
      kicker: 'SPATIAL PHILOSOPHY · 5GOOD',
      title: 'Let Home Become a Warm Harbor, Decorate Every Corner with Love.',
      subtitle: 'Crafted atmospheres for serene living rooms and restful bedrooms.',
      quotePrimary:
        'Whether a ray of warm sunshine in the living room or a night of sweet dreams in the bedroom, we are committed to making your home full of comfort and personality.',
      card1Meta: 'MODEL TA9078 · DEEP LOUNGE SOFA',
      card1Title: 'Grand Executive Comfort',
      card1Quote:
        '"Into our home world, you will find that every piece of furniture has been given life and story — works of art that resonate with you."',
      card1Specs: '388 cm × 122 cm · Obsidian Full-Grain Cowhide',
      card2Meta: 'MODEL TAA2188 · MASTER BEDROOM SUITE',
      card2Title: 'Tufted Wingback Bed',
      card2Quote: '"Grand wingback presence paired with matrix grid quilting and reinforced ribbed slats."',
      card2Specs: '230 × 238 cm · Top-Grain Leather',
      card3Meta: 'MODEL TA9810 · SMART POWER MOTION',
      card3Title: 'Cinema Console Recliner',
      card3Quote: '"Silent motorized power recline with center storage console and cup holders."',
      card3Specs: '222 × 95 cm · Slate Semi-Aniline Leather',
      inspectModel: 'Inspect Model',
    },
    conversion: {
      kicker: '5GOOD TIANAO FURNITURE · INNOVATION · EXCELLENCE · WIN-WIN',
      title: 'The Fashionable Soft Sofa & Bed Collection — Embrace A Beautiful Day.',
      subtitle: 'Your home is the harbor of the soul — crafted with lasting comfort and pride.',
      quote: 'Adhering to a simple, fashionable, fresh, and natural design philosophy that follows global fashion trends.',
      description:
        'Modern Luxury Series, High-End Minimalist Series, and High-End Simple Luxury Series — crafted at Sino-Uganda Mbale Industrial Park and loved worldwide.',
      browseAll: 'Browse All Catalogue Models',
      location: 'Sino-Uganda Mbale Industrial Park',
      delivery: 'East Africa & Worldwide Delivery',
    },
    contact: {
      kicker: 'CONNECT WITH TIANAO',
      title: 'Visit Our Showroom or Inquire Directly.',
      subtitle:
        'Experience our 1,000 m² modern showroom and 20,000 m² manufacturing plant located inside the Sino-Uganda Mbale Industrial Park.',
      companyTitle: 'TIANAO Furniture Manufacturing Co., Ltd.',
      companySub: '5GOOD TIANAO FURNITURE · OFFICIAL SHOWROOM',
      addressLabel: 'Headquarters & Factory Address:',
      addressValue: 'Sino-Uganda Mbale Industrial Park, Mbale, Uganda',
      phonesLabel: 'Mobile Phone Lines:',
      websiteLabel: 'Official Website:',
      scaleLabel: 'Showroom & Factory Scale:',
      scaleValue: '20,000 m² Manufacturing Facility · 1,000 m² Display Showroom',
      hoursTitle: 'Showroom Operating Hours:',
      hoursValue: 'Monday – Saturday: 8:30 AM – 6:00 PM (EAT)',
      hoursNote: 'Private appointments and architectural consultations available upon request.',
      hubKicker: 'REGIONAL STRATEGIC HUB',
      hubTitle: 'Sino-Uganda Mbale Industrial Park',
      hubDesc: 'Serving Uganda, Kenya, Rwanda, Tanzania, and International Markets.',
      formKicker: 'DIRECT INQUIRY FORM',
      formTitle: 'Send a Direct Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'Full Name',
      phoneLabel: 'Phone Number *',
      emailLabel: 'Email Address *',
      subjectLabel: 'Subject / Purpose',
      subjectOptions: [
        'Schedule a Showroom Visit',
        'Residential Living Project',
        'Commercial & Hotel Procurement',
        'Wholesale & Dealership Inquiries',
      ],
      messageLabel: 'Your Message',
      messagePlaceholder:
        'Tell us about the models you are interested in, your timeline, or request a catalogue consultation...',
      successTitle: 'Message Dispatched',
      successDesc:
        'Thank you for reaching out to TIANAO Furniture. Our representative will contact you via phone or email shortly.',
    },
    footer: {
      brandTitle: 'TIANAO FURNITURE',
      brandSub: '5GOOD · TIANAO MANUFACTURING CO., LTD.',
      summary:
        'Medium-to-large modern upholstered furniture enterprise integrating R&D, design, production, and sales. Established in July 2024 through a partnership between Uganda Tiantang Group and Hangzhou Aumere Furniture.',
      strategy: 'Five Excellence Strategy: Good Health · Comfort · Design · Quality · Service',
      navHeading: 'Navigation',
      navHome: 'Home Showroom',
      navCatalogue: 'Complete Catalogue',
      navCategories: 'Product Categories',
      navAbout: 'Factory & Profile',
      navContact: 'Showroom Contact',
      seriesHeading: 'Product Series',
      catalogueIndex: '36-Page Catalogue Index',
      plantHeading: 'Plant & Showroom',
      copyright: 'All rights reserved.',
      locationShort: 'Mbale, Uganda',
      foundersShort: 'Uganda Tiantang Group & Hangzhou Aumere Furniture',
    },
    collection: {
      kickerBrand: '5GOOD TIANAO',
      kickerCatalog: '36-PAGE OFFICIAL CATALOGUE',
      kickerModels: 'VERIFIED MODELS',
      title: 'TIANAO Furniture Collection',
      subtitle:
        'Explore technical specifications, architectural dimensions, materials, and modular designs across the Modern Luxury Series, High-End Minimalist Series, and High-End Simple Luxury Series.',
      searchPlaceholder: 'Search by model (e.g. TA-M04, TA-EX01, TA9106), name, or material...',
      sortBy: 'Sort By:',
      sortModel: 'Model Number (TA-Series)',
      sortPage: 'PDF Catalogue Page Order (1–36)',
      sortName: 'Product Name (A–Z)',
      categoryLabel: 'Category:',
      allProducts: 'All Products',
      catSofas: 'Sofas',
      catRecliners: 'Power Motion',
      catBeds: 'Luxury Beds',
      catChairs: 'Dining & Chairs',
      seriesLabel: 'Series:',
      allSeries: 'All 3 Series',
      materialLabel: 'Material:',
      allMaterials: 'All Materials',
      matLeather: 'Top-Grain Leather',
      matBoucle: 'Textured Bouclé & Fabric',
      matMotorized: 'Motorized Power Motion',
      matStone: 'Sintered Stone Top',
      matWalnut: 'Natural Walnut Wood',
      showingCount: 'verified catalogue items shown',
      clickHint: 'Click any model to inspect dimensions and add to quotation',
      emptyState: 'No models match your current filter criteria.',
    },
    productModal: {
      cataloguePagePrefix: 'CATALOGUE P.',
      dimensions: 'Dimensions',
      frameStructure: 'Frame Structure',
      frameDefault: 'Solid Hardwood & Steel',
      framePlatform: 'Reinforced Platform',
      cataloguePageLabel: 'Catalogue Page',
      pageWord: 'Page',
      modelPrefix: 'Model:',
      finishesLabel: 'Finishes / Colors Shown in Catalogue:',
      specsLabel: 'Specifications & Highlights:',
      materialsLabel: 'Materials:',
      directQuoteNote: 'Direct Factory Manufacturer Quote',
      parkLocation: 'Sino-Uganda Industrial Park',
      relatedHeading: 'Related from this category',
      detailView: 'Detail View',
      overview: 'Overview',
      blueprint: 'Blueprint',
      photo: 'Photo',
      pdfPageShort: 'PDF P.',
      heightShort: 'H',
    },
    quoteDrawer: {
      kicker: 'OFFICIAL QUOTATION INQUIRY',
      title: 'Request a Quotation',
      selectedItems: 'Selected Items',
      clearList: 'Clear List',
      emptyTitle: 'No furniture models added yet.',
      emptyHint:
        'Browse our collection and select "Add to Quotation Request" on any sofa, bed, recliner, or chair.',
      customerHeading: 'Customer & Quotation Details',
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. David Mukasa',
      phoneLabel: 'Phone Number *',
      emailLabel: 'Email Address *',
      locationLabel: 'Delivery Location / City',
      locationPlaceholder: 'e.g. Kampala, Mbale, Nairobi',
      companyLabel: 'Company / Organization (Optional)',
      companyPlaceholder: 'Residential / Hotel / Developer',
      projectTypeLabel: 'Project Type',
      projectTypes: [
        { value: 'Residential', label: 'Private Home / Residence' },
        { value: 'Hospitality', label: 'Hotel / Lodge / Resort' },
        { value: 'Commercial', label: 'Commercial / Corporate Office' },
        { value: 'Wholesale', label: 'Wholesale & Showroom Distribution' },
      ],
      notesLabel: 'Specific Requirements or Questions',
      notesPlaceholder:
        'Specify custom leather finish preferences, room dimensions, quantity timelines, or showroom visit requests...',
      successTitle: 'Quotation Request Received',
      successBodyPrefix: 'Thank you,',
      successBodySuffix:
        'Our sales engineering team at TIANAO Furniture Sino-Uganda Mbale Industrial Park will prepare an official specification sheet and quotation within 24 hours.',
      refSummaryTitle: 'Inquiry Reference Summary:',
      refContact: 'Contact:',
      refLocation: 'Location:',
      refItems: 'Items Requested:',
      unitsWord: 'units',
      footerScale: '20,000 m² Factory · 1,000 m² Showroom',
    },
    catalogueModal: {
      title: 'TIANAO Furniture Official Catalogue',
      subtitle: '36 Pages · Sino-Uganda Mbale Industrial Park',
      pageWord: 'PAGE',
      ofWord: 'OF',
      productsOnPage: 'Products featured on this page:',
      editorialSpreadTitle: 'Catalogue editorial spread for the TIANAO Furniture Collection.',
      editorialSpreadHint: 'Navigate to adjacent pages to view specific furniture model specifications.',
      jumpToPage: 'Jump to Page:',
      watermark: 'TIANAO FURNITURE · SINO-UGANDA MBALE',
      companyFull: 'TIANAO FURNITURE MANUFACTURING CO., LTD',
      addressLine: 'Address: Sino-Uganda Mbale Industrial Park, Mbale, Uganda',
      phoneLine: 'Mobile Phone: +256 744 477 777 · +256 744 377 777',
      webLine: 'Official Web: https://tianaofurniture.co.ug',
      profileTitle: 'Company Profile',
      fiveGoodTitle: 'Five Excellence Development Strategy (5GOOD):',
      sections: {
        coverTitle: 'Cover & Company Contact Information',
        coverSection: 'Identity',
        profileTitle: 'Company Profile & 5Good Excellence Strategy',
        profileSection: 'Overview',
        sofasTitle: 'Modern Luxury & Minimalist Modular Sofas',
        sofasSection: 'Sofas',
        reclinersTitle: 'Power Motion, Recliners & Home Theater Lounges',
        reclinersSection: 'Power Motion',
        chairsTitle: 'Accent Chairs, Swivel Armchairs & Designer Nightstands',
        chairsSection: 'Chairs & Nightstands',
        bedsTitle: 'Luxury Soft Beds & Master Bedroom Suites',
        bedsSection: 'Beds',
      },
    },
  },

  zh: {
    langName: 'Chinese',
    langNativeLabel: '中文',
    languageSelectorLabel: '语言',
    brandTitle: 'TIANAO 天奥家具',
    brandSubtitle: '5GOOD · 五好现代软体家居',
    topBarLocation: '中乌姆巴莱工业园 · Sino-Uganda Mbale Industrial Park',
    officialCatalogueBtn: '官方 36 页电子画册',
    nav: {
      home: '首页展厅',
      collection: '产品系列',
      categories: '产品分类',
      about: '企业简介',
      contact: '联系我们',
    },
    cta: {
      requestQuote: '获取定制报价',
      requestQuotationCount: '提交报价清单',
      browsePdfCatalogue: '浏览 36 页电子画册',
      exploreCollection: '探索全部产品',
      browseCompleteCatalogue: '浏览完整画册产品',
      viewAllProducts: '查看全部产品',
      inspectModel: '查看型号',
      details: '查看详情',
      quote: '加入报价',
      inQuote: '已选报价',
      addToQuoteRequest: '加入官方报价清单',
      addedToQuoteList: '已加入报价清单',
      submitQuoteRequest: '提交正式报价请求',
      submittingQuoteRequest: '正在提交报价请求...',
      sendDirectMessage: '发送咨询留言',
      downloadPdf: '下载 PDF 画册',
      resetFilters: '重置筛选',
      clear: '清除',
      previousPage: '上一页',
      nextPage: '下一页',
      viewFullSpecs: '查看完整规格参数',
      callShowroomDirect: '致电展厅专线 (+256 744 477 777)',
      returnToCatalogue: '返回产品目录',
      sendAnotherNote: '继续发送留言',
      scrollToTop: '返回顶部',
    },
    hero: {
      autoOn: '自动轮播 · 开启',
      autoPaused: '自动轮播 · 已暂停',
      prevSlideAria: '上一张展品',
      nextSlideAria: '下一张展品',
      metrics: {
        factoryLabel: '现代化厂房面积',
        showroomLabel: '大型实景展厅面积',
        staffLabel: '专业员工与工艺师',
        fiveGoodTitle: '5好战略',
        fiveGoodLabel: '好健康 · 好舒适 · 好设计 · 好品质 · 好服务',
      },
      marquee: '随心定制您的理想家居！自由选择色彩与面料，天奥匠心为您呈现卓越品质。',
      slides: [
        {
          kicker: '现代豪华系列 · 家居客厅与高端商务会客',
          title: '锐意探索现代软体家居工艺巅峰。',
          subtitle: '尊享家居客厅与现代商务会客空间，支持色彩与面料定制。',
          description:
            '完整 1+1+3 头层真皮沙发组合，沉稳大气的建筑比例与舒适腰枕设计，满足高端宅邸与行政会客双重需求。',
          badgeLabel: '尊享商务会客真皮沙发组合 (1+1+3)',
        },
        {
          kicker: '高端极简系列 · 实木羊羔绒定制工艺',
          title: '让家成为温馨的港湾，用爱装点每一个角落。',
          subtitle: '简洁流畅、清新自然的居家休闲单椅，卸下一天疲惫。',
          description:
            '精雕实木胡桃木角柱支撑搭配透气肌理羊羔绒与高密度高回弹海绵，为阅读与居家时光带来柔和包覆感。',
          badgeLabel: '胡桃木角柱羊羔绒单人椅（侧面）',
        },
        {
          kicker: '五好发展战略 · 5GOOD 品质标准',
          title: '随心定制 — 自由选色选材与精密比例匠造。',
          subtitle: '坚持简约时尚、清新自然的设计风格，紧跟世界时尚潮流。',
          description:
            '立足中乌姆巴莱工业园 20,000 平方米现代化生产基地，严格执行好健康、好舒适、好设计、好品质、好服务标准。',
          badgeLabel: '胡桃木角柱羊羔绒单人椅（正面）',
        },
        {
          kicker: '5GOOD 天奥家具 · 高端极简系列',
          title: '打造理想的家居环境，是对生活最好的致敬。',
          subtitle: '无需奢华繁复，以简约质感与自然气韵经营温馨之家。',
          description:
            '紧跟世界家居设计潮流，结合优质原材料与精湛软体工艺，呈现与众不同的生活美感。',
          badgeLabel: '胡桃木极简羊羔绒三人位沙发',
        },
      ],
    },
    featured: {
      kicker: '画册精选系列',
      title: '精选推荐产品',
      bannerKicker: '源头工厂直供合作',
      bannerTitle: '支持工程定制尺寸与大宗项目采购',
      bannerDesc: '面向住宅别墅、精品酒店、行政办公及商业空间提供厂家直供制造服务。',
    },
    categoriesSection: {
      kicker: '画册分类浏览',
      title: '核心产品系列',
      subtitle: '直接整理自天奥家具官方 36 页产品画册，提供精准尺寸、材质说明及住宅与商务全套方案。',
      modelsUnit: '款产品',
      items: {
        sofas: {
          title: '客厅、模块化与商务沙发',
          subtitle: '现代豪华 · 高端极简 · 1+1+3 套装',
          desc: '包含胡桃木羊羔绒沙发、商务会客真皮组合、方糖模块沙发与钢琴键系列。',
        },
        recliners: {
          title: '电动功能与影院沙发',
          subtitle: '智能电动伸缩 · 家庭影院座舱',
          desc: '静音电动伸缩调节系统，内置储物扶手与杯托，兼具人体工学头枕支撑。',
        },
        beds: {
          title: '软体大床与卧室空间',
          subtitle: '加强型排骨架 · 意式真皮软包床',
          desc: '配备加强型实木排骨架、马鞍皮靠包与零压记忆棉舒睡层。',
        },
        'chairs-tables': {
          title: '休闲单椅、餐桌椅与床头柜',
          subtitle: '360° 旋转椅 · 岩板餐桌 · 轻奢床头柜',
          desc: '精选旋转单椅、高背休闲椅、意式岩板餐桌套装与静音导轨床头柜。',
        },
      },
    },
    about: {
      kicker: '企业简介 · 5GOOD 天奥家具',
      companyName: '天奥家具制造有限公司',
      companySubline: '中乌姆巴莱工业园生产基地 · 2024 年 7 月成立',
      plantTitle: '中乌姆巴莱工业园生产基地',
      plantDate: '2024年7月',
      factoryAreaLabel: '厂房面积',
      showroomAreaLabel: '展厅面积',
      staffLabel: '员工人数',
      jointVenture: '乌干达天唐集团 · 中国杭州奥默家具 合资成立',
      profileTitle: '关于天奥企业 · 企业简介',
      profileBadge: '企业画册第 01–02 页',
      profileBody:
        '天奥家具制造有限公司是一家集研发、设计、生产、销售为一体的大中型现代软体家具制造企业。公司于2024年7月由乌干达天唐集团和中国杭州奥默家具合作并成立，坐落于乌干达中乌姆巴莱工业园区，目前厂房占地面积20000平方米，展厅面积1000平方米，员工100余人。公司拥有先进的生产设备和工艺技术，采用优质的原材料，生产高品质的产品，居同行业领先。产品风格多样，坚持简约时尚、清新自然的设计风格，紧跟世界时尚潮流，并始终践行“好健康、好舒适、好设计、好品质、好服务”的5好发展战略，秉承“创新、卓越、共赢”的企业精神，致力成为全球领先的家具品牌。',
      seriesHeading: '公司现有产品系列',
      seriesLine: '现代豪华系列 · 高端极简系列 · 高端简奢系列',
      pillarsKicker: 'THE 5GOOD PILLARS · 5好发展战略',
      pillarsTitle: '五好发展战略',
      pillarsSub: '好健康 · 好舒适 · 好设计 · 好品质 · 好服务',
      standardBadge: '天奥制造标准',
      pillars: [
        { title: '好健康', tag: '01', desc: '甄选环保健康原材料，零压舒缓结构，打造清新透气的居家环境。' },
        { title: '好舒适', tag: '02', desc: '高密度回弹海绵与人体工学承托曲线，令每一次落座与安睡倍感放松。' },
        { title: '好设计', tag: '03', desc: '坚持简约时尚、清新自然的美学理念，紧跟全球家居潮流。' },
        { title: '好品质', tag: '04', desc: '先进生产设备与精细工艺，加强型结构架体，经久耐用。' },
        { title: '好服务', tag: '05', desc: '面向住宅、酒店与商务客户提供全程选型定制与物流交付支持。' },
      ],
    },
    lookbook: {
      kicker: '空间意境 · 5GOOD',
      title: '让家成为温馨的港湾，用爱装点每一个角落。',
      subtitle: '营造充满舒适感与个性化格调的理想生活空间。',
      quotePrimary: '无论是客厅的一抹暖阳，还是卧房的一夜好梦，我们致力于让您的家充满舒适与个性化的气息。',
      card1Meta: '型号 TA9078 · 大黑牛客厅沙发',
      card1Title: '尊享宽适客厅格局',
      card1Quote: '“走进我们的家居世界，您会发现每一件家具都被赋予了生命与故事。”',
      card1Specs: '388 cm × 122 cm · 头层全粒面牛皮',
      card2Meta: '型号 TAA2188 · 主卧尊享大床',
      card2Title: '拉点翼背真皮大床',
      card2Quote: '“大气翼背靠包搭配立体格纹拉点与加强型实木排骨架。”',
      card2Specs: '230 × 238 cm · 头层真皮',
      card3Meta: '型号 TA9810 · 智能电动系列',
      card3Title: '影院级中控功能沙发',
      card3Quote: '“静音电动伸展调节搭配中控储物扶手及双杯架设计。”',
      card3Specs: '222 × 95 cm · 岩石灰半苯胺真皮',
      inspectModel: '查看型号',
    },
    conversion: {
      kicker: '5GOOD 天奥家具 · 创新 · 卓越 · 共赢',
      title: '时尚软体沙发与舒眠大床系列 — 拥抱美好每一天。',
      subtitle: '家，是心灵的港湾 · 锐意探索行业巅峰 · 用心经营美好生活',
      quote: '坚持简约时尚，清新自然的设计风格，紧跟世界时尚潮流，呈现出与众不同的文化气质。',
      description: '现代豪华系列、高端极简系列与高端简奢系列 — 中乌姆巴莱工业园匠心制造，深受海内外客户信赖。',
      browseAll: '浏览全部画册型号',
      location: '中乌姆巴莱工业园',
      delivery: '支持东非及全球交付',
    },
    contact: {
      kicker: '联系天奥家具',
      title: '预约莅临展厅或直接咨询报价',
      subtitle: '欢迎参观位于乌干达中乌姆巴莱工业园区的 1,000 平方米大型展厅及 20,000 平方米生产基地。',
      companyTitle: '天奥家具制造有限公司',
      companySub: 'TIANAO FURNITURE · 5GOOD 官方直营展厅',
      addressLabel: '总部及工厂地址：',
      addressValue: '乌干达中乌姆巴莱工业园区 (Sino-Uganda Mbale Industrial Park)',
      phonesLabel: '咨询热线：',
      websiteLabel: '官方网站：',
      scaleLabel: '工厂与展厅规模：',
      scaleValue: '20,000 平方米生产厂房 · 1,000 平方米现代展厅',
      hoursTitle: '展厅开放时间：',
      hoursValue: '周一至周六：上午 8:30 – 下午 6:00 (东非时间)',
      hoursNote: '可提前预约专场参观及工程方案洽谈。',
      hubKicker: '东非区域制造中心',
      hubTitle: '中乌姆巴莱工业园',
      hubDesc: '服务乌干达、肯尼亚、卢旺达、坦桑尼亚及国际市场。',
      formKicker: '在线咨询表单',
      formTitle: '发送直接留言',
      nameLabel: '您的姓名 *',
      namePlaceholder: '请输入姓名',
      phoneLabel: '联系电话 *',
      emailLabel: '电子邮箱 *',
      subjectLabel: '咨询事项',
      subjectOptions: ['预约参观展厅', '住宅软体定制咨询', '酒店及商业工程采购', '经销代理与批发合作'],
      messageLabel: '留言内容',
      messagePlaceholder: '请填写您感兴趣的产品型号、数量或定制需求...',
      successTitle: '留言已成功发送',
      successDesc: '感谢联系天奥家具，我们的客户经理将尽快通过电话或邮件与您联系。',
    },
    footer: {
      brandTitle: 'TIANAO 天奥家具',
      brandSub: '天奥家具制造有限公司 · 5GOOD',
      summary: '集研发、设计、生产、销售为一体的大中型现代软体家具制造企业，由乌干达天唐集团与中国杭州奥默家具合资成立。',
      strategy: '五好战略：好健康 · 好舒适 · 好设计 · 好品质 · 好服务',
      navHeading: '网站导航',
      navHome: '首页展厅',
      navCatalogue: '全部产品目录',
      navCategories: '产品分类',
      navAbout: '工厂与简介',
      navContact: '联系与地址',
      seriesHeading: '产品系列',
      catalogueIndex: '36 页电子画册索引',
      plantHeading: '工厂与展厅',
      copyright: '版权所有。',
      locationShort: '乌干达 · 姆巴莱',
      foundersShort: '乌干达天唐集团 & 中国杭州奥默家具',
    },
    collection: {
      kickerBrand: '5GOOD 天奥家具',
      kickerCatalog: '36 页官方产品画册',
      kickerModels: '款实测型号',
      title: '天奥家具全部产品系列',
      subtitle: '浏览现代豪华系列、高端极简系列与高端简奢系列的完整尺寸规格、材质工艺与模块化组合详情。',
      searchPlaceholder: '搜索型号（如 TA-M04、TA-EX01、TA9106）、名称或材质...',
      sortBy: '排序方式：',
      sortModel: '按型号排序',
      sortPage: '按画册页码排序 (1–36)',
      sortName: '按产品名称排序',
      categoryLabel: '分类：',
      allProducts: '全部产品',
      catSofas: '沙发系列',
      catRecliners: '电动功能系列',
      catBeds: '奢华软床',
      catChairs: '单椅餐桌与床头柜',
      seriesLabel: '风格系列：',
      allSeries: '全部三大系列',
      materialLabel: '主要材质：',
      allMaterials: '全部材质',
      matLeather: '头层真皮',
      matBoucle: '羊羔绒与肌理面料',
      matMotorized: '智能电动伸缩',
      matStone: '意式岩板台面',
      matWalnut: '天然胡桃木',
      showingCount: '件认证画册产品',
      clickHint: '点击任意型号查看尺寸蓝图并加入报价清单',
      emptyState: '没有符合当前筛选条件的产品型号。',
    },
    productModal: {
      cataloguePagePrefix: '画册第 ',
      dimensions: '规格尺寸',
      frameStructure: '内架结构',
      frameDefault: '实木与钢架复合结构',
      framePlatform: '加强型排骨架结构',
      cataloguePageLabel: '画册页码',
      pageWord: '页',
      modelPrefix: '产品型号：',
      finishesLabel: '画册可选饰面 / 配色：',
      specsLabel: '核心规格与工艺亮点：',
      materialsLabel: '主要材质：',
      directQuoteNote: '源头工厂直供官方报价',
      parkLocation: '中乌姆巴莱工业园',
      relatedHeading: '同分类推荐型号',
      detailView: '细节视角',
      overview: '整体视角',
      blueprint: '尺寸蓝图',
      photo: '实景图片',
      pdfPageShort: '画册 P.',
      heightShort: '高',
    },
    quoteDrawer: {
      kicker: '官方工程与零售报价单',
      title: '提交产品报价请求',
      selectedItems: '已选产品型号',
      clearList: '清空清单',
      emptyTitle: '尚未添加产品型号。',
      emptyHint: '在产品目录中浏览任意沙发、软床、功能椅或餐桌，点击“加入报价清单”即可添加到此处。',
      customerHeading: '客户与项目联系信息',
      fullNameLabel: '联系人姓名 *',
      fullNamePlaceholder: '请输入您的全名',
      phoneLabel: '联系电话 *',
      emailLabel: '电子邮箱 *',
      locationLabel: '交付城市 / 国家',
      locationPlaceholder: '例如：坎帕拉、姆巴莱、内罗毕',
      companyLabel: '公司 / 机构名称（选填）',
      companyPlaceholder: '住宅业主 / 酒店 / 地产开发商',
      projectTypeLabel: '项目类型',
      projectTypes: [
        { value: 'Residential', label: '私人住宅 / 别墅家居' },
        { value: 'Hospitality', label: '星级酒店 / 度假村' },
        { value: 'Commercial', label: '商业空间 / 行政办公' },
        { value: 'Wholesale', label: '经销批发 / 展厅合作' },
      ],
      notesLabel: '定制规格或补充说明',
      notesPlaceholder: '请说明偏好的真皮或面料颜色、定制尺寸、交期或预约参观需求...',
      successTitle: '已收到您的报价请求',
      successBodyPrefix: '感谢您，',
      successBodySuffix: '我们位于中乌姆巴莱工业园的销售工程团队将在 24 小时内为您准备官方规格表及详细报价。',
      refSummaryTitle: '询价单摘要：',
      refContact: '联系方式：',
      refLocation: '交付地点：',
      refItems: '已选数量：',
      unitsWord: '件',
      footerScale: '20,000 平方米工厂 · 1,000 平方米展厅',
    },
    catalogueModal: {
      title: '天奥家具官方 36 页电子画册',
      subtitle: '36 页完整目录 · 中乌姆巴莱工业园',
      pageWord: '第',
      ofWord: '页 / 共',
      productsOnPage: '本页收录产品：',
      editorialSpreadTitle: '天奥家具官方画册形象跨页展示。',
      editorialSpreadHint: '请翻至相邻页面查看具体产品型号与尺寸规格。',
      jumpToPage: '快速跳页：',
      watermark: '天奥家具 · 中乌姆巴莱工业园',
      companyFull: '天奥家具制造有限公司',
      addressLine: '地址：乌干达中乌姆巴莱工业园区',
      phoneLine: '联系电话：+256 744 477 777 · +256 744 377 777',
      webLine: '官网：https://tianaofurniture.co.ug',
      profileTitle: '企业简介',
      fiveGoodTitle: '五好发展战略 (5GOOD)：',
      sections: {
        coverTitle: '封面与企业联系方式',
        coverSection: '品牌形象',
        profileTitle: '企业简介与五好发展战略',
        profileSection: '企业概览',
        sofasTitle: '现代豪华与高端极简沙发系列',
        sofasSection: '沙发系列',
        reclinersTitle: '智能电动与影院级功能沙发',
        reclinersSection: '功能沙发',
        chairsTitle: '休闲单椅、旋转沙发椅与床头柜',
        chairsSection: '单椅与床头柜',
        bedsTitle: '奢华软床与主卧空间系列',
        bedsSection: '软床系列',
      },
    },
  },

  ar: {
    langName: 'Arabic',
    langNativeLabel: 'العربية',
    languageSelectorLabel: 'اللغة',
    brandTitle: 'تيانآو للأثاث',
    brandSubtitle: '5GOOD · صالة العرض الرسمية',
    topBarLocation: 'المنطقة الصناعية الصينية الأوغندية في مبالي، أوغندا',
    officialCatalogueBtn: 'الكتالوج الرسمي (36 صفحة)',
    nav: {
      home: 'الرئيسية',
      collection: 'المجموعة الكاملة',
      categories: 'الفئات',
      about: 'عن المصنع',
      contact: 'تواصل معنا',
    },
    cta: {
      requestQuote: 'اطلب عرض سعر',
      requestQuotationCount: 'قائمة عرض السعر',
      browsePdfCatalogue: 'تصفح الكتالوج (36 صفحة)',
      exploreCollection: 'استكشف المجموعة',
      browseCompleteCatalogue: 'تصفح الكتالوج الكامل',
      viewAllProducts: 'عرض جميع المنتجات',
      inspectModel: 'معاينة',
      details: 'التفاصيل',
      quote: 'عرض سعر',
      inQuote: 'في القائمة',
      addToQuoteRequest: 'أضف إلى طلب التسعير',
      addedToQuoteList: 'تمت الإضافة للقائمة',
      submitQuoteRequest: 'إرسال طلب عرض السعر الرسمي',
      submittingQuoteRequest: 'جارٍ إرسال الطلب...',
      sendDirectMessage: 'إرسال رسالة مباشرة',
      downloadPdf: 'تحميل الكتالوج PDF',
      resetFilters: 'إعادة تعيين الفلاتر',
      clear: 'مسح',
      previousPage: 'الصفحة السابقة',
      nextPage: 'الصفحة التالية',
      viewFullSpecs: 'عرض المواصفات الكاملة',
      callShowroomDirect: 'اتصل بصالة العرض مباشرة (+256 744 477 777)',
      returnToCatalogue: 'العودة إلى الكتالوج',
      sendAnotherNote: 'إرسال رسالة أخرى',
      scrollToTop: 'العودة إلى الأعلى',
    },
    hero: {
      autoOn: 'التبديل التلقائي · يعمل',
      autoPaused: 'التبديل التلقائي · متوقف',
      prevSlideAria: 'الشريحة السابقة',
      nextSlideAria: 'الشريحة التالية',
      metrics: {
        factoryLabel: 'مساحة المصنع الإنتاجي',
        showroomLabel: 'مساحة صالة العرض الرئيسية',
        staffLabel: 'كادر من الحرفيين والمهندسين',
        fiveGoodTitle: '5GOOD',
        fiveGoodLabel: 'صحة جيدة · راحة · تصميم · جودة · خدمة',
      },
      marquee:
        'صمّم أثاثك على طريقتك! اختر الألوان والأقمشة التي تفضلها، ونحن نصنع ونسلّم حلمك بأعلى معايير الجودة.',
      slides: [
        {
          kicker: 'سلسلة الفخامة الحديثة · أطقم المنازل والمكاتب التنفيذية',
          title: 'ريادة وإتقان في قمة صناعة الأثاث المنجّد الحديث.',
          subtitle: 'أطقم صالون واستقبال تنفيذية فاخرة مخصصة بالألوان والجلود التي تختارها.',
          description:
            'طقم جلدي متكامل 1+1+3 من الجلد الطبيعي الفاخر، مصمم بأبعاد معمارية رحبة للمجالس العائلية ومكاتب القيادة.',
          badgeLabel: 'طقم أريكة تنفيذية جلد إسبريسو 1+1+3',
        },
        {
          kicker: 'سلسلة البساطة الراقية · تنجيد مخصص',
          title: 'المنزل هو ملاذ الروح — راحة ناعمة في كل زاوية.',
          subtitle: 'تفاصيل هادئة تجمع بين خشب الجوز المنحوت وقماش البوكليه المسامي.',
          description:
            'دعامات زاوية منحوتة من خشب الجوز الصلب مع قماش بوكليه عاجي عالي التنفس وإسفنج عالي الارتداد لراحة يومية فائقة.',
          badgeLabel: 'كرسي خشب الجوز وبوكليه عاجي (منظر جانبي)',
        },
        {
          kicker: 'استراتيجية الامتياز الخماسية · معيار 5GOOD',
          title: 'صمّم على ذوقك — ألوان وأقمشة مخصصة ودقة معمارية.',
          subtitle: 'نسب مدروسة وتشطيبات متقنة تُصنع في مصنعنا بمبالي.',
          description:
            'تصميمات مرنة بأبعاد دقيقة وتنجيد حسب الطلب من مصنع تيانآو الممتد على مساحة 20,000 متر مربع.',
          badgeLabel: 'كرسي خشب الجوز وبوكليه عاجي (منظر أمامي)',
        },
        {
          kicker: '5GOOD تيانآو · سلسلة البساطة الراقية',
          title: 'تهيئة بيئة منزلية مثالية هو أرقى تكريم للحياة.',
          subtitle: 'بساطة أنيقة دون تكلف — دفء وجودة تدوم لسنوات طويلة.',
          description:
            'نلتزم بفلسفة تصميم بسيطة وأنيقة ومنعشة وطبيعية تواكب أحدث التوجهات العالمية وتمنح منزلك طابعاً مميزاً.',
          badgeLabel: 'أريكة خشب الجوز وبوكليه عاجي 3 مقاعد',
        },
      ],
    },
    featured: {
      kicker: 'مختارات الكتالوج الرسمي',
      title: 'المجموعة المختارة',
      bannerKicker: 'شراكة تصنيع مباشرة من المصنع',
      bannerTitle: 'أبعاد معمارية مخصصة وطلبات مشاريع متكاملة',
      bannerDesc: 'تصنيع مباشر من المصنع للفلل السكنية، الفنادق، المكاتب التنفيذية، والمشاريع التجارية الكبرى.',
    },
    categoriesSection: {
      kicker: 'الأقسام المعتمدة',
      title: 'فئات المنتجات',
      subtitle: 'منظمة مباشرة من الكتالوج الرسمي لشركة تيانآو المكون من 36 صفحة بمواصفات وأبعاد موثقة.',
      modelsUnit: 'موديل',
      items: {
        sofas: {
          title: 'الأرائك المعيارية والمنزلية والتنفيذية',
          subtitle: 'أطقم زاوية و1+1+3 وأرائك جلدية',
          desc: 'أرائك خشب الجوز والبوكليه، وأطقم الاستقبال التنفيذية 1+1+3، والأرائك المعيارية الفاخرة.',
        },
        recliners: {
          title: 'أرائك الاسترخاء الكهربائية والسينما المنزلية',
          subtitle: 'حركة كهربائية صامتة ووحدات تحكم ذكية',
          desc: 'مقاعد كهربائية ذكية مع كونسول تخزين وحاملات أكواب ومحركات هادئة ومساند رأس مريحة.',
        },
        beds: {
          title: 'الأسرّة المنجّدة المصممة',
          subtitle: 'أجنحة النوم الرئيسية والهياكل المقواة',
          desc: 'أسرّة بهياكل شرائح خشبية مقواة وجلد السرج الإيطالي وطبقات إسفنج الذاكرة عديم الضغط.',
        },
        'chairs-tables': {
          title: 'الكراسي، طاولات الطعام، وطاولات السرير',
          subtitle: 'كراسي دوّارة وطاولات حجر ملبد',
          desc: 'كراسي استرخاء من خشب الجوز، كراسي دوّارة 360 درجة، وأطقم طعام من الحجر الملبد.',
        },
      },
    },
    about: {
      kicker: 'ملف الشركة · 5GOOD تيانآو',
      companyName: 'شركة تيانآو لصناعة الأثاث المحدودة',
      companySubline: 'المنطقة الصناعية الصينية الأوغندية في مبالي · تأسست في يوليو 2024',
      plantTitle: 'القاعدة الإنتاجية في مبالي، أوغندا',
      plantDate: 'يوليو 2024',
      factoryAreaLabel: 'مساحة المصنع',
      showroomAreaLabel: 'صالة العرض',
      staffLabel: 'فريق العمل',
      jointVenture: 'شراكة بين مجموعة تيان تانغ الأوغندية وشركة هانغتشو أومير للأثاث',
      profileTitle: 'نبذة عن مؤسسة تيانآو للأثاث',
      profileBadge: 'الملف الرسمي',
      profileBody:
        'تعد شركة تيانآو لصناعة الأثاث المحدودة مؤسسة صناعية متكاملة متخصصة في البحث والتطوير والتصميم والإنتاج والمبيعات للأثاث المنجّد الحديث. تأسست الشركة في يوليو 2024 بشراكة بين مجموعة تيان تانغ الأوغندية وشركة هانغتشو أومير، وتقع في المنطقة الصناعية الصينية الأوغندية في مبالي على مساحة مصنع تبلغ 20,000 متر مربع وصالة عرض بمساحة 1,000 متر مربع مع أكثر من 100 موظف وحرفي. وتلتزم الشركة باستراتيجية الامتياز الخماسية: صحة جيدة، راحة جيدة، تصميم جيد، جودة جيدة، وخدمة جيدة.',
      seriesHeading: 'خطوط الإنتاج المعتمدة',
      seriesLine: 'سلسلة الفخامة الحديثة · سلسلة البساطة الراقية · سلسلة الفخامة البسيطة الراقية',
      pillarsKicker: 'ركائز 5GOOD الخمس',
      pillarsTitle: 'استراتيجية التطوير الخماسية للتميز',
      pillarsSub: 'صحة جيدة · راحة جيدة · تصميم جيد · جودة جيدة · خدمة جيدة',
      standardBadge: 'معيار تيانآو',
      pillars: [
        { title: 'صحة جيدة', tag: '01', desc: 'مواد خام آمنة وصديقة للبيئة وتهوية طبيعية مع راحة إسفنج الذاكرة.' },
        { title: 'راحة جيدة', tag: '02', desc: 'إسفنج عالي الكثافة وتصاميم مريحة تمنح الجسم دعماً متوازناً.' },
        { title: 'تصميم جيد', tag: '03', desc: 'خطوط عصرية بسيطة ومنعشة تجمع بين الذوق العالمي والأناقة الدافئة.' },
        { title: 'جودة جيدة', tag: '04', desc: 'معدات تصنيع متقدمة وهياكل مقواة وتنجيد دقيق يدوم لسنوات.' },
        { title: 'خدمة جيدة', tag: '05', desc: 'استشارات تصميم وتنفيذ وتخصيص للمنازل والفنادق والمكاتب مع التوصيل.' },
      ],
    },
    lookbook: {
      kicker: 'فلسفة المساحات · 5GOOD',
      title: 'اجعل المنزل ملاذاً دافئاً، وزيّن كل ركن فيه بالمحبة.',
      subtitle: 'مساحات معيشة ونوم تجمع بين الدفء والشخصية الراقية.',
      quotePrimary:
        'سواء كان ضوء شمس دافئ في غرفة المعيشة أو ليلة نوم هانئة في غرفة النوم، نلتزم بجعل منزلك مفعماً بالراحة والجمال.',
      card1Meta: 'موديل TA9078 · أريكة الصالة الكبرى',
      card1Title: 'راحة تنفيذية رحبة',
      card1Quote: '"في عالمنا المنزلي، تمنح كل قطعة أثاث حياة وقصة تتناغم مع ذوقك الرفيع."',
      card1Specs: '388 سم × 122 سم · جلد طبيعي كامل أسود',
      card2Meta: 'موديل TAA2188 · جناح النوم الرئيسي',
      card2Title: 'سرير مجنّح مطرّز فاخر',
      card2Quote: '"حضور مهيب بظهر مجنّح وتطريز شبكي وهيكل شرائح خشبية مقوّى."',
      card2Specs: '230 × 238 سم · جلد طبيعي طبقة أولى',
      card3Meta: 'موديل TA9810 · حركة كهربائية ذكية',
      card3Title: 'أريكة استرخاء سينمائية بكونسول',
      card3Quote: '"آلية إمالة كهربائية صامتة مع وحدة تخزين وسطية وحاملات أكواب."',
      card3Specs: '222 × 95 سم · جلد أردوازي شبه أنيلين',
      inspectModel: 'معاينة الموديل',
    },
    conversion: {
      kicker: '5GOOD تيانآو للأثاث · ابتكار · تميّز · شراكة ناجحة',
      title: 'مجموعة الأرائك والأسرّة الناعمة العصرية — استقبل يوماً جميلاً كل صباح.',
      subtitle: 'منزلك هو ملاذك الآمن — مصنوع بعناية ليدوم أجيالاً.',
      quote: 'نلتزم بأسلوب تصميم بسيط وأنيق ومنعش وطبيعي يواكب أحدث صيحات الأثاث العالمية.',
      description: 'ثلاث سلاسل متميزة من مصنعنا في المنطقة الصناعية بمبالي لتلبية تطلعات العملاء في شرق أفريقيا والعالم.',
      browseAll: 'تصفح جميع موديلات الكتالوج',
      location: 'المنطقة الصناعية الصينية الأوغندية في مبالي',
      delivery: 'التوصيل داخل شرق أفريقيا والعالم',
    },
    contact: {
      kicker: 'تواصل مع تيانآو',
      title: 'قم بزيارة صالة العرض أو تواصل معنا مباشرة.',
      subtitle: 'اكتشف صالة العرض الحديثة بمساحة 1,000 متر مربع ومصنعنا الممتد على 20,000 متر مربع في مبالي، أوغندا.',
      companyTitle: 'شركة تيانآو لصناعة الأثاث المحدودة',
      companySub: '5GOOD تيانآو للأثاث · صالة العرض الرسمية',
      addressLabel: 'عنوان المقر الرئيسي والمصنع:',
      addressValue: 'المنطقة الصناعية الصينية الأوغندية في مبالي، أوغندا',
      phonesLabel: 'أرقام الهاتف المباشرة:',
      websiteLabel: 'الموقع الإلكتروني الرسمي:',
      scaleLabel: 'مساحة المصنع وصالة العرض:',
      scaleValue: 'مصنع بمساحة 20,000 متر مربع · صالة عرض 1,000 متر مربع',
      hoursTitle: 'ساعات عمل صالة العرض:',
      hoursValue: 'الإثنين – السبت: 8:30 صباحاً – 6:00 مساءً (بتوقيت شرق أفريقيا)',
      hoursNote: 'تتوفر مواعيد خاصة واستشارات هندسية عند الطلب.',
      hubKicker: 'المركز الصناعي الإقليمي',
      hubTitle: 'المنطقة الصناعية الصينية الأوغندية في مبالي',
      hubDesc: 'نخدم أوغندا وكينيا ورواندا وتنزانيا والأسواق الدولية.',
      formKicker: 'نموذج الاستفسار المباشر',
      formTitle: 'أرسل رسالة مباشرة',
      nameLabel: 'الاسم الكامل *',
      namePlaceholder: 'اكتب اسمك الكامل',
      phoneLabel: 'رقم الهاتف *',
      emailLabel: 'البريد الإلكتروني *',
      subjectLabel: 'الموضوع / الغرض',
      subjectOptions: [
        'حجز موعد لزيارة صالة العرض',
        'مشروع تأثيث منزلي سكني',
        'مشتريات فندقية وتجارية',
        'استفسارات الجملة والوكلاء',
      ],
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اذكر الموديلات التي تهمك أو تفاصيل القياسات والكمية المطلوبة...',
      successTitle: 'تم إرسال رسالتك بنجاح',
      successDesc: 'شكراً لتواصلك مع تيانآو للأثاث. سيتواصل معك أحد ممثلينا عبر الهاتف أو البريد الإلكتروني قريباً.',
    },
    footer: {
      brandTitle: 'تيانآو للأثاث',
      brandSub: '5GOOD · شركة تيانآو لصناعة الأثاث المحدودة',
      summary:
        'مؤسسة رائدة في تصنيع الأثاث المنجّد الحديث تجمع بين البحث والتطوير والتصميم والإنتاج والمبيعات، تأسست في يوليو 2024 بشراكة بين مجموعة تيان تانغ وهانغتشو أومير.',
      strategy: 'استراتيجية الامتياز الخماسية: صحة · راحة · تصميم · جودة · خدمة',
      navHeading: 'التصفح السريع',
      navHome: 'الرئيسية',
      navCatalogue: 'الكتالوج الكامل',
      navCategories: 'فئات المنتجات',
      navAbout: 'المصنع والملف التعريفي',
      navContact: 'التواصل والموقع',
      seriesHeading: 'خطوط الإنتاج',
      catalogueIndex: 'فهرس الكتالوج (36 صفحة)',
      plantHeading: 'المصنع وصالة العرض',
      copyright: 'جميع الحقوق محفوظة.',
      locationShort: 'مبالي، أوغندا',
      foundersShort: 'مجموعة تيان تانغ الأوغندية وهانغتشو أومير',
    },
    collection: {
      kickerBrand: '5GOOD تيانآو',
      kickerCatalog: 'الكتالوج الرسمي (36 صفحة)',
      kickerModels: 'موديلاً موثقاً',
      title: 'مجموعة أثاث تيانآو الكاملة',
      subtitle:
        'استعرض المواصفات الفنية والأبعاد المعمارية والخامات عبر سلسلة الفخامة الحديثة وسلسلة البساطة الراقية وسلسلة الفخامة البسيطة.',
      searchPlaceholder: 'ابحث برقم الموديل (مثل TA-M04 أو TA-EX01) أو الاسم أو الخامة...',
      sortBy: 'ترتيب حسب:',
      sortModel: 'رقم الموديل',
      sortPage: 'ترتيب صفحات الكتالوج (1–36)',
      sortName: 'اسم المنتج',
      categoryLabel: 'الفئة:',
      allProducts: 'جميع المنتجات',
      catSofas: 'الأرائك',
      catRecliners: 'الكراسي الكهربائية',
      catBeds: 'الأسرّة الفاخرة',
      catChairs: 'الطاولات والكراسي',
      seriesLabel: 'السلسلة:',
      allSeries: 'جميع السلاسل الثلاث',
      materialLabel: 'الخامة:',
      allMaterials: 'جميع الخامات',
      matLeather: 'جلد طبيعي طبقة أولى',
      matBoucle: 'قماش بوكليه ونسيج فاخر',
      matMotorized: 'حركة كهربائية ذكية',
      matStone: 'سطح حجر ملبد',
      matWalnut: 'خشب جوز طبيعي',
      showingCount: 'منتجاً موثقاً من الكتالوج',
      clickHint: 'اضغط على أي موديل لعرض الأبعاد وإضافته إلى طلب التسعير',
      emptyState: 'لا توجد موديلات مطابقة لخيارات البحث الحالية.',
    },
    productModal: {
      cataloguePagePrefix: 'صفحة الكتالوج ',
      dimensions: 'الأبعاد',
      frameStructure: 'هيكل الإطار',
      frameDefault: 'خشب صلب وفولاذ',
      framePlatform: 'منصة شرائح مقوّاة',
      cataloguePageLabel: 'صفحة الكتالوج',
      pageWord: 'صفحة',
      modelPrefix: 'الموديل:',
      finishesLabel: 'التشطيبات والألوان المعتمدة:',
      specsLabel: 'المواصفات والمميزات:',
      materialsLabel: 'الخامات المستخدمة:',
      directQuoteNote: 'تسعير مباشر من المصنع',
      parkLocation: 'المنطقة الصناعية بمبالي',
      relatedHeading: 'موديلات ذات صلة من نفس الفئة',
      detailView: 'زاوية تفصيلية',
      overview: 'عرض شامل',
      blueprint: 'المخطط الهندسي',
      photo: 'الصورة',
      pdfPageShort: 'كتالوج ص ',
      heightShort: 'ارتفاع',
    },
    quoteDrawer: {
      kicker: 'طلب تسعير رسمي من المصنع',
      title: 'اطلب عرض سعر',
      selectedItems: 'الموديلات المختارة',
      clearList: 'مسح القائمة',
      emptyTitle: 'لم يتم اختيار موديلات بعد.',
      emptyHint: 'تصفح المجموعة واضغط على "أضف إلى طلب التسعير" على أي أريكة أو سرير أو كرسي.',
      customerHeading: 'بيانات العميل والمشروع',
      fullNameLabel: 'الاسم الكامل *',
      fullNamePlaceholder: 'مثال: أحمد محمد',
      phoneLabel: 'رقم الهاتف *',
      emailLabel: 'البريد الإلكتروني *',
      locationLabel: 'المدينة / عنوان التوصيل',
      locationPlaceholder: 'مثال: كمبالا، مبالي، نيروبي',
      companyLabel: 'الشركة أو المؤسسة (اختياري)',
      companyPlaceholder: 'سكني / فندق / مطوّر عقاري',
      projectTypeLabel: 'نوع المشروع',
      projectTypes: [
        { value: 'Residential', label: 'منزل خاص / فيلا سكنية' },
        { value: 'Hospitality', label: 'فندق / منتجع سياحي' },
        { value: 'Commercial', label: 'مكتب تنفيذي / مشروع تجاري' },
        { value: 'Wholesale', label: 'توزيع جملة ومعارض' },
      ],
      notesLabel: 'متطلبات مخصصة أو ملاحظات',
      notesPlaceholder: 'اذكر الألوان أو الأقمشة المطلوبة أو الأبعاد الخاصة أو موعد التسليم المفضل...',
      successTitle: 'تم استلام طلب عرض السعر',
      successBodyPrefix: 'شكراً لك،',
      successBodySuffix: 'سيقوم فريق المبيعات والهندسة في مصنع تيانآو بمبالي بإعداد عرض السعر والمواصفات الرسمية خلال 24 ساعة.',
      refSummaryTitle: 'ملخص طلب التسعير:',
      refContact: 'التواصل:',
      refLocation: 'الموقع:',
      refItems: 'القطع المطلوبة:',
      unitsWord: 'وحدات',
      footerScale: 'مصنع 20,000 م² · صالة عرض 1,000 م²',
    },
    catalogueModal: {
      title: 'الكتالوج الرسمي لشركة تيانآو للأثاث',
      subtitle: '36 صفحة · المنطقة الصناعية بمبالي، أوغندا',
      pageWord: 'صفحة',
      ofWord: 'من',
      productsOnPage: 'المنتجات المعروضة في هذه الصفحة:',
      editorialSpreadTitle: 'صفحة تعريفية من كتالوج مجموعة تيانآو للأثاث.',
      editorialSpreadHint: 'انتقل إلى الصفحات المجاورة لعرض مواصفات الموديلات التفصيلية.',
      jumpToPage: 'انتقال إلى صفحة:',
      watermark: 'تيانآو للأثاث · مبالي، أوغندا',
      companyFull: 'شركة تيانآو لصناعة الأثاث المحدودة',
      addressLine: 'العنوان: المنطقة الصناعية الصينية الأوغندية في مبالي، أوغندا',
      phoneLine: 'الهاتف: +256 744 477 777 · +256 744 377 777',
      webLine: 'الموقع: https://tianaofurniture.co.ug',
      profileTitle: 'ملف الشركة',
      fiveGoodTitle: 'استراتيجية الامتياز الخماسية (5GOOD):',
      sections: {
        coverTitle: 'الغلاف ومعلومات التواصل الرسمية',
        coverSection: 'الهوية',
        profileTitle: 'ملف الشركة واستراتيجية الامتياز الخماسية',
        profileSection: 'نظرة عامة',
        sofasTitle: 'الأرائك العصرية الفاخرة والبسيطة المعيارية',
        sofasSection: 'الأرائك',
        reclinersTitle: 'كراسي الاسترخاء الكهربائية والسينما المنزلية',
        reclinersSection: 'الحركة الكهربائية',
        chairsTitle: 'الكراسي المميزة والكراسي الدوارة وطاولات السرير',
        chairsSection: 'الكراسي والطاولات',
        bedsTitle: 'الأسرّة الفاخرة المنجّدة وأجنحة غرف النوم',
        bedsSection: 'الأسرّة',
      },
    },
  },
};
