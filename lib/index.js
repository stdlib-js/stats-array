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
* @name nanmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/array/nanmin}
*/
setReadOnly( ns, 'nanmin', require( '@stdlib/stats-array-nanmin' ) );

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
