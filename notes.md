
"husky": "^1.3.1",
"lint-staged": "^8.1.3",
"npm-run-all": "^4.1.5",

"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "**/*.js": [
        "prettier --write",
        "git add"
    ]
},