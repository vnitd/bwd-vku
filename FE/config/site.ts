export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "PureJS Education",
  description: "Tạo nên 1 tương lai tươi sáng!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Question",
      href: "/question",
    },
    {
      label: "Classroom",
      href: "/classroom",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Question",
      href: "/question",
    },
    {
      label: "Classroom",
      href: "/classroom",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/vnitd/capstone-project",
    sponsor: "https://patreon.com/jrgarciadev",
    login: "/sign-in",
    profile: "/profile",
  },
  classroom: [
    { title: "React", description: "Learn all basic concepts of react...." },
    {
      title: "Python",
      description: "Debugging in python project.............",
    },
    {
      title: "Maths",
      description: "Learn and practice some concepts of maths",
    },
    { title: "Python", description: "Debugging in python projectttttttttttt" },
  ],
  question: [
    { value: "What has motivated me to seek this knowledge?" },
    { value: "What circumstances have led me to want to learn this?" },
    { value: "Why is this meaningful to me or to others?" },
    { value: "What would happen if I don’t find out what I need to?" },
    { value: "How will this knowledge change things?" },
    {
      value:
        "Đốt cháy hoàn toàn 3 gam hợp chất hữu cơ X ( C, H, O ). Hấp thụ toàn bộ sản phẩm cháy vào dung dịch Ca(OH)2 dư. Sau thí nghiệm , thu được 10 gam kết tủa và khối lượng dung dịch giảm 3,8 gam so với dung dịch Ca(OH)2 ban đầu. Thành phần phần trăm khối lượng oxi trong X là:",
    },
    {
      value:
        "日本の経済成長における地方都市と大都市圏の役割について、特にインフラ整備、技術革新、およびグローバリゼーションの影響を考慮しながら、20世紀から21世紀初頭にかけての変遷を具体例を交えながら詳しく説明し、今後の持続可能な発展における課題や解決策についてもあなたの考えを述べてください。",
    },
    {
      value:
        "Nếu bạn thay thế từng bộ phận của một con tàu cũ bằng bộ phận mới, cho đến khi không còn bộ phận ban đầu nào, thì liệu đó có còn là con tàu ban đầu không? Và nếu bạn dùng các bộ phận cũ để lắp ráp lại một con tàu khác, thì con tàu nào mới là con tàu của Theseus?",
    },
  ],
};
