Router.configure({
  layoutTemplate: 'pageLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'not-found'
});

Router.route('/', {
    name: 'main',
    title: 'Главная',
    template: 'main'
});

Router.route('/gallery', {
    name: 'gallery',
    title: 'Галерея',
    template: 'galleryTemplate'
});

Router.route('/contacts', {
    name: 'contacts',
    title: 'Контакты',
    template: 'contactsTemplate'
});

Router.route('/testing', {
    name: 'testing',
    title: 'Тесты',
    template: 'testingTemplate'
});

Router.route('/testing/editor', {
    name: 'editor',
    template: 'testingTemplate',
    parent: 'testing',
    title: 'Конструктор'
});

Router.route('/testing/special', {
    name: 'special',
    template: 'testingTemplate',
    parent: 'testing',
    title: 'Специальные'
});