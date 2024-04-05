import ScrollHint from 'scroll-hint';
import 'scroll-hint/css/scroll-hint.css';

new ScrollHint('[data-scroll-hint]', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white',
    applyToParents: true,
    i18n: {
        scrollable: 'Scroll me!',
    },
});
