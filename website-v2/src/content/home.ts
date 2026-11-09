export const locales = ['en', 'zh-tw', 'th'] as const;
export type Locale = typeof locales[number];
export const localeMeta = {
 en: {lang:'en', label:'English', title:'Engineering & ELV Systems in Thailand | N/NPC', description:'Explore N/NPC engineering, ELV systems and smart operations solutions in Thailand.'},
 'zh-tw': {lang:'zh-Hant', label:'繁體中文', title:'泰國工程與弱電系統 | N/NPC', description:'探索 N/NPC 泰國工程、弱電系統與智慧營運方案。'},
 th: {lang:'th', label:'ไทย', title:'งานวิศวกรรมและระบบ ELV ในประเทศไทย | N/NPC', description:'สำรวจงานวิศวกรรม ระบบ ELV และโซลูชันการดำเนินงานอัจฉริยะของ N/NPC ในประเทศไทย'}
};
