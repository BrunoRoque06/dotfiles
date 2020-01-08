// Change
map("cu", "sU");
map("cU", "su");

// Go (same tab)
map("gu", "gU");
map("gt", "T");
map("gf", "O");

// Open (new tab)
map("t", "on");
map("of", "af");
map("oh", "oh");
map("om", "cf");
mapkey("oi", "#8Open incognito window", function() {
  RUNTIME("openIncognito", {
    url: "https://www.startpage.com"
  });
});

// Paste
map("pg", "sg");
map("ps", "ss");
map("ph", "sh");
map("py", "sy");

// Scroll
map("wf", ";fs");
map("ws", "w");
map("wt", ";w");

// Tabs
map("[", "E");
map("]", "R");
map("{", "S");
map("}", "D");
map("<", "<<");
map(">", ">>");
map("pi", "<Alt-p>");

// Yank
map("yt", "yT");
map("ym", "yma");

unmapAllExcept([
  "$",
  "%",
  "/",
  "0",
  "<",
  ">",
  "?",
  "G",
  "I",
  "N",
  "T",
  "X",
  "[",
  "]",
  "b",
  "cU",
  "cu",
  "f",
  "gf",
  "gg",
  "go",
  "gt",
  "gu",
  "h",
  "i",
  "j",
  "k",
  "l",
  "n",
  "of",
  "oh",
  "oi",
  "om",
  "ox",
  "pg",
  "ph",
  "pi",
  "ps",
  "py",
  "q",
  "r",
  "t",
  "v",
  "wf",
  "ws",
  "wt",
  "x",
  "ym",
  "yt",
  "yy",
  "zi",
  "zo",
  "zr",
  "{",
  "}"
]);

// Settings
Hints.characters = "qwertyiopasfgzxcvbnm";
Hints.scrollKeys = "0udjkhlG$";
settings.enableAutoFocus = false;
settings.hintAlign = "left";
settings.startToShowEmoji = 9;
settings.tabsThreshold = 1;
settings.theme = `
.sk_theme {
  font-family: IBM Plex Sans, sans;
  font-size: 14pt;
  background: #24272e;
  color: #abb2bf;
}
.sk_theme tbody {
  color: #fff;
}
.sk_theme input {
  color: #d0d0d0;
}
.sk_theme .url {
  color: #61afef;
}
.sk_theme .annotation {
  color: #56b6c2;
}
.sk_theme .omnibar_highlight {
  color: #528bff;
}
.sk_theme .omnibar_timestamp {
  color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
  color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
  background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
  background: #3e4452;
}
#sk_status, #sk_find {
  font-size: 14pt;
}`;
