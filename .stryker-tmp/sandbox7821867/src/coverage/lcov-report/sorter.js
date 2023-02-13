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
var addSorting = function () {
  if (stryMutAct_9fa48("1827")) {
    {}
  } else {
    stryCov_9fa48("1827");
    var cols,
      currentSort = stryMutAct_9fa48("1828") ? {} : (stryCov_9fa48("1828"), {
        index: 0,
        desc: stryMutAct_9fa48("1829") ? true : (stryCov_9fa48("1829"), false)
      });

    // returns the summary table element
    function getTable() {
      if (stryMutAct_9fa48("1830")) {
        {}
      } else {
        stryCov_9fa48("1830");
        return document.querySelector(stryMutAct_9fa48("1831") ? "" : (stryCov_9fa48("1831"), '.coverage-summary'));
      }
    }
    // returns the thead element of the summary table
    function getTableHeader() {
      if (stryMutAct_9fa48("1832")) {
        {}
      } else {
        stryCov_9fa48("1832");
        return getTable().querySelector(stryMutAct_9fa48("1833") ? "" : (stryCov_9fa48("1833"), 'thead tr'));
      }
    }
    // returns the tbody element of the summary table
    function getTableBody() {
      if (stryMutAct_9fa48("1834")) {
        {}
      } else {
        stryCov_9fa48("1834");
        return getTable().querySelector(stryMutAct_9fa48("1835") ? "" : (stryCov_9fa48("1835"), 'tbody'));
      }
    }
    // returns the th element for nth column
    function getNthColumn(n) {
      if (stryMutAct_9fa48("1836")) {
        {}
      } else {
        stryCov_9fa48("1836");
        return getTableHeader().querySelectorAll(stryMutAct_9fa48("1837") ? "" : (stryCov_9fa48("1837"), 'th'))[n];
      }
    }
    function onFilterInput() {
      if (stryMutAct_9fa48("1838")) {
        {}
      } else {
        stryCov_9fa48("1838");
        const searchValue = document.getElementById(stryMutAct_9fa48("1839") ? "" : (stryCov_9fa48("1839"), 'fileSearch')).value;
        const rows = document.getElementsByTagName(stryMutAct_9fa48("1840") ? "" : (stryCov_9fa48("1840"), 'tbody'))[0].children;
        for (let i = 0; stryMutAct_9fa48("1843") ? i >= rows.length : stryMutAct_9fa48("1842") ? i <= rows.length : stryMutAct_9fa48("1841") ? false : (stryCov_9fa48("1841", "1842", "1843"), i < rows.length); stryMutAct_9fa48("1844") ? i-- : (stryCov_9fa48("1844"), i++)) {
          if (stryMutAct_9fa48("1845")) {
            {}
          } else {
            stryCov_9fa48("1845");
            const row = rows[i];
            if (stryMutAct_9fa48("1848") ? row.textContent.toUpperCase().includes(searchValue.toLowerCase()) : stryMutAct_9fa48("1847") ? false : stryMutAct_9fa48("1846") ? true : (stryCov_9fa48("1846", "1847", "1848"), row.textContent.toLowerCase().includes(stryMutAct_9fa48("1849") ? searchValue.toUpperCase() : (stryCov_9fa48("1849"), searchValue.toLowerCase())))) {
              if (stryMutAct_9fa48("1850")) {
                {}
              } else {
                stryCov_9fa48("1850");
                row.style.display = stryMutAct_9fa48("1851") ? "Stryker was here!" : (stryCov_9fa48("1851"), '');
              }
            } else {
              if (stryMutAct_9fa48("1852")) {
                {}
              } else {
                stryCov_9fa48("1852");
                row.style.display = stryMutAct_9fa48("1853") ? "" : (stryCov_9fa48("1853"), 'none');
              }
            }
          }
        }
      }
    }

    // loads the search box
    function addSearchBox() {
      if (stryMutAct_9fa48("1854")) {
        {}
      } else {
        stryCov_9fa48("1854");
        var template = document.getElementById(stryMutAct_9fa48("1855") ? "" : (stryCov_9fa48("1855"), 'filterTemplate'));
        var templateClone = template.content.cloneNode(stryMutAct_9fa48("1856") ? false : (stryCov_9fa48("1856"), true));
        templateClone.getElementById(stryMutAct_9fa48("1857") ? "" : (stryCov_9fa48("1857"), 'fileSearch')).oninput = onFilterInput;
        template.parentElement.appendChild(templateClone);
      }
    }

    // loads all columns
    function loadColumns() {
      if (stryMutAct_9fa48("1858")) {
        {}
      } else {
        stryCov_9fa48("1858");
        var colNodes = getTableHeader().querySelectorAll(stryMutAct_9fa48("1859") ? "" : (stryCov_9fa48("1859"), 'th')),
          colNode,
          cols = stryMutAct_9fa48("1860") ? ["Stryker was here"] : (stryCov_9fa48("1860"), []),
          col,
          i;
        for (i = 0; stryMutAct_9fa48("1863") ? i >= colNodes.length : stryMutAct_9fa48("1862") ? i <= colNodes.length : stryMutAct_9fa48("1861") ? false : (stryCov_9fa48("1861", "1862", "1863"), i < colNodes.length); stryMutAct_9fa48("1864") ? i -= 1 : (stryCov_9fa48("1864"), i += 1)) {
          if (stryMutAct_9fa48("1865")) {
            {}
          } else {
            stryCov_9fa48("1865");
            colNode = colNodes[i];
            col = stryMutAct_9fa48("1866") ? {} : (stryCov_9fa48("1866"), {
              key: colNode.getAttribute(stryMutAct_9fa48("1867") ? "" : (stryCov_9fa48("1867"), 'data-col')),
              sortable: stryMutAct_9fa48("1868") ? colNode.getAttribute('data-nosort') : (stryCov_9fa48("1868"), !colNode.getAttribute(stryMutAct_9fa48("1869") ? "" : (stryCov_9fa48("1869"), 'data-nosort'))),
              type: stryMutAct_9fa48("1872") ? colNode.getAttribute('data-type') && 'string' : stryMutAct_9fa48("1871") ? false : stryMutAct_9fa48("1870") ? true : (stryCov_9fa48("1870", "1871", "1872"), colNode.getAttribute(stryMutAct_9fa48("1873") ? "" : (stryCov_9fa48("1873"), 'data-type')) || (stryMutAct_9fa48("1874") ? "" : (stryCov_9fa48("1874"), 'string')))
            });
            cols.push(col);
            if (stryMutAct_9fa48("1876") ? false : stryMutAct_9fa48("1875") ? true : (stryCov_9fa48("1875", "1876"), col.sortable)) {
              if (stryMutAct_9fa48("1877")) {
                {}
              } else {
                stryCov_9fa48("1877");
                col.defaultDescSort = stryMutAct_9fa48("1880") ? col.type !== 'number' : stryMutAct_9fa48("1879") ? false : stryMutAct_9fa48("1878") ? true : (stryCov_9fa48("1878", "1879", "1880"), col.type === (stryMutAct_9fa48("1881") ? "" : (stryCov_9fa48("1881"), 'number')));
                colNode.innerHTML = colNode.innerHTML + (stryMutAct_9fa48("1882") ? "" : (stryCov_9fa48("1882"), '<span class="sorter"></span>'));
              }
            }
          }
        }
        return cols;
      }
    }
    // attaches a data attribute to every tr element with an object
    // of data values keyed by column name
    function loadRowData(tableRow) {
      if (stryMutAct_9fa48("1883")) {
        {}
      } else {
        stryCov_9fa48("1883");
        var tableCols = tableRow.querySelectorAll(stryMutAct_9fa48("1884") ? "" : (stryCov_9fa48("1884"), 'td')),
          colNode,
          col,
          data = {},
          i,
          val;
        for (i = 0; stryMutAct_9fa48("1887") ? i >= tableCols.length : stryMutAct_9fa48("1886") ? i <= tableCols.length : stryMutAct_9fa48("1885") ? false : (stryCov_9fa48("1885", "1886", "1887"), i < tableCols.length); stryMutAct_9fa48("1888") ? i -= 1 : (stryCov_9fa48("1888"), i += 1)) {
          if (stryMutAct_9fa48("1889")) {
            {}
          } else {
            stryCov_9fa48("1889");
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute(stryMutAct_9fa48("1890") ? "" : (stryCov_9fa48("1890"), 'data-value'));
            if (stryMutAct_9fa48("1893") ? col.type !== 'number' : stryMutAct_9fa48("1892") ? false : stryMutAct_9fa48("1891") ? true : (stryCov_9fa48("1891", "1892", "1893"), col.type === (stryMutAct_9fa48("1894") ? "" : (stryCov_9fa48("1894"), 'number')))) {
              if (stryMutAct_9fa48("1895")) {
                {}
              } else {
                stryCov_9fa48("1895");
                val = Number(val);
              }
            }
            data[col.key] = val;
          }
        }
        return data;
      }
    }
    // loads all row data
    function loadData() {
      if (stryMutAct_9fa48("1896")) {
        {}
      } else {
        stryCov_9fa48("1896");
        var rows = getTableBody().querySelectorAll(stryMutAct_9fa48("1897") ? "" : (stryCov_9fa48("1897"), 'tr')),
          i;
        for (i = 0; stryMutAct_9fa48("1900") ? i >= rows.length : stryMutAct_9fa48("1899") ? i <= rows.length : stryMutAct_9fa48("1898") ? false : (stryCov_9fa48("1898", "1899", "1900"), i < rows.length); stryMutAct_9fa48("1901") ? i -= 1 : (stryCov_9fa48("1901"), i += 1)) {
          if (stryMutAct_9fa48("1902")) {
            {}
          } else {
            stryCov_9fa48("1902");
            rows[i].data = loadRowData(rows[i]);
          }
        }
      }
    }
    // sorts the table using the data for the ith column
    function sortByIndex(index, desc) {
      if (stryMutAct_9fa48("1903")) {
        {}
      } else {
        stryCov_9fa48("1903");
        var key = cols[index].key,
          sorter = function (a, b) {
            if (stryMutAct_9fa48("1904")) {
              {}
            } else {
              stryCov_9fa48("1904");
              a = a.data[key];
              b = b.data[key];
              return (stryMutAct_9fa48("1908") ? a >= b : stryMutAct_9fa48("1907") ? a <= b : stryMutAct_9fa48("1906") ? false : stryMutAct_9fa48("1905") ? true : (stryCov_9fa48("1905", "1906", "1907", "1908"), a < b)) ? stryMutAct_9fa48("1909") ? +1 : (stryCov_9fa48("1909"), -1) : (stryMutAct_9fa48("1913") ? a <= b : stryMutAct_9fa48("1912") ? a >= b : stryMutAct_9fa48("1911") ? false : stryMutAct_9fa48("1910") ? true : (stryCov_9fa48("1910", "1911", "1912", "1913"), a > b)) ? 1 : 0;
            }
          },
          finalSorter = sorter,
          tableBody = document.querySelector(stryMutAct_9fa48("1914") ? "" : (stryCov_9fa48("1914"), '.coverage-summary tbody')),
          rowNodes = tableBody.querySelectorAll(stryMutAct_9fa48("1915") ? "" : (stryCov_9fa48("1915"), 'tr')),
          rows = stryMutAct_9fa48("1916") ? ["Stryker was here"] : (stryCov_9fa48("1916"), []),
          i;
        if (stryMutAct_9fa48("1918") ? false : stryMutAct_9fa48("1917") ? true : (stryCov_9fa48("1917", "1918"), desc)) {
          if (stryMutAct_9fa48("1919")) {
            {}
          } else {
            stryCov_9fa48("1919");
            finalSorter = function (a, b) {
              if (stryMutAct_9fa48("1920")) {
                {}
              } else {
                stryCov_9fa48("1920");
                return stryMutAct_9fa48("1921") ? -1 / sorter(a, b) : (stryCov_9fa48("1921"), (stryMutAct_9fa48("1922") ? +1 : (stryCov_9fa48("1922"), -1)) * sorter(a, b));
              }
            };
          }
        }
        for (i = 0; stryMutAct_9fa48("1925") ? i >= rowNodes.length : stryMutAct_9fa48("1924") ? i <= rowNodes.length : stryMutAct_9fa48("1923") ? false : (stryCov_9fa48("1923", "1924", "1925"), i < rowNodes.length); stryMutAct_9fa48("1926") ? i -= 1 : (stryCov_9fa48("1926"), i += 1)) {
          if (stryMutAct_9fa48("1927")) {
            {}
          } else {
            stryCov_9fa48("1927");
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
          }
        }
        stryMutAct_9fa48("1928") ? rows : (stryCov_9fa48("1928"), rows.sort(finalSorter));
        for (i = 0; stryMutAct_9fa48("1931") ? i >= rows.length : stryMutAct_9fa48("1930") ? i <= rows.length : stryMutAct_9fa48("1929") ? false : (stryCov_9fa48("1929", "1930", "1931"), i < rows.length); stryMutAct_9fa48("1932") ? i -= 1 : (stryCov_9fa48("1932"), i += 1)) {
          if (stryMutAct_9fa48("1933")) {
            {}
          } else {
            stryCov_9fa48("1933");
            tableBody.appendChild(rows[i]);
          }
        }
      }
    }
    // removes sort indicators for current column being sorted
    function removeSortIndicators() {
      if (stryMutAct_9fa48("1934")) {
        {}
      } else {
        stryCov_9fa48("1934");
        var col = getNthColumn(currentSort.index),
          cls = col.className;
        cls = cls.replace(stryMutAct_9fa48("1935") ? / sorted/ : (stryCov_9fa48("1935"), / sorted$/), stryMutAct_9fa48("1936") ? "Stryker was here!" : (stryCov_9fa48("1936"), '')).replace(stryMutAct_9fa48("1937") ? / sorted-desc/ : (stryCov_9fa48("1937"), / sorted-desc$/), stryMutAct_9fa48("1938") ? "Stryker was here!" : (stryCov_9fa48("1938"), ''));
        col.className = cls;
      }
    }
    // adds sort indicators for current column being sorted
    function addSortIndicators() {
      if (stryMutAct_9fa48("1939")) {
        {}
      } else {
        stryCov_9fa48("1939");
        stryMutAct_9fa48("1940") ? getNthColumn(currentSort.index).className -= currentSort.desc ? ' sorted-desc' : ' sorted' : (stryCov_9fa48("1940"), getNthColumn(currentSort.index).className += currentSort.desc ? stryMutAct_9fa48("1941") ? "" : (stryCov_9fa48("1941"), ' sorted-desc') : stryMutAct_9fa48("1942") ? "" : (stryCov_9fa48("1942"), ' sorted'));
      }
    }
    // adds event listeners for all sorter widgets
    function enableUI() {
      if (stryMutAct_9fa48("1943")) {
        {}
      } else {
        stryCov_9fa48("1943");
        var i,
          el,
          ithSorter = function ithSorter(i) {
            if (stryMutAct_9fa48("1944")) {
              {}
            } else {
              stryCov_9fa48("1944");
              var col = cols[i];
              return function () {
                if (stryMutAct_9fa48("1945")) {
                  {}
                } else {
                  stryCov_9fa48("1945");
                  var desc = col.defaultDescSort;
                  if (stryMutAct_9fa48("1948") ? currentSort.index !== i : stryMutAct_9fa48("1947") ? false : stryMutAct_9fa48("1946") ? true : (stryCov_9fa48("1946", "1947", "1948"), currentSort.index === i)) {
                    if (stryMutAct_9fa48("1949")) {
                      {}
                    } else {
                      stryCov_9fa48("1949");
                      desc = stryMutAct_9fa48("1950") ? currentSort.desc : (stryCov_9fa48("1950"), !currentSort.desc);
                    }
                  }
                  sortByIndex(i, desc);
                  removeSortIndicators();
                  currentSort.index = i;
                  currentSort.desc = desc;
                  addSortIndicators();
                }
              };
            }
          };
        for (i = 0; stryMutAct_9fa48("1953") ? i >= cols.length : stryMutAct_9fa48("1952") ? i <= cols.length : stryMutAct_9fa48("1951") ? false : (stryCov_9fa48("1951", "1952", "1953"), i < cols.length); stryMutAct_9fa48("1954") ? i -= 1 : (stryCov_9fa48("1954"), i += 1)) {
          if (stryMutAct_9fa48("1955")) {
            {}
          } else {
            stryCov_9fa48("1955");
            if (stryMutAct_9fa48("1957") ? false : stryMutAct_9fa48("1956") ? true : (stryCov_9fa48("1956", "1957"), cols[i].sortable)) {
              if (stryMutAct_9fa48("1958")) {
                {}
              } else {
                stryCov_9fa48("1958");
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector(stryMutAct_9fa48("1959") ? "" : (stryCov_9fa48("1959"), '.sorter')).parentElement;
                if (stryMutAct_9fa48("1961") ? false : stryMutAct_9fa48("1960") ? true : (stryCov_9fa48("1960", "1961"), el.addEventListener)) {
                  if (stryMutAct_9fa48("1962")) {
                    {}
                  } else {
                    stryCov_9fa48("1962");
                    el.addEventListener(stryMutAct_9fa48("1963") ? "" : (stryCov_9fa48("1963"), 'click'), ithSorter(i));
                  }
                } else {
                  if (stryMutAct_9fa48("1964")) {
                    {}
                  } else {
                    stryCov_9fa48("1964");
                    el.attachEvent(stryMutAct_9fa48("1965") ? "" : (stryCov_9fa48("1965"), 'onclick'), ithSorter(i));
                  }
                }
              }
            }
          }
        }
      }
    }
    // adds sorting functionality to the UI
    return function () {
      if (stryMutAct_9fa48("1966")) {
        {}
      } else {
        stryCov_9fa48("1966");
        if (stryMutAct_9fa48("1969") ? false : stryMutAct_9fa48("1968") ? true : stryMutAct_9fa48("1967") ? getTable() : (stryCov_9fa48("1967", "1968", "1969"), !getTable())) {
          if (stryMutAct_9fa48("1970")) {
            {}
          } else {
            stryCov_9fa48("1970");
            return;
          }
        }
        cols = loadColumns();
        loadData();
        addSearchBox();
        addSortIndicators();
        enableUI();
      }
    };
  }
}();
window.addEventListener(stryMutAct_9fa48("1971") ? "" : (stryCov_9fa48("1971"), 'load'), addSorting);