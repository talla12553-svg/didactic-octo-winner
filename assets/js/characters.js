/* Sene Fast Food — "The Ceeb Crew".
 *
 * An original character system. The house style, deliberately NOT Sweetgreen's
 * (theirs is outline-free, muted, collage-ish):
 *
 *   - Bold 5px ink outlines, round caps and joins
 *   - Flat fills only, no gradients or shading
 *   - Slight asymmetry — nothing is perfectly centred
 *   - Faces are two dot eyes and one stroked smile, nothing more
 *   - Warm Senegalese palette: clay, gold, forest, hibiscus, millet
 *
 * The cast is named in Wolof after the ingredients the kitchen actually cooks
 * with, so it reads as Sene's own rather than generic food mascots.
 * (Worth a native check on the spellings.)
 *
 * Characters are injected as real inline SVG rather than <use> references so
 * their internals stay stylable and animatable from the stylesheet.
 */
window.SENE = window.SENE || {};

(function () {
  'use strict';

  var INK   = '#1b1f1b';
  var CLAY  = '#c4562f';
  var GOLD  = '#e8a33d';
  var LEAF  = '#6fae4e';
  var FOR   = '#1f5136';
  var HIB   = '#c23b6d';
  var MILL  = '#e8c98f';
  var CREAM = '#faf7f1';

  // Two eyes and a smile, placed per character.
  function face(cx, cy, spread, smileW) {
    var s = spread || 13;
    var w = smileW || 9;
    return '' +
      '<circle class="char__eye" cx="' + (cx - s) + '" cy="' + cy + '" r="4.2" fill="' + INK + '"/>' +
      '<circle class="char__eye" cx="' + (cx + s) + '" cy="' + cy + '" r="4.2" fill="' + INK + '"/>' +
      '<path class="char__smile" d="M' + (cx - w) + ' ' + (cy + 11) +
        ' q' + w + ' ' + (w * 0.85) + ' ' + (w * 2) + ' 0" fill="none" stroke="' + INK +
        '" stroke-width="4.2" stroke-linecap="round"/>';
  }

  var STROKE = 'fill="none" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"';
  function shape(d, fill) {
    return '<path d="' + d + '" fill="' + fill + '" stroke="' + INK +
           '" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/>';
  }

  var CHARS = {

    /* Kaani — the scotch bonnet. Cheeky, always a bit too hot.
     * House rule: no detail stroke crosses the face box, so the lobe lines
     * sit outboard of the eyes rather than through them. */
    kaani: {
      label: 'Kaani, the scotch bonnet',
      art:
        shape('M60 34c19 0 32 15 32 33 0 21-15 36-32 36s-32-15-32-36c0-18 13-33 32-33z', CLAY) +
        '<path d="M38 48c-3 15-2 30 3 42M82 49c3 15 1 30-4 41" ' + STROKE + ' stroke-width="3.5" opacity=".5"/>' +
        '<path d="M60 34c0-9-3-14-9-17" ' + STROKE + '/>' +
        shape('M51 17c9-6 20-4 24 3-8 5-18 4-24-3z', LEAF) +
        face(60, 62, 13, 9)
    },

    /* Lëmu — the charred lime wedge off the Thiebou Diaga.
     * Segments would cut across the face, so the wedge keeps only its rind
     * and two char marks at the outer edges. */
    lemu: {
      label: 'Lëmu, the charred lime',
      art:
        shape('M22 84a38 38 0 0 1 76 0z', LEAF) +
        '<path d="M22 84a38 38 0 0 1 76 0" fill="none" stroke="' + INK +
          '" stroke-width="3.5" stroke-linecap="round" opacity=".4"/>' +
        '<path d="M30 74c5 2 9 2 13 0M77 74c5 2 9 2 13-1" fill="none" stroke="' + INK +
          '" stroke-width="4" stroke-linecap="round" opacity=".35"/>' +
        face(60, 70, 12, 8)
    },

    /* Jën — the thiof, the fish under the thieboudienne.
     * Mid-green rather than forest so the face still reads at small sizes. */
    jen: {
      label: 'Jën, the thiof',
      art:
        shape('M92 60c0-16-16-27-33-27S26 44 26 60s16 27 33 27 33-11 33-27z', '#2f7d55') +
        shape('M92 60l18-15v30z', FOR) +
        shape('M56 33c5-10 13-14 20-12-2 7-8 11-15 13z', FOR) +
        '<path d="M74 43c5 5 8 11 8 17s-3 12-8 17" ' + STROKE + ' stroke-width="3.5" opacity=".4"/>' +
        face(48, 57, 11, 8)
    },

    /* Gerte — the groundnut. Senegal's peanut, in the mbakhal. */
    gerte: {
      label: 'Gerte, the groundnut',
      art:
        shape('M42 26c14 0 22 9 22 20 0 8-5 12-5 20s6 12 6 21c0 12-9 21-23 21s-23-9-23-21c0-9 6-13 6-21s-5-12-5-20c0-11 8-20 22-20z', MILL) +
        '<path d="M28 92c9 4 18 4 27 0" fill="none" stroke="' + INK +
          '" stroke-width="3.5" stroke-linecap="round" opacity=".45"/>' +
        face(42, 46, 11, 8)
    },

    /* Bissap — the hibiscus, in the jug by the counter. */
    bissap: {
      label: 'Bissap, the hibiscus',
      art:
        shape('M60 20c11 0 18 8 18 18 11-4 21 1 24 11s-3 20-14 22c7 8 6 19-2 25s-19 4-24-5c-5 9-16 11-24 5s-9-17-2-25c-11-2-17-12-14-22s13-15 24-11c0-10 7-18 14-18z', HIB) +
        shape('M60 46a17 17 0 1 1 0 34 17 17 0 0 1 0-34z', GOLD) +
        face(60, 60, 9, 7)
    },

    /* Ceeb — the grain of rice the whole menu is built on.
     * Its crease runs down the left flank, clear of the face. */
    ceeb: {
      label: 'Ceeb, the grain',
      art:
        shape('M60 22c15 0 25 17 25 40S75 102 60 102 35 85 35 62s10-40 25-40z', GOLD) +
        '<path d="M45 44c-2 6-3 12-3 18s1 12 3 18" fill="none" stroke="' + INK +
          '" stroke-width="3.5" stroke-linecap="round" opacity=".4"/>' +
        face(62, 58, 11, 8)
    }
  };

  window.SENE.CHARS = CHARS;

  /* Build one character's inline SVG.
   * `delay` staggers the idle animation so a row of them never moves in lockstep.
   */
  window.SENE.charSvg = function (name, opts) {
    var c = CHARS[name];
    if (!c) return '';
    opts = opts || {};
    var cls = 'char char--' + name + (opts.className ? ' ' + opts.className : '');
    var style = opts.delay ? ' style="--char-delay:' + opts.delay + 's"' : '';
    return '<svg class="' + cls + '"' + style + ' viewBox="0 0 120 120" role="img" ' +
           (opts.decorative === false
              ? 'aria-label="' + c.label + '"'
              : 'aria-hidden="true" focusable="false"') +
           '><g class="char__body">' + c.art + '</g></svg>';
  };
})();
