# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.5](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.1.4...v0.1.5) (2024-12-17)

## [0.1.4](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.1.3...v0.1.4) (2024-12-15)

## [0.1.3](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.1.2...v0.1.3) (2024-09-30)

## [0.1.2](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.1.1...v0.1.2) (2024-09-25)

## [0.1.1](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.1.0...v0.1.1) (2024-09-17)

## [0.1.0](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.15...v0.1.0) (2024-09-16)


### ⚠ BREAKING CHANGES

* remove aysnc intData in constructor

### Refactor

* remove aysnc intData in constructor ([7d1b3d5](https://github.com/isdk/ai-tool-sqlite.js/commit/7d1b3d5fe34c6739df2d032e93295c040045959b))

## [0.0.15](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.14...v0.0.15) (2024-09-02)

## [0.0.14](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.13...v0.0.14) (2024-09-02)

## [0.0.13](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.12...v0.0.13) (2024-09-01)

## [0.0.12](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.11...v0.0.12) (2024-08-31)


### Refactor

* export kvsqlite ([41fc700](https://github.com/isdk/ai-tool-sqlite.js/commit/41fc700da83ea6fac13e95b6f40b7a6ce13d2967))

## [0.0.11](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.10...v0.0.11) (2024-08-28)

## [0.0.10](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.9...v0.0.10) (2024-08-23)

## [0.0.9](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.8...v0.0.9) (2024-08-18)

## [0.0.8](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.7...v0.0.8) (2024-08-16)

## [0.0.7](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.6...v0.0.7) (2024-08-14)

## [0.0.6](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.5...v0.0.6) (2024-08-11)


### Features

* add initDB optional method ([c2d9220](https://github.com/isdk/ai-tool-sqlite.js/commit/c2d92202748470afb10fe6c77910a5912e43cf4c))
* export from kvsqlite ([bfdbfa4](https://github.com/isdk/ai-tool-sqlite.js/commit/bfdbfa4404f3ce423be07abea4c61d74b8908d52))
* export IKVCreateFtsOptions from kvsqlite ([70665bd](https://github.com/isdk/ai-tool-sqlite.js/commit/70665bd696c561f89d226d5daf75e81a89b12e5f))
* export IKVSetOptions from kvsqlite ([b7997b2](https://github.com/isdk/ai-tool-sqlite.js/commit/b7997b232efa134393d97b1b8262dfc5e5aaadf9))
* **store:** add sqliteStores as default ([c3fc8d7](https://github.com/isdk/ai-tool-sqlite.js/commit/c3fc8d78b37a7075d379802dd33205a1d0f8bdd8))


### Bug Fixes

* KVSqliteResFuncParams should be optional for KVSqliteResFunc ([30dee4c](https://github.com/isdk/ai-tool-sqlite.js/commit/30dee4c729f8ba1c8ff1ad509b3d994b9d7d855c))
* make ts happy ([11c177e](https://github.com/isdk/ai-tool-sqlite.js/commit/11c177e99fb45f224ee640c51cdef62b25d5a9db))


### Refactor

* add options to $createCollection ([61cc767](https://github.com/isdk/ai-tool-sqlite.js/commit/61cc767e9b74fb285e98bcd534de830313496c62))
* list, put, post etc ([9a97da8](https://github.com/isdk/ai-tool-sqlite.js/commit/9a97da84e5d434724fd3be9e9669170b1ee518b7))
* rename initDB to initData, updateDBFromDir to updateDataFromDir; add initingData property ([ca852fe](https://github.com/isdk/ai-tool-sqlite.js/commit/ca852fe91f2015e575bbe99042ef21a6c535bc48))
* **store:** location as id and remove pos arguments processing. ([02bcc52](https://github.com/isdk/ai-tool-sqlite.js/commit/02bcc5285576eb69920174ef1cf4715c7edb45b5))

## [0.0.5](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.4...v0.0.5) (2024-07-08)


### Features

* add FTS supports ([3823e97](https://github.com/isdk/ai-tool-sqlite.js/commit/3823e97a287fbcf563c77a38db59b53ee44a817c))
* **kvsqlite:** additional fields supports ([acf1dc4](https://github.com/isdk/ai-tool-sqlite.js/commit/acf1dc44e60fceffa18de7670ce348b1b0598f03))
* **res:** record the last import files and date to avoid duplicate import ([f2b3ca4](https://github.com/isdk/ai-tool-sqlite.js/commit/f2b3ca4dfb73d35a81d5e4e0cbf485c01dad2876))
* **sqlite-res:** add multi collections supports ([6fa3800](https://github.com/isdk/ai-tool-sqlite.js/commit/6fa380047bfe2c95e5501b89b3e6e0485de16efa))

## [0.0.4](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.3...v0.0.4) (2024-06-11)

## [0.0.3](https://github.com/isdk/ai-tool-sqlite.js/compare/v0.0.2...v0.0.3) (2024-06-09)

## 0.0.2 (2024-06-07)


### Features

* add $search to KVSqliteResFunc ([0912da2](https://github.com/isdk/ai-tool-sqlite.js/commit/0912da245222155fd4a0b0475a8bbdbefc460a3c))
* add getExtend(s)/setExtend(s) and bulkDocs ([9249f6b](https://github.com/isdk/ai-tool-sqlite.js/commit/9249f6b86422c79495f6ba5b0fb301b7a0f8785a))
* add KVSqliteResFunc the RESTful server API ([b8c64db](https://github.com/isdk/ai-tool-sqlite.js/commit/b8c64dbe483cc2ea69ef9627cdb94166fd28764c))
* add list(search) supports ([6c6b728](https://github.com/isdk/ai-tool-sqlite.js/commit/6c6b728d1519a700ec7d61118db363fb6afdcc49))
* add location option and lurcache supports ([7ea349f](https://github.com/isdk/ai-tool-sqlite.js/commit/7ea349ff2f18f896852bb4fd303ae656f75c6216))
* add object query to search ([acf2047](https://github.com/isdk/ai-tool-sqlite.js/commit/acf204792c3a0b490945c64342a33d40b66c44fc))
* add search method use json-filter ([74d4f34](https://github.com/isdk/ai-tool-sqlite.js/commit/74d4f3456a25dd6283de305b68a241b8ddbbbf46))
* **kvsqlite:** add createIndex and search ([0d8a8f8](https://github.com/isdk/ai-tool-sqlite.js/commit/0d8a8f8e4516bd6b5391cb66e93a8fd7d4836423))
* **KVSqlite:** add set(docId:string, value:object) support ([5d74785](https://github.com/isdk/ai-tool-sqlite.js/commit/5d747851712c41bb16459a21c033040bcb967d5d))
* **KVSqlite:** delete method can remove multi objects by ids ([4e03958](https://github.com/isdk/ai-tool-sqlite.js/commit/4e03958b4ac16bf74e9f1bee4df7d309427458df))
* **sqlte-res:** add $count and updateDBFromDir ([e075bc8](https://github.com/isdk/ai-tool-sqlite.js/commit/e075bc88a49af957640fea9ec5c3f6319529bc90))


### Bug Fixes

* can not create collection ([15f04e0](https://github.com/isdk/ai-tool-sqlite.js/commit/15f04e0549beaea3824deda94b767082478cc3e4))
* forget to export KVSqliteResFuncParams ([6fe84df](https://github.com/isdk/ai-tool-sqlite.js/commit/6fe84df6d5d43750bd14b4ad63de45bdbb88cdb5))
* **KVSqliteResFunc:** put could be val object only with `_id` ([8b04822](https://github.com/isdk/ai-tool-sqlite.js/commit/8b0482217149e71b744b2452cf6b7e63dd782129))
* should create database to mkdir ([da045ef](https://github.com/isdk/ai-tool-sqlite.js/commit/da045ef22740a401fb482f2f7828a44d2d4f5829))
* the error name should be the function name ([33f9aa1](https://github.com/isdk/ai-tool-sqlite.js/commit/33f9aa16e3b78f20749288fe12f95311cddc62f2))
* **ts:** count() return result is number ([efbf50b](https://github.com/isdk/ai-tool-sqlite.js/commit/efbf50bc974959441c9c59a7b060eafd6e473406))
* **ts:** error TS4055: Return type of public method from exported class has or is using private name 'RunResult'. ([c97774a](https://github.com/isdk/ai-tool-sqlite.js/commit/c97774a4ed3ef3c736bc4fb2cf97a9edd9065bd2))
* **ts:** import mime-type ([0214989](https://github.com/isdk/ai-tool-sqlite.js/commit/0214989f88cc1b46e3e66c0e808279bd27600e1f))
* **ts:** import mime-type ([6b9883d](https://github.com/isdk/ai-tool-sqlite.js/commit/6b9883d5b30557680b5bce6b07d5ae1ad92babfc))
* **ts:** the val should be optional for get ([7d7d094](https://github.com/isdk/ai-tool-sqlite.js/commit/7d7d094b9784e87d8505b3d50b6a9edad9533cc2))
* upgrade packages ([2911165](https://github.com/isdk/ai-tool-sqlite.js/commit/2911165e6fb81b0be0527a7014129dc8dc8d996a))
