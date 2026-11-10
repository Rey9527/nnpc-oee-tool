import enterpriseAi from '../assets/solutions/enterprise-ai.jpg';
import iiot from '../assets/solutions/iiot.jpg';
import intag from '../assets/intag-walk-test.jpg';
import mesMom from '../assets/solutions/mes-mom.jpg';
import wms from '../assets/solutions/wms.jpg';
import { intagDeploymentCopy } from './intag-deployment';
import type { Locale } from './home';
import type { SolutionId } from './solution-detail';

export const solutionPhotos = { iiot, 'mes-mom': mesMom, wms, intag, 'enterprise-ai': enterpriseAi };

const captions: Record<Locale, { scenario: string; iiot: string; intag: string; 'enterprise-ai': string }> = {
  en: {
    scenario: 'Illustrative work scenario.',
    iiot: 'Illustrative work scenario. Equipment data collection and monitoring.',
    intag: 'Illustrative work scenario. The tablet shows an example walk-test interface.',
    'enterprise-ai': 'Illustrative work scenario. The screen shows an example document search interface.',
  },
  'zh-tw': {
    scenario: '應用情境示意。',
    iiot: '應用情境示意。工業設備資料採集與監測。',
    intag: '應用情境示意。平板顯示走測介面範例。',
    'enterprise-ai': '應用情境示意。螢幕顯示文件查詢介面範例。',
  },
  th: {
    scenario: 'ภาพประกอบสถานการณ์การใช้งาน',
    iiot: 'ภาพประกอบสถานการณ์การใช้งาน การเก็บข้อมูลและติดตามการทำงานของเครื่องจักร',
    intag: 'ภาพประกอบสถานการณ์การใช้งาน หน้าจอแท็บเล็ตแสดงตัวอย่างการเดินสำรวจ',
    'enterprise-ai': 'ภาพประกอบสถานการณ์การใช้งาน หน้าจอแสดงตัวอย่างการค้นหาเอกสาร',
  },
};

const alt: Record<Locale, Record<Exclude<SolutionId, 'intag'>, string>> = {
  en: {
    iiot: 'A factory technician checks a handheld measuring instrument beside an industrial motor.',
    'mes-mom': 'Two production staff review a work order beside an assembly station.',
    wms: 'A warehouse worker aims a handheld barcode scanner at a label on a carton.',
    'enterprise-ai': 'An office employee uses a mouse to look through document search results on a monitor.',
  },
  'zh-tw': {
    iiot: '工廠技術人員在工業馬達旁查看手持量測儀。',
    'mes-mom': '兩位生產人員在組裝工位旁核對工單。',
    wms: '倉庫人員以手持掃描器對準紙箱上的條碼。',
    'enterprise-ai': '辦公室員工操作滑鼠，查看螢幕上的文件搜尋結果。',
  },
  th: {
    iiot: 'ช่างในโรงงานตรวจดูเครื่องวัดแบบพกพาข้างมอเตอร์อุตสาหกรรม',
    'mes-mom': 'เจ้าหน้าที่ฝ่ายผลิตสองคนตรวจสอบใบสั่งงานข้างสถานีประกอบ',
    wms: 'เจ้าหน้าที่คลังสินค้าใช้เครื่องสแกนแบบพกพาสแกนบาร์โค้ดบนกล่อง',
    'enterprise-ai': 'พนักงานสำนักงานใช้เมาส์เพื่อดูผลการค้นหาเอกสารบนหน้าจอ',
  },
};

export function solutionPhotoCopy(locale: Locale, solution: SolutionId) {
  return {
    alt: solution === 'intag' ? intagDeploymentCopy[locale].walkTest.alt : alt[locale][solution],
    caption: solution === 'mes-mom' || solution === 'wms' ? captions[locale].scenario : captions[locale][solution],
  };
}
