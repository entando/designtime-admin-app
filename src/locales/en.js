export default {
  locale: 'en',
  messages: {
    'app.welcome': 'Welcome to Entando, {name}!',
    'app.yes': 'Yes',
    'app.no': 'No',
    'app.add': 'Add',
    'app.edit': 'Edit',
    'app.new': 'New',
    'app.type': 'Type',
    'app.id': 'Id',
    'app.attributes': 'Attributes',
    'app.configure': 'Configure',
    'app.details': 'Details',
    'app.clone': 'Clone',
    'app.delete': 'Delete',
    'app.publish': 'Publish',
    'app.unpublish': 'Unpublish',
    'app.en': 'en',
    'app.it': 'it',
    'app.save': 'Save',
    'app.search': 'Search',
    'app.back': 'Back',
    'app.fieldsRequired': 'Required Fields',
    'app.title': 'Title',
    'app.alert.notAvaible': 'Not avaible',
    'app.info': 'Info',
    'app.name': 'Name',
    'app.group': 'Group',
    'app.code': 'Code',
    'app.used': 'used',
    'app.here': 'here',
    'app.actions': 'Actions',
    'app.errors': 'Errors',
    'app.search.returned': 'Your search returned {value} results',
    'app.enTitle': 'English title',
    'app.itTitle': 'Italian title',
    'app.chooseAnOption': 'Choose an option',
    'app.add.attribute.code': 'You must insert 3 uppercase characters',
    'app.help.code': 'You can insert characters uppercase and lowercase letters, numbers and special characters _',
    'app.help.name': 'You can insert max 50 characters uppercase and lowercase letters, including numbers and special characters',
    'app.all': 'All',
    'app.reload': 'Reload',
    'app.pages': 'Pages',
    'app.set': 'Set',
    'app.settings': 'Settings',
    'app.list': 'List',
    'app.api': 'API',
    'app.preview': 'Preview',
    'app.restore': 'Restore',
    'app.languages': 'Languages',
    'app.systemLabels': 'System labels',
    'app.cancel': 'Cancel',
    'app.mandatory': 'Mandatory',
    'app.filterList': 'Can be used as a filter in lists',
    'app.ognl.validation': 'OGNL - Validation',
    'app.ognl.validation.help1': 'In this section you can insert the attribute validation. ',
    'app.ognl.validation.help2': 'The OGNL expression must return a boolean value (true or false). In the expression, the object root is the attribute itself. You can access to the methods of the attribute without specifying it or using the prefix #attribute.',
    'app.ognl.validation.help3': 'You can use the map of the system languages (#langs) and the associated entity (#entity).',
    'app.ognl.validation.help4': 'Also for the elements of list or composite attributes you can access to the parent attribute (#parent) and for the elements of list attibutes you have the index (#index) at your disposal.',
    'app.ognl.expression': 'OGNL Expression ',
    'app.apply.expression': 'Apply this expression only to filled attribute',
    'app.ognl.validation.add.message.help': 'You can insert both a help and a compilation error message, or choose a key to bind them to a system Label.',
    'app.ognl.message': 'Help message',
    'app.help.message.key': 'Key for the help message',
    'app.error.message': 'Error message',
    'app.error.message.key': 'Key for the error message',
    'app.indexable': 'Searchable',
    'app.attribute': '{mode} attribute',
    'app.continue': 'continue',
    'app.help.message': 'Help Message',
    'app.roles': 'Roles',
    'app.role': 'Role',
    'app.minLength': 'Minimum length',
    'app.maxLength': 'Maximum length',
    'app.regexp': 'Regular expression',
    'app.enumeratorStaticItems': 'Elements',
    'app.enumeratorStaticItems.help': 'Insert a configuration like \'lable1,lable2,lable3\'',
    'app.enumeratorStaticItemsMap.help': 'Insert a configuration like \'key1=value1,key2=value2,key3=value3\'',
    'app.enumeratorStaticItemsSeparator': 'Separator',
    'app.enumeratorExtractorBean': 'Extractor bean name',
    'app.chooseARole': 'Choose a role',
    'app.assigned.roles': 'Assigned role',
    'app.no.roles': 'No roles available: they might have been all assigned, yet.',
    'app.from': 'From',
    'app.to': 'To',
    'app.equal': 'Equal to',
    'app.date.placeholder': 'dd/mm/yyyy',
    'app.working': 'You are working on attribute:',
    'app.element.of': 'element of',
    'app.filter': 'Filter',
    'app.moveUp': 'Move Up',
    'app.moveDown': 'Move Down',
    'app.permissions': 'Permissions',
    'app.tag': 'Tag',
    'app.lastModified': 'Last Modified',
    'app.logout': 'Sign out',
    'app.myProfile': 'My Profile',
    'app.homepage': 'Go to Homepage',
    'app.number': 'Number',
    'app.date': 'Date',
    'app.requiredTime': 'Required time',
    'app.milliseconds': 'milliseconds',
    'app.tableName': 'Table Name',
    'app.rows': 'Rows',
    'app.monolist': 'Monolist',
    'app.edit.attribute': 'Edit : attribute - ',
    'app.edit.Monolist': 'Edit : Monolist',
    'app.edit.List': 'Edit : List',
    'app.created': 'The {type} {code} has been created',
    'app.updated': 'The {type} {code} has been updated',
    'app.deleted': 'The {type} {code} has been deleted',
    'app.updateSettings.success': 'The settings have been updated successfully',
    'menu.dashboard': 'Dashboard',
    'menu.pageDesigner': 'Page Designer',
    'menu.pageTree': 'Page Tree',
    'menu.uxPattern': 'UX Patterns',
    'menu.integration': 'Integrations',
    'menu.data': 'Data',
    'menu.dataModels': 'Data Models',
    'menu.components': 'Components',
    'menu.configuration': 'Configuration',
    'menu.fileBrowser': 'File browser',
    'menu.widgets': 'Widgets',
    'menu.widgetEdit': 'Widget Edit',
    'menu.fragments': 'Fragments',
    'menu.pageModels': 'Page Models',
    'menu.pageModelDetails': 'Page model details',
    'menu.uxPattern.widget': 'Widgets',
    'menu.uxPattern.fragment': 'Fragments',
    'menu.pageSettings': 'Page Settings',
    'menu.pageConfig': 'Page Configuration',
    'menu.dataType': 'Data Types',
    'menu.userManagement': 'User Management',
    'menu.users': 'Users',
    'menu.users.authority': 'Authorizations',
    'menu.users.restrictions': 'User Restrictions',
    'menu.details': 'Details',
    'menu.groups': 'Groups',
    'menu.database': 'Database',
    'menu.widget': 'Widget',
    'menu.labelsAndLanguages': 'Labels and Languages',
    'menu.uxPattern.addLabels': 'System labels',
    'menu.categories': 'Categories',
    'menu.roles': 'Roles',
    'menu.reloadConfiguration': 'Reload Configuration',
    'menu.reloadConfirm': 'Reload the Configuration',
    'menu.profileTypes': 'Profile types',
    'menu.profile': 'Profile',
    'dashboard.newUser': 'New User',
    'dashboard.newWidget': 'New Widget',
    'dashboard.newPage': 'Add Page',
    'dashboard.apis': 'APIs',
    'dashboard.numberWidgets': 'Number of Widgets',
    'pageTree.pageTree': 'Page tree',
    'pageTree.expand': 'Expand',
    'pageTree.collapse': 'Collapse',
    'pageTree.status': 'Status',
    'pageTree.displayedInMenu': 'Displayed in menu',
    'pageTree.actions': 'Actions',
    'pageTree.action.clear': 'Clear results',
    'pageTree.searchForm.title': 'Search for an existing page',
    'pageTree.searchForm.code': 'Page Code',
    'pageTreePage.help': 'The TREE PAGES section lets you manage an existing page, expande all tree at the same time or collapse and display all main node. You can add or move a page. Perform some actions like: the mobile or desktop preview, configure, edit, see details, clone a page or delete. In addition you can display the state draft or online and if the page is in the menu list',
    'pageDetails.title': 'Page Details',
    'pageDetails.help': 'The TREE PAGES section lets you manage an existing page, expande all tree at the same time or collapse and display all main node. You can add or move a page. Perform some actions like: the mobile or desktop preview, configure, edit, see details, clone a page or delete. In addition you can display the state draft or online and if the page is in the menu list.',
    'pageDetails.emptyContent': 'This page does not publish any content.',
    'pageDetails.emptyContentLink': 'There is no content with a link pointing to this page.',
    'validateForm.elements': 'Insert a configuration like \'key1=value1,key2=value2,key3=value3\'',
    'validateForm.element': 'Insert a configuration like \'lable1,lable2,lable3\'',
    'validateForm.element.code': 'Code must be 3 uppercase letters',
    'validateForm.required': 'Field required',
    'validateForm.maxLength': 'Must be {max} characters or less',
    'validateForm.minLength': 'Must be {min} characters or more',
    'validateForm.number': 'Must be a number',
    'validateForm.minValue': 'Must be at least {min}',
    'validateForm.maxValue': 'Must be at most {max}',
    'validateForm.email': 'Invalid email address',
    'validateForm.alphaNumeric': 'Only alphanumeric characters',
    'validateForm.widgetCode': '{name} Contains invalid characters. Only alphanumeric characters and the underscore _ are allowed',
    'validateForm.passwordNotMatch': 'Confirm value doesn\'t match with Password value',
    'validateForm.code': 'Code contains invalid characters. Only alphanumeric characters and the underscore \'_\' are allowed.',
    'widget.page.create.pageTitle': 'Info',
    'widget.page.create.code': 'Code',
    'widget.page.create.code.placeholder': 'Code',
    'widget.page.create.title': 'Title',
    'widget.page.create.title.en.placeholder': 'English title',
    'widget.page.create.title.it.placeholder': 'Italian title',
    'widget.page.create.group': 'Group',
    'widget.page.tab.customUi': 'Custom UI',
    'widget.page.tab.defaultUi': 'Default UI',
    'widget.page.edit.pageTitle': 'Edit Widget',
    'widget.page.alert.notAvaible': 'Not avaible',
    'widget.list.title': 'Widget',
    'widget.list.new': 'New',
    'widget.list.type': 'Custom widget',
    'widget.help': 'The WIDGET section lets you manage existing widget or add new widget. Widgets are objects used to display information and functionality or services on the pages of an application.',
    'fragment.list.title': 'Fragments',
    'fragment.help': 'The FRAGMENTS section lets you manage existing fragments or add new fragments. The fragments are single portions of front-end interface used in Widgets (including plugins) and Page Models.',
    'fragment.code': 'Code',
    'fragment.code.placeholder': 'Code',
    'fragment.tab.guiCode': 'Gui Code',
    'fragment.tab.defaultGuiCode': 'Default Gui Code',
    'fragment.body.defaultGuiCode': 'Not available.',
    'fragment.detail.title': 'Fragment details',
    'fragment.detail.widgetType': 'Widget Type',
    'fragment.detail.pluginCode': 'Plugin code',
    'fragment.detail.title.referencedFragments': 'Referenced fragments',
    'fragment.detail.title.referencedPageModels': 'Referenced page models',
    'fragment.detail.title.referencedWidgetType': 'Referenced widget types',
    'fragment.detail.emptyReferenceFragments': 'There are no referenced fragments',
    'fragment.detail.emptyReferencePageModels': 'There are no referenced page models',
    'fragment.detail.emptyReferenceWidgetTypes': 'There are no referenced widget types',
    'fragment.form.edit.plugin': 'Plugin',
    'fragment.table.widgetType': 'Widget Type',
    'fragment.table.plugin': 'Plugin',
    'fragment.table.edit': 'Edit {code}',
    'fragment.table.details': 'Details for: {code}',
    'fragment.form.edit.widgetType': 'Widget Type',
    'fragment.settings': 'Enable Editing of fragment with empty default gui',
    'fragment.settings.alert.success': 'The settings have been updated',
    'fragment.settings.alert.error': 'The settings have not been updated',
    'fileBrowser.list.upLink': 'up..',
    'fileBrowser.list.size': 'Size',
    'fileBrowser.list.lastModifiedTime': 'Last Edit',
    'fileBrowser.list.empty': 'This folder is empty',
    'fileBrowser.createTextFile': 'Create text file',
    'fileBrowser.createFolder': 'Create folder',
    'fileBrowser.uploadFile': 'Upload',
    'fileBrowser.uploadFileComplete': 'Upload file complete',
    'fileBrowser.uploadFileError': 'Error upload file',
    'fileBrowser.downloadFile': 'Download',
    'fileBrowser.newFolder': 'New Folder Name',
    'fileBrowser.createFolderSuccess': 'Folder \'{path}\' successfully created',
    'fileBrowser.createFolderError': 'An error has occurred during the creation of the folder \'{path}\'',
    'fileBrowser.deleteFolderSuccess': 'Folder \'{path}\' successfully deleted',
    'fileBrowser.deleteFolderError': 'An error has occurred during deletion of the folder \'{path}\'',
    'fileBrowser.deleteFileSuccess': 'File \'{path}\' successfully deleted',
    'fileBrowser.deleteFileError': 'An error has occurred during deletion of the file \'{path}\'',
    'fileBrowser.help': 'The FILE BROWSER section lets system administrators can browse the File System folders.',
    'fileBrowser.textFile.placeholder': 'file content here...',
    'fileBrowser.textFile.content': 'Content',
    'pages.pageForm.info': 'Info',
    'pages.pageForm.pageGroups': 'Page groups',
    'pages.pageForm.settings': 'Settings',
    'pages.pageForm.ownerGroup': 'Owner Group',
    'pages.pageForm.joinGroup': 'Join Group',
    'pages.pageForm.codeHelp': 'Insert page code',
    'pages.pageForm.pagePlacement': 'Select page placement',
    'pages.pageForm.pageModel': 'Page Model',
    'pages.pageForm.pageModelHelp': 'Select a page model',
    'pages.pageForm.displayedInMenu': 'Displayed in menu',
    'pages.pageForm.displayedInMenuHelp': 'Show this page in menu',
    'pages.pageForm.seo': 'SEO',
    'pages.pageForm.seoHelp': 'Activate SEO on page',
    'pages.pageForm.charset': 'Charset',
    'pages.pageForm.charsetHelp': 'Interpret a sequence of byte as representation of characters.The Default is set for the machine in use',
    'pages.pageForm.mimeType': 'MimeType',
    'pages.pageForm.mimeTypeHelp': 'Identify the type of information (imagine, text..) that Entando gives back to the asking browser',
    'pages.pageForm.saveAndConfigure': 'Save and Configure',
    'pages.seoDescr': 'SEO: When available, use extra titles',
    'pages.noPageFound': 'No pages found.',
    'pages.status.published': 'Online',
    'pages.status.draft': 'Online ≠ Draft',
    'pages.status.unpublished': 'Draft',
    'pageSettings.title': 'Page Settings',
    'pageSettings.help': 'The PAGE SETTING section let the administrator specify which pages must be used for particular aims and define some general page settings.',
    'pageSettings.status.published': 'The updates to page {page} are online now!',
    'pageSettings.status.unpublished': 'The page {page} is offline now!',
    'pageSettings.input.homepage': 'Home Page',
    'pageSettings.input.404': 'Page for: 404 - Page not found',
    'pageSettings.input.500': 'Page for: 500 - Generic error',
    'pageSettings.input.proceed': 'Page for: Sign in to procede further',
    'pageSettings.input.baseURL': 'Base URL',
    'pageSettings.input.baseURL.http': 'Built by HTTP request parameters',
    'pageSettings.input.baseURL.relative': 'Relative',
    'pageSettings.input.baseURL.static': 'Static',
    'pageSettings.input.appendBaseURL': 'Append context name on BaseURL',
    'pageSettings.input.jsession': 'Use JSESSIONID',
    'pageSettings.input.languageBroswer': 'Home page gets its language from the browser',
    'pageSettings.input.pageTreeStyle': 'Choose the style of the Page tree',
    'pageSettings.input.pageTreeStyle.classic': 'Classic',
    'pageSettings.input.pageTreeStyle.demand': 'Load nodes on demand',
    'pageSettings.input.pageTreeStyle.url': 'URL style',
    'pageSettings.input.pageTreeStyle.breadcrumbs': 'Breadcrumbs',
    'pageSettings.baseUrl.help': 'The portals URL are produced from the BASE URL defined in the context file (es.: www.entando.com/ portal/ en/ pagecode.page). RELATIVE when in the generated caused URL omitted the BASE URL (es.: /portal /en / pagecode.page). BUILT BY HTTP REQUEST PARAMETERS when the URL generated from the request takes the parameter generated from the previews request. STATIC when in the generated URL is insert the BASE URL defined in the context file ( es.: www.entando.com/ portal/ en/ pagecode.page)',
    'pageSettings.jsession.help': 'It is a security requisite. Avoid that the JSESSIONID would insert in the generated link from the portal. You must have cookies activted.',
    'pageSettings.appendBaseUrl.help': 'Add the context name to the BASE URL (es.: /portal/) (unused with static BaseURL)',
    'pageSettings.success': 'Page Settings have been updated',
    'dataModel.help': 'The DATA MODELS section lets the admnistrator add new content data or edit those already existing. Entando has a formatting engine based on models used to present the contents (or part of it) to users. Contents data are Velocity templates and, like contents, they are easily managed from the administration Interface.',
    'dataModel.type': 'Type',
    'dataModel.stylesheet': 'Style Sheet',
    'dataModel.model': 'Model',
    'dataType.list.title': 'Data Type',
    'dataType.help': 'The DATA TYPES section let the administrator add new data types or edit those already existing.',
    'dataType.table.status': 'Status',
    'dataType.table.status.0': 'Ok. Reload if you want to.',
    'dataType.table.status.1': 'Reloading. Refresh this page.',
    'dataType.table.status.2': 'Stale status, please reload.',
    'dataType.listEmpty': 'There are no DATA TYPES available',

    'profileType.table.status': 'Status',
    'profileType.table.status.ok': 'Ok. Reload if you want to.',
    'profileType.table.status.ko': 'Stale status, please reload.',
    'profileType.table.status.wip': 'Reloading. Refresh this page.',
    'profileType.listEmpty': 'There are no PROFILE TYPES available',
    'profileType.list.title': 'Profile Type',
    'profileType.help': 'The PROFILE TYPES section let the administrator add new user\'s profile type or edit those already existing.',
    'ProfileType.type': 'Type',

    'pageConfig.saveAsNewWidget': 'Save it as new widget',
    'pageConfig.applyDefaultWidget': 'Apply the default widget',
    'pageConfig.defaultWidgetApplied': 'Default widget applied',
    'pageConfig.onTheFlyPage': 'On-the-fly page',
    'pageModel.error.overlapping': 'Frame "{frame1}" and "{frame2}" are overlapping',
    'pageModel.error.pos': 'Frame "{frame}" "pos" property differs from its index',
    'pageModel.error.sketchX1X2format': 'Frame "{frame}": sketch attributes x1 and x2 must be integers between 0 and 11, with x1 <= x2',
    'pageModel.error.sketchY1Y2format': 'Frame "{frame}": sketch attributes y1 and y2 must be positive integers, with y1 <= y2',
    'pageModel.error.framesArray': 'configuration.frames must be an Array',
    'pageModel.error.configuration': 'configuration is a required Object',
    'user.list.title': 'Users',
    'user.help': 'The USERS section let the administrator manage users list, their profiles, authorizations - assigning roles and groups - and add users.',
    'user.table.status.active': 'Active',
    'user.table.status.disabled': 'Not active',
    'user.table.status.inactive': 'Not active',
    'user.table.username': 'Username',
    'user.table.fullName': 'Full Name',
    'user.table.email': 'Email',
    'user.table.status': 'Status',
    'user.listEmpty': 'There are no USERS available',
    'user.action.manageAuth': 'Manage autorization for: {username}',
    'user.action.editProfile': 'Edit profile of: {username}',
    'user.action.viewProfile': 'View profile of: {username}',
    'user.authority.title': 'Authorizations for {titleParam}',
    'user.authority.groups': 'User Group',
    'user.authority.roles': 'User Role',
    'user.authority.new': 'New authorizations',
    'user.authority.noAuthYet': 'No authorizations yet',
    'user.password': 'Password',
    'user.passwordConfirm': 'Confirm password',
    'user.profileType': 'Profile Type',
    'user.status': 'Status',
    'user.searchForm.users': 'Users',
    'user.username.help': 'You can insert at least 8 - max 20 characters uppercase and lowercase letters, including numbers, \'.\' and  \'_\' special characters.',
    'user.password.help': 'You can insert at least 8 - max 20 characters uppercase and lowercase letters, including numbers, \'.\' and  \'_\' special characters. ',
    'user.validate.text': 'Contains invalid characters. You can use only alphanumeric characters, the dot \'.\' and the underscore \'_\'.',
    'user.registration': 'Registration',
    'user.lastLogin': 'Last login',
    'user.reset': 'Reset',
    'user.lastPasswordChange': 'Last password change',
    'user.restrictions.title': 'User Restrictions',
    'user.restrictions.help': 'The section USER RESTRICTION let the administrator manage a system of expiration date of the users.',
    'user.restrictions.passwordSection': 'Password Expiration',
    'user.restrictions.avatarSection': 'Avatar',
    'user.restrictions.form.active': 'Password Always Active',
    'user.restrictions.form.monthsSinceLastLogin': 'Number of months the password is valid for',
    'user.restrictions.form.maxMonths': 'Number of months the password is valid for, after last access',
    'user.restrictions.form.gravatar': 'Enable Gravatar Integration (Avatar of users)',
    'user.restrictions.form.monthsSinceLastLogin.error': 'This value must be equal to or less than the previous field',
    'user.restrictions.months': 'month(s)',
    'user.restrictions.success': 'User restrictions have been updated',
    'user.myProfile.help': 'The MY PROFILE section let user change the password of his account and manage the profile information.',
    'user.myProfile.passwordSection': 'Change your password',
    'user.myProfile.oldPassword': 'Current password',
    'user.myProfile.newPassword': 'New password',
    'user.myProfile.newPasswordConfirm': 'Confirm the new password',
    'user.myProfile.passwordMismatch': 'The passwords do not match',
    'user.password.success': 'The password has been updated',
    'form.select.chooseOne': 'Choose one option',
    'user.profile.all': 'All',
    'user.profile.with': 'User with a profile',
    'user.profile.without': 'User without a profile',
    'group.help': 'The GROUPS section lets administrators manage existing groups or add new groups.',
    'group.listEmpty': 'There are no GROUPS available',
    'group.name': 'Name',
    'group.code': 'Code',
    'group.name.help': 'You can insert max 50 uppercase and lowercase letters, numbers and special characters.',
    'group.code.help': 'You can insert max 20 characters uppercase and lowercase letters, numbers and \'_\' special character.',
    'database.list.add': 'Create a backup',
    'database.help': 'The DATABASE section lets system administrators create backup and restore the database, if the feature is enabled. It is a very important feature that, if not performed correctly, can result in irreversible data loss.',
    'database.noDatabaseYet': 'No backups available.',
    'database.inProgress': 'Backup in progress',
    'database.gotoList': 'Go to backup list',
    'database.backup': 'Backup now',
    'database.restore': 'Restore backup',
    'database.noTable': 'No table to backup',
    'database.componentName': 'Component Name',
    'database.dumpDate': 'Dump Date',
    'database.datasource': 'Datasource',
    'database.datasourceDetails': 'Datasource Details',
    'labelsAndLanguages.help': 'The LABEL & LANGUAGE section lets you manage labels and languages of the system. Entando supports multilanguage, administrator can add a new language. The first language configured in the system is the default language. Labels are accessories of Entando, mainly used to handle simple semi-static textual information of the application and not associated with particular objects.',
    'label.searchForm.code': 'Search by code',
    'label.searchForm.title': 'Search for existing label',
    'language.selectLanguage': 'Select Language',
    'language.active.listEmpty': 'There are no ACTIVE LANGUAGES available',
    'label.detail.title': 'Labels',
    'labels.code.placeholder': 'code',
    'labels.default.language': 'Default language',
    'modal.confirm.delete': 'Do you really want to delete {code}?',
    'modal.confirm.publish': 'Do you really want to publish {code}?',
    'modal.confirm.unpublish': 'Do you really want to unpublish {code}?',
    'widgetConfig.help': 'The WIDGET CONFIGURATION section lets you configure a widget in a specific frame of a page, through a GUI interface.',
    'widgetConfig.internalServlet.widgetName': 'Internal Servlet',
    'widgetConfig.internalServlet.parameters': 'Parameters',
    'widgetConfig.internalServlet.actionPath': 'actionPath',
    'widgetConfig.internalServlet.actionPath.help': 'Path to an action or to a JSP. You must prepend \'/ExtStr2\' to any Struts2 action path',
    'group.detail.title.users': 'Users',
    'group.detail.title.widgetTypes': 'Widget Types',
    'group.detail.title.contents': 'Contents',
    'group.detail.title.resources': 'Resources',
    'group.page.references.empty': 'There are no referenced pages',
    'group.user.references.empty': 'There are no referenced users',
    'group.widget.references.empty': 'There are no referenced widgets',
    'group.content.references.empty': 'There are no referenced contents',
    'group.resource.references.empty': 'There are no referenced resources',
    'group.action.goto': 'Go to',
    'group.action.pageConfiguration': 'Page configuration',
    'group.action.manageAuthorization': 'Manage authorizations for',
    'group.content.lastEdit': 'Last edit',
    'pageModels.help': 'The PAGE MODELS section lets you manage existing page models or add new. The Page Model defines the page structure. A page model is characterized by two elements: scheme (the division of the page in smaller area called frames) and decoration (the look and feel of the page). Within an Entando application you can configure multiple page models.',
    'pageModels.name.help': 'You can insert max 50 uppercase and lowercase letters, numbers and special characters.',
    'pageModels.code.help': 'You can insert max 40 characters uppercase and lowercase letters, numbers and \'_\' special character.',
    'pageModels.jsonConfiguration': 'JSON Configuration',
    'pageModels.template': 'Template',
    'pageModels.templatePreview': 'Template Preview',
    'pageModels.pluginCode': 'Plugin code',
    'category.help': 'The CATEGORIES section let you manage the category tree and create new categories. Through categories you can classify information; this classification is useful to present aggregated information to final users.',
    'category.tree': 'Categories tree',
    'category.settings': 'Categories settings',
    'category.treeStyle': 'Choose the style of the Category tree',
    'category.treeType.classic': 'Classic',
    'category.treeType.request': 'Load nodes on demand',
    'category.categoryForm.categoryPlacement': 'Tree position',
    'DataType.type': 'Type',
    'role.help': 'The ROLES section let the administrator create and manage the user\'s roles. The roles grant groupings of permissions to various functions within applications.',
    'role.listEmpty': 'There are no ROLES available',
    'role.name.help': 'You can insert max 50 uppercase and lowercase letters, numbers and special characters. ',
    'role.code.help': 'You can insert max 20 characters uppercase and lowercase letters, numbers and ',
    'role.detail.referencedUsers': 'Referenced users',
    'role.detail.noPermissions': 'There are no permissions',
    'permission.listEmpty': 'There are no PERMISSION available',
    'reference.noReferencedUsers': 'There are no referenced users',
    'reference.edit': 'Edit {code}',
    'reference.manageAuthorization': 'Manage authorization for {code}',
    'reference.jacmsContentManager': 'Contents with this category',
    'reference.jacmsResourceManager': 'Resources with this category',
    'reference.DataObjectManager': 'Data Objects with this category',
    'reference.jpcollaborationIdeaManager': 'Ideas with this category',
    'reference.noReferencejacmsContentManager': 'There are no referenced contents',
    'reference.noReferencejacmsResourceManager': 'There are no referenced resources',
    'reference.noReferenceDataObjectManager': 'There are no referenced data object',
    'reference.noReferencejpcollaborationIdeaManager': 'There are no referenced idea',
    'references.referencedPages': 'Referenced pages',
    'reloadConfiguration.title': 'Reload Configuration',
    'reloadConfiguration.help': 'The RELOAD CONFIGURATION section lets you to reload the system configuration. This operation is necessary after modifying some parameters.',
    'reloadConfiguration.reload.title': 'Reload the configuration',
    'reloadConfiguration.reload.confirm': 'Are you sure you want to reload the configuration?',
    'reloadConfiguration.confirm.success': 'The configuration has been reloaded.',
    'reloadConfiguration.confirm.error': 'Something went wrong while reloading the configuration. Try again in a minute.',
    'activityStream.newPage': 'created a new page',
    'activityStream.editPage': 'edited a new page',
    'activityStream.deletePage': 'delete a page',
    'activityStream.onlinePage': 'publish a page',
    'activityStream.offlinePage': 'unpublish a page',
    'activityStream.modifyPage': 'modified a page',
    'activityStream.like': 'Like',
    'reference.text': 'Reload the references for these entity types. Number of type to reload: {count}. ',
    'reference.reload': 'Click {link} to reload all data types.',
  },
};
