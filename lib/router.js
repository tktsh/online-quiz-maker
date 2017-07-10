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
    name: 'testeditor',
    template: 'testEditorTemplate',
    parent: 'testing',
    title: 'Конструктор тестов'
});

Router.route('/testing/special', {
    name: 'special',
    template: 'testingTemplate',
    parent: 'testing',
    title: 'Специальные'
});

Router.route('/testing/questions', {
    name: 'questions',
    template: 'questionsTemplate',
    parent: 'testing',
    title: 'Вопросы для тестов'
});

Router.route('/testing/questions/editor', {
    name: 'questioneditor',
    template: 'questionsEditorTemplate',
    parent: 'testing',
    title: 'Конструктор вопросов'
});
