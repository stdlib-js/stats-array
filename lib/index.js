/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name max
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/max}
*/
setReadOnly( ns, 'max', require( '@stdlib/stats-array-max' ) );

/**
* @name maxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/max-by}
*/
setReadOnly( ns, 'maxBy', require( '@stdlib/stats-array-max-by' ) );

/**
* @name maxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/maxabs}
*/
setReadOnly( ns, 'maxabs', require( '@stdlib/stats-array-maxabs' ) );

/**
* @name maxsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/maxsorted}
*/
setReadOnly( ns, 'maxsorted', require( '@stdlib/stats-array-maxsorted' ) );

/**
* @name mean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mean}
*/
setReadOnly( ns, 'mean', require( '@stdlib/stats-array-mean' ) );

/**
* @name meankbn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meankbn}
*/
setReadOnly( ns, 'meankbn', require( '@stdlib/stats-array-meankbn' ) );

/**
* @name meankbn2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meankbn2}
*/
setReadOnly( ns, 'meankbn2', require( '@stdlib/stats-array-meankbn2' ) );

/**
* @name meanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meanors}
*/
setReadOnly( ns, 'meanors', require( '@stdlib/stats-array-meanors' ) );

/**
* @name meanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meanpn}
*/
setReadOnly( ns, 'meanpn', require( '@stdlib/stats-array-meanpn' ) );

/**
* @name meanpw
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meanpw}
*/
setReadOnly( ns, 'meanpw', require( '@stdlib/stats-array-meanpw' ) );

/**
* @name meanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/meanwd}
*/
setReadOnly( ns, 'meanwd', require( '@stdlib/stats-array-meanwd' ) );

/**
* @name mediansorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mediansorted}
*/
setReadOnly( ns, 'mediansorted', require( '@stdlib/stats-array-mediansorted' ) );

/**
* @name min
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/min}
*/
setReadOnly( ns, 'min', require( '@stdlib/stats-array-min' ) );

/**
* @name minBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/min-by}
*/
setReadOnly( ns, 'minBy', require( '@stdlib/stats-array-min-by' ) );

/**
* @name minabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/minabs}
*/
setReadOnly( ns, 'minabs', require( '@stdlib/stats-array-minabs' ) );

/**
* @name minsorted
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/minsorted}
*/
setReadOnly( ns, 'minsorted', require( '@stdlib/stats-array-minsorted' ) );

/**
* @name mskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskmax}
*/
setReadOnly( ns, 'mskmax', require( '@stdlib/stats-array-mskmax' ) );

/**
* @name mskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskmin}
*/
setReadOnly( ns, 'mskmin', require( '@stdlib/stats-array-mskmin' ) );

/**
* @name mskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/mskrange}
*/
setReadOnly( ns, 'mskrange', require( '@stdlib/stats-array-mskrange' ) );

/**
* @name nanmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmax}
*/
setReadOnly( ns, 'nanmax', require( '@stdlib/stats-array-nanmax' ) );

/**
* @name nanmaxBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmax-by}
*/
setReadOnly( ns, 'nanmaxBy', require( '@stdlib/stats-array-nanmax-by' ) );

/**
* @name nanmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmaxabs}
*/
setReadOnly( ns, 'nanmaxabs', require( '@stdlib/stats-array-nanmaxabs' ) );

/**
* @name nanmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmean}
*/
setReadOnly( ns, 'nanmean', require( '@stdlib/stats-array-nanmean' ) );

/**
* @name nanmeanors
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmeanors}
*/
setReadOnly( ns, 'nanmeanors', require( '@stdlib/stats-array-nanmeanors' ) );

/**
* @name nanmeanpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmeanpn}
*/
setReadOnly( ns, 'nanmeanpn', require( '@stdlib/stats-array-nanmeanpn' ) );

/**
* @name nanmeanwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmeanwd}
*/
setReadOnly( ns, 'nanmeanwd', require( '@stdlib/stats-array-nanmeanwd' ) );

/**
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmin}
*/
setReadOnly( ns, 'nanmin', require( '@stdlib/stats-array-nanmin' ) );

/**
* @name nanminBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmin-by}
*/
setReadOnly( ns, 'nanminBy', require( '@stdlib/stats-array-nanmin-by' ) );

/**
* @name nanminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanminabs}
*/
setReadOnly( ns, 'nanminabs', require( '@stdlib/stats-array-nanminabs' ) );

/**
* @name nanmskmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmskmax}
*/
setReadOnly( ns, 'nanmskmax', require( '@stdlib/stats-array-nanmskmax' ) );

/**
* @name nanmskmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmskmin}
*/
setReadOnly( ns, 'nanmskmin', require( '@stdlib/stats-array-nanmskmin' ) );

