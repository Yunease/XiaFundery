export interface Member {
  /** 公开姓名 / 昵称 */
  name: string;
  /** 稳定 slug，用于成员详情路由 /team/[slug] */
  slug: string;
  /** 角色，如「联合创始人 · 软件架构师」 */
  role: string;
  /** 主要技术方向 */
  focus: string;
  /** 卡片上的一句话简介 */
  bio: string;
  /** 详情页的详细介绍（可选） */
  about?: string;
  /** 头像路径，建议放在 public/img/avatars/ 下 */
  avatar: string;
  skills: string[];
  /** 列表排序，越小越靠前 */
  order: number;
  /** 加入时间（可选） */
  joinedDate?: string;
  /** 示例内容标记，发布真实内容后请改为 false 或删除 */
  demo?: boolean;
  links?: {
    website?: string;
    github?: string;
    blog?: string;
  };
}

export const MEMBERS: Member[] = [
  {
    name: '琴泠Lumina Qin',
    slug: 'Lumina',
    role: '组织者，主要成员，独立项目开发者',
    focus: '全栈开发，产品设计，游戏开发',
    bio: '相信兴趣是学习一件新的事物中最重要的东西。独立开发者，关注 AI 应用、开源软件与游戏开发。喜欢折腾新技术、把想法变成可运行的作品，也乐于与不同领域的伙伴协作。',
    about:
      '独立开发者，热衷于 AI 应用、开源软件与游戏开发，喜欢探索新技术，也乐于与伙伴一起创造有趣的项目。',
    avatar: '/img/avatars/Lumina.jpg',
    skills: ['Python', 'AI', 'TypeScript', 'PixiArt'],
    order: 1,
    joinedDate: '2024-03-19',
    demo: false,
    links: {
      github: 'https://github.com/Yunease',
      blog: 'https://vilstia.org'
    },
  },
  {
    name: '萑澈Churnie HXCN',
    slug: 'excnies',
    role: '主要成员，独立项目开发者',
    focus: '全栈开发，Agent开发',
    bio: '于无声处听惊雷',
    about:
      '一个普普通通的独立开发爱好者',
    avatar: '/img/avatars/excnies.png',
    skills: ['Python', 'Go', 'TypeScript'],
    order: 10,
    joinedDate: '2024-08-19',
    demo: false,
    links: {
      github: 'https://github.com/excniesNIED',
      blog: 'https://hxcn.cnies.org'
    },
  },
  {
    name: 'Aronnax',
    slug: 'aronnax',
    role: '主要成员，独立项目开发者',
    focus: '全栈开发，AI 应用，工具链',
    bio: '代码 | 科技 | 动漫 | 影视',
    about:
      '独立开发者，热衷于探索 AI Agent、自动化工具与全栈开发。喜欢折腾各种有趣且实用的开源项目。',
    avatar: '/img/avatars/aronnax.jpg',
    skills: ['TypeScript', 'Python', 'Go', 'AI'],
    order: 20,
    joinedDate: '2026-10-21',
    demo: false,
    links: {
      github: 'https://github.com/aronnaxlin',
      blog: 'https://aronnax.site',
    },
  },
  {
    name: '扁豆面旗子',
    slug: 'bian-dou-mian-qi-zi',
    role: '成员 · 文案策划',
    focus: '内容与叙事',
    bio: '爱的战士。',
    avatar: '/img/avatars/bian-dou-mian-qi-zi.svg',
    skills: ['文案设计'],
    order: 21,
    joinedDate: '2026-10-21',
    demo: false,
    links: {
      github: 'https://github.com/Lentilnoodleflags'
    },
      {
    name: 'HANE',
    slug: 'hane',              // 用小写英文，不能有空格，比如 xiaoming
    role: '成员 · 方向',
    focus: '安卓开发',
    bio: '哈捏大王万岁万岁万万岁',
    avatar: '/img/avatars/your-name.svg',
    skills: ['Android', 'Python'],
    order: 30,                      // 数字越大越靠后，前面已用到 21，你填 30 即可
    joinedDate: '2026-10-21',
    demo: false,
    links: {
      github: 'https://github.com/Hane820',
    },
  },

  },
];

/** 按 order 排序后的成员列表 */
export const SORTED_MEMBERS: Member[] = [...MEMBERS].sort(
  (a, b) => a.order - b.order,
);
