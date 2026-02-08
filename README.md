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



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-array/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array@v0.1.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { max, maxBy, maxabs, maxsorted, mean, meankbn, meankbn2, meanors, meanpn, meanpw, meanwd, mediansorted, min, minBy, minabs, minsorted, mskmax, mskmin, mskrange, nanmax, nanmaxBy, nanmaxabs, nanmean, nanmeanors, nanmeanpn, nanmeanwd, nanmin, nanminBy, nanminabs, nanmskmax, nanmskmin, nanmskrange, nanrange, nanrangeBy, nanstdev, nanstdevch, nanstdevpn, nanstdevtk, nanstdevwd, nanstdevyc, nanvariance, nanvariancech, nanvariancepn, nanvariancetk, nanvariancewd, nanvarianceyc, range, rangeBy, stdev, stdevch, stdevpn, stdevtk, stdevwd, stdevyc, variance, variancech, variancepn, variancetk, variancewd, varianceyc } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array@esm/index.mjs';
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
-   <span class="signature">[`meankbn( x )`][@stdlib/stats/array/meankbn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using an improved Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meankbn2( x )`][@stdlib/stats/array/meankbn2]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using a second-order iterative Kahan–Babuška algorithm.</span>
-   <span class="signature">[`meanors( x )`][@stdlib/stats/array/meanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using ordinary recursive summation.</span>
-   <span class="signature">[`meanpn( x )`][@stdlib/stats/array/meanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using a two-pass error correction algorithm.</span>
-   <span class="signature">[`meanpw( x )`][@stdlib/stats/array/meanpw]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using pairwise summation.</span>
-   <span class="signature">[`meanwd( x )`][@stdlib/stats/array/meanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array using Welford's algorithm.</span>
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
-   <span class="signature">[`nanmean( x )`][@stdlib/stats/array/nanmean]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmeanors( x )`][@stdlib/stats/array/nanmeanors]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array, ignoring `NaN` values and using ordinary recursive summation.</span>
-   <span class="signature">[`nanmeanpn( x )`][@stdlib/stats/array/nanmeanpn]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array, ignoring `NaN` values and using a two-pass error correction algorithm.</span>
-   <span class="signature">[`nanmeanwd( x )`][@stdlib/stats/array/nanmeanwd]</span><span class="delimiter">: </span><span class="description">calculate the arithmetic mean of an array, ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanminBy( x, clbk[, thisArg] )`][@stdlib/stats/array/nanmin-by]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmin( x )`][@stdlib/stats/array/nanmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanminabs( x )`][@stdlib/stats/array/nanminabs]</span><span class="delimiter">: </span><span class="description">calculate the minimum absolute value of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmax( x, mask )`][@stdlib/stats/array/nanmskmax]</span><span class="delimiter">: </span><span class="description">calculate the maximum value of an array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskmin( x, mask )`][@stdlib/stats/array/nanmskmin]</span><span class="delimiter">: </span><span class="description">calculate the minimum value of an array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanmskrange( x, mask )`][@stdlib/stats/array/nanmskrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array according to a mask, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrangeBy( x, clbk[, thisArg] )`][@stdlib/stats/array/nanrange-by]</span><span class="delimiter">: </span><span class="description">calculate the range of an array via a callback function, ignoring `NaN` values.</span>
-   <span class="signature">[`nanrange( x )`][@stdlib/stats/array/nanrange]</span><span class="delimiter">: </span><span class="description">calculate the range of an array, ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdev( x[, correction] )`][@stdlib/stats/array/nanstdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values.</span>
-   <span class="signature">[`nanstdevch( x[, correction] )`][@stdlib/stats/array/nanstdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanstdevpn( x[, correction] )`][@stdlib/stats/array/nanstdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanstdevtk( x[, correction] )`][@stdlib/stats/array/nanstdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanstdevwd( x[, correction] )`][@stdlib/stats/array/nanstdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanstdevyc( x[, correction] )`][@stdlib/stats/array/nanstdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`nanvariance( x[, correction] )`][@stdlib/stats/array/nanvariance]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values.</span>
-   <span class="signature">[`nanvariancech( x[, correction] )`][@stdlib/stats/array/nanvariancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values and using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`nanvariancepn( x[, correction] )`][@stdlib/stats/array/nanvariancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values and using a two-pass algorithm.</span>
-   <span class="signature">[`nanvariancetk( x[, correction] )`][@stdlib/stats/array/nanvariancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values and using a one-pass textbook algorithm.</span>
-   <span class="signature">[`nanvariancewd( x[, correction] )`][@stdlib/stats/array/nanvariancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values and using Welford's algorithm.</span>
-   <span class="signature">[`nanvarianceyc( x[, correction] )`][@stdlib/stats/array/nanvarianceyc]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array ignoring `NaN` values and using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`rangeBy( x, clbk[, thisArg] )`][@stdlib/stats/array/range-by]</span><span class="delimiter">: </span><span class="description">calculate the range of an array via a callback function.</span>
-   <span class="signature">[`range( x )`][@stdlib/stats/array/range]</span><span class="delimiter">: </span><span class="description">calculate the range of an array.</span>
-   <span class="signature">[`stdev( x[, correction] )`][@stdlib/stats/array/stdev]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array.</span>
-   <span class="signature">[`stdevch( x[, correction] )`][@stdlib/stats/array/stdevch]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`stdevpn( x[, correction] )`][@stdlib/stats/array/stdevpn]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array using a two-pass algorithm.</span>
-   <span class="signature">[`stdevtk( x[, correction] )`][@stdlib/stats/array/stdevtk]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`stdevwd( x[, correction] )`][@stdlib/stats/array/stdevwd]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array using Welford's algorithm.</span>
-   <span class="signature">[`stdevyc( x[, correction] )`][@stdlib/stats/array/stdevyc]</span><span class="delimiter">: </span><span class="description">calculate the standard deviation of an array using a one-pass algorithm proposed by Youngs and Cramer.</span>
-   <span class="signature">[`variance( x[, correction] )`][@stdlib/stats/array/variance]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array.</span>
-   <span class="signature">[`variancech( x[, correction] )`][@stdlib/stats/array/variancech]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using a one-pass trial mean algorithm.</span>
-   <span class="signature">[`variancepn( x[, correction] )`][@stdlib/stats/array/variancepn]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using a two-pass algorithm.</span>
-   <span class="signature">[`variancetk( x[, correction] )`][@stdlib/stats/array/variancetk]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using a one-pass textbook algorithm.</span>
-   <span class="signature">[`variancewd( x[, correction] )`][@stdlib/stats/array/variancewd]</span><span class="delimiter">: </span><span class="description">calculate the variance of an array using Welford's algorithm.</span>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-array@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-array

[test-image]: https://github.com/stdlib-js/stats-array/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-array/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-array/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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

[@stdlib/stats/array/max-by]: https://github.com/stdlib-js/stats-array-max-by/tree/esm

[@stdlib/stats/array/max]: https://github.com/stdlib-js/stats-array-max/tree/esm

[@stdlib/stats/array/maxabs]: https://github.com/stdlib-js/stats-array-maxabs/tree/esm

[@stdlib/stats/array/maxsorted]: https://github.com/stdlib-js/stats-array-maxsorted/tree/esm

[@stdlib/stats/array/mean]: https://github.com/stdlib-js/stats-array-mean/tree/esm

[@stdlib/stats/array/meankbn]: https://github.com/stdlib-js/stats-array-meankbn/tree/esm

[@stdlib/stats/array/meankbn2]: https://github.com/stdlib-js/stats-array-meankbn2/tree/esm

[@stdlib/stats/array/meanors]: https://github.com/stdlib-js/stats-array-meanors/tree/esm

[@stdlib/stats/array/meanpn]: https://github.com/stdlib-js/stats-array-meanpn/tree/esm

[@stdlib/stats/array/meanpw]: https://github.com/stdlib-js/stats-array-meanpw/tree/esm

[@stdlib/stats/array/meanwd]: https://github.com/stdlib-js/stats-array-meanwd/tree/esm

[@stdlib/stats/array/mediansorted]: https://github.com/stdlib-js/stats-array-mediansorted/tree/esm

[@stdlib/stats/array/min-by]: https://github.com/stdlib-js/stats-array-min-by/tree/esm

[@stdlib/stats/array/min]: https://github.com/stdlib-js/stats-array-min/tree/esm

[@stdlib/stats/array/minabs]: https://github.com/stdlib-js/stats-array-minabs/tree/esm

[@stdlib/stats/array/minsorted]: https://github.com/stdlib-js/stats-array-minsorted/tree/esm

[@stdlib/stats/array/mskmax]: https://github.com/stdlib-js/stats-array-mskmax/tree/esm

[@stdlib/stats/array/mskmin]: https://github.com/stdlib-js/stats-array-mskmin/tree/esm

[@stdlib/stats/array/mskrange]: https://github.com/stdlib-js/stats-array-mskrange/tree/esm

[@stdlib/stats/array/nanmax-by]: https://github.com/stdlib-js/stats-array-nanmax-by/tree/esm

[@stdlib/stats/array/nanmax]: https://github.com/stdlib-js/stats-array-nanmax/tree/esm

[@stdlib/stats/array/nanmaxabs]: https://github.com/stdlib-js/stats-array-nanmaxabs/tree/esm

[@stdlib/stats/array/nanmean]: https://github.com/stdlib-js/stats-array-nanmean/tree/esm

[@stdlib/stats/array/nanmeanors]: https://github.com/stdlib-js/stats-array-nanmeanors/tree/esm

[@stdlib/stats/array/nanmeanpn]: https://github.com/stdlib-js/stats-array-nanmeanpn/tree/esm

[@stdlib/stats/array/nanmeanwd]: https://github.com/stdlib-js/stats-array-nanmeanwd/tree/esm

[@stdlib/stats/array/nanmin-by]: https://github.com/stdlib-js/stats-array-nanmin-by/tree/esm

[@stdlib/stats/array/nanmin]: https://github.com/stdlib-js/stats-array-nanmin/tree/esm

[@stdlib/stats/array/nanminabs]: https://github.com/stdlib-js/stats-array-nanminabs/tree/esm

[@stdlib/stats/array/nanmskmax]: https://github.com/stdlib-js/stats-array-nanmskmax/tree/esm

[@stdlib/stats/array/nanmskmin]: https://github.com/stdlib-js/stats-array-nanmskmin/tree/esm

[@stdlib/stats/array/nanmskrange]: https://github.com/stdlib-js/stats-array-nanmskrange/tree/esm

[@stdlib/stats/array/nanrange-by]: https://github.com/stdlib-js/stats-array-nanrange-by/tree/esm

[@stdlib/stats/array/nanrange]: https://github.com/stdlib-js/stats-array-nanrange/tree/esm

[@stdlib/stats/array/nanstdev]: https://github.com/stdlib-js/stats-array-nanstdev/tree/esm

[@stdlib/stats/array/nanstdevch]: https://github.com/stdlib-js/stats-array-nanstdevch/tree/esm

[@stdlib/stats/array/nanstdevpn]: https://github.com/stdlib-js/stats-array-nanstdevpn/tree/esm

[@stdlib/stats/array/nanstdevtk]: https://github.com/stdlib-js/stats-array-nanstdevtk/tree/esm

[@stdlib/stats/array/nanstdevwd]: https://github.com/stdlib-js/stats-array-nanstdevwd/tree/esm

[@stdlib/stats/array/nanstdevyc]: https://github.com/stdlib-js/stats-array-nanstdevyc/tree/esm

[@stdlib/stats/array/nanvariance]: https://github.com/stdlib-js/stats-array-nanvariance/tree/esm

[@stdlib/stats/array/nanvariancech]: https://github.com/stdlib-js/stats-array-nanvariancech/tree/esm

[@stdlib/stats/array/nanvariancepn]: https://github.com/stdlib-js/stats-array-nanvariancepn/tree/esm

[@stdlib/stats/array/nanvariancetk]: https://github.com/stdlib-js/stats-array-nanvariancetk/tree/esm

[@stdlib/stats/array/nanvariancewd]: https://github.com/stdlib-js/stats-array-nanvariancewd/tree/esm

[@stdlib/stats/array/nanvarianceyc]: https://github.com/stdlib-js/stats-array-nanvarianceyc/tree/esm

[@stdlib/stats/array/range-by]: https://github.com/stdlib-js/stats-array-range-by/tree/esm

[@stdlib/stats/array/range]: https://github.com/stdlib-js/stats-array-range/tree/esm

[@stdlib/stats/array/stdev]: https://github.com/stdlib-js/stats-array-stdev/tree/esm

[@stdlib/stats/array/stdevch]: https://github.com/stdlib-js/stats-array-stdevch/tree/esm

[@stdlib/stats/array/stdevpn]: https://github.com/stdlib-js/stats-array-stdevpn/tree/esm

[@stdlib/stats/array/stdevtk]: https://github.com/stdlib-js/stats-array-stdevtk/tree/esm

[@stdlib/stats/array/stdevwd]: https://github.com/stdlib-js/stats-array-stdevwd/tree/esm

[@stdlib/stats/array/stdevyc]: https://github.com/stdlib-js/stats-array-stdevyc/tree/esm

[@stdlib/stats/array/variance]: https://github.com/stdlib-js/stats-array-variance/tree/esm

[@stdlib/stats/array/variancech]: https://github.com/stdlib-js/stats-array-variancech/tree/esm

[@stdlib/stats/array/variancepn]: https://github.com/stdlib-js/stats-array-variancepn/tree/esm

[@stdlib/stats/array/variancetk]: https://github.com/stdlib-js/stats-array-variancetk/tree/esm

[@stdlib/stats/array/variancewd]: https://github.com/stdlib-js/stats-array-variancewd/tree/esm

[@stdlib/stats/array/varianceyc]: https://github.com/stdlib-js/stats-array-varianceyc/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
