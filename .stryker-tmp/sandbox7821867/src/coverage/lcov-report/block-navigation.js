/* eslint-disable */
// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
var jumpToCode = function init() {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    // Classes of code we would like to highlight in the file view
    var missingCoverageClasses = stryMutAct_9fa48("1") ? [] : (stryCov_9fa48("1"), [stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), '.cbranch-no'), stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), '.cstat-no'), stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), '.fstat-no')]);

    // Elements to highlight in the file listing view
    var fileListingElements = stryMutAct_9fa48("5") ? [] : (stryCov_9fa48("5"), [stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), 'td.pct.low')]);

    // We don't want to select elements that are direct descendants of another match
    var notSelector = (stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), ':not(')) + missingCoverageClasses.join(stryMutAct_9fa48("8") ? "" : (stryCov_9fa48("8"), '):not(')) + (stryMutAct_9fa48("9") ? "" : (stryCov_9fa48("9"), ') > ')); // becomes `:not(a):not(b) > `

    // Selecter that finds elements on the page to which we can jump
    var selector = stryMutAct_9fa48("10") ? fileListingElements.join(', ') + ', ' + notSelector - missingCoverageClasses.join(', ' + notSelector) : (stryCov_9fa48("10"), fileListingElements.join(stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), ', ')) + (stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), ', ')) + notSelector + missingCoverageClasses.join((stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), ', ')) + notSelector)); // becomes `:not(a):not(b) > a, :not(a):not(b) > b`

    // The NodeList of matching elements
    var missingCoverageElements = document.querySelectorAll(selector);
    var currentIndex;
    function toggleClass(index) {
      if (stryMutAct_9fa48("14")) {
        {}
      } else {
        stryCov_9fa48("14");
        missingCoverageElements.item(currentIndex).classList.remove(stryMutAct_9fa48("15") ? "" : (stryCov_9fa48("15"), 'highlighted'));
        missingCoverageElements.item(index).classList.add(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), 'highlighted'));
      }
    }
    function makeCurrent(index) {
      if (stryMutAct_9fa48("17")) {
        {}
      } else {
        stryCov_9fa48("17");
        toggleClass(index);
        currentIndex = index;
        missingCoverageElements.item(index).scrollIntoView(stryMutAct_9fa48("18") ? {} : (stryCov_9fa48("18"), {
          behavior: stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), 'smooth'),
          block: stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), 'center'),
          inline: stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'center')
        }));
      }
    }
    function goToPrevious() {
      if (stryMutAct_9fa48("22")) {
        {}
      } else {
        stryCov_9fa48("22");
        var nextIndex = 0;
        if (stryMutAct_9fa48("25") ? typeof currentIndex !== 'number' && currentIndex === 0 : stryMutAct_9fa48("24") ? false : stryMutAct_9fa48("23") ? true : (stryCov_9fa48("23", "24", "25"), (stryMutAct_9fa48("27") ? typeof currentIndex === 'number' : stryMutAct_9fa48("26") ? false : (stryCov_9fa48("26", "27"), typeof currentIndex !== (stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), 'number')))) || (stryMutAct_9fa48("30") ? currentIndex !== 0 : stryMutAct_9fa48("29") ? false : (stryCov_9fa48("29", "30"), currentIndex === 0)))) {
          if (stryMutAct_9fa48("31")) {
            {}
          } else {
            stryCov_9fa48("31");
            nextIndex = stryMutAct_9fa48("32") ? missingCoverageElements.length + 1 : (stryCov_9fa48("32"), missingCoverageElements.length - 1);
          }
        } else if (stryMutAct_9fa48("36") ? missingCoverageElements.length <= 1 : stryMutAct_9fa48("35") ? missingCoverageElements.length >= 1 : stryMutAct_9fa48("34") ? false : stryMutAct_9fa48("33") ? true : (stryCov_9fa48("33", "34", "35", "36"), missingCoverageElements.length > 1)) {
          if (stryMutAct_9fa48("37")) {
            {}
          } else {
            stryCov_9fa48("37");
            nextIndex = stryMutAct_9fa48("38") ? currentIndex + 1 : (stryCov_9fa48("38"), currentIndex - 1);
          }
        }
        makeCurrent(nextIndex);
      }
    }
    function goToNext() {
      if (stryMutAct_9fa48("39")) {
        {}
      } else {
        stryCov_9fa48("39");
        var nextIndex = 0;
        if (stryMutAct_9fa48("42") ? typeof currentIndex === 'number' || currentIndex < missingCoverageElements.length - 1 : stryMutAct_9fa48("41") ? false : stryMutAct_9fa48("40") ? true : (stryCov_9fa48("40", "41", "42"), (stryMutAct_9fa48("44") ? typeof currentIndex !== 'number' : stryMutAct_9fa48("43") ? true : (stryCov_9fa48("43", "44"), typeof currentIndex === (stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), 'number')))) && (stryMutAct_9fa48("48") ? currentIndex >= missingCoverageElements.length - 1 : stryMutAct_9fa48("47") ? currentIndex <= missingCoverageElements.length - 1 : stryMutAct_9fa48("46") ? true : (stryCov_9fa48("46", "47", "48"), currentIndex < (stryMutAct_9fa48("49") ? missingCoverageElements.length + 1 : (stryCov_9fa48("49"), missingCoverageElements.length - 1)))))) {
          if (stryMutAct_9fa48("50")) {
            {}
          } else {
            stryCov_9fa48("50");
            nextIndex = stryMutAct_9fa48("51") ? currentIndex - 1 : (stryCov_9fa48("51"), currentIndex + 1);
          }
        }
        makeCurrent(nextIndex);
      }
    }
    return function jump(event) {
      if (stryMutAct_9fa48("52")) {
        {}
      } else {
        stryCov_9fa48("52");
        if (stryMutAct_9fa48("55") ? document.getElementById('fileSearch') === document.activeElement || document.activeElement != null : stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55"), (stryMutAct_9fa48("57") ? document.getElementById('fileSearch') !== document.activeElement : stryMutAct_9fa48("56") ? true : (stryCov_9fa48("56", "57"), document.getElementById(stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), 'fileSearch')) === document.activeElement)) && (stryMutAct_9fa48("60") ? document.activeElement == null : stryMutAct_9fa48("59") ? true : (stryCov_9fa48("59", "60"), document.activeElement != null)))) {
          if (stryMutAct_9fa48("61")) {
            {}
          } else {
            stryCov_9fa48("61");
            // if we're currently focused on the search input, we don't want to navigate
            return;
          }
        }
        switch (event.which) {
          case 78: // n
          case 74:
            if (stryMutAct_9fa48("62")) {} else {
              stryCov_9fa48("62");
              // j
              goToNext();
              break;
            }
          case 66: // b
          case 75: // k
          case 80:
            if (stryMutAct_9fa48("63")) {} else {
              stryCov_9fa48("63");
              // p
              goToPrevious();
              break;
            }
        }
      }
    };
  }
}();
window.addEventListener(stryMutAct_9fa48("64") ? "" : (stryCov_9fa48("64"), 'keydown'), jumpToCode);