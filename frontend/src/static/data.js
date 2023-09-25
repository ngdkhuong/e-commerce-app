export const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Best Selling', url: '/best-selling' },
    { title: 'Products', url: '/products' },
    { title: 'Events', url: '/events' },
    { title: 'FAQ', url: '/faq' },
];

export const dataSlides = [
    {
        title: 'Build ready-for-anything teams',
        content: 'See why leading organizations choose to learn with Udemy Business.',
        link: '',
        image: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/09206fc2-d0f1-41f6-b714-36242be94ee7.jpg',
    },
    {
        title: 'Learning that gets you',
        content: 'Skills for your present (and your future). Get started with us.',
        link: '',
        image: 'https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg',
    },
    {
        title: 'Learn from anywhere',
        content: 'On the couch, from the backyard, or on your commute.',
        link: '',
        image: 'https://img-c.udemycdn.com/notices/featured_carousel_slide/image/487fb3b7-4b6e-4c2f-a3fe-67eb51016502.jpg',
    },
];

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
