// mostly via @elliottkember
// http://forrst.com/posts/Super-easy_navigation-7g1

const NAV_SELECTOR = "nav";

var container = $(NAV_SELECTOR),
    absoluteUrl = document.location.pathname,
    urlIncludingRoot = document.location.href,
    relativeUrl = document.location.pathname.replace('/', ''),
    selectors = [];

// Our paths are mostly dumb, just a bunch of .html files in the root.
// So we're just going to add a rule to match xyz.html
var basicUrl = document.location.pathname.split("/").pop();

// @elliottkember wrote code using jquery with a bug in it omg!
// $.each(arr, callback(index, value))
$.each([relativeUrl, urlIncludingRoot, absoluteUrl, basicUrl], function(i, url){
  selectors.push('a[href="'+url+'"]')
});
selectors = selectors.join(', ')
container.find(selectors).addClass('current')

