import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://chelsea-zhai.github.io',
    title: '☕️一杯咖啡和一个下午',
    subtitle: '',
    description: 'Here is where I write for myself.',
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Blog', href: '/blog' },
        { text: 'Tags', href: '/tags' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' }
    ],
    socialLinks: [
        { text: 'Instagram', href: 'https://instagram.com/chelseazhai' },
        { text: 'GitHub', href: 'https://github.com/Chelsea-Zhai' }
    ],
    hero: {
        text: 'Here is where I write for myself.'
    },
    postsPerPage: 8
};

export default siteConfig;
