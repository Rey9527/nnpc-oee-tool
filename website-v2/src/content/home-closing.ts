import type { Locale } from './home';

type Industry = 'manufacturing' | 'office' | 'school' | 'hotel';

interface HomeClosingCopy {
  industries: {
    title: string;
    text: string;
    illustration: string;
    settings: Record<Industry, { title: string; text: string; alt: string }>;
  };
  about: {
    title: string;
    text: string;
    steps: readonly (readonly [title: string, text: string])[];
    link: string;
  };
  contact: { title: string; text: string; prompt: string };
}

export const homeClosingCopy: Record<Locale, HomeClosingCopy> = {
  en: {
    industries: {
      title: 'From factories to offices, schools and hotels',
      text: 'Each site has different engineering and operating needs. NNPC starts with the site conditions to plan infrastructure and smart operations systems that fit how the facility works.',
      illustration: 'Illustrative settings only. These photos do not depict NNPC project sites.',
      settings: {
        manufacturing: {
          title: 'Manufacturing plants',
          text: 'Monitor equipment, control site conditions and connect operational data over industrial networks.',
          alt: 'An engineer reviewing plans beside equipment and overhead cable trays in a factory.',
        },
        office: {
          title: 'Office buildings',
          text: 'Plan building networks, environmental controls and integration with facilities management.',
          alt: 'A glass-partitioned office floor with workstations and ceiling services.',
        },
        school: {
          title: 'International schools',
          text: 'Plan campus networks, environmental monitoring and facilities management around school operations.',
          alt: 'A shaded school corridor with classroom doors beside a courtyard.',
        },
        hotel: {
          title: 'Hotels',
          text: 'Integrate networks, communications, environmental controls and building equipment systems.',
          alt: 'A hotel lobby with a reception counter and guest seating.',
        },
      },
    },
    about: {
      title: 'On-site integration and project delivery',
      text: 'NNPC Consulting works with local engineering partners in Thailand. We assess requirements, survey the site, coordinate installation and integrate systems for use in day-to-day operations.',
      steps: [
        ['Site requirements assessment', 'Review existing conditions, how the facility is used and what could affect implementation.'],
        ['Engineering coordination and delivery', 'Coordinate installation, equipment and systems with site operations.'],
        ['Systems integration and project support', 'Help integrate the systems in scope and provide support as agreed for the project.'],
      ],
      link: 'About NNPC',
    },
    contact: {
      title: 'Plan the next step for your site',
      text: 'Planning a new build, upgrading an existing facility or introducing a smart operations system? Tell us what you need and how your site operates so we can discuss a suitable approach.',
      prompt: 'We can start with a rough brief. Share the facility type, what you want to improve and your target timeline.',
    },
  },
  'zh-tw': {
    industries: {
      title: '從工廠到各類營運場域',
      text: '不同場域有不同的工程條件與管理需求。NNPC 從現場環境出發，規劃合適的基礎設施與智慧營運方案。',
      illustration: '照片為應用情境示意，非 NNPC 實際案場。',
      settings: {
        manufacturing: {
          title: '製造工廠',
          text: '監測設備、控制環境條件，並以工業網路串接營運數據。',
          alt: '工廠內，一位工程人員在設備及上方線槽旁查看圖面。',
        },
        office: {
          title: '辦公大樓',
          text: '規劃網路基礎設施與環境控制，並整合設施管理。',
          alt: '玻璃隔間內的辦公區，設有工作桌與天花板設備。',
        },
        school: {
          title: '國際學校',
          text: '依校園日常運作規劃校園網路、環境監測與設施管理。',
          alt: '校園庭院旁有遮蔭走廊及相連的教室。',
        },
        hotel: {
          title: '旅館與飯店',
          text: '整合網路與通訊基礎設施、環境控制及設備系統。',
          alt: '設有接待櫃檯與旅客座位的旅館大廳。',
        },
      },
    },
    about: {
      title: '從系統規劃到現場整合與交付',
      text: 'NNPC Consulting 在泰國與在地工程夥伴協作，從需求評估、現場勘查到工程協調與系統導入，協助企業將方案落實到日常營運。',
      steps: [
        ['現場需求評估', '了解既有環境、使用需求與導入限制。'],
        ['工程協調與交付', '協調施工、設備、系統及現場作業需求。'],
        ['系統整合與後續支援', '協助整合相關系統，並依專案約定提供後續支援。'],
      ],
      link: '關於我們',
    },
    contact: {
      title: '從現場需求，開始規劃下一步',
      text: '無論是新建工程、既有設施改善，或智慧營運系統導入，都歡迎提供場域條件與需求，讓我們一起討論適合的方向。',
      prompt: '規格還沒定，也可以先討論。建議提供場域類型、希望改善的項目及預計時程。',
    },
  },
  th: {
    industries: {
      title: 'จากโรงงานสู่อาคารหลากหลายประเภท',
      text: 'แต่ละพื้นที่มีเงื่อนไขด้านวิศวกรรมและการบริหารต่างกัน NNPC เริ่มจากการทำความเข้าใจหน้างาน เพื่อวางแผนโครงสร้างพื้นฐานและระบบอัจฉริยะที่เหมาะกับการดำเนินงานจริง',
      illustration: 'ภาพประกอบแสดงลักษณะพื้นที่ ไม่ใช่ภาพสถานที่โครงการของ NNPC',
      settings: {
        manufacturing: {
          title: 'โรงงานผลิต',
          text: 'ติดตามเครื่องจักร ควบคุมสภาพแวดล้อม และเชื่อมข้อมูลการทำงานผ่านเครือข่ายอุตสาหกรรม',
          alt: 'วิศวกรตรวจแบบข้างเครื่องจักรและรางเดินสายเหนือศีรษะในโรงงาน',
        },
        office: {
          title: 'อาคารสำนักงาน',
          text: 'วางระบบเครือข่ายและระบบควบคุมสภาพแวดล้อม พร้อมเชื่อมกับงานบริหารอาคาร',
          alt: 'พื้นที่ทำงานในสำนักงานที่มีกระจกกั้น โต๊ะทำงาน และอุปกรณ์ติดเพดาน',
        },
        school: {
          title: 'โรงเรียนนานาชาติ',
          text: 'วางระบบเครือข่ายในโรงเรียน การตรวจวัดสภาพแวดล้อม และการบริหารอาคารให้เข้ากับการใช้งานประจำวัน',
          alt: 'ทางเดินมีหลังคาริมลานโรงเรียนและห้องเรียนที่เปิดออกสู่ทางเดิน',
        },
        hotel: {
          title: 'โรงแรม',
          text: 'เชื่อมระบบเครือข่ายและการสื่อสาร ระบบควบคุมสภาพแวดล้อม และอุปกรณ์ภายในอาคาร',
          alt: 'โถงโรงแรมพร้อมเคาน์เตอร์ต้อนรับและพื้นที่นั่งพักสำหรับแขก',
        },
      },
    },
    about: {
      title: 'วางแผน เชื่อมต่อระบบ และส่งมอบงานถึงหน้างาน',
      text: 'NNPC Consulting ทำงานร่วมกับพันธมิตรด้านวิศวกรรมในประเทศไทย ตั้งแต่ประเมินความต้องการ สำรวจหน้างาน และประสานการติดตั้ง ไปจนถึงเชื่อมต่อระบบเพื่อให้ใช้งานได้จริง',
      steps: [
        ['ประเมินความต้องการหน้างาน', 'ตรวจสภาพพื้นที่เดิม ทำความเข้าใจการใช้งาน และระบุข้อจำกัดในการติดตั้งหรือเริ่มใช้งานระบบ'],
        ['ประสานงานวิศวกรรมและส่งมอบ', 'ประสานการติดตั้ง อุปกรณ์ และระบบให้สอดคล้องกับการทำงานของหน้างาน'],
        ['เชื่อมต่อระบบและดูแลหลังส่งมอบ', 'ช่วยเชื่อมต่อระบบที่อยู่ในขอบเขตงานและให้การสนับสนุนตามที่ตกลงในโครงการ'],
      ],
      link: 'รู้จัก NNPC',
    },
    contact: {
      title: 'เริ่มวางแผนจากความต้องการหน้างาน',
      text: 'ไม่ว่าจะเป็นงานก่อสร้างใหม่ การปรับปรุงพื้นที่เดิม หรือการนำระบบอัจฉริยะมาใช้ในการดำเนินงาน แจ้งสภาพพื้นที่และสิ่งที่ต้องการ เพื่อหารือแนวทางที่เหมาะสมร่วมกัน',
      prompt: 'เริ่มคุยกันได้แม้ยังไม่ได้สรุปข้อกำหนด เพียงแจ้งประเภทพื้นที่ สิ่งที่ต้องการปรับปรุง และช่วงเวลาที่วางแผนไว้',
    },
  },
};
