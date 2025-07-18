<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Statistics

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Statistical functions for arrays.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-array
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats-array' );
```

#### ns

Namespace containing APIs for performing statistical operations on arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`maxBy( x, clbk[, thisArg] )`][@stdlib/stats/array/max-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array via a callback function.</span>
-   <span class="signature">[`max( x )`][@stdlib/stats/array/max]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array.</span>
-   <span class="signature">[`maxabs( x )`][@stdlib/stats/array/maxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of an array.</span>
-   <span class="signature">[`maxsorted( x )`][@stdlib/stats/array/maxsorted]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of a sorted array.</span>
-   <span class="signature">[`mean( x )`][@stdlib/stats/array/mean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array.</span>
-   <span class="signature">[`mediansorted( x )`][@stdlib/stats/array/mediansorted]</span><span class="delimiter">: </span><span class="description">calculate the median value of a sorted array.</span>
-   <span class="signature">[`minBy( x, clbk[, thisArg] )`][@stdlib/stats/array/min-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array via a callback function.</span>
-   <span class="signature">[`min( x )`][@stdlib/stats/array/min]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array.</span>
-   <span class="signature">[`minabs( x )`][@stdlib/stats/array/minabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of an array.</span>
-   <span class="signature">[`minsorted( x )`][@stdlib/stats/array/minsorted]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of a sorted array.</span>
-   <span class="signature">[`mskmax( x, mask )`][@stdlib/stats/array/mskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array according to a mask.</span>
-   <span class="signature">[`mskmin( x, mask )`][@stdlib/stats/array/mskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array according to a mask.</span>
-   <span class="signature">[`mskrange( x, mask )`][@stdlib/stats/array/mskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array according to a mask.</span>
-   <span class="signature">[`nanmaxBy( x, clbk[, thisArg] )`][@stdlib/stats/array/nanmax-by]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmax( x )`][@stdlib/stats/array/nanmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmaxabs( x )`][@stdlib/stats/array/nanmaxabs]</span><span class="delimiter">: </span><span class="description">calculate the maximum absolute value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminBy( x, clbk[, thisArg] )`][@stdlib/stats/array/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( x )`][@stdlib/stats/array/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( x )`][@stdlib/stats/array/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( x )`][@stdlib/stats/array/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`range( x )`][@stdlib/stats/array/range]</span><span class="delimiter">: </span><span class="description">calculate the range of an array.</span>
-   <span class="signature">[`varianceyc( x[, correction] )`][@stdlib/stats/array/varianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using a one-pass algorithm proposed by Youngs and Cramer.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/stats-array' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-array

[test-image]: https://github.com/stdlib-js/stats-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-array/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-array/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-array/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-array/main/LICENSE

<!-- <toc-links> -->

[@stdlib/stats/array/max-by]: https://github.com/stdlib-js/stats-array-max-by

[@stdlib/stats/array/max]: https://github.com/stdlib-js/stats-array-max

[@stdlib/stats/array/maxabs]: https://github.com/stdlib-js/stats-array-maxabs

[@stdlib/stats/array/maxsorted]: https://github.com/stdlib-js/stats-array-maxsorted

[@stdlib/stats/array/mean]: https://github.com/stdlib-js/stats-array-mean

[@stdlib/stats/array/mediansorted]: https://github.com/stdlib-js/stats-array-mediansorted

[@stdlib/stats/array/min-by]: https://github.com/stdlib-js/stats-array-min-by

[@stdlib/stats/array/min]: https://github.com/stdlib-js/stats-array-min

[@stdlib/stats/array/minabs]: https://github.com/stdlib-js/stats-array-minabs

[@stdlib/stats/array/minsorted]: https://github.com/stdlib-js/stats-array-minsorted

[@stdlib/stats/array/mskmax]: https://github.com/stdlib-js/stats-array-mskmax

[@stdlib/stats/array/mskmin]: https://github.com/stdlib-js/stats-array-mskmin

[@stdlib/stats/array/mskrange]: https://github.com/stdlib-js/stats-array-mskrange

[@stdlib/stats/array/nanmax-by]: https://github.com/stdlib-js/stats-array-nanmax-by

[@stdlib/stats/array/nanmax]: https://github.com/stdlib-js/stats-array-nanmax

[@stdlib/stats/array/nanmaxabs]: https://github.com/stdlib-js/stats-array-nanmaxabs

[@stdlib/stats/array/nanmin-by]: https://github.com/stdlib-js/stats-array-nanmin-by

[@stdlib/stats/array/nanmin]: https://github.com/stdlib-js/stats-array-nanmin

[@stdlib/stats/array/nanminabs]: https://github.com/stdlib-js/stats-array-nanminabs

[@stdlib/stats/array/nanrange]: https://github.com/stdlib-js/stats-array-nanrange

[@stdlib/stats/array/range]: https://github.com/stdlib-js/stats-array-range

[@stdlib/stats/array/varianceyc]: https://github.com/stdlib-js/stats-array-varianceyc

<!-- </toc-links> -->

</section>

<!-- /.links -->
