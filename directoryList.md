```
|-- MyData
    |-- .DS_Store
    |-- .angular-cli.json
    |-- .editorconfig
    |-- .gitignore
    |-- .htmlhintrc
    |-- .stylelintrc
    |-- .yo-rc.json
    |-- README.md
    |-- browserslist
    |-- karma.conf.js
    |-- package-lock.json
    |-- package.json
    |-- protractor.conf.js
    |-- proxy.conf.js
    |-- tsconfig.json
    |-- tslint.json
    |-- docs
    |   |-- analytics.md
    |   |-- backend-proxy.md
    |   |-- corporate-proxy.md
    |   |-- i18n.md
    |   |-- readme.md
    |   |-- routing.md
    |   |-- updating.md
    |   |-- coding-guides
    |       |-- angular.md
    |       |-- e2e-tests.md
    |       |-- html.md
    |       |-- sass.md
    |       |-- typescript.md
    |       |-- unit-tests.md
    |-- e2e
    |   |-- app.e2e-spec.ts
    |   |-- app.po.ts
    |   |-- tsconfig.e2e.json
    |-- src
        |-- apple-touch-icon.png
        |-- favicon.ico
        |-- index.html
        |-- main.scss
        |-- main.ts
        |-- manifest.json
        |-- ngsw-config.json
        |-- polyfills.ts
        |-- robots.txt
        |-- test.ts
        |-- tsconfig.app.json
        |-- tsconfig.spec.json
        |-- typings.d.ts
        |-- app
        |   |-- app-routing.module.ts
        |   |-- app.component.html
        |   |-- app.component.scss
        |   |-- app.component.spec.ts
        |   |-- app.component.ts
        |   |-- app.module.ts
        |   |-- about
        |   |   |-- about-routing.module.ts
        |   |   |-- about.component.html
        |   |   |-- about.component.scss
        |   |   |-- about.component.spec.ts
        |   |   |-- about.component.ts
        |   |   |-- about.module.ts
        |   |-- core
        |   |   |-- core.module.ts
        |   |   |-- i18n.service.spec.ts
        |   |   |-- i18n.service.ts
        |   |   |-- index.ts
        |   |   |-- logger.service.spec.ts
        |   |   |-- logger.service.ts
        |   |   |-- route-reusable-strategy.ts
        |   |   |-- route.service.spec.ts
        |   |   |-- route.service.ts
        |   |   |-- authentication
        |   |   |   |-- authentication.guard.spec.ts
        |   |   |   |-- authentication.guard.ts
        |   |   |   |-- authentication.service.mock.ts
        |   |   |   |-- authentication.service.spec.ts
        |   |   |   |-- authentication.service.ts
        |   |   |-- http
        |   |   |   |-- api-prefix.interceptor.spec.ts
        |   |   |   |-- api-prefix.interceptor.ts
        |   |   |   |-- cache.interceptor.spec.ts
        |   |   |   |-- cache.interceptor.ts
        |   |   |   |-- error-handler.interceptor.spec.ts
        |   |   |   |-- error-handler.interceptor.ts
        |   |   |   |-- http-cache.service.spec.ts
        |   |   |   |-- http-cache.service.ts
        |   |   |   |-- http.service.spec.ts
        |   |   |   |-- http.service.ts
        |   |   |-- shell
        |   |       |-- shell.component.html
        |   |       |-- shell.component.scss
        |   |       |-- shell.component.spec.ts
        |   |       |-- shell.component.ts
        |   |       |-- header
        |   |           |-- header.component.html
        |   |           |-- header.component.scss
        |   |           |-- header.component.spec.ts
        |   |           |-- header.component.ts
        |   |-- home
        |   |   |-- home-routing.module.ts
        |   |   |-- home.component.html
        |   |   |-- home.component.scss
        |   |   |-- home.component.spec.ts
        |   |   |-- home.component.ts
        |   |   |-- home.module.ts
        |   |   |-- quote.service.spec.ts
        |   |   |-- quote.service.ts
        |   |-- layout
        |   |   |-- admin
        |   |   |   |-- admin.component.html
        |   |   |   |-- admin.component.scss
        |   |   |   |-- admin.component.spec.ts
        |   |   |   |-- admin.component.ts
        |   |   |   |-- breadcrumbs
        |   |   |   |   |-- breadcrumbs.component.css
        |   |   |   |   |-- breadcrumbs.component.html
        |   |   |   |   |-- breadcrumbs.component.ts
        |   |   |   |-- title
        |   |   |       |-- title.component.ts
        |   |   |-- auth
        |   |       |-- auth.component.html
        |   |       |-- auth.component.scss
        |   |       |-- auth.component.spec.ts
        |   |       |-- auth.component.ts
        |   |-- login
        |   |   |-- login-routing.module.ts
        |   |   |-- login.component.html
        |   |   |-- login.component.scss
        |   |   |-- login.component.spec.ts
        |   |   |-- login.component.ts
        |   |   |-- login.module.ts
        |   |-- shared
        |   |   |-- index.ts
        |   |   |-- shared.module.ts
        |   |   |-- accordion
        |   |   |   |-- accordion.directive.js
        |   |   |   |-- accordion.directive.ts
        |   |   |   |-- accordionanchor.directive.js
        |   |   |   |-- accordionanchor.directive.ts
        |   |   |   |-- accordionlink.directive.js
        |   |   |   |-- accordionlink.directive.ts
        |   |   |   |-- index.js
        |   |   |   |-- index.ts
        |   |   |-- card
        |   |   |   |-- card-animation.js
        |   |   |   |-- card-animation.ts
        |   |   |   |-- card-toggle.directive.js
        |   |   |   |-- card-toggle.directive.ts
        |   |   |   |-- card.component.html
        |   |   |   |-- card.component.js
        |   |   |   |-- card.component.scss
        |   |   |   |-- card.component.ts
        |   |   |-- elements
        |   |   |   |-- select-option.service.ts
        |   |   |-- fullscreen
        |   |   |   |-- toggle-fullscreen.directive.js
        |   |   |   |-- toggle-fullscreen.directive.ts
        |   |   |-- loader
        |   |   |   |-- loader.component.html
        |   |   |   |-- loader.component.scss
        |   |   |   |-- loader.component.spec.ts
        |   |   |   |-- loader.component.ts
        |   |   |-- menu-items
        |   |   |   |-- menu-items.js
        |   |   |   |-- menu-items.ts
        |   |   |-- modal-animation
        |   |   |   |-- modal-animation.component.html
        |   |   |   |-- modal-animation.component.scss
        |   |   |   |-- modal-animation.component.ts
        |   |   |-- modal-basic
        |   |   |   |-- modal-basic.component.html
        |   |   |   |-- modal-basic.component.scss
        |   |   |   |-- modal-basic.component.ts
        |   |   |-- spinner
        |   |       |-- spinkits.ts
        |   |       |-- spinner.component.html
        |   |       |-- spinner.component.scss
        |   |       |-- spinner.component.ts
        |   |       |-- spinkit-css
        |   |           |-- sk-line-material.scss
        |   |-- theme
        |       |-- .DS_Store
        |       |-- auth
        |       |   |-- auth-routing.module.ts
        |       |   |-- auth.module.ts
        |       |   |-- forgot
        |       |   |   |-- forgot-routing.module.ts
        |       |   |   |-- forgot.component.html
        |       |   |   |-- forgot.component.scss
        |       |   |   |-- forgot.component.spec.ts
        |       |   |   |-- forgot.component.ts
        |       |   |   |-- forgot.module.ts
        |       |   |-- lock-screen
        |       |   |   |-- lock-screen-routing.module.ts
        |       |   |   |-- lock-screen.component.html
        |       |   |   |-- lock-screen.component.scss
        |       |   |   |-- lock-screen.component.spec.ts
        |       |   |   |-- lock-screen.component.ts
        |       |   |   |-- lock-screen.module.ts
        |       |   |-- login
        |       |   |   |-- login-routing.module.ts
        |       |   |   |-- login.module.ts
        |       |   |   |-- basic-login
        |       |   |   |   |-- basic-login-routing.module.ts
        |       |   |   |   |-- basic-login.component.html
        |       |   |   |   |-- basic-login.component.scss
        |       |   |   |   |-- basic-login.component.spec.ts
        |       |   |   |   |-- basic-login.component.ts
        |       |   |   |   |-- basic-login.module.ts
        |       |   |   |-- header-footer-login
        |       |   |   |   |-- header-footer-login-routing.module.ts
        |       |   |   |   |-- header-footer-login.component.html
        |       |   |   |   |-- header-footer-login.component.scss
        |       |   |   |   |-- header-footer-login.component.spec.ts
        |       |   |   |   |-- header-footer-login.component.ts
        |       |   |   |   |-- header-footer-login.module.ts
        |       |   |   |-- social-header-footer-login
        |       |   |   |   |-- social-header-footer-login-routing.module.ts
        |       |   |   |   |-- social-header-footer-login.component.html
        |       |   |   |   |-- social-header-footer-login.component.scss
        |       |   |   |   |-- social-header-footer-login.component.spec.ts
        |       |   |   |   |-- social-header-footer-login.component.ts
        |       |   |   |   |-- social-header-footer-login.module.ts
        |       |   |   |-- social-login
        |       |   |       |-- social-login-routing.module.ts
        |       |   |       |-- social-login.component.html
        |       |   |       |-- social-login.component.scss
        |       |   |       |-- social-login.component.spec.ts
        |       |   |       |-- social-login.component.ts
        |       |   |       |-- social-login.module.ts
        |       |   |-- registration
        |       |       |-- registration-routing.module.ts
        |       |       |-- registration.module.ts
        |       |       |-- basic-reg
        |       |       |   |-- basic-reg-routing.module.ts
        |       |       |   |-- basic-reg.component.html
        |       |       |   |-- basic-reg.component.scss
        |       |       |   |-- basic-reg.component.spec.ts
        |       |       |   |-- basic-reg.component.ts
        |       |       |   |-- basic-reg.module.ts
        |       |       |-- header-footer-reg
        |       |       |   |-- header-footer-reg-routing.module.ts
        |       |       |   |-- header-footer-reg.component.html
        |       |       |   |-- header-footer-reg.component.scss
        |       |       |   |-- header-footer-reg.component.spec.ts
        |       |       |   |-- header-footer-reg.component.ts
        |       |       |   |-- header-footer-reg.module.ts
        |       |       |-- social-header-footer-reg
        |       |       |   |-- social-header-footer-reg-routing.module.ts
        |       |       |   |-- social-header-footer-reg.component.html
        |       |       |   |-- social-header-footer-reg.component.scss
        |       |       |   |-- social-header-footer-reg.component.spec.ts
        |       |       |   |-- social-header-footer-reg.component.ts
        |       |       |   |-- social-header-footer-reg.module.ts
        |       |       |-- social-reg
        |       |           |-- social-reg-routing.module.ts
        |       |           |-- social-reg.component.html
        |       |           |-- social-reg.component.scss
        |       |           |-- social-reg.component.spec.ts
        |       |           |-- social-reg.component.ts
        |       |           |-- social-reg.module.ts
        |       |-- chart
        |       |   |-- chart-routing.module.ts
        |       |   |-- chart.module.ts
        |       |   |-- c3-js
        |       |   |   |-- c3-js-routing.module.ts
        |       |   |   |-- c3-js.component.html
        |       |   |   |-- c3-js.component.scss
        |       |   |   |-- c3-js.component.spec.ts
        |       |   |   |-- c3-js.component.ts
        |       |   |   |-- c3-js.module.ts
        |       |   |-- chart-js
        |       |   |   |-- chart-js-routing.module.ts
        |       |   |   |-- chart-js.component.html
        |       |   |   |-- chart-js.component.scss
        |       |   |   |-- chart-js.component.spec.ts
        |       |   |   |-- chart-js.component.ts
        |       |   |   |-- chart-js.module.ts
        |       |   |-- google-chart
        |       |   |   |-- google-chart-routing.module.ts
        |       |   |   |-- google-chart.component.html
        |       |   |   |-- google-chart.component.scss
        |       |   |   |-- google-chart.component.spec.ts
        |       |   |   |-- google-chart.component.ts
        |       |   |   |-- google-chart.module.ts
        |       |   |-- radial
        |       |       |-- radial-routing.module.ts
        |       |       |-- radial.component.html
        |       |       |-- radial.component.scss
        |       |       |-- radial.component.spec.ts
        |       |       |-- radial.component.ts
        |       |       |-- radial.module.ts
        |       |-- dashboard
        |       |   |-- dashboard-routing.module.ts
        |       |   |-- dashboard.module.ts
        |       |   |-- analytics
        |       |   |   |-- analytics-routing.module.ts
        |       |   |   |-- analytics.component.html
        |       |   |   |-- analytics.component.scss
        |       |   |   |-- analytics.component.spec.ts
        |       |   |   |-- analytics.component.ts
        |       |   |   |-- analytics.module.ts
        |       |   |-- crm-dashboard
        |       |   |   |-- crm-dashboard-routing.module.ts
        |       |   |   |-- crm-dashboard.component.html
        |       |   |   |-- crm-dashboard.component.scss
        |       |   |   |-- crm-dashboard.component.spec.ts
        |       |   |   |-- crm-dashboard.component.ts
        |       |   |   |-- crm-dashboard.module.ts
        |       |   |-- default
        |       |   |   |-- default-routing.module.ts
        |       |   |   |-- default.component.html
        |       |   |   |-- default.component.scss
        |       |   |   |-- default.component.spec.ts
        |       |   |   |-- default.component.ts
        |       |   |   |-- default.module.ts
        |       |   |-- ecommerce
        |       |   |   |-- ecommerce-routing.module.ts
        |       |   |   |-- ecommerce.component.html
        |       |   |   |-- ecommerce.component.scss
        |       |   |   |-- ecommerce.component.spec.ts
        |       |   |   |-- ecommerce.component.ts
        |       |   |   |-- ecommerce.module.ts
        |       |   |-- project
        |       |       |-- project-routing.module.ts
        |       |       |-- project.component.html
        |       |       |-- project.component.scss
        |       |       |-- project.component.spec.ts
        |       |       |-- project.component.ts
        |       |       |-- project.module.ts
        |       |-- extension
        |       |   |-- file-upload-ui
        |       |   |   |-- file-upload-ui-routing.module.ts
        |       |   |   |-- file-upload-ui.component.html
        |       |   |   |-- file-upload-ui.component.scss
        |       |   |   |-- file-upload-ui.component.spec.ts
        |       |   |   |-- file-upload-ui.component.ts
        |       |   |   |-- file-upload-ui.module.ts
        |       |   |-- invoice
        |       |       |-- invoice-routing.module.ts
        |       |       |-- invoice.module.ts
        |       |       |-- basic-invoice
        |       |       |   |-- basic-invoice-routing.module.ts
        |       |       |   |-- basic-invoice.component.html
        |       |       |   |-- basic-invoice.component.scss
        |       |       |   |-- basic-invoice.component.spec.ts
        |       |       |   |-- basic-invoice.component.ts
        |       |       |   |-- basic-invoice.module.ts
        |       |       |-- invoice-list
        |       |       |   |-- invoice-list-routing.module.ts
        |       |       |   |-- invoice-list.component.html
        |       |       |   |-- invoice-list.component.scss
        |       |       |   |-- invoice-list.component.spec.ts
        |       |       |   |-- invoice-list.component.ts
        |       |       |   |-- invoice-list.module.ts
        |       |       |-- invoice-summary
        |       |           |-- invoice-summary-routing.module.ts
        |       |           |-- invoice-summary.component.html
        |       |           |-- invoice-summary.component.scss
        |       |           |-- invoice-summary.component.spec.ts
        |       |           |-- invoice-summary.component.ts
        |       |           |-- invoice-summary.module.ts
        |       |-- forms
        |       |   |-- forms-routing.module.ts
        |       |   |-- forms.module.ts
        |       |   |-- add-on
        |       |   |   |-- add-on-routing.module.ts
        |       |   |   |-- add-on.component.html
        |       |   |   |-- add-on.component.scss
        |       |   |   |-- add-on.component.spec.ts
        |       |   |   |-- add-on.component.ts
        |       |   |   |-- add-on.module.ts
        |       |   |-- advance-elements
        |       |   |   |-- advance-elements-routing.module.ts
        |       |   |   |-- advance-elements.component.html
        |       |   |   |-- advance-elements.component.scss
        |       |   |   |-- advance-elements.component.spec.ts
        |       |   |   |-- advance-elements.component.ts
        |       |   |   |-- advance-elements.module.ts
        |       |   |-- basic-elements
        |       |   |   |-- basic-elements-routing.module.ts
        |       |   |   |-- basic-elements.component.html
        |       |   |   |-- basic-elements.component.scss
        |       |   |   |-- basic-elements.component.spec.ts
        |       |   |   |-- basic-elements.component.ts
        |       |   |   |-- basic-elements.module.ts
        |       |   |-- form-picker
        |       |   |   |-- form-picker-routing.module.ts
        |       |   |   |-- form-picker.component.html
        |       |   |   |-- form-picker.component.scss
        |       |   |   |-- form-picker.component.spec.ts
        |       |   |   |-- form-picker.component.ts
        |       |   |   |-- form-picker.module.ts
        |       |   |-- form-select
        |       |   |   |-- form-select-routing.module.ts
        |       |   |   |-- form-select.component.html
        |       |   |   |-- form-select.component.scss
        |       |   |   |-- form-select.component.spec.ts
        |       |   |   |-- form-select.component.ts
        |       |   |   |-- form-select.module.ts
        |       |   |-- form-validation
        |       |       |-- form-validation-routing.module.ts
        |       |       |-- form-validation.component.html
        |       |       |-- form-validation.component.scss
        |       |       |-- form-validation.component.spec.ts
        |       |       |-- form-validation.component.ts
        |       |       |-- form-validation.module.ts
        |       |-- maintenance
        |       |   |-- coming-soon
        |       |   |   |-- coming-soon-routing.module.ts
        |       |   |   |-- coming-soon.component.html
        |       |   |   |-- coming-soon.component.scss
        |       |   |   |-- coming-soon.component.spec.ts
        |       |   |   |-- coming-soon.component.ts
        |       |   |   |-- coming-soon.module.ts
        |       |   |-- error
        |       |   |   |-- error-routing.module.ts
        |       |   |   |-- error.component.html
        |       |   |   |-- error.component.scss
        |       |   |   |-- error.component.spec.ts
        |       |   |   |-- error.component.ts
        |       |   |   |-- error.module.ts
        |       |   |-- offline-ui
        |       |       |-- offline-ui-routing.module.ts
        |       |       |-- offline-ui.component.html
        |       |       |-- offline-ui.component.scss
        |       |       |-- offline-ui.component.spec.ts
        |       |       |-- offline-ui.component.ts
        |       |       |-- offline-ui.module.ts
        |       |-- map
        |       |   |-- map-routing.module.ts
        |       |   |-- map.module.ts
        |       |   |-- google-map
        |       |       |-- google-map-routing.module.ts
        |       |       |-- google-map.component.html
        |       |       |-- google-map.component.scss
        |       |       |-- google-map.component.spec.ts
        |       |       |-- google-map.component.ts
        |       |       |-- google-map.module.ts
        |       |-- navigation
        |       |   |-- navigation-routing.module.ts
        |       |   |-- navigation.component.html
        |       |   |-- navigation.component.scss
        |       |   |-- navigation.component.spec.ts
        |       |   |-- navigation.component.ts
        |       |   |-- navigation.module.ts
        |       |-- simple-page
        |       |   |-- simple-page-routing.module.ts
        |       |   |-- simple-page.component.html
        |       |   |-- simple-page.component.scss
        |       |   |-- simple-page.component.spec.ts
        |       |   |-- simple-page.component.ts
        |       |   |-- simple-page.module.ts
        |       |-- table
        |       |   |-- bootstrap-table
        |       |   |   |-- bootstrap-table-routing.module.ts
        |       |   |   |-- bootstrap-table.module.ts
        |       |   |   |-- border
        |       |   |   |   |-- border-routing.module.ts
        |       |   |   |   |-- border.component.html
        |       |   |   |   |-- border.component.scss
        |       |   |   |   |-- border.component.spec.ts
        |       |   |   |   |-- border.component.ts
        |       |   |   |   |-- border.module.ts
        |       |   |   |-- sizing
        |       |   |   |   |-- sizing-routing.module.ts
        |       |   |   |   |-- sizing.component.html
        |       |   |   |   |-- sizing.component.scss
        |       |   |   |   |-- sizing.component.spec.ts
        |       |   |   |   |-- sizing.component.ts
        |       |   |   |   |-- sizing.module.ts
        |       |   |   |-- styling
        |       |   |   |   |-- styling-routing.module.ts
        |       |   |   |   |-- styling.component.html
        |       |   |   |   |-- styling.component.scss
        |       |   |   |   |-- styling.component.spec.ts
        |       |   |   |   |-- styling.component.ts
        |       |   |   |   |-- styling.module.ts
        |       |   |   |-- table-basic
        |       |   |       |-- table-basic-routing.module.ts
        |       |   |       |-- table-basic.component.html
        |       |   |       |-- table-basic.component.scss
        |       |   |       |-- table-basic.component.spec.ts
        |       |   |       |-- table-basic.component.ts
        |       |   |       |-- table-basic.module.ts
        |       |   |-- data-table
        |       |       |-- data-table-routing.module.ts
        |       |       |-- data-table.module.ts
        |       |       |-- paging
        |       |       |   |-- paging-routing.module.ts
        |       |       |   |-- paging.component.html
        |       |       |   |-- paging.component.scss
        |       |       |   |-- paging.component.spec.ts
        |       |       |   |-- paging.component.ts
        |       |       |   |-- paging.module.ts
        |       |       |-- row-details
        |       |       |   |-- row-details-routing.module.ts
        |       |       |   |-- row-details.component.html
        |       |       |   |-- row-details.component.scss
        |       |       |   |-- row-details.component.spec.ts
        |       |       |   |-- row-details.component.ts
        |       |       |   |-- row-details.module.ts
        |       |       |-- selection
        |       |       |   |-- selection-routing.module.ts
        |       |       |   |-- selection.component.html
        |       |       |   |-- selection.component.scss
        |       |       |   |-- selection.component.spec.ts
        |       |       |   |-- selection.component.ts
        |       |       |   |-- selection.module.ts
        |       |       |   |-- cell
        |       |       |   |   |-- cell.component.html
        |       |       |   |   |-- cell.component.scss
        |       |       |   |   |-- cell.component.spec.ts
        |       |       |   |   |-- cell.component.ts
        |       |       |   |-- checkbox
        |       |       |   |   |-- checkbox.component.html
        |       |       |   |   |-- checkbox.component.scss
        |       |       |   |   |-- checkbox.component.spec.ts
        |       |       |   |   |-- checkbox.component.ts
        |       |       |   |-- multi-rows
        |       |       |   |   |-- multi-rows.component.html
        |       |       |   |   |-- multi-rows.component.scss
        |       |       |   |   |-- multi-rows.component.spec.ts
        |       |       |   |   |-- multi-rows.component.ts
        |       |       |   |-- single-row
        |       |       |       |-- single-row.component.html
        |       |       |       |-- single-row.component.scss
        |       |       |       |-- single-row.component.spec.ts
        |       |       |       |-- single-row.component.ts
        |       |       |-- table-basic-data
        |       |       |   |-- table-basic-data-routing.module.ts
        |       |       |   |-- table-basic-data.component.html
        |       |       |   |-- table-basic-data.component.scss
        |       |       |   |-- table-basic-data.component.spec.ts
        |       |       |   |-- table-basic-data.component.ts
        |       |       |   |-- table-basic-data.module.ts
        |       |       |-- table-edit
        |       |           |-- table-edit-routing.module.ts
        |       |           |-- table-edit.component.html
        |       |           |-- table-edit.component.scss
        |       |           |-- table-edit.component.spec.ts
        |       |           |-- table-edit.component.ts
        |       |           |-- table-edit.module.ts
        |       |-- task
        |       |   |-- task-routing.module.ts
        |       |   |-- task.module.ts
        |       |   |-- task-board
        |       |   |   |-- task-board-routing.module.ts
        |       |   |   |-- task-board.component.html
        |       |   |   |-- task-board.component.scss
        |       |   |   |-- task-board.component.spec.ts
        |       |   |   |-- task-board.component.ts
        |       |   |   |-- task-board.module.ts
        |       |   |-- task-details
        |       |   |   |-- task-details-routing.module.ts
        |       |   |   |-- task-details.component.html
        |       |   |   |-- task-details.component.scss
        |       |   |   |-- task-details.component.spec.ts
        |       |   |   |-- task-details.component.ts
        |       |   |   |-- task-details.module.ts
        |       |   |-- task-issue
        |       |   |   |-- task-issue-routing.module.ts
        |       |   |   |-- task-issue.component.html
        |       |   |   |-- task-issue.component.scss
        |       |   |   |-- task-issue.component.spec.ts
        |       |   |   |-- task-issue.component.ts
        |       |   |   |-- task-issue.module.ts
        |       |   |-- task-list
        |       |       |-- task-list-routing.module.ts
        |       |       |-- task-list.component.html
        |       |       |-- task-list.component.scss
        |       |       |-- task-list.component.spec.ts
        |       |       |-- task-list.component.ts
        |       |       |-- task-list.module.ts
        |       |-- ui-elements
        |       |   |-- advance
        |       |   |   |-- advance-routing.module.ts
        |       |   |   |-- advance.module.ts
        |       |   |   |-- carousel
        |       |   |   |   |-- carousel-routing.module.ts
        |       |   |   |   |-- carousel.component.html
        |       |   |   |   |-- carousel.component.scss
        |       |   |   |   |-- carousel.component.spec.ts
        |       |   |   |   |-- carousel.component.ts
        |       |   |   |   |-- carousel.module.ts
        |       |   |   |-- modal
        |       |   |   |   |-- modal-routing.module.ts
        |       |   |   |   |-- modal.component.html
        |       |   |   |   |-- modal.component.scss
        |       |   |   |   |-- modal.component.spec.ts
        |       |   |   |   |-- modal.component.ts
        |       |   |   |   |-- modal.module.ts
        |       |   |   |-- notification
        |       |   |   |   |-- notification-routing.module.ts
        |       |   |   |   |-- notification.component.html
        |       |   |   |   |-- notification.component.scss
        |       |   |   |   |-- notification.component.spec.ts
        |       |   |   |   |-- notification.component.ts
        |       |   |   |   |-- notification.module.ts
        |       |   |   |-- notify
        |       |   |   |   |-- notify-routing.module.ts
        |       |   |   |   |-- notify.component.html
        |       |   |   |   |-- notify.component.scss
        |       |   |   |   |-- notify.component.spec.ts
        |       |   |   |   |-- notify.component.ts
        |       |   |   |   |-- notify.module.ts
        |       |   |   |-- rating
        |       |   |       |-- rating-routing.module.ts
        |       |   |       |-- rating.component.html
        |       |   |       |-- rating.component.scss
        |       |   |       |-- rating.component.spec.ts
        |       |   |       |-- rating.component.ts
        |       |   |       |-- rating.module.ts
        |       |   |-- animation
        |       |   |   |-- animation-routing.module.ts
        |       |   |   |-- animation.component.html
        |       |   |   |-- animation.component.scss
        |       |   |   |-- animation.component.spec.ts
        |       |   |   |-- animation.component.ts
        |       |   |   |-- animation.module.ts
        |       |   |-- basic
        |       |       |-- basic-routing.module.ts
        |       |       |-- basic.module.ts
        |       |       |-- accordion
        |       |       |   |-- accordion-routing.module.ts
        |       |       |   |-- accordion.component.html
        |       |       |   |-- accordion.component.scss
        |       |       |   |-- accordion.component.spec.ts
        |       |       |   |-- accordion.component.ts
        |       |       |   |-- accordion.module.ts
        |       |       |-- alert
        |       |       |   |-- alert-routing.module.ts
        |       |       |   |-- alert.component.html
        |       |       |   |-- alert.component.scss
        |       |       |   |-- alert.component.spec.ts
        |       |       |   |-- alert.component.ts
        |       |       |   |-- alert.module.ts
        |       |       |-- basic-color
        |       |       |   |-- basic-color-routing.module.ts
        |       |       |   |-- basic-color.component.html
        |       |       |   |-- basic-color.component.scss
        |       |       |   |-- basic-color.component.spec.ts
        |       |       |   |-- basic-color.component.ts
        |       |       |   |-- basic-color.module.ts
        |       |       |-- basic-list
        |       |       |   |-- basic-list-routing.module.ts
        |       |       |   |-- basic-list.component.html
        |       |       |   |-- basic-list.component.scss
        |       |       |   |-- basic-list.component.spec.ts
        |       |       |   |-- basic-list.component.ts
        |       |       |   |-- basic-list.module.ts
        |       |       |-- basic-other
        |       |       |   |-- basic-other-routing.module.ts
        |       |       |   |-- basic-other.component.html
        |       |       |   |-- basic-other.component.scss
        |       |       |   |-- basic-other.component.spec.ts
        |       |       |   |-- basic-other.component.ts
        |       |       |   |-- basic-other.module.ts
        |       |       |-- box-shadow
        |       |       |   |-- box-shadow-routing.module.ts
        |       |       |   |-- box-shadow.component.html
        |       |       |   |-- box-shadow.component.scss
        |       |       |   |-- box-shadow.component.spec.ts
        |       |       |   |-- box-shadow.component.ts
        |       |       |   |-- box-shadow.module.ts
        |       |       |-- breadcrumb
        |       |       |   |-- breadcrumb-routing.module.ts
        |       |       |   |-- breadcrumb.component.html
        |       |       |   |-- breadcrumb.component.scss
        |       |       |   |-- breadcrumb.component.spec.ts
        |       |       |   |-- breadcrumb.component.ts
        |       |       |   |-- breadcrumb.module.ts
        |       |       |-- button
        |       |       |   |-- button-routing.module.ts
        |       |       |   |-- button.component.html
        |       |       |   |-- button.component.scss
        |       |       |   |-- button.component.spec.ts
        |       |       |   |-- button.component.ts
        |       |       |   |-- button.module.ts
        |       |       |-- generic-class
        |       |       |   |-- generic-class-routing.module.ts
        |       |       |   |-- generic-class.component.html
        |       |       |   |-- generic-class.component.scss
        |       |       |   |-- generic-class.component.spec.ts
        |       |       |   |-- generic-class.component.ts
        |       |       |   |-- generic-class.module.ts
        |       |       |-- label-badge
        |       |       |   |-- label-badge-routing.module.ts
        |       |       |   |-- label-badge.component.html
        |       |       |   |-- label-badge.component.scss
        |       |       |   |-- label-badge.component.spec.ts
        |       |       |   |-- label-badge.component.ts
        |       |       |   |-- label-badge.module.ts
        |       |       |-- pre-loader
        |       |       |   |-- pre-loader-routing.module.ts
        |       |       |   |-- pre-loader.component.html
        |       |       |   |-- pre-loader.component.scss
        |       |       |   |-- pre-loader.component.spec.ts
        |       |       |   |-- pre-loader.component.ts
        |       |       |   |-- pre-loader.module.ts
        |       |       |-- progressbar
        |       |       |   |-- progressbar-routing.module.ts
        |       |       |   |-- progressbar.component.html
        |       |       |   |-- progressbar.component.scss
        |       |       |   |-- progressbar.component.spec.ts
        |       |       |   |-- progressbar.component.ts
        |       |       |   |-- progressbar.module.ts
        |       |       |-- tabs
        |       |       |   |-- tabs-routing.module.ts
        |       |       |   |-- tabs.component.html
        |       |       |   |-- tabs.component.scss
        |       |       |   |-- tabs.component.spec.ts
        |       |       |   |-- tabs.component.ts
        |       |       |   |-- tabs.module.ts
        |       |       |-- tooltip
        |       |       |   |-- tooltip-routing.module.ts
        |       |       |   |-- tooltip.component.html
        |       |       |   |-- tooltip.component.scss
        |       |       |   |-- tooltip.component.spec.ts
        |       |       |   |-- tooltip.component.ts
        |       |       |   |-- tooltip.module.ts
        |       |       |-- typography
        |       |           |-- typography-routing.module.ts
        |       |           |-- typography.component.html
        |       |           |-- typography.component.scss
        |       |           |-- typography.component.spec.ts
        |       |           |-- typography.component.ts
        |       |           |-- typography.module.ts
        |       |-- user
        |       |   |-- user-routing.module.ts
        |       |   |-- user.module.ts
        |       |   |-- user-card
        |       |   |   |-- user-card-routing.module.ts
        |       |   |   |-- user-card.component.html
        |       |   |   |-- user-card.component.scss
        |       |   |   |-- user-card.component.spec.ts
        |       |   |   |-- user-card.component.ts
        |       |   |   |-- user-card.module.ts
        |       |   |-- user-profile
        |       |       |-- user-profile-routing.module.ts
        |       |       |-- user-profile.component.html
        |       |       |-- user-profile.component.scss
        |       |       |-- user-profile.component.spec.ts
        |       |       |-- user-profile.component.ts
        |       |       |-- user-profile.module.ts
        |       |-- widget
        |           |-- .DS_Store
        |           |-- widget-routing.module.ts
        |           |-- widget.module.ts
        |           |-- advance-widget
        |           |   |-- advance-widget-routing.module.ts
        |           |   |-- advance-widget.component.html
        |           |   |-- advance-widget.component.scss
        |           |   |-- advance-widget.component.spec.ts
        |           |   |-- advance-widget.component.ts
        |           |   |-- advance-widget.module.ts
        |           |-- chart-widget
        |           |   |-- chart-widget-routing.module.ts
        |           |   |-- chart-widget.component.html
        |           |   |-- chart-widget.component.scss
        |           |   |-- chart-widget.component.spec.ts
        |           |   |-- chart-widget.component.ts
        |           |   |-- chart-widget.module.ts
        |           |-- data-widget
        |           |   |-- data-widget-routing.module.ts
        |           |   |-- data-widget.component.html
        |           |   |-- data-widget.component.scss
        |           |   |-- data-widget.component.spec.ts
        |           |   |-- data-widget.component.ts
        |           |   |-- data-widget.module.ts
        |           |-- statistic
        |               |-- statistic-routing.module.ts
        |               |-- statistic.component.html
        |               |-- statistic.component.scss
        |               |-- statistic.component.spec.ts
        |               |-- statistic.component.ts
        |               |-- statistic.module.ts
        |-- assets
        |   |-- ngx-rocket-logo.png
        |   |-- charts
        |   |   |-- amchart
        |   |   |   |-- amcharts.js
        |   |   |   |-- ammap.js
        |   |   |   |-- continentsLow.js
        |   |   |   |-- gauge.js
        |   |   |   |-- light.js
        |   |   |   |-- pie.js
        |   |   |   |-- serial.js
        |   |   |   |-- usaLow.js
        |   |   |   |-- worldLow.js
        |   |   |   |-- images
        |   |   |       |-- dragIconRoundBig.svg
        |   |   |       |-- lens.svg
        |   |   |-- echart
        |   |   |   |-- echarts-all.js
        |   |   |-- float
        |   |   |   |-- curvedLines.js
        |   |   |   |-- float-chart-custom.js
        |   |   |   |-- jquery.flot.categories.js
        |   |   |   |-- jquery.flot.js
        |   |   |   |-- jquery.flot.pie.js
        |   |   |   |-- jquery.flot.tooltip.min.js
        |   |   |-- radial
        |   |       |-- css
        |   |           |-- radial.scss
        |   |-- data
        |   |   |-- 100k.json
        |   |   |-- basic.json
        |   |   |-- company.json
        |   |   |-- crm-contact.json
        |   |   |-- data.json
        |   |   |-- fullscreen.json
        |   |   |-- issue-list.json
        |   |   |-- task-list.json
        |   |-- icon
        |   |   |-- feather
        |   |   |   |-- css
        |   |   |   |   |-- feather.css
        |   |   |   |-- fonts
        |   |   |       |-- feather.eot
        |   |   |       |-- feather.svg
        |   |   |       |-- feather.ttf
        |   |   |       |-- feather.woff
        |   |   |-- icofont
        |   |       |-- css
        |   |       |   |-- icofont.scss
        |   |       |-- fonts
        |   |           |-- icofont.eot
        |   |           |-- icofont.svg
        |   |           |-- icofont.ttf
        |   |           |-- icofont.woff
        |   |-- images
        |       |-- animate.jpg
        |       |-- avatar-1.jpg
        |       |-- avatar-2.jpg
        |       |-- avatar-3.jpg
        |       |-- avatar-4.jpg
        |       |-- avatar-5.jpg
        |       |-- avatar-6.jpg
        |       |-- avatar-7.jpg
        |       |-- avatar-blank.jpg
        |       |-- breadcrumb-bg.jpg
        |       |-- chat-bg.jpg
        |       |-- complete.png
        |       |-- details_close.png
        |       |-- details_open.png
        |       |-- logo-blue.png
        |       |-- logo.png
        |       |-- navbar-img-1.jpg
        |       |-- navbar-img-2.jpg
        |       |-- navbar-img-3.jpg
        |       |-- navbar-img-4.jpg
        |       |-- navbar-img-5.jpg
        |       |-- navbar-img-6.jpg
        |       |-- select-arrow.png
        |       |-- user-bg.jpg
        |       |-- auth
        |       |   |-- Logo-small-bottom.png
        |       |   |-- logo-dark.png
        |       |   |-- logo.png
        |       |-- blog
        |       |   |-- blog-130.png
        |       |   |-- blog-r-1.jpg
        |       |   |-- blog-r-2.jpg
        |       |   |-- blog-r-3.jpg
        |       |   |-- blog-single-1.jpg
        |       |   |-- blog-single.jpg
        |       |   |-- blog-small-bg-1.png
        |       |   |-- st_gallery1.jpg
        |       |   |-- st_gallery2.jpg
        |       |   |-- st_gallery3.jpg
        |       |-- coming-soon
        |       |   |-- cs-1.jpg
        |       |   |-- cs-2.jpg
        |       |-- error
        |       |   |-- error-1.jpg
        |       |   |-- error-2.jpg
        |       |   |-- error-3.jpg
        |       |   |-- error-4.jpg
        |       |   |-- error-5.jpg
        |       |   |-- error-6.jpg
        |       |-- mega-menu
        |       |   |-- 01.jpg
        |       |   |-- 02.jpg
        |       |   |-- 03.jpg
        |       |-- modal
        |       |   |-- overflow.jpg
        |       |-- nav-bar
        |       |   |-- nav1.jpg
        |       |   |-- nav2.jpg
        |       |   |-- nav3.jpg
        |       |   |-- nav4.jpg
        |       |   |-- nav5.jpg
        |       |   |-- nav6.jpg
        |       |-- product
        |       |   |-- p1.jpg
        |       |   |-- p2.jpg
        |       |   |-- p3.jpg
        |       |   |-- p4.jpg
        |       |   |-- prod1.jpg
        |       |   |-- prod1.png
        |       |   |-- prod2.jpg
        |       |   |-- prod2.png
        |       |   |-- prod3.jpg
        |       |   |-- prod3.png
        |       |   |-- prod4.jpg
        |       |   |-- prod4.png
        |       |   |-- prod5.png
        |       |   |-- prod6.png
        |       |   |-- prod7.png
        |       |   |-- prod8.png
        |       |   |-- prod9.png
        |       |-- slider
        |       |   |-- slide1.jpg
        |       |   |-- slide2.jpg
        |       |   |-- slide3.jpg
        |       |   |-- slide4.jpg
        |       |   |-- slider5.jpg
        |       |   |-- slider6.jpg
        |       |   |-- slider7.jpg
        |       |   |-- slider8.jpg
        |       |-- task
        |       |   |-- task-u1.jpg
        |       |   |-- task-u2.jpg
        |       |   |-- task-u3.jpg
        |       |   |-- task-u4.jpg
        |       |-- tooltip
        |       |   |-- euclid.png
        |       |   |-- shape1.svg
        |       |   |-- tooltip1.svg
        |       |-- treeview
        |       |   |-- throbber.gif
        |       |-- user-card
        |       |   |-- img-round1.jpg
        |       |   |-- img-round2.jpg
        |       |   |-- img-round3.jpg
        |       |   |-- img-round4.jpg
        |       |   |-- inverse-img1.jpg
        |       |   |-- inverse-img2.jpg
        |       |   |-- card
        |       |       |-- card-img1.jpg
        |       |       |-- card-img2.jpg
        |       |       |-- card-img3.jpg
        |       |-- user-profile
        |       |   |-- bg-img1.jpg
        |       |   |-- contact-user.jpg
        |       |   |-- user-img.jpg
        |       |   |-- follower
        |       |       |-- f-1.jpg
        |       |       |-- f-2.jpg
        |       |       |-- f-3.jpg
        |       |       |-- f-4.jpg
        |       |       |-- f-5.jpg
        |       |-- widget
        |           |-- AUSTRALIA.jpg
        |           |-- BRAZIL.jpg
        |           |-- DIGITALPEN.jpg
        |           |-- GERMANY.jpg
        |           |-- IPAD.jpg
        |           |-- PHONE1.jpg
        |           |-- PHONE2.jpg
        |           |-- PHONE3.jpg
        |           |-- PHONE4.jpg
        |           |-- TABLET.jpg
        |           |-- Thumbs.db
        |           |-- UK.jpg
        |           |-- USA.jpg
        |           |-- prod1.jpg
        |           |-- prod2.jpg
        |           |-- prod3.jpg
        |           |-- prod4.jpg
        |           |-- wather2bottom.png
        |           |-- wather2m.png
        |           |-- wather2star1.png
        |           |-- wather2star2.png
        |           |-- watherbottom.png
        |           |-- wathernature.png
        |           |-- watherstar1.png
        |           |-- watherstar2.png
        |-- environments
        |   |-- .env.ts
        |   |-- environment.prod.ts
        |   |-- environment.ts
        |-- scss
        |   |-- animation.scss
        |   |-- pages.scss
        |   |-- style.scss
        |   |-- widget.scss
        |   |-- partials
        |   |   |-- _custom.scss
        |   |   |-- _dark.scss
        |   |   |-- _general.scss
        |   |   |-- _generic.scss
        |   |   |-- _mixins.scss
        |   |   |-- _variables.scss
        |   |   |-- menu
        |   |   |   |-- _horizontal-menu.scss
        |   |   |   |-- _menu.scss
        |   |   |-- ngx-scss
        |   |   |   |-- accordion.scss
        |   |   |   |-- carousel.scss
        |   |   |   |-- list.scss
        |   |   |   |-- pnotify.scss
        |   |   |   |-- rating.scss
        |   |   |   |-- tab.scss
        |   |   |   |-- table.scss
        |   |   |   |-- tag-input.scss
        |   |   |   |-- waves.scss
        |   |   |-- other
        |   |   |   |-- _chat.scss
        |   |   |   |-- _progress-bar.scss
        |   |   |-- pages
        |   |   |   |-- _alert.scss
        |   |   |   |-- _authentication.scss
        |   |   |   |-- _breadcrumb.scss
        |   |   |   |-- _charts.scss
        |   |   |   |-- _color.scss
        |   |   |   |-- _draggable.scss
        |   |   |   |-- _e-payment.scss
        |   |   |   |-- _editors.scss
        |   |   |   |-- _fb-wall.scss
        |   |   |   |-- _full-calender.scss
        |   |   |   |-- _genral_pages.scss
        |   |   |   |-- _icon-layout.scss
        |   |   |   |-- _job-find.scss
        |   |   |   |-- _mail-pages.scss
        |   |   |   |-- _maps.scss
        |   |   |   |-- _note.scss
        |   |   |   |-- _pre-loader.scss
        |   |   |   |-- _prism.scss
        |   |   |   |-- _range-slider.scss
        |   |   |   |-- _rating.scss
        |   |   |   |-- _ready-to-use.scss
        |   |   |   |-- _todo.scss
        |   |   |-- responsive
        |   |   |   |-- _responsive.scss
        |   |   |-- tables
        |   |   |   |-- _tables.scss
        |   |   |-- theme-elements
        |   |   |   |-- _box-shadow.scss
        |   |   |   |-- _button.scss
        |   |   |   |-- _form-elements.scss
        |   |   |   |-- _label-badges.scss
        |   |   |-- widget-dashboard
        |   |       |-- _widget.scss
        |   |-- themify-icons
        |       |-- .DS_Store
        |       |-- _core.scss
        |       |-- _extras.scss
        |       |-- _icons.scss
        |       |-- _mixins.scss
        |       |-- _path.scss
        |       |-- _themify-icons.scss
        |       |-- _variables.scss
        |       |-- fonts
        |           |-- .DS_Store
        |           |-- themify.eot
        |           |-- themify.svg
        |           |-- themify.ttf
        |           |-- themify.woff
        |-- theme
        |   |-- theme-variables.scss
        |   |-- theme.scss
        |-- translations
            |-- en-US.json
            |-- fr-FR.json
```