/**
* @name nanmskrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmskrange}
*/
setReadOnly( ns, 'nanmskrange', require( '@stdlib/stats-array-nanmskrange' ) );

/**
* @name nanrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanrange}
*/
setReadOnly( ns, 'nanrange', require( '@stdlib/stats-array-nanrange' ) );

/**
* @name nanrangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanrange-by}
*/
setReadOnly( ns, 'nanrangeBy', require( '@stdlib/stats-array-nanrange-by' ) );

/**
* @name nanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdev}
*/
setReadOnly( ns, 'nanstdev', require( '@stdlib/stats-array-nanstdev' ) );

/**
* @name nanstdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdevch}
*/
setReadOnly( ns, 'nanstdevch', require( '@stdlib/stats-array-nanstdevch' ) );

/**
* @name nanstdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdevpn}
*/
setReadOnly( ns, 'nanstdevpn', require( '@stdlib/stats-array-nanstdevpn' ) );

/**
* @name nanstdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdevtk}
*/
setReadOnly( ns, 'nanstdevtk', require( '@stdlib/stats-array-nanstdevtk' ) );

/**
* @name nanstdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdevwd}
*/
setReadOnly( ns, 'nanstdevwd', require( '@stdlib/stats-array-nanstdevwd' ) );

/**
* @name nanstdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanstdevyc}
*/
setReadOnly( ns, 'nanstdevyc', require( '@stdlib/stats-array-nanstdevyc' ) );

/**
* @name nanvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvariance}
*/
setReadOnly( ns, 'nanvariance', require( '@stdlib/stats-array-nanvariance' ) );

/**
* @name nanvariancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvariancech}
*/
setReadOnly( ns, 'nanvariancech', require( '@stdlib/stats-array-nanvariancech' ) );

/**
* @name nanvariancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvariancepn}
*/
setReadOnly( ns, 'nanvariancepn', require( '@stdlib/stats-array-nanvariancepn' ) );

/**
* @name nanvariancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvariancetk}
*/
setReadOnly( ns, 'nanvariancetk', require( '@stdlib/stats-array-nanvariancetk' ) );

/**
* @name nanvariancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvariancewd}
*/
setReadOnly( ns, 'nanvariancewd', require( '@stdlib/stats-array-nanvariancewd' ) );

/**
* @name nanvarianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanvarianceyc}
*/
setReadOnly( ns, 'nanvarianceyc', require( '@stdlib/stats-array-nanvarianceyc' ) );

/**
* @name range
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/range}
*/
setReadOnly( ns, 'range', require( '@stdlib/stats-array-range' ) );

/**
* @name rangeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/range-by}
*/
setReadOnly( ns, 'rangeBy', require( '@stdlib/stats-array-range-by' ) );

/**
* @name stdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdev}
*/
setReadOnly( ns, 'stdev', require( '@stdlib/stats-array-stdev' ) );

/**
* @name stdevch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdevch}
*/
setReadOnly( ns, 'stdevch', require( '@stdlib/stats-array-stdevch' ) );

/**
* @name stdevpn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdevpn}
*/
setReadOnly( ns, 'stdevpn', require( '@stdlib/stats-array-stdevpn' ) );

/**
* @name stdevtk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdevtk}
*/
setReadOnly( ns, 'stdevtk', require( '@stdlib/stats-array-stdevtk' ) );

/**
* @name stdevwd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdevwd}
*/
setReadOnly( ns, 'stdevwd', require( '@stdlib/stats-array-stdevwd' ) );

/**
* @name stdevyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/stdevyc}
*/
setReadOnly( ns, 'stdevyc', require( '@stdlib/stats-array-stdevyc' ) );

/**
* @name variance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/variance}
*/
setReadOnly( ns, 'variance', require( '@stdlib/stats-array-variance' ) );

/**
* @name variancech
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/variancech}
*/
setReadOnly( ns, 'variancech', require( '@stdlib/stats-array-variancech' ) );

/**
* @name variancepn
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/variancepn}
*/
setReadOnly( ns, 'variancepn', require( '@stdlib/stats-array-variancepn' ) );

/**
* @name variancetk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/variancetk}
*/
setReadOnly( ns, 'variancetk', require( '@stdlib/stats-array-variancetk' ) );

/**
* @name variancewd
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/variancewd}
*/
setReadOnly( ns, 'variancewd', require( '@stdlib/stats-array-variancewd' ) );

/**
* @name varianceyc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/varianceyc}
*/
setReadOnly( ns, 'varianceyc', require( '@stdlib/stats-array-varianceyc' ) );


// EXPORTS //

module.exports = ns;
