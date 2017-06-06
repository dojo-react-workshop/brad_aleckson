const { history, location, addEventListener } = window;
const callbackContainer = [];

conrunCallbakcs

const webRouter = {
    navigateTo(to) {        
        history.pushState({}, null, `${to}`);
        return;
    },
    pathName: () => location.pathname,
    subscribe(callback) {
        addEventListener('popstate', callback);
    }
}

export default webRouter;