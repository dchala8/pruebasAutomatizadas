const tagsPageLink = "//a[contains(., 'Tags')]";
const primaryButton = ".gh-btn-primary";
const inputName = 'input[name="name"]';
const newPost = '.gh-nav-new-post';
const toogleMenu = '.settings-menu-toggle';
const multiMenusSelect = '.ember-power-select-trigger-multiple-input';
const publishMenu = '.gh-publishmenu';
const publisButton = '.gh-publishmenu-button';
const blackButton = '.gh-btn-black';
const viewPost = '.post-view-link';
const postTitleEdit = '.gh-editor-title';
const postContentEdit = '.koenig-editor__editor';

function selectPublishedPost(title){
    return "h3*="+title;
}

module.exports = {
    // selectPublishedPost,
    tagsPageLink,
    primaryButton,
    inputName,
    newPost,
    toogleMenu,
    multiMenusSelect,
    publishMenu,
    publisButton,
    blackButton,
    viewPost,
    postTitleEdit,
    postContentEdit,
}