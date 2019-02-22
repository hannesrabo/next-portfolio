"husky": "^1.3.1",
"lint-staged": "^8.1.3",
"npm-run-all": "^4.1.5",

"husky": {
"hooks": {
"pre-commit": "lint-staged"
}
},
"lint-staged": {
"\*_/_.js": [
"prettier --write",
"git add"
]
},

warning package.json: No license field
warning hrabo-portfolio: No license field
