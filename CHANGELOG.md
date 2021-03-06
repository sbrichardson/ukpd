# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.0] - 2020-07-02
* Updates `.stopAndSearch` function to take a police force identifier, rather than
latitude and longitude.

Before:
```javascript
await UKPD.stopAndSearch('52.629729', '-1.131592')
```

After:
```javascript
await UKPD.stopAndSearch('cheshire')
```

Police force identifiers can be retrieved by calling `UKPD.forces()`

## [2.0.1] - 2020-07-02
* Fixes a bug where test files were not compiled correctly

## [2.0.0] - 2020-07-02
* Drops support for browsers, focusing solely on Node.js
    * Browser support has been broken for a while and there is currently no
    plans to re-introduce it
* Adds complete type definitions for all methods return types
* Adds examples for all available methods

## [1.4.3] - 2020-07-02
* Adds CHANGELOG, changes are tracked here from now on

## [1.0.0] - 2017-12-06
* First release of the library
