export default {
    methods: {
        isScrolledToBottom: () => {
            return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
        }
    }
}
