/**
 * Created by thomasmars on 09.04.2016.
 */
import 'expose?H5P!exports?H5P!h5p-view';
require('./chunks/cssChunk');
import CssChallenge from '../scripts/css-challenge';

var params = require('../content/test1.json');

var cssChallenge = new CssChallenge(params);
cssChallenge.attach(H5P.jQuery('body'));